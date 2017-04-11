(function() {
    'use strict';

    angular
        .module('routing')
        .factory('API', function($http){

			return {
			    getCharacters:(number)=>{
			    	return $http({
			    		type:"GET",
			    		url:`https://gateway.marvel.com:443/v1/public/characters?limit=${number}&apikey=b6062bed9e11b13c24966ba8226a381f`,
			    	})
			    },
			    getSingleCharacter:(id) => {
			    	return $http({
			    		type:"GET",
			    		url:`https://gateway.marvel.com:443/v1/public/characters/${id}?apikey=b6062bed9e11b13c24966ba8226a381f`,
			    	})
			    },
			    getCharactersByPage:(page) => {
			    	return $http({
			    		type:"GET",
			    		url:`https://gateway.marvel.com:443/v1/public/characters?limit=20&offset=${20*page}&apikey=b6062bed9e11b13c24966ba8226a381f`,
			    	})
			    }
		  	};
        });

})();