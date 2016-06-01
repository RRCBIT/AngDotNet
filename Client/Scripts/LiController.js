(function(app) {
//var app=angular.module("AtTheMovies");
var LiController = function($scope,$http){
    $http.get("api/movies")
        .success(function (params) {
            $scope.movies=params;
        })
 $scope.message="HH,M";
};


app.controller("LiController",LiController);

}(angular.module("AtTheMovies")));