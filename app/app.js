var app = angular.module('app', ['ui.router', 'LocalStorageModule', 'angular-loading-bar', 'ui.bootstrap', 'ngSanitize']);

//States
app.config(function ($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/app/login');

  //States
  $stateProvider.state('app', {
    url: '/app',
    templateUrl: 'app/views/app.html',
    controller: 'appController',
    data: {
      displayName: 'App'
    }
  })

    .state('app.login', {
      url: '/login',
      templateUrl: 'app/views/Login/login.html',
      controller: 'loginController',
      data: {
        displayName: 'Login'
      }
    })
    .state('app.register', {
      url: '/register',
      templateUrl: 'app/views/Login/register.html',
      controller: 'registerController',
      data: {
        displayName: 'Register'
      }
    })
    .state('app.forgotPassword', {
      url: '/forgotPassword',
      templateUrl: 'app/views/Login/forgotPassword.html',
      controller: 'forgotPasswordController',
      data: {
        displayName: 'Forgot Password'
      }
    })

    .state('app.home', {
      url: '/home',
      templateUrl: 'app/views/home.html',
      controller: 'homeController',
      data: {
        displayName: 'Home'
      }
    })
    .state('app.about', {
      url: '/about',
      templateUrl: 'app/views/about.html',
      controller: 'aboutController',
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