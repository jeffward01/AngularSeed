angular.module("app").service('alertService', [
  '$scope', '$state',
  function ($state) {




    $scope.goToAbout = function () {
      $state.go('app.about', {});
    }


    $scope.goHome = function () {
      $state.go('app.home', {});
    }





  }]);