'use strict';

/**
 * @ngdoc function
 * @name appApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the appApp
 */
angular.module('appApp')
  .controller('AboutCtrl', function (user) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    this.numbers = [0,1,2,3,4,5,6,7,8,9];
    this.format = 'M/d/yy h:mm:ss a';
    // this.viewMessage = user.viewMessage('Nguyen Hoang Vu')

    this.showName = function(name) {

        return user.viewMessage(name);
    }
});
