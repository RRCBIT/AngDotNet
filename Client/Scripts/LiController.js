(function(app) {
//var app=angular.module("AtTheMovies");
var LiController = function($scope){
 $scope.message="HH,M";
};


app.controller("LiController",LiController);

}(angular.module("AtTheMovies")));