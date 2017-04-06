(function() {
    'use strict';

    angular
    .module('routing', ['ui.router'])
    .config(function($stateProvider, $urlRouterProvider){

    	$stateProvider
	    .state('home', {
	      url: '/',
	      templateUrl: '../partials/home.html'
	    })
	    .state('blogs', {
	      url: '/blogs',
	      templateUrl: '../partials/blogs.html',
	      controller: 'BlogController',
      	  controllerAs: 'vm'
	    });

    });
        
})();