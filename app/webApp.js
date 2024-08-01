'use strict';

// if (location.protocol !== "http:") {
//   location.protocol = "http:";
// }

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'myApp.about',
  'myApp.thisyear',
  'myApp.paperandpen',
  'myApp.playground',
  'myApp.battery',
  'myApp.megsong',
  'myApp.alabama',
  'myApp.nationwide',
  'myApp.agendas',
  'myApp.m4a',
  'myApp.listen',
  'myApp.perform',
  'myApp.cgle',
  'myApp.covid',
  'myApp.sansduoone',
  'myApp.sansduotwo',
  'myApp.fromtheshells',
  'myApp.sansduothree',
  'myApp.technecyborgsolo',
  'myApp.shared',
  'myApp.earTraining',
  'myApp.home',
  'myApp.music',
  'myApp.coding',
  'myApp.teaching',
  'myApp.art',
  'myApp.theater',
  'myApp.everything',
  'myApp.programs',
  'myApp.chinatown',
  'myApp.technecyborg',
  'myApp.series1nft',
  'myApp.eeg',
  'myApp.extrapolations',
  'myApp.ambientdulcimer',
  'myApp.zfest',
  'myApp.mgc',
  'myApp.youtuber',
  'myApp.contact',
  'myApp.ideas',
  'myApp.whisper',
  'myApp.minimalismGuitar',
  'myApp.fleet',
  'myApp.asking',
  'myApp.wch',
  'myApp.planing',
  'myApp.unset',
  'myApp.someonesmoon',
  'myApp.sightreadchristmas',
  'myApp.emeraldfuturespostlude',
  'myApp.sometitlesarewords',
  'myApp.thesis',
  'myApp.nimb',
  'myApp.epoch',
  'myApp.breaking',
  'myApp.epochView',
  'myApp.departure',
  'myApp.tubeisyou',
  'myApp.wildthings',
  'myApp.genMel',
  'myApp.genMelView',
  'myApp.genMelPaper',
  'myApp.genSon',
  'myApp.pan',
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
  'myApp.version',
  // DO NOT CHANGE THIS COMMENT: New stuff goes here
   'myApp.theseSpecialHands',
   'myApp.listeningExercises1',
   'myApp.soundpaddle',
   'myApp.purplegreen',
   'myApp.zinetude',
   'myApp.attentionMeditation',
   'myApp.soundmachinesound',
   'myApp.databending',
   'myApp.nebulousEpiphanies',
   'myApp.cloudCollage',
  'myApp.inprogress',
  'myApp.groundwindow',
  'myApp.ten',
  'myApp.WeGrowTogether',
  'myApp.bmcde',
  'myApp.musicThatSoundsGood',
  'myApp.thereandbackam',
  'myApp.contactlite',
  'myApp.uglycry',
  'myApp.cyberworm',
  'myApp.menu',
  'myApp.spliceworkshop',
  'myApp.fishSchool',

]).config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({
    redirectTo: '/home'
  });
}]);
