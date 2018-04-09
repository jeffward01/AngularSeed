angular.module("app").controller('sidebarController', [
  '$scope', '$state','stateManager',
  function ($scope, $state, stateManager) {




    $scope.goToAccount = function () {
      stateManager.goToAccount();
    }




  }]);