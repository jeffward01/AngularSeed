angular.module("app").factory('stateManager', [
  '$state', 'mockAuthService',
  function ($state, mockAuthService) {
    var stateManagerFactory = {};

    var _goHome = function () {
      var result = mockAuthService.checkAuth();
      if (result === true) {
        $state.go('app.sidebar.dashboard');
      } else {
        $state.go('app.login');
      }
    }

    var _logout = function () {
      mockAuthService.mockLogout();
      $state.go('app.login');
    }

    var _goToAccount = function () {
      $state.go('app.sidebar.account');
    }


    var _goToDashboard = function () {
      $state.go('app.sidebar.dashboard');
    }

    var _goToSettings = function () {
      $state.go('app.sidebar.settings');
    }


    var _goToAbout = function () {
      $state.go('app.sidebar.about');
    }


    var _goToForgotPassword = function () {
      $state.go('app.forgotPassword');
    }


    var _goToRegister = function () {
      $state.go('app.register');
    }


    var _goToLogin = function () {
      $state.go('app.login');
    }





    stateManagerFactory.goToLogin = _goToLogin;
    stateManagerFactory.goToRegister = _goToRegister;
    stateManagerFactory.goToForgotPassword = _goToForgotPassword;
    stateManagerFactory.goToAbout = _goToAbout;
    stateManagerFactory.goToSettings = _goToSettings;
    stateManagerFactory.goToDashboard = _goToDashboard;
    stateManagerFactory.logout = _logout;
    stateManagerFactory.goHome = _goHome;
    stateManagerFactory.goToAccount = _goToAccount;

    return stateManagerFactory;
  }]);