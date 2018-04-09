angular.module("app").service('alertService', [
  '$state',
  function ($state) {

    var alertServiceFactory = {};



    var _test = function () {
      toastr.info('We are open today from 10 to 22', 'Information');
    };

    //update alerts: http://t4t5.github.io/sweetalert/

    var _success = function (message, title) {

      swal({
        title: title,
        text: message,
        type: "success",
        showConfirmButton: false,
        timer: 1500
      })
    }

    _loginAlert = function (message) {

      swal({
        title: "Welcome Back",
        text: message,
        type: "success",
        showConfirmButton: false,
        timer: 1500
      })
    }

    var _warning = function (message, title) {
      swal({
        title: title,
        text: message,
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      })
    }
    var _info = function (message, title) {
      toastr.info(message, title);
    }
    var _error = function (message, title) {

      swal({
        title: title,
        text: message,
        type: "error",
        showConfirmButton: false,
        timer: 1500
      })
    }


    var _loginError = function (message) {


      swal({
        title: "Invalid Username/Password",
        text: message,
        type: "error",
        showConfirmButton: false,
        timer: 1500
      })
    }

    var _logoutMessage = function () {

      swal({
        title: "Logged out!",
        text: "You have been logged out!  Come back soon!",
        type: "success",
        showConfirmButton: false,
        timer: 1500
      })
    }


    var _successTimeout = function (message) {
      //  sweetAlert({
      //      title: "Success",
      //      text: message,
      //      type: "success",
      //      timer: 2000,
      //      showConfirmButton: false,
      //  });
    }

    alertServiceFactory.successTimeout = _successTimeout;
    alertServiceFactory.logoutMessage = _logoutMessage;
    alertServiceFactory.loginError = _loginError;
    alertServiceFactory.loginAlert = _loginAlert;
    alertServiceFactory.test = _test;
    alertServiceFactory.info = _info;
    alertServiceFactory.warning = _warning;
    alertServiceFactory.success = _success;
    alertServiceFactory.error = _error;
    return alertServiceFactory;






  }]);