angular.module("app").controller('forgotPasswordController', [
  '$scope', '$state','alertService',
  function ($scope, $state, alertService) {


    $scope.newAccount = {};
    $scope.newAccount.emailAddress = "";

    $scope.goToAbout = function () {
      $state.go('app.about', {});
    }


    $scope.sendForgotPasswordEmail = function () {
      alertService.success("Email has been sent!","Success!")
    }

    $scope.goHome = function () {
      $state.go('app.home', {});
    }





  }]);