'use strict';

/**
 * @ngdoc service
 * @name appApp.userFactory
 * @description
 * # userFactory
 * Factory in the appApp.
 */
angular.module('appApp')
  .factory('userFactory', function () {
    // Service logic
    // ...

    var meaningOfLife = 42;

    // Public API here
    return {
      someMethod: function () {
        return meaningOfLife;
      }
    };
  });
