(function() {
    'use strict';

    angular
        .module('routing')
		.directive('weather', (API) => {

		  	return {
		    	restrict: 'E', 
		    	templateUrl: '../partials/weather.html',
		    	scope: {
		      		vm: '=info'
		    	},
    			link: (vm, element, attrs) => {

		      		let weather= API.getWeather(attrs.city);

		    		weather.then(res=>{
		    			vm.weather = res.data;
		    		})
		    	},
		  	};
		});
})();