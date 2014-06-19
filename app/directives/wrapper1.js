'use strict';

angular.module('AppPruebas').directive('wrapper1', ['$compile', function ($compile) {
    return {
      restrict: 'EA',
      link: function(scope, element, attrs) {
        scope.getContentUrl = function() {
          return attrs.tpl;
        }
      },
      template:'<div ng-include="getContentUrl()"></div>'
    };
  }]
);
