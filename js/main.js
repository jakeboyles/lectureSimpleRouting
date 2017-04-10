(function() {
    'use strict';

    angular
    .module('routing', ['ui.router'])
    .config(function($stateProvider, $urlRouterProvider,$locationProvider){

    	$locationProvider.html5Mode({
		  enabled: true,
		  requireBase: false
		});

    	$stateProvider
	    .state('home', {
	      url: '/',
	      views: {
		      'content': {
		        templateUrl: '../partials/home.html',
		        controller: 'MainController',
		        controllerAs: 'vm'
		      },
		      'sidebar': {
		        templateUrl: '../partials/sidebar.html',
		      }
		   }
	    })
	    .state('singleBlog', {
	      url: '/blogs/:id',
	      views: {
		      'content': {
		        templateUrl: '../partials/singleBlog.html',
		        controller: 'SingleBlogController',
		        controllerAs: 'vm'
		      },
		      'sidebar': {
		        templateUrl: '../partials/singleBarSidebar.html',
		      }
		   }
	    })
	    .state('blogs', {
	      url: '/blogs',
	      views: {
		      'content': {
		        templateUrl: '../partials/blogs.html',
		        controller: 'BlogController',
		        controllerAs: 'vm'
		      },
		      'sidebar': {
		        templateUrl: '../partials/singleBarSidebar.html',
		      }
		   }
	    })
	    .state('login', {
	      url: '/login',
	      views: {
		      'content': {
		        templateUrl: '../partials/login.html',
		        controller: 'LoginController',
		        controllerAs: 'vm'
		      },
		      'sidebar': {
		        templateUrl: '../partials/singleBarSidebar.html',
		      }
		   }
	    });

    });
        
})();