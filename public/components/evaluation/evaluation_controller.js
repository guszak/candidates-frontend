App.controller('evaluation_ctrl', function ($scope, $state, Notification, Evaluation) {
/**
* @name: error;
* @description: Evaluation error response;
* @author: Lucas Guszak;
* @date: 08/06/2017;
*/
function error (response) {
	$scope.waitingCallback = false
	$scope.error = response.data
	Notification.error({title: 'Avaliação', message: $scope.error})
};

/**
* @name: success;
* @description: Evaluation success response;
* @author: Lucas Guszak;
* @date: 08/06/2017;
*/
function success () {
	$state.go('end')
};

/**
* @name: save;
* @description: Save;
* @author: Lucas Guszak;
* @date: 08/06/2017;
*/
$scope.save = function () {
	$scope.waitingCallback = true
	$scope.evaluation.$save(success, error)
}

/**
* @name: main;
* @description: Init controller;
* @author: Lucas Guszak;
* @date: 08/06/2017;
*/
function main () {
	$scope.error = ''
	$scope.waitingCallback = false
	$scope.evaluation = new Evaluation()
};

main()
})
