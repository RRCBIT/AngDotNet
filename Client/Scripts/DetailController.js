(function(app) {
    
var DetailController=function($scope,$http,$routeParams,movieService)  {
    var id= $routeParams.id;
    
    //$http.get("/api/movies/"+id)
    movieService
    .getById(id)
    .success(function(data){
       $scope.movie = data;
    });
}  ;
    
    
app.controller("DetailController",DetailController);
   
 }(angular.module("AtTheMovies")));