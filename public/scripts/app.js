
/**
 *	@File: app.js;
 *  @Description: App Modules, configs and definitions;
 *	@Author: Lucas Guszak;
 *	@Date: 06/06/2017;
 */
 var App = angular.module('app', ['ngMaterial','ui-notification',
 	'ui.utils.masks','ngResource','ui.router','app.config']);

 var bustUrl = '?bust=' + Math.random().toString(36).slice(2);

 App.config(function($mdThemingProvider) {
 	$mdThemingProvider.theme('default')
 	.primaryPalette('blue');
 });