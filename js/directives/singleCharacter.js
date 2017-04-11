(function() {
    'use strict';

    angular
        .module('routing')
		.directive('singleCharacter', function (API) {

		  return {
		    restrict: 'E', // Restrict to Element only
		    templateUrl: '../partials/singleHeroDirective.html',
    		 link: function ( vm, element, attrs ){

		      	let character= API.getSingleCharacter(attrs.id);

		      	vm.taco = "JAKE";

		    	character.then(res=>{
		    		vm.character = res.data.data.results[0];
		    	})
		    },

		  };
		});
})();