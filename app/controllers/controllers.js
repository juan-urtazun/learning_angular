'use strict';

angular.module('AppPruebas').controller('mainController', function ($scope, PersonCollectionService){
  init();

  function init() {
    $scope.persons = PersonCollectionService.getCollection();
   }

  $scope.add = function(){
    PersonCollectionService.add();
  }

  $scope.remove = function(id){
    PersonCollectionService.remove(id);
  }

});

