(function (app) {

    var config = function ($routeProvider) {
        $routeProvider
            .when("/list", { templateUrl: "/client/views/list.html" })
            .when("/li", { templateUrl: "/client/views/li.html" })
            .when("/details/:id", { templateUrl: "/client/views/details.html" })
            .when("/detail/:id", { templateUrl: "/client/views/detail.html" })
            .otherwise({ redirectTo: "/li" });
    };
    config.$inject = ["$routeProvider"];

    app.config(config);
    app.constant("movieApiUrl", "/api/movies/");

}(angular.module("AtTheMovies", ["ngRoute", "ngResource", "ngAnimate"])));