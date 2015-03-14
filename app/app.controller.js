var myApp = angular.module('myApp', [
    'ngRoute',
    'highcharts-ng',
    'ngAnimate',
    'ngScrollTo',
    'masonry',
    'truncate',
    'ui.bootstrap'
  ]);
/* */
angular.module('myApp').controller('mainController', [
  '$location',
  '$rootScope',
  '$scope',
  '$state',
  '$http',
  '$stateParams',
  '$log',
  function ($location, $rootScope, $scope, $state, $http, $stateParams, $log) {
    /*$scope.activeValue;*/
    $scope.clickedPage = function (value) {
      $scope.activeValue = value;  // other oeprations
    };
  }
]).config(function (ngScrollToOptionsProvider) {
  ngScrollToOptionsProvider.extend({
    handler: function (el) {
      $(el).scrollintoview();
    }
  });
});