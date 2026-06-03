var app = angular.module("oddEvenApp", []);
app.controller("OddEvenCtrl", function ($scope) {
  $scope.students = [
    { name: "Student1", rollno: "101", marks: 78 },
    { name: "Student2", rollno: "102", marks: 92 },
    { name: "Student3", rollno: "103", marks: 55 },
    { name: "Student4", rollno: "104", marks: 88 },
    { name: "Student5", rollno: "105", marks: 74 },
    { name: "Student6", rollno: "106", marks: 65 },
    { name: "Student7", rollno: "107", marks: 42 },
    { name: "Student8", rollno: "108", marks: 31 },
    { name: "Student9", rollno: "109", marks: 82 },
    { name: "Student10", rollno: "110", marks: 47 },
  ];
});
