var app = angular.module('mainApp',['ngRoute']);

app.config(function($routeProvider,$locationProvider){

    $routeProvider
    .when('/main', {
        controller: 'mainCtrl',
        templateUrl: 'views/main/main.html'
    })
    .when('/views', {
        controller: 'aboutCtrl',
        templateUrl: 'views/about/about.html'
    })
    .when('/experience', {
        controller: 'experienceCtrl',
        templateUrl: 'views/experience/experience/html'
    })
    .when('/contact', {
        controller: 'contactCtrl',
        templateUrl: 'views/contact/contact.html'
    })
    .otherwise('/main', {
        controller: 'mainCtrl',
        templateUrl: 'views/main/main.html'
    });

    $locationProvider.hashPrefix('');
});