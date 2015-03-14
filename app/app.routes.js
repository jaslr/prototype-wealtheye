myApp.config([
  '$routeProvider',
  function ($routeProvider) {
    $routeProvider.when('/', { templateUrl: '/app/components/dashboard/dashboard.html' }).when('/goals', { templateUrl: '/app/components/goals/goals.html' }).when('/addGoal', { templateUrl: '/app/components/goals/addGoal.html' }).when('/accounts', { templateUrl: '/app/components/accounts/accounts.html' }).otherwise({ redirectTo: '/app/shared/errors/404.html' });
  }
]);