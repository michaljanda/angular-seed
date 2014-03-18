'use strict';

/* Controllers */

angular.module('myApp.controllers', []).
    controller('MyCtrl1', ['$scope', function (sc) {

    }])
    .controller('MyCtrl2', ['$scope', function (sc) {
      sc.car = 'AudiTT';
      sc.michal = {
        name: "Michal",
        adress: "Tišnov"
      }
    }]);