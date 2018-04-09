angular.module("app").factory('mockAuthService', [
  '$state', 'localStorageService', 'AppConfig',
  function ($state, localStorageService, AppConfig) {
    var mockAuthServiceFactory = {};

    var appLoginInformation = AppConfig.appName + "LoginInfo";

    var _mockLogin = function () {
      localStorageService.set(appLoginInformation, { auth: true });
    }
    var _mockLogout = function () {
      logOut();
    }

    var _checkAuth = function () {
      var authData = localStorageService.get(appLoginInformation);

      if (authData == null) {
        return false;
      } else {
        if (authData.auth) {
          return true;
        } else {
          return false;
        }
      }
    }

    function logOut() {
      localStorageService.remove(appLoginInformation);
      localStorageService.remove('encrypgenUserId');
    }

    mockAuthServiceFactory.checkAuth = _checkAuth;
    mockAuthServiceFactory.mockLogin = _mockLogin;
    mockAuthServiceFactory.mockLogout = _mockLogout;

    return mockAuthServiceFactory;

  }]);