'use strict';

angular.module('AppPruebas').service('PersonCollectionService', function () {

  var length = 1,
      persons;

  init();

  function init(){
    persons = [{ name: "name_1", id:1 }];
  }

  this.add = function () {
    var id   = _getNextId(),
        name = "name_" + id;
    persons.push({
      name: name,
       id: id
    });
  }

  this.remove = function (id) {
    _.remove( persons,function(person){return person.id == id;}); 
  }

  this.getCollection = function(){
    return persons;
  }

   
 
  var _getNextId = function(){
    length = length + 1;
    return length;
  }
 
});
