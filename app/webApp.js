'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'myApp.about',
  'myApp.home',
  'myApp.music',
  'myApp.programs',
  'myApp.contact',
  'myApp.minimalismGuitar',
  'myApp.fleet',
  'myApp.planing',
  'myApp.unset',
  'myApp.epoch',
  'myApp.epochView',
  'myApp.departure',
  'myApp.genMel',
  'myApp.genMelView',
  'myApp.genMelPaper',
  'myApp.genSon',
  'myApp.genSonView',
  'myApp.genSonPaper',
  'myApp.split',
  'myApp.splitView',
  'myApp.genMelPsy',
  'myApp.songCycle',
  'myApp.twoVoices',
  'myApp.songsAndInterludes',
  'myApp.reflections',
  'myApp.threenotes',
  'myApp.smallMusic',
  'myApp.softMusic',
  'myApp.softMusicView',
  'myApp.chugga',
  'myApp.chuggaView',
  'myApp.version'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({redirectTo: '/home'});
}]);
