

angular.module('myApp.agendas', ['ngRoute'])

  .config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/agendas', {
      templateUrl: 'simplePages/agendas.html',
      controller: 'agendasCtrl'
    });
  }])

  .controller('agendasCtrl', [function() {}]);

angular.module('myApp.ambientdulcimer', ['ngRoute'])

  .config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/ambientdulcimer', {
      templateUrl: 'simplePages/ambientdulcimer.html',
      controller: 'ambientdulcimerCtrl'
    });
  }])

  .controller('ambientdulcimerCtrl', [function() {}]);

angular.module('myApp.asking', ['ngRoute'])

  .config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/asking', {
      templateUrl: 'simplePages/asking.html',
      controller: 'askingCtrl'
    });
  }])

  .controller('askingCtrl', [function() {}]);

angular.module('myApp.breaking', ['ngRoute'])

  .config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/breaking', {
      templateUrl: 'simplePages/breaking.html',
      controller: 'breakingCtrl'
    });
  }])

  .controller('breakingCtrl', [function() {}]);

angular.module('myApp.cgle', ['ngRoute'])

  .config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/cgle', {
      templateUrl: 'simplePages/cgle.html',
      controller: 'cgleCtrl'
    });
  }])

  .controller('cgleCtrl', [function() {}]);

angular.module('myApp.chinatown', ['ngRoute'])

  .config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/chinatown', {
      templateUrl: 'simplePages/chinatown.html',
      controller: 'chinatownCtrl'
    });
  }])

  .controller('chinatownCtrl', [function() {}]);

angular.module('myApp.covid', ['ngRoute'])

  .config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/covid', {
      templateUrl: 'simplePages/covid.html',
      controller: 'covidCtrl'
    });
  }])

  .controller('covidCtrl', [function() {}]);

angular.module('myApp.departure', ['ngRoute'])

  .config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/departure', {
      templateUrl: 'simplePages/departure.html',
      controller: 'departureCtrl'
    });
  }])

  .controller('departureCtrl', ['$scope', '$location', function($scope, $location) {}]);



angular.module('myApp.earTraining', ['ngRoute'])

  .config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/earTraining', {
      templateUrl: 'simplePages/earTraining.html',
      controller: 'earTrainingCtrl'
    });
  }])

  .controller('earTrainingCtrl', [function() {}]);

angular.module('myApp.eeg', ['ngRoute'])

  .config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/eeg', {
      templateUrl: 'simplePages/eeg.html',
      controller: 'eegCtrl'
    });
  }])

  .controller('eegCtrl', [function() {}]);

angular.module('myApp.emeraldfuturespostlude', ['ngRoute'])

  .config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/emeraldfuturespostlude', {
      templateUrl: 'simplePages/emeraldfuturespostlude.html',
      controller: 'emeraldfuturespostludeCtrl'
    });
  }])

  .controller('emeraldfuturespostludeCtrl', [function() {}]);

angular.module('myApp.extrapolations', ['ngRoute'])

  .config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/extrapolations', {
      templateUrl: 'simplePages/extrapolations.html',
      controller: 'extrapolationsCtrl'
    });
  }])

  .controller('extrapolationsCtrl', [function() {}]);

angular.module('myApp.fleet', ['ngRoute'])

  .config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/fleet', {
      templateUrl: 'simplePages/fleet.html',
      controller: 'fleetCtrl'
    });
  }])

  .controller('fleetCtrl', [function() {}]);

angular.module('myApp.fromtheshells', ['ngRoute'])

  .config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/fromtheshells', {
      templateUrl: 'simplePages/fromtheshells.html',
      controller: 'fromtheshellsCtrl'
    });
  }])

  .controller('fromtheshellsCtrl', [function() {}]);

angular.module('myApp.ideas', ['ngRoute'])

  .config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/ideas', {
      templateUrl: 'simplePages/ideas.html',
      controller: 'ideasCtrl'
    });
  }])
  .controller('ideasCtrl', [function() {}]);

angular.module('myApp.m4a', ['ngRoute'])

  .config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/m4a', {
      templateUrl: 'simplePages/m4a.html',
      controller: 'm4aCtrl'
    });
  }])

  .controller('m4aCtrl', [function() {}]);

angular.module('myApp.mgc', ['ngRoute'])

  .config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/mgc', {
      templateUrl: 'simplePages/mgc.html',
      controller: 'mgcCtrl'
    });
  }])

  .controller('mgcCtrl', [function() {}]);

