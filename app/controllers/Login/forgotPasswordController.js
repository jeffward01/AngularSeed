angular.module("app").controller('forgotPasswordController', [
  '$scope', '$state',
  function ($scope, $state) {


    $scope.newAccount = {};
    $scope.newAccount.emailAddress = "";

    $scope.goToAbout = function () {
      $state.go('app.about', {});
    }


    $scope.goHome = function () {
      $state.go('app.home', {});
    }





  }]);