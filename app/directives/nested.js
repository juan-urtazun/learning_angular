'use strict';

angular.module('AppPruebas').directive('nested', ['$compile', function ($compile) {
     return {
       restrict: 'EA',
       transclude:true,
       scope: {title:"@"},
       template:"<div><h2>{{title}}</h2><div ng-transclude></div></div>"
     };
  }]
);
