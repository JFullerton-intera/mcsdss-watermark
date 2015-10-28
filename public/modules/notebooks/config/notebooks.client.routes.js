(function() {
	'use strict';

	//Setting up route
	angular
		.module('notebooks')
		.config(NotebooksRoutes);

	NotebooksRoutes.$inject = ['$stateProvider'];

	function NotebooksRoutes($stateProvider) {
		// Notebooks state routing
		$stateProvider.
		state('listNotebooks', {
			url: '/notebooks',
			templateUrl: 'modules/notebooks/views/list-notebooks.client.view.html'
		}).
		state('createNotebook', {
			url: '/notebooks/create',
			templateUrl: 'modules/notebooks/views/create-notebook.client.view.html'
		}).
		state('viewNotebook', {
			url: '/notebooks/:notebookId',
			templateUrl: 'modules/notebooks/views/view-notebook.client.view.html'
		}).
		state('editNotebook', {
			url: '/notebooks/:notebookId/edit',
			templateUrl: 'modules/notebooks/views/edit-notebook.client.view.html'
		});
	}
})();