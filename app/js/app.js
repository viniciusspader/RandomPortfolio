var RandomPortfolio = angular.module('RandomPortfolio', []);

RandomPortfolio.controller(
                "SettingsController",
                function ($scope, settingsModel) {
  
  $scope.settings = settingsModel.settings;
  $scope.ativos = 1;
  $scope.carteiras = 1;

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

  $scope.addSetting = function () {
    settingsModel.addSetting($scope.ativos, $scope.carteiras);
    $scope.createPortfolio();
  };

  $scope.removeSetting = function (setting) {
    settingsModel.removeSetting(setting);
    $scope.createPortfolio();
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

  this.settings = [];

  function Setting(ativos, carteiras) {
    // todo: add an index
    this.qtAtivos = ativos;
    this.qtCarteiras = carteiras;
  };

  this.removeSetting = function (setting) {
    this.settings.splice(this.settings.indexOf(setting), 1);
  };

  this.addSetting = function (ativos, carteiras) {
    var newSetting = new Setting(ativos, carteiras);
    this.settings.push(newSetting);
  };

});