'use strict';

angular.module('AppPruebas').directive('wrapper2', ['$compile', function ($compile) {
  return {
        restrict: 'EA',
        scope:{
          params: "=params",
          tpl:"@tpl"
        },

        link: function(scope, element, attrs) {
            scope.remove = function(id) {
                _.remove(scope.params.list,function(person){
                   return person.id == id;
                }
              );
             }
        },

        template:'<div ng-include="tpl"></div>'
    };
  }]
);
