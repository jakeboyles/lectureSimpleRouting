(function() {
    'use strict';

    angular
        .module('routing')
        .controller('LoginController', function(API,$stateParams,$location) {

        	const vm = this;

            vm.login = function(){
                const login = API.login(vm.taco);
                login.then(res=>{
                    if(res.data.error) return alert("Wrong Info");
                    $location.url("/")
                })
            }
            
        });
     
})();