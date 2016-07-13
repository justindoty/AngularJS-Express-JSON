var app = angular.module('olympicApp', []);
var importData = [];
var random5 = [];
var temp = undefined;

app.controller('OlympicController', function($scope, $http) {
  // var configObject = {
  //     method: 'GET',
  //     url: '/olympics'
  // };

   $scope.getTeams = function () {
    delete $scope.olympics;
    importData = [];
    $http.get("/olympics/boxing").then(handleSuccess, handleFailure);
    $http.get("/olympics/judo").then(handleSuccess, handleFailure);
    $http.get("/olympics/archery").then(handleSuccess, handleFailure);
    $http.get("/olympics/taekwondo").then(handleSuccess, handleFailure);
    $http.get("/olympics/kayak").then(handleSuccess, handleFailure);

  }

  function handleSuccess(response) {
    // console.log(response);
    importData.push(response.data);
      console.log(importData);
    $scope.randomAthlete();
    // console.log(response.data);
    // $scope.olympics = response.data;

  }

  function handleFailure(response) {
    // console.log('Failure', response);
  }

$scope.randomAthlete = function() {

    // $scope.olympics = importData[randomIndex];
    $scope.olympics = importData;
}





});
