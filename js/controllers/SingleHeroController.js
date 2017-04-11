(function() {
    'use strict';

    angular
        .module('routing')
        .controller('SingleHeroController', function(API,$stateParams) {

        	const vm = this;

            vm.id = $stateParams.id;

            

        });
     
})();