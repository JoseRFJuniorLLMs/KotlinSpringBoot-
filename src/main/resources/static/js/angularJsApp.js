var app = angular.module('app', []);
app.controller('postcontroller', function($scope, $http, $location) {
	$scope.submitForm = function(){
		var url = $location.absUrl() + "postcustomer";
		
		// configure text return
		var config = {
                headers : {
                    'Accept': 'text/plain'
                }
        }
		
		// prepare data
		var data = {
            firstname: $scope.firstname,
            lastname: $scope.lastname,
            age: $scope.age
        };
		
		// do post to remote-server
		$http.post(url, data, config).then(function (message) {
			$scope.returnMessage = message.data;
		}, function error(response) {
			$scope.returnMessage = "Error";
		});
		
		// reset input data in view
		$scope.firstname = "";
		$scope.lastname = "";
		$scope.age = "";
	}
});

app.controller('getcontroller', function($scope, $http, $location) {
	$scope.getfunction = function(){
		var url = $location.absUrl() + "getallcustomer";
		
		$http.get(url).then(function (response) {
			$scope.customerList = response.data;
		}, function error(response) {
			$scope.returnMessage = "Error";
		});
	}
});
