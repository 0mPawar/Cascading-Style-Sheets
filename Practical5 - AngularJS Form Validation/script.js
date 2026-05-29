var app = angular.module("formApp", []);

app.controller("FormCtrl", function ($scope) {
  $scope.student = {
    fullname: "",
    email: "",
    age: "",
    password: "",
    gender: "",
    course: "",
    address: "",
    hobbies: {
      reading: false,
      coding: false,
      sports: false,
      music: false,
    },
  };

  $scope.submitted = false;
  // Submit function using ng-submit
  $scope.submitForm = function () {
    if ($scope.regForm.$valid) {
      $scope.submitted = true;
    }
  };

  // Reset function using ng-click
  $scope.resetForm = function () {
    $scope.student = {
      fullname: "",
      email: "",
      age: "",
      password: "",
      gender: "",
      course: "",
      address: "",
      hobbies: { reading: false, coding: false, sports: false, music: false },
    };
    $scope.submitted = false;
    $scope.regForm.$setPristine();
    $scope.regForm.$setUntouched();
  };
});
