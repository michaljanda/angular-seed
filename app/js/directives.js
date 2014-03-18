'use strict';

/* Directives */


angular.module('myApp.directives', []).
    directive('appVersion', ['version', function (version) {
      return function (scope, elm, attrs) {
        elm.text(version);
      };
    }])
    .directive('myCurrentTime', function ($interval, dateFilter) {

      function link(scope, element, attrs) {
        var format,
            timeoutId;

        function updateTime() {
          element.text(dateFilter(new Date(), format));
        }

        scope.$watch(attrs.with, function (value) {
          format = value;
          updateTime();
        });

        element.on('$destroy', function () {
          $interval.cancel(timeoutId);
        });

        // start the UI update process; save the timeoutId for canceling
        timeoutId = $interval(function () {
          updateTime(); // update DOM
        }, 1000);
      }

      return {
        link: link
      };
    })
    .directive('writeTable', function () {

      function link(scope, element, attrs) {
        scope.$watch(attrs.rows, function (value) {
          scope.rows = value;
        });
      }

      return {
        link: link,
        templateUrl: 'partials/directives/simple-table.html',
        controller: function ($scope, $http) {
          $http.get('mockdata/example.json').success(function (data) {
            $scope.data = data;
          });
        }
      };
    });