angular.module('myApp.minimalismGuitar', ['ngRoute'])

  .config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/minimalismGuitar', {
      templateUrl: 'simplePages/minimalismGuitar.html',
      controller: 'minimalismGuitarCtrl'
    });
  }])

  .controller('minimalismGuitarCtrl', [function() {}]);

angular.module('myApp.nationwide', ['ngRoute'])

  .config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/nationwide', {
      templateUrl: 'simplePages/nationwide.html',
      controller: 'nationwideCtrl'
    });
  }])

  .controller('nationwideCtrl', [function() {}]);

angular.module('myApp.nimb', ['ngRoute'])

  .config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/nimb', {
      templateUrl: 'simplePages/nimb.html',
      controller: 'nimbCtrl'
    });
  }]).controller('nimbCtrl', [function() {}]);

angular.module('myApp.paperandpen', ['ngRoute'])

  .config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/paperandpen', {
      templateUrl: 'simplePages/paperandpen.html',
      controller: 'paperandpenCtrl'
    });
  }])

  .controller('paperandpenCtrl', [function() {}]);

angular.module('myApp.planing', ['ngRoute'])

  .config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/planing', {
      templateUrl: 'simplePages/planing.html',
      controller: 'planingCtrl'
    });
  }])

  .controller('planingCtrl', [function() {}]);

angular.module('myApp.playground', ['ngRoute'])

  .config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/playground', {
      templateUrl: 'simplePages/playground.html',
      controller: 'playgroundCtrl'
    });
  }])

  .controller('playgroundCtrl', [function() {}]);

angular.module('myApp.sansduoone', ['ngRoute'])

  .config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/sansduoone', {
      templateUrl: 'simplePages/sansduoone.html',
      controller: 'sansduooneCtrl'
    });
  }])

  .controller('sansduooneCtrl', [function() {}]);

angular.module('myApp.sansduothree', ['ngRoute'])

  .config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/sansduothree', {
      templateUrl: 'simplePages/sansduothree.html',
      controller: 'sansduothreeCtrl'
    });
  }])

  .controller('sansduothreeCtrl', [function() {}]);

angular.module('myApp.sansduotwo', ['ngRoute'])

  .config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/sansduotwo', {
      templateUrl: 'simplePages/sansduotwo.html',
      controller: 'sansduotwoCtrl'
    });
  }])

  .controller('sansduotwoCtrl', [function() {}]);

angular.module('myApp.series1nft', ['ngRoute'])

  .config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/series1nft', {
      templateUrl: 'simplePages/series1nft.html',
      controller: 'series1nftCtrl'
    });
  }])

  .controller('series1nftCtrl', [function() {}]);

angular.module('myApp.shared', ['ngRoute'])

  .config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/shared', {
      templateUrl: 'simplePages/shared.html',
      controller: 'sharedCtrl'
    });
  }])

  .controller('sharedCtrl', [function() {}]);

angular.module('myApp.sightreadchristmas', ['ngRoute'])

  .config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/sightreadchristmas', {
      templateUrl: 'simplePages/sightreadchristmas.html',
      controller: 'sightreadchristmasCtrl'
    });
  }])

  .controller('sightreadchristmasCtrl', [function() {}]);

angular.module('myApp.someonesmoon', ['ngRoute'])

  .config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/someonesmoon', {
      templateUrl: 'simplePages/someonesmoon.html',
      controller: 'someonesmoonCtrl'
    });
  }])

  .controller('someonesmoonCtrl', [function() {}]);

angular.module('myApp.sometitlesarewords', ['ngRoute'])

  .config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/sometitlesarewords', {
      templateUrl: 'simplePages/sometitlesarewords.html',
      controller: 'sometitlesarewordsCtrl'
    });
  }])

  .controller('sometitlesarewordsCtrl', [function() {}]);

angular.module('myApp.songCycle', ['ngRoute'])

  .config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/songCycle', {
      templateUrl: 'simplePages/songCycle.html',
      controller: 'songCycleCtrl'
    });
  }])

  .controller('songCycleCtrl', ['$scope', function($scope) {}]);

angular.module('myApp.songsAndInterludes', ['ngRoute'])

  .config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/songsAndInterludes', {
      templateUrl: 'simplePages/songsAndInterludes.html',
      controller: 'songsAndInterludesCtrl'
    });
  }])

  .controller('songsAndInterludesCtrl', ['$scope', '$location', function($scope, $location) {}]);



