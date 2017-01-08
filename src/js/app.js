// Declare App
var app = angular.module('GitHub-API', []);

// Api Factory
app.factory('APIFactory', APIFactory);

APIFactory.$inject = ['$http'];

function APIFactory($http) {
	var dataEntry = 0,
		user = "JonathanDWood";
		url = "https://api.github.com/users/" + user + "/repos";
		factory = {};
		factory.data = [];

	factory.get = function() {
		$http.get(url).then(function(response) {
			var data = response.data;
			factory.data.push(response.data);
		});
	};
	factory.get();
	return factory;
}

// Main Controller
app.controller('MainCtrl', MainCtrl);

MainCtrl.$inject = ['$scope', 'APIFactory'];

function MainCtrl (self, API) {
	self.data = API.data;
}
