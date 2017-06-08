App.factory('Evaluation', function($resource, API_URL) {
	return $resource( API_URL + '/evaluation', {}, {
		methods: {
			save: {
				method: 'POST'
			}
		}
	});
});
