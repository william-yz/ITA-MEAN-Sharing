'use strict';

// Setting up route
angular.module('core').config(['$stateProvider', '$urlRouterProvider',
  function ($stateProvider, $urlRouterProvider) {

    // Redirect to 404 when route not found
    $urlRouterProvider.otherwise(function ($injector, $location) {
      $injector.get('$state').transitionTo('not-found', null, {
        location: false
      });
    });

    // Home state routing
    $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'client/core/views/home.client.view.html'
    }).state('occupation', {
            url: '/occupation',
            templateUrl: 'client/core/views/occupation.html'
        }).state('seeker', {
            url: '/seeker',
            templateUrl: 'client/core/views/seeker.html'
        })
    .state('not-found', {
      url: '/not-found',
      templateUrl: 'client/core/views/404.client.view.html',
      data: {
        ignoreState: true
      }
    })
    .state('bad-request', {
      url: '/bad-request',
      templateUrl: 'client/core/views/400.client.view.html',
      data: {
        ignoreState: true
      }
    })

    .state('forbidden', {
      url: '/forbidden',
      templateUrl: 'client/core/views/403.client.view.html',
      data: {
        ignoreState: true
      }
    });
  }
]);
