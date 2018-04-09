angular.module("app").factory('stateManager', [
  '$state', 'mockAuthService',
  function ($state, mockAuthService) {
    var stateManagerFactory = {};

    var _goHome = function () {
      var result = mockAuthService.checkAuth();
      alert(result);
      if (result === true) {
        $state.go('app.home');
      } else {
        $state.go('app.login');
      }
    }

    stateManagerFactory.goHome = _goHome;

    return stateManagerFactory;
  }]);