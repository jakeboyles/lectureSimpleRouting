(function() {
    'use strict';

    angular
        .module('routing')
        .controller('MainController', function(API) {
        	const vm = this;
            vm.name = "Jake";
        });
     
})();