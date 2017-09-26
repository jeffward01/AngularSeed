angular.module("app").controller('appController', [
    '$scope', '$state',
    function ($scope, $state) {




        $scope.goToAbout = function () {
            $state.go('app.about', {});
        }


        $scope.goHome = function () {
            $state.go('app.home', {});
        }





    }]);