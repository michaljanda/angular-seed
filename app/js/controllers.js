'use strict';

/* Controllers */

angular.module('myApp.controllers', []).
    controller('MyCtrl1', ['$scope', function (sc) {

    }])
    .controller('MyCtrl2', ['$scope','notify', function (sc, notify) {
      sc.car = 'AudiTT';
      sc.michal = {
        name: "Michal",
        adress: "Tišnov"
      }

      sc.callNotify = function(msg) {
        notify(msg);
      };
    }]);