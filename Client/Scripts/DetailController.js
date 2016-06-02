(function(app) {
    
var DetailController=function($scope,$http,$routeParams)  {
    var id= $routeParams.id;
    
    $http.get("/api/movies/"+id)
    .success(function(data){
       $scope.movie = data;
    });
}  ;
    
    
app.controller("DetailController",DetailController);
   
 }(angular.module("AtTheMovies")));