angular.module('myApp.technecyborg', ['ngRoute'])

  .config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/technecyborg', {
      templateUrl: 'simplePages/technecyborg.html',
      controller: 'technecyborgCtrl'
    });
  }])

  .controller('technecyborgCtrl', [function() {}]);

angular.module('myApp.technecyborgsolo', ['ngRoute'])

  .config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/technecyborgsolo', {
      templateUrl: 'simplePages/technecyborgsolo.html',
      controller: 'technecyborgsoloCtrl'
    });
  }])

  .controller('technecyborgsoloCtrl', [function() {}]);

angular.module('myApp.thesis', ['ngRoute'])

  .config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/thesis', {
      templateUrl: 'simplePages/thesis.html',
      controller: 'thesisCtrl'
    });
  }])

  .controller('thesisCtrl', [function() {}]);

angular.module('myApp.thisyear', ['ngRoute'])

  .config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/thisyear', {
      templateUrl: 'simplePages/thisyear.html',
      controller: 'thisyearCtrl'
    });
  }])

  .controller('thisyearCtrl', [function() {}]);

angular.module('myApp.tubeisyou', ['ngRoute'])

  .config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/tubeisyou', {
      templateUrl: 'simplePages/tubeisyou.html',
      controller: 'tubeisyouCtrl'
    });
  }])

  .controller('tubeisyouCtrl', [function() {}]);

angular.module('myApp.unset', ['ngRoute'])

  .config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/unset', {
      templateUrl: 'simplePages/unset.html',
      controller: 'unsetCtrl'
    });
  }])

  .controller('unsetCtrl', [function() {}]);

angular.module('myApp.wch', ['ngRoute'])

  .config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/wch', {
      templateUrl: 'simplePages/wch.html',
      controller: 'wchCtrl'
    });
  }])

  .controller('wchCtrl', [function() {}]);

angular.module('myApp.whisper', ['ngRoute'])

  .config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/whisper', {
      templateUrl: 'simplePages/whisper.html',
      controller: 'whisperCtrl'
    });
  }])

  .controller('whisperCtrl', [function() {}]);

angular.module('myApp.wildthings', ['ngRoute'])

  .config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/wildthings', {
      templateUrl: 'simplePages/wildthings.html',
      controller: 'wildthingsCtrl'
    });
  }])

  .controller('wildthingsCtrl', [function() {}]);

angular.module('myApp.youtuber', ['ngRoute'])

  .config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/youtuber', {
      templateUrl: 'simplePages/youtuber.html',
      controller: 'youtuberCtrl'
    });
  }])

  .controller('youtuberCtrl', [function() {}]);

angular.module('myApp.zfest', ['ngRoute'])
  .config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/zfest', {
      templateUrl: 'simplePages/zfest.html',
      controller: 'zfestCtrl'
    });
  }])

  .controller('zfestCtrl', [function() {}]);




angular.module('myApp.zfest', ['ngRoute'])
  .config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/zfest', {
      templateUrl: 'simplePages/zfest.html',
      controller: 'zfestCtrl'
    });
  }])

  .controller('zfestCtrl', [function() {}]);
angular.module('myApp.fishSchool', ['ngRoute'])
  .config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/fishSchool', {
      templateUrl: 'simplePages/fishSchool.html',
      controller: 'fishSchoolCtrl'
    });
  }])
  .controller('fishSchoolCtrl', [function() {}]);
	
angular.module('myApp.fishSchool', ['ngRoute'])
  .config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/fishSchool', {
      templateUrl: 'simplePages/fishSchool.html',
      controller: 'fishSchoolCtrl'
    });
  }])
  .controller('fishSchoolCtrl', [function() {}]);
	
angular.module('myApp.spliceworkshop', ['ngRoute'])
  .config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/spliceworkshop', {
      templateUrl: 'simplePages/spliceworkshop.html',
      controller: 'spliceworkshopCtrl'
    });
  }])
  .controller('spliceworkshopCtrl', [function() {}]);
	
angular.module('myApp.menu', ['ngRoute'])
  .config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/menu', {
      templateUrl: 'simplePages/menu.html',
      controller: 'menuCtrl'
    });
  }])
  .controller('menuCtrl', [function() {}]);
	
angular.module('myApp.cyberworm', ['ngRoute'])
  .config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/cyberworm', {
      templateUrl: 'simplePages/cyberworm.html',
      controller: 'cyberwormCtrl'
    });
  }])
  .controller('cyberwormCtrl', [function() {}]);
	
