'use strict';

/**
 * @ngdoc directive
 * @name appApp.directive:checkNumber
 * @description
 * # checkNumber
 */
angular.module('appApp')
  .directive('checkNumber', function () {
    return {
      template: '<div></div>',
      scope: {
        infoNumber: '=info'
      }
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        if (attrs.number % 2 === 0) {
             element.text( attrs.number + ' La so chan');
        } else {
            element.text( attrs.number + ' La so lẻ' );
        }
      }
    };
  });
