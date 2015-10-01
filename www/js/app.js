// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var  app = angular.module('swiftLocation', ['ionic'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs).
    // The reason we default this to hidden is that native apps don't usually show an accessory bar, at
    // least on iOS. It's a dead giveaway that an app is using a Web View. However, it's sometimes
    // useful especially with forms, though we would prefer giving the user a little more room
    // to interact with the app.
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if (window.StatusBar) {
      // Set the statusbar to use the default style, tweak this to
      // remove the status bar on iOS or change it to use white instead of dark colors.
      StatusBar.styleDefault();
    }
  });
});

app.controller('MainCtrl', function($scope) {
  $scope.LocationServices = false;
  $scope.records = [];

  $scope.addItems = function(locRecords) {
    console.log('callback with '+locRecords.length+' records.')
    for (var i = 0; i < locRecords.length; i++) {
      console.log('parsing '+locRecords[i])
      $scope.records.push(JSON.parse(locRecords[i]));
      console.log('there are '+$scope.records.length+' in records');
    }
    $scope.$apply();
  }

  $scope.SaveSettings = function() {
    alert('Settings have been saved');
  }

  $scope.StartLocationServices = function() {
    swiftLocation.startLocationServices();
    $scope.LocationServices = true;
  };
  
  $scope.StopLocationServices = function() {
    swiftLocation.stopLocationServices();
    $scope.LocationServices = false;
  };

  $scope.SetLocationServices = function() {
      swiftLocation.getLocationRecords($scope.addItems);
  };
});
