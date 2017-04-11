(function() {
    'use strict';

    angular
        .module('routing')
        .controller('MainController', function(API) {
        	const vm = this;

            let characters = API.getCharacters(3);
            characters.then(res=>{
            	console.log(res);
            	vm.characters = res.data.data.results;
            })
        });
     
})();