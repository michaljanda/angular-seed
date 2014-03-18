'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
angular.module('myApp.services', []).
    value('version', '0.1')
    .factory('notify',['$window', function(win){
      var msgs = [];
      return function(msg) {
        msgs.push(msg);
        if (msgs.length == 3) {
          win.alert(msgs.join("\n"));
          msgs = [];
        }
      }
    }])
    .factory('exampleData',['$http',function(http){
      return function() {
        /* TOTO TAKÉ FUNGUJE
        return http.get('mockdata/example.json').then(function(response){
          return response;
        });
        */

        return http.get('mockdata/example.json').success(function(data){
          return data.data;
        });
      }

    }]);
