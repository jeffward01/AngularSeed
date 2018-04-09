angular.module("app").controller('appController', [
  '$scope', '$state', '$rootScope'
, function ($scope, $state, $rootScope) {


    //Nav Buttons
    $scope.goHome = function () {
      $state.go('app.home', {});
    }

    $scope.goToAbout = function () {
      $state.go('app.about', {});
    }


    $scope.goToView2 = function () {
      $state.go('app.about', {});
    }

    $scope.goToView3 = function () {
      $state.go('app.about', {});
    }

    $scope.OptionItem = function () {
      $state.go('app.about', {});
    }

    $scope.goToLogin = function () {
      $state.go('app.login', {});
    }

    $scope.goToCreateAccount = function () {
      $state.go('app.register', {});
    }



    //Control Buttons
    $rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState, fromParams) {

      $state.current = toState;   // if you need the target Url
      $state.current = fromState;// If you need the current URL
      var json = (function () {
        event.preventDefault();
        $.ajax({
          'async': false,
          'global': false,
          'url': 'users/testLogin',
          //'data': 'action=showOrders', 
          'dataType': "json",
          'success': function (data) {
            if (data.success) {
              $rootScope.authenticated = true;
              $rootScope.id = data.data.id;
              $rootScope.unique_id = data.data.unique_id;
              $rootScope.print_house_id = data.data.print_house_id;
              $rootScope.name = data.data.name;
              $rootScope.email = data.data.email;
              $rootScope.type = data.data.type;
            } else {
              console.log($state.current.name);//It should show value now

            }
          }
        });
      })
    })






















  }]);