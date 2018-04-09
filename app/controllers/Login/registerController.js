angular.module("app").controller('registerController', [
  '$scope', '$state',
  function ($scope, $state) {


    //Objects
    $scope.newAccount = {};
    $scope.newAccount.password = "";
    $scope.newAccount.confirmPassword = "";
    $scope.newAccount.emailAddress = "";


    //Nav Control
    $scope.goToAbout = function () {
      $state.go('app.about', {});
    }

    $scope.goToLogin = function () {
      $state.go('app.login', {});
    }
    $scope.goHome = function () {
      $state.go('app.home', {});
    }





  }]);