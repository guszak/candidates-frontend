/**
 *	@Title: RouteProvider Definitions;
 *  @Description: Defines system routing conditions based on url parameters;
 *	@Author: Lucas Guszak;
 *	@Date: 07/06/2017;
 */
 App.config(function ($stateProvider, $urlRouterProvider) {

 	$stateProvider

 	.state('evaluation', {
 		url: '/evaluation',
 		templateUrl: 'public/components/evaluation/evaluation.html' + bustUrl,
 		controller: 'evaluation_ctrl',
 		cache: false
 	})
 	.state('end', {
 		url: '/end',
 		templateUrl: 'public/components/end/end.html' + bustUrl,
 		cache: false
 	})

 	$urlRouterProvider.otherwise('evaluation');
 });