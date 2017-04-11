(function() {
    'use strict';

    angular
        .module('routing')
        .controller('CharactersController', function(API,$stateParams) {

        	const vm = this;

            let page = $stateParams.page;
            vm.page = Number(page);

            let characters = API.getCharactersByPage(page);
            characters.then(res=>{
                vm.lastPage = parseInt(res.data.data.total/20);
                vm.characters = res.data.data.results; 
            })

        });
     
})();