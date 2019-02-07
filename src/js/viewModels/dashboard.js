define(['ojs/ojcore', 'knockout', 'jquery', 'ojs/ojknockout', 'ojs/ojmodel', 'ojs/ojtable', 'ojs/ojcollectiontabledatasource'],
        function (oj, ko, $) {

            function DashboardViewModel() {
                var self = this;

                self.data = ko.observableArray();
                    
                $.ajaxSetup({
      "error":function() { $.getJSON("/javabackend/tcatapp/rest/medalrating").
                        then(function (ranks) {
                            $.each(ranks, function () {
                                self.data.push({
                                    countryId: this.countryId,
                                    name: this.name,
                                    rank: this.rank,
                                    gold: this.gold,
                                    silver: this.silver,
                                    bronze: this.bronze,
                                    total: this.total,
                                    
                                    imagePath: "css/images/"+this.countryId+".png"
                                });
                            });
                        })
          
          ;  }
});

                self.columnArray =  [
             
               {"headerText": "Rank", 
                "field": "rank",
                "style": "text-align:center;",
                "headerStyle": "text-align:center; font-weight:bold;"
                },

                                {"headerText": "Country",                
               "sortable": "disabled",    
                "field": "name",
                "renderer": oj.KnockoutTemplateUtils.getRenderer("dept_name", true),
                "sortProperty": "name",
                "style": "padding-left:20px; padding-top:15px;",
                "headerStyle": "text-align:center; font-weight:bold;"
                
             },
          
               {"headerText": "Gold", 
                   "sortable": "disabled",
                "field": "gold",
                            "style": "text-align:center;",
                "headerStyle": "text-align:center; font-weight:bold;"
},
               {"headerText": "Silver", 
                "sortable": "disabled",   
                "field": "silver",
                            "style": "text-align:center;",
                "headerStyle": "text-align:center; font-weight:bold;"
},
               {"headerText": "Bronze", 
                "sortable": "disabled",   
                "field": "bronze",
                            "style": "text-align:center;",
                "headerStyle": "text-align:center; font-weight:bold;"
},
               {"headerText": "Total", 
               "sortable": "disabled",    
                "field": "total",
                            "style": "text-align:center;",
                "headerStyle": "text-align:center; font-weight:bold;"
}
            
            
            ];                        
                self.dataSource = new oj.ArrayTableDataSource(
                        self.data,
                        {idAttribute: 'countryId'}
                );
                // Below are a subset of the ViewModel methods invoked by the ojModule binding
                // Please reference the ojModule jsDoc for additional available methods.

                /**
                 * Optional ViewModel method invoked when this ViewModel is about to be
                 * used for the View transition.  The application can put data fetch logic
                 * here that can return a Promise which will delay the handleAttached function
                 * call below until the Promise is resolved.
                 * @param {Object} info - An object with the following key-value pairs:
                 * @param {Node} info.element - DOM element or where the binding is attached. This may be a 'virtual' element (comment node).
                 * @param {Function} info.valueAccessor - The binding's value accessor.
                 * @return {Promise|undefined} - If the callback returns a Promise, the next phase (attaching DOM) will be delayed until
                 * the promise is resolved
                 */
                self.handleActivated = function (info) {
                    // Implement if needed
                };

                /**
                 * Optional ViewModel method invoked after the View is inserted into the
                 * document DOM.  The application can put logic that requires the DOM being
                 * attached here.
                 * @param {Object} info - An object with the following key-value pairs:
                 * @param {Node} info.element - DOM element or where the binding is attached. This may be a 'virtual' element (comment node).
                 * @param {Function} info.valueAccessor - The binding's value accessor.
                 * @param {boolean} info.fromCache - A boolean indicating whether the module was retrieved from cache.
                 */
                self.handleAttached = function (info) {
                    // Implement if needed
                };


                /**
                 * Optional ViewModel method invoked after the bindings are applied on this View. 
                 * If the current View is retrieved from cache, the bindings will not be re-applied
                 * and this callback will not be invoked.
                 * @param {Object} info - An object with the following key-value pairs:
                 * @param {Node} info.element - DOM element or where the binding is attached. This may be a 'virtual' element (comment node).
                 * @param {Function} info.valueAccessor - The binding's value accessor.
                 */
                self.handleBindingsApplied = function (info) {
                    // Implement if needed
                };

                /*
                 * Optional ViewModel method invoked after the View is removed from the
                 * document DOM.
                 * @param {Object} info - An object with the following key-value pairs:
                 * @param {Node} info.element - DOM element or where the binding is attached. This may be a 'virtual' element (comment node).
                 * @param {Function} info.valueAccessor - The binding's value accessor.
                 * @param {Array} info.cachedNodes - An Array containing cached nodes for the View if the cache is enabled.
                 */
                self.handleDetached = function (info) {
                    // Implement if needed
                };
            }

            /*
             * Returns a constructor for the ViewModel so that the ViewModel is constructed
             * each time the view is displayed.  Return an instance of the ViewModel if
             * only one instance of the ViewModel is needed.
             */
            return new DashboardViewModel();
        }
);
