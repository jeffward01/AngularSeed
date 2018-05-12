angular.module("app").controller('sidebarController', [
  '$scope', '$state','stateManager',
  function ($scope, $state, stateManager) {




    $scope.goToAccount = function () {
      stateManager.goToAccount();
    }

 
    $scope.goToLogin = function () {
      stateManager.goToLogin();
    }


    $scope.goToAbout = function () {
      stateManager.goToAbout();
    }


    $scope.goToSettings = function () {
      stateManager.goToSettings();
    }



    $scope.goHome = function () {
      stateManager.goHome();
    }


    $scope.goToDashboard = function () {
      stateManager.goToDashboard();
    }




  }]);