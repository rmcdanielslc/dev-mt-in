angular.module('socialApp',['ui.router'])
.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
  .state('initial', {
    url: '/',
    templateUrl: 'js/initial/initialTmpl.html',

  })
  .state('home', {
    url: '/home',
    templateUrl: 'js/home/homeTmpl.html'
  })
  .state('update', {
    url: '/update',
    templateUrl: 'js/update/updateTmpl.html'
  })
  .state('view', {
    url: '/viewfriends',
    templateUrl: 'js/view/viewTmpl.html'
  })
  .state('find', {
    url: 'findfriends',
    templateUrl: 'js/find/findTmpl.html'
  });

  $urlRouterProvider
  .otherwise('/');

});
