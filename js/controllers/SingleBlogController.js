(function() {
    'use strict';

    angular
        .module('routing')
        .controller('SingleBlogController', function(API,$stateParams) {

        	const vm = this;

            const blog = API.getSingleBlog($stateParams.id);
            
            blog.then(res=>{
                vm.blog = res.data;
            })

        });
     
})();