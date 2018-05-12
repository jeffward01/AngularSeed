var app = angular.module('app', ['ui.router', 'LocalStorageModule', 'angular-loading-bar', 'ui.bootstrap', 'ngSanitize']);

//States
app.config(function ($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/app/login');

  //States
  $stateProvider.state('app',
      {
        url: '/app',
        templateUrl: 'app/views/app.html',
        controller: 'appController',
        data: {
          displayName: 'App'
        }
      })
    .state('app.login',
      {
        url: '/login',
        templateUrl: 'app/views/Login/login.html',
        controller: 'loginController',
        data: {
          displayName: 'Login'
        }
      })
    .state('app.register',
      {
        url: '/register',
        templateUrl: 'app/views/Login/register.html',
        controller: 'registerController',
        data: {
          displayName: 'Register'
        }
      })
    .state('app.forgotPassword',
      {
        url: '/forgotPassword',
        templateUrl: 'app/views/Login/forgotPassword.html',
        controller: 'forgotPasswordController',
        data: {
          displayName: 'Forgot Password'
        }
      })
    .state('app.sidebar',
      {
        templateUrl: 'app/views/Sidebar/sidebar.html',
        controller: 'sidebarController',
        data: {
        }
      })
    .state('app.sidebar.dashboard',
      {
        url: '/dashboard',
        templateUrl: 'app/views/dashboard.html',
        controller: 'dashboardController',
        data: {
          displayName: 'Home'
        }
      })
    .state('app.sidebar.account',
      {
        url: '/account',
        templateUrl: 'app/views/account.html',
        controller: 'accountController',
        data: {
          displayName: 'Account Controller'
        }
      })
    .state('app.sidebar.about', {
        url: '/about',
        templateUrl: 'app/views/about.html',
        controller: 'aboutController',
        data: {
          displayName: 'About'
        }
      })
      .state('app.sidebar.settings',
          {
            url: '/settings',
            templateUrl: 'app/views/settings.html',
            controller: 'settingsController',
            data: {
              displayName: 'About'
            }
          });

  //Custom Filters
  app.filter('timezone', function () {
    return function (val) {
      if (val == null) {
        return;
      }
      var date = new Date(val);
      return new Date(date.getUTCFullYear(),
        date.getUTCMonth(),
        date.getUTCDate(),
        date.getUTCHours(),
        date.getUTCMinutes(),
        date.getUTCSeconds());
    };
  });

  //Custom Directives



  
});