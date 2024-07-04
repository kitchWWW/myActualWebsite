'use strict';

angular.module('myApp.about', ['ngRoute'])

  .config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/about', {
      templateUrl: 'pages/about.html',
      controller: 'aboutCtrl'
    });
  }])

  .controller('aboutCtrl', [function() {}]);

angular.module('myApp.contact', ['ngRoute'])

  .config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/contact', {
      templateUrl: 'pages/contact.html',
      controller: 'contactCtrl'
    });
  }])

  .controller('contactCtrl', [function() {}]);

angular.module('myApp.home', ['ngRoute'])

  .config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/home', {
      templateUrl: 'pages/home.html',
      controller: 'homeCtrl'
    });
  }])

  .controller('homeCtrl', [function() {}]);

angular.module('myApp.music', ['ngRoute'])

  .config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/music', {
      templateUrl: 'pages/music.html',
      controller: 'musicCtrl'
    });
  }])

  .controller('musicCtrl', [function() {}]);

angular.module('myApp.programs', ['ngRoute'])
  .config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/programs', {
      templateUrl: 'pages/programs.html',
      controller: 'programsCtrl'
    });
  }])
  .controller('programsCtrl', [function() {}]);



angular.module('myApp.perform', ['ngRoute'])
  .config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/perform', {
      templateUrl: 'pages/perform.html',
      controller: 'performCtrl'
    });
  }])
  .controller('performCtrl', [function() {}]);




angular.module('myApp.listen', ['ngRoute'])
  .config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/listen', {
      templateUrl: 'pages/listen.html',
      controller: 'listenCtrl'
    });
  }])
  .controller('listenCtrl', [function() {}]);










angular.module('myApp.everything', ['ngRoute'])
  .config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/everything', {
      templateUrl: 'pages/everything.html',
      controller: 'everythingCtrl'
    });
  }])
  .controller('everythingCtrl', [function() {}]);

angular.module('myApp.coding', ['ngRoute'])
  .config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/coding', {
      templateUrl: 'pages/coding.html',
      controller: 'codingCtrl'
    });
  }])
  .controller('codingCtrl', [function() {}]);


angular.module('myApp.teaching', ['ngRoute'])
  .config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/teaching', {
      templateUrl: 'pages/teaching.html',
      controller: 'teachingCtrl'
    });
  }])
  .controller('teachingCtrl', [function() {}]);

angular.module('myApp.art', ['ngRoute'])
  .config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/art', {
      templateUrl: 'pages/art.html',
      controller: 'artCtrl'
    });
  }])
  .controller('artCtrl', [function() {}]);

angular.module('myApp.theater', ['ngRoute'])
  .config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/theater', {
      templateUrl: 'pages/theater.html',
      controller: 'theaterCtrl'
    });
  }])
  .controller('theaterCtrl', [function() {}]);









