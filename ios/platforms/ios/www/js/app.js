// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})


.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  // setup an abstract state for the tabs directive
    .state('tab', {
    cache: false,
    url: '/tab',
    abstract: true,
    templateUrl: 'templates/tabs.html'
  })

  // Each tab has its own nav history stack:
  .state('tab.login', {
    cache: false,
    url: '/login',
    views: {
      'tab-dash': {
        templateUrl: 'templates/login.html',
        controller: 'formCtrl'
      }
    }
  })  


  .state('tab.main', {
    url: '/main/:mid',
    cache: false,
    views: {
      'tab-dash': {
        templateUrl: 'templates/main.html',
        controller: 'mainCtrl'
      }
    }
  })  


  .state('tab.member_andLog', {
    cache: false,
    url: '/member_andLog/:mid',
    views: {
      'tab-dash': {
        templateUrl: 'templates/member_andLog.html',
        controller: 'memberAndLogCtrl'
      }
    }
  })  


  .state('tab.member_log', {
    cache: false,
    url: '/member_log',
    views: {
      'tab-dash': {
        templateUrl: 'templates/member_log.html',
        controller: 'memberLogCtrl'
      }
    }
  })  

  .state('tab.water_life', {
    cache: false,
    url: '/water_life',
    views: {
      'tab-dash': {
        templateUrl: 'templates/water_life.html',
        controller: 'waterLife'
      }
    }
  })  

  .state('tab.water_life_detail', {
    cache: false,
    url: '/water_life_detail/:id',
    views: {
      'tab-dash': {
        templateUrl: 'templates/water_life_detail.html',
        controller: 'waterLifeDetail'
      }
    }
  })  

  .state('tab.score_shop_detail', {
    cache: false,
    url: '/score_shop_detail/:id',
    views: {
      'tab-dash': {
        templateUrl: 'templates/score_shop_detail.html',
        controller: 'waterLifeDetail'
      }
    }
  })  

  .state('tab.member_order', {
    cache: false,
    url: '/member_order',
    views: {
      'tab-dash': {
        templateUrl: 'templates/member_order.html',
        controller: 'memberOrder'
      }
    }
  })  

  .state('tab.member_order_all', {
    cache: false,
    url: '/member_order_all/:typeid/:state',
    views: {
      'tab-dash': {
        templateUrl: 'templates/member_order_all.html',
        controller: 'memberOrderAll'
      }
    }
  })  



  .state('tab.member_cart', {
    cache: false,
    url: '/member_cart',
    views: {
      'tab-dash': {
        templateUrl: 'templates/member_cart.html',
        controller: 'memberCart'
      }
    }
  })  

  .state('tab.member_collect', {
    cache: false,
    url: '/member_collect',
    views: {
      'tab-dash': {
        templateUrl: 'templates/member_collect.html',
        controller: 'memberCollect'
      }
    }
  }) 



  .state('tab.member_feedback', {
    cache: false,
    url: '/member_feedback',
    views: {
      'tab-dash': {
        templateUrl: 'templates/member_feedback.html',
        controller: 'memberFeedBack'
      }
    }
  }) 


  .state('tab.member', {
    cache: false,
    url: '/member',
    views: {
      'tab-dash': {
        templateUrl: 'templates/member.html',
        controller: 'member'
      }
    }
  }) 


  .state('tab.member_edit', {
    cache: false,
    url: '/member_edit',
    views: {
      'tab-dash': {
        templateUrl: 'templates/member_edit.html',
        controller: 'memberEdit'
      }
    }
  }) 

  .state('tab.member_pwd', {
    cache: false,
    url: '/member_pwd',
    views: {
      'tab-dash': {
        templateUrl: 'templates/member_pwd.html',
        controller: 'memberPwd'
      }
    }
  }) 


  .state('tab.reg', {
    cache: false,
    url: '/reg',
    views: {
      'tab-dash': {
        templateUrl: 'templates/reg.html',
        controller: 'reg'
      }
    }
  }) 

  .state('tab.water_ring', {
    cache: false,
    url: '/water_ring/:typeid',
    views: {
      'tab-dash': {
        templateUrl: 'templates/water_ring.html',
        controller: 'waterRing'
      }
    }
  }) 

  .state('tab.water_ring_detail', {
    cache: false,
    url: '/water_ring_detail/:id',
    views: {
      'tab-dash': {
        templateUrl: 'templates/water_ring_detail.html',
        controller: 'waterRingDetail'
      }
    }
  }) 


  .state('tab.score_shop', {
    cache: false,
    url: '/score_shop/:typeid',
    views: {
      'tab-dash': {
        templateUrl: 'templates/score_shop.html',
        controller: 'scoreShopList'
      }
    }
  }) 



 

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/login');

});
