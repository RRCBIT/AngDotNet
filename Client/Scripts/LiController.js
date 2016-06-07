(function(app) {
//var app=angular.module("AtTheMovies");


var LiController = function($scope,$http,movieService){
    //$http.get("api/movies")
    movieService
        .getAll()
        .success(function (data) {
            $scope.movies=data;
        });
        
        $scope.delete = function (movie) {
            movieService.delete(movie)
                .success(function() {
                    removeMovieById(movie.id);
                });
        };
        
        var removeMovieById = function(id) {
            for (var i = 0; i < $scope.movies.length; i++) {
                if ($scope.movies[i].id == id) {
                    $scope.movies.splice(i, 1);
                }
            }
        };        
 $scope.message="HelloH,M";
 
 
};

app.controller("LiController",LiController);

}(angular.module("AtTheMovies")));