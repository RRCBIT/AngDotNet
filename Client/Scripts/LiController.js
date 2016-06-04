(function(app) {
//var app=angular.module("AtTheMovies");
var LiController = function($scope,$http,movieService){
    //$http.get("api/movies")
    movieService
        .getAll()
        .success(function (data) {
            $scope.movies=data;
        })
 $scope.message="HelloH,M";
};

app.controller("LiController",LiController);

}(angular.module("AtTheMovies")));