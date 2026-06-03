var app = angular.module("ctrlApp", []);

// 1. Basic Controller
app.controller("BasicCtrl", function ($scope) {
  $scope.message = "Hello from Basic Controller!";
  $scope.dictator1 = { name: "Person1", special_rank: 56 };
  $scope.greet = function () {
    alert("Welcome, " + $scope.dictator1.name + "!");
  };
});

// 2. Nested Controllers
app.controller("ParentCtrl", function ($scope) {
  $scope.parentMsg = "I am Parent Controller";
});
app.controller("ChildCtrl", function ($scope) {
  $scope.childMsg = "I am Child Controller";
});

// 3. Filter in Controller
app.controller("FilterCtrl", function ($scope) {
  $scope.dictator2 = [
    { name: "Person1", special_rank: 56 },
    { name: "Person2", special_rank: 75 },
    { name: "Person3", special_rank: 100 },
  ];
});

// 4. Controller with Function
app.controller("CalcCtrl", function ($scope) {
  $scope.name = "Person2";
  $scope.marks = 78;
  $scope.result = "";
  $scope.calculate = function () {
    if ($scope.marks >= 75) $scope.result = "Grade A 🏆";
    else if ($scope.marks >= 60) $scope.result = "Grade B ✅";
    else if ($scope.marks >= 35) $scope.result = "Grade C ⚠️";
    else $scope.result = "Fail ❌";
  };
});
