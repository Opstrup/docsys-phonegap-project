/**
 * Created by Opstrup on 26/09/15.
 */

angular.module('docsys-phonegap')

  .factory('activityBackendApi', ['configServices', '$resource', function(configServices, $resource) {
    //return $resource('http://localhost:3000/activities'); /** json-server **/
    return $resource('http://192.168.0.13/docsys/public/activities');
    //return $resource('http://192.168.0.13/docsys/public/activities');
  }]);