angular.module('myApp.uglycry', ['ngRoute'])
  .config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/uglycry', {
      templateUrl: 'simplePages/uglycry.html',
      controller: 'uglycryCtrl'
    });
  }])
  .controller('uglycryCtrl', [function() {}]);
	
angular.module('myApp.contactlite', ['ngRoute'])
  .config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/contactlite', {
      templateUrl: 'simplePages/contactlite.html',
      controller: 'contactliteCtrl'
    });
  }])
  .controller('contactliteCtrl', [function() {}]);
	
angular.module('myApp.thereandbackam', ['ngRoute'])
  .config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/thereandbackam', {
      templateUrl: 'simplePages/thereandbackam.html',
      controller: 'thereandbackamCtrl'
    });
  }])
  .controller('thereandbackamCtrl', [function() {}]);
	
angular.module('myApp.musicThatSoundsGood', ['ngRoute'])
  .config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/musicThatSoundsGood', {
      templateUrl: 'simplePages/musicThatSoundsGood.html',
      controller: 'musicThatSoundsGoodCtrl'
    });
  }])
  .controller('musicThatSoundsGoodCtrl', [function() {}]);
	
angular.module('myApp.bmcde', ['ngRoute'])
  .config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/bmcde', {
      templateUrl: 'simplePages/bmcde.html',
      controller: 'bmcdeCtrl'
    });
  }])
  .controller('bmcdeCtrl', [function() {}]);
	
angular.module('myApp.WeGrowTogether', ['ngRoute'])
  .config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/WeGrowTogether', {
      templateUrl: 'simplePages/WeGrowTogether.html',
      controller: 'WeGrowTogetherCtrl'
    });
  }])
  .controller('WeGrowTogetherCtrl', [function() {}]);
	
angular.module('myApp.ten', ['ngRoute'])
  .config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/ten', {
      templateUrl: 'simplePages/ten.html',
      controller: 'tenCtrl'
    });
  }])
  .controller('tenCtrl', [function() {}]);
	
angular.module('myApp.groundwindow', ['ngRoute'])
  .config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/groundwindow', {
      templateUrl: 'simplePages/groundwindow.html',
      controller: 'groundwindowCtrl'
    });
  }])
  .controller('groundwindowCtrl', [function() {}]);
	
angular.module('myApp.inprogress', ['ngRoute'])
  .config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/inprogress', {
      templateUrl: 'simplePages/inprogress.html',
      controller: 'inprogressCtrl'
    });
  }])
  .controller('inprogressCtrl', [function() {}]);
	
angular.module('myApp.cloudCollage', ['ngRoute'])
  .config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/cloudCollage', {
      templateUrl: 'simplePages/cloudCollage.html',
      controller: 'cloudCollageCtrl'
    });
  }])
  .controller('cloudCollageCtrl', [function() {}]);
	
angular.module('myApp.nebulousEpiphanies', ['ngRoute'])
  .config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/nebulousEpiphanies', {
      templateUrl: 'simplePages/nebulousEpiphanies.html',
      controller: 'nebulousEpiphaniesCtrl'
    });
  }])
  .controller('nebulousEpiphaniesCtrl', [function() {}]);
	
angular.module('myApp.databending', ['ngRoute'])
  .config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/databending', {
      templateUrl: 'simplePages/databending.html',
      controller: 'databendingCtrl'
    });
  }])
  .controller('databendingCtrl', [function() {}]);
	
angular.module('myApp.soundmachinesound', ['ngRoute'])
  .config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/soundmachinesound', {
      templateUrl: 'simplePages/soundmachinesound.html',
      controller: 'soundmachinesoundCtrl'
    });
  }])
  .controller('soundmachinesoundCtrl', [function() {}]);
	
angular.module('myApp.attentionMeditation', ['ngRoute'])
  .config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/attentionMeditation', {
      templateUrl: 'simplePages/attentionMeditation.html',
      controller: 'attentionMeditationCtrl'
    });
  }])
  .controller('attentionMeditationCtrl', [function() {}]);
	
angular.module('myApp.zinetude', ['ngRoute'])
  .config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/zinetude', {
      templateUrl: 'simplePages/zinetude.html',
      controller: 'zinetudeCtrl'
    });
  }])
  .controller('zinetudeCtrl', [function() {}]);
	
angular.module('myApp.purplegreen', ['ngRoute'])
  .config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/purplegreen', {
      templateUrl: 'simplePages/purplegreen.html',
      controller: 'purplegreenCtrl'
    });
  }])
  .controller('purplegreenCtrl', [function() {}]);
	