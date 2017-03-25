angular.module('app.routes', ['ionicUIRouter'])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider



      .state('cameraTabDefaultPage', {
    url: '/page2',
    templateUrl: 'templates/cameraTabDefaultPage.html',
    controller: 'cameraTabDefaultPageCtrl'
  })

  .state('home.currentBills', {
    url: '/page3',
    views: {
      'tab1': {
        templateUrl: 'templates/currentBills.html',
        controller: 'currentBillsCtrl'
      }
    }
  })

  /*
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='home.payNow'
      2) Using $state.go programatically:
        $state.go('home.payNow');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /page1/tab1/page4
      /page1/tab3/page4
  */
  .state('home.payNow', {
    url: '/page4',
    views: {
      'tab1': {
        templateUrl: 'templates/payNow.html',
        controller: 'payNowCtrl'
      },
      'tab3': {
        templateUrl: 'templates/payNow.html',
        controller: 'payNowCtrl'
      }
    }
  })

  .state('home', {
    url: '/page1',
    templateUrl: 'templates/home.html',
    abstract:true
  })

  .state('signup', {
    url: '/page5',
    templateUrl: 'templates/signup.html',
    controller: 'signupCtrl'
  })

  .state('home.profile', {
    url: '/page6',
    views: {
      'tab2': {
        templateUrl: 'templates/profile.html',
        controller: 'profileCtrl'
      }
    }
  })

$urlRouterProvider.otherwise('/page5')



});
