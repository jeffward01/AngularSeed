angular.module("app").controller('loginController', [
  '$scope', '$state',
  function ($scope, $state) {


    //Nav Buttons
    $scope.goToAbout = function () {
      $state.go('app.about', {});
    }
    $scope.goToForgotPassword = function () {
      $state.go('app.forgotPassword', {});
    }


    $scope.goHome = function () {
      $state.go('app.home', {});
    }





  }]);