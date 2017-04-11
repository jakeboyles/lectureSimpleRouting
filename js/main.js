(function() {
    'use strict';

    angular
        .module('routing', ['ui.router'])
        .config(function($stateProvider, $urlRouterProvider, $locationProvider, $sceDelegateProvider) {

            // $locationProvider.html5Mode({
            //     enabled: true,
            //     requireBase: false
            // });

            $stateProvider
            .state('home', {
                url: '/',
                views: {
                    'content': {
                        templateUrl: '../partials/home.html',
                        controller: 'MainController',
                        controllerAs: 'vm'
                    }
                }
            })
            .state('singleCharacter', {
                url: '/character/:id',
                views: {
                    'content': {
                        templateUrl: '../partials/singleHero.html',
                        controller: 'SingleHeroController',
                        controllerAs: 'vm'
                    }
                }
            })
            .state('charactersPage', {
                url: '/characters/:page',
                views: {
                    'content': {
                        templateUrl: '../partials/characters.html',
                        controller: 'CharactersController',
                        controllerAs: 'vm'
                    }
                }
            })
        })
})();


