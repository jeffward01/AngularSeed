angular.module("app").controller('loginController', [
  '$scope', '$state','mockAuthService',
  function ($scope, $state, mockAuthService) {

    //Control Objects
    $scope.loginData = {}; 
    $scope.loginData.username = "";
    $scope.loginData.password = "";

    //Nav Buttons
    $scope.goToAbout = function () {
      $state.go('app.about', {});
    }
    $scope.goToForgotPassword = function () {
      $state.go('app.forgotPassword', {});
    }

    $scope.login = function (loginData) {
      mockAuthService.mockLogin();
      $state.go('app.home', {});
    }

    $scope.goHome = function () {
      $state.go('app.home', {});
    }





  }]);