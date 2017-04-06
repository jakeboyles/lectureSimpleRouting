(function() {
    'use strict';

    angular
        .module('routing')
        .controller('BlogController', function(API) {

        	const vm = this;

            const blogs = API.getBlogs();
            
            blogs.then(res=>{
                vm.blogs = res.data.blogs;
            })

        });
     
})();