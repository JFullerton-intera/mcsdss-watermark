(function() {
  'use strict';

  angular
    .module('analyze')
    .config(DashboardRoutes);

  DashboardRoutes.$inject = ['$stateProvider']; // , '$scope', '$rootScope'

  function DashboardRoutes($stateProvider) { // , $scope, $rootScope

    // Define states.
    var analyze_state = {
      abstract: true,
      url: '/analyze',
      templateUrl: 'modules/analyze/views/analyze.client.view.html',
      controller: 'AnalyzeViewController',
      controllerAs: 'analyze',
      data: {
        title: 'Analyze'
      },
      // NOTE: Factories do not need to be injected. They are already available through the mcsdss.providers module across the app.
      resolve: {
        analysisData: function(FormulationRetrieval) {
          return FormulationRetrieval.getFormulation('./data/formulations/bs.formulation.json');
        }
      },
      onEnter: function(analysisData){
        // console.log(analysisData);
      }
    };

    var analyze_layout_state = {
      abstract: false,
      url: '',
      views: {
        'graph': {
          templateUrl: 'modules/analyze/views/analyze.graph.client.view.html',
          controller: 'GraphViewController'
        },
        'map': {
          templateUrl: 'modules/analyze/views/analyze.map.client.view.html',
          controller: 'MapViewController'
        },
        'filters': {
          templateUrl: 'modules/analyze/views/analyze.filters.client.view.html',
          controller: 'FiltersViewController',
          controllerAs: 'filters'
        },
        'datatable': {
          templateUrl: 'modules/analyze/views/analyze.datatable.client.view.html',
          controller: 'DatatableViewController',
          controllerAs: 'datatable'
        }
      }
    };

    // Populate provider.
    $stateProvider
      .state('analyze', analyze_state)
      .state('analyze.layout', analyze_layout_state);
  }
})();