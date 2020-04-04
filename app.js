document.addEventListener('deviceready', function(){
 //Ici du code au lancement de l'appli
}, false);

var app = angular.module('app', []);

app.config(function($routeProvider){
        // Système de routage
        $routeProvider
        .when('/home', {templateUrl: 'partials/home.html'})
        .when('/about', {templateUrl: 'partials/about.html'})
        .otherwise({redirectTo: '/home'});
})