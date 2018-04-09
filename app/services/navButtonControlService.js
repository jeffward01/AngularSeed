angular.module("app").service('navButtonControlService', [
 '$state',
  function ($state) {




    $scope.goToAbout = function () {
      $state.go('app.about', {});
    }


    $scope.goHome = function () {
      $state.go('app.home', {});
    }





  }]);