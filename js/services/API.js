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
			    },
			    getSingleBlog:(id)=>{
			    	return $http({
			    		type:"GET",
			    		url:`https://tiyagencyweek.herokuapp.com/blogs/${id}`,
			    		headers:{X_CSRF_TOKEN:'N5JGY3RWWTW51XZTYVSN'},
			    	})
			    },
			    login:(data) => {
			    	return $http.post('https://tiyagencyweek.herokuapp.com/auth/login',data);
			    }
		  	};
        });

})();