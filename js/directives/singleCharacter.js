(function() {
    'use strict';

    angular
        .module('routing')
		.directive('singleCharacter', (API) => {

		  return {
		    restrict: 'E', 
		    templateUrl: '../partials/singleHeroDirective.html',
    		 link: function ( vm, element, attrs ){

		      	let character= API.getSingleCharacter(attrs.id);

		    	character.then(res=>{
		    		vm.character = res.data.data.results[0];
		    	})
		    },

		  };
		});
})();