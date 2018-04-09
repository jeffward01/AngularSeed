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

    stateManagerFactory.logout = _logout;
    stateManagerFactory.goHome = _goHome;
    stateManagerFactory.goToAccount = _goToAccount;

    return stateManagerFactory;
  }]);