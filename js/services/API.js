(function() {
    'use strict';

    angular
        .module('routing')
        .factory('API', function($http){

			return {
			    getBlogs:()=>{
			    	return $http({
			    		type:"GET",
			    		url:"https://tiyagencyweek.herokuapp.com/blogs",
			    		headers:{X_CSRF_TOKEN:'N5JGY3RWWTW51XZTYVSN'},
			    	})
			    }
		  	};
        });

})();