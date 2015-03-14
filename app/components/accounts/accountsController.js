angular.module('myApp').controller('accountsController', [
  '$scope',
  function ($scope) {
    $scope.dynamicTooltip = 'Hello, World!';
    $scope.dynamicTooltipText = 'dynamic';
    $scope.htmlTooltip = 'I\'ve been made <b>bold</b>!';  /*$tooltipProvider.options({'appendToBody' : true});*/
                                                          /*$tooltipProvider.setTriggers({
    'mouseenter': 'mouseleave',
    'click': 'click',
    'focus': 'blur',
    'never': 'mouseleave' // <- This ensures the tooltip will go away on mouseleave
  });   */
  }
]);
angular.module('myApp').config([
  '$tooltipProvider',
  function ($tooltipProvider) {
    $tooltipProvider.options({ 'appendToBody': true });
  }
]);