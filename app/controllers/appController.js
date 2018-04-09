angular.module("app").controller('appController', [
  '$scope', '$state', '$rootScope', 'mockAuthService', 'AppConfig','stateManager',
  function ($scope, $state, $rootScope, mockAuthService, AppConfig, stateManager) {

    //Control Obj
    $scope.appName = AppConfig.disaplayName;
    $scope.isAuth = mockAuthService.checkAuth();

    //Nav Buttons
    $scope.goHome = function () {
      alert("clikced!");
      stateManager.goHome();
    }

    $scope.goToAbout = function () {
      $state.go('app.about', {});
    }

    $scope.goToView2 = function () {
      $state.go('app.about', {});
    }

    $scope.goToView3 = function () {
      $state.go('app.about', {});
    }

    $scope.OptionItem = function () {
      $state.go('app.about', {});
    }

    $scope.goToLogin = function () {
      $state.go('app.login', {});
    }

    $scope.goToCreateAccount = function () {
      $state.go('app.register', {});
    }

    console.log($state.current.name);
    if ($state.current.name === "app.login" && !$scope.isAuth) {
    } else if ($state.current.name === "app.register") {
    }

    ////Control Buttons
    //$rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState, fromParams) {
    // // $state.current = toState;   // if you need the target Url
    //  $state.current = fromState;// If you need the current URL

    //  //If Login
    //  console.log($state.current);

    //})
  }]);