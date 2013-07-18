var RandomPortfolio = angular.module('RandomPortfolio', []);

/*
RandomPortfolio.config(
                function ($routeProvider) {
  
  $routeProvider
  .when('/',
    {
      controller:  'SettingsController',
      templateUrl: 'index.html'
    }
  )
  .otherwise(
    {
      redirectTo: '/'
    }
  )
});
*/

RandomPortfolio.controller(
                "SettingsController",
                function ($scope, settingsModel) {
  
  $scope.settings = settingsModel;

  $scope.addSetting = function (ativos, carteiras) {
    settingsModel.addSetting(ativos, carteiras);
  };

  $scope.removeSetting = function (setting) {
    settingsModel.removeSetting(setting);
  };

});

RandomPortfolio.controller(
                "PortfolioController",
                function ($scope, settingsModel) {

  $scope.settings = settingsModel;

  function createAssetGroup(group_length, group) {
    var groupStorage = group || [];
    if (groupStorage.length < group_length) {
      // todo: create a method to create a new asset
      var newAsset = Math.floor(Math.random() * 61);
      if (groupStorage.indexOf(newAsset) < 0) {
        groupStorage.push(newAsset);
      }
      createAssetGroup(group_length, groupStorage);
    }
    return groupStorage;
  };

  $scope.createPortfolio = function () {
    $scope.portfolio = [];
    var settings = $scope.settings;
    for (var i = 0; i < settings.length; i++) {
      for (var i2 = 0; i2 < settings[i].qtCarteiras ; i2++) {
        var newGroup = createAssetGroup(settings[i].qtAtivos);
        // todo: create a validation for non repeated groups
        $scope.portfolio.push(newGroup);
      }
    }
  };                                              
});

RandomPortfolio.service('settingsModel', function () {

  var settings = [{"qtAtivos":"2", "qtCarteiras":"2"}];

  function Setting(ativos, carteiras) {
    // todo: add an index
    this.qtAtivos = ativos;
    this.qtCarteiras = carteiras;
  };

  this.removeSetting = function (setting) {
    settings.splice(settings.indexOf(setting), 1);
  };

  this.addSetting = function (ativos, carteiras) {
    var newSetting = new Setting(ativos, carteiras);
    settings.push(newSetting);
  };

});