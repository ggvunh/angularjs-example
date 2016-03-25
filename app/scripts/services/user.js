'use strict';

/**
 * @ngdoc service
 * @name appApp.user
 * @description
 * # user
 * Service in the appApp.
 */
angular.module('appApp')
  .service('user', function () {

    this.viewMessage = function(name) {
        return "Welcome " + name;
    }
  });
