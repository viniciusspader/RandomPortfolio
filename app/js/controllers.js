'use strict'

function SettingsController($scope) {
  $scope.settings = [];

  function Setting(ativos, carteiras) {
    // todo: add an index
    this.qtAtivos = ativos;
    this.qtCarteiras = carteiras;
  };

  $scope.removeSetting = function (setting) {
    $scope.settings.splice($scope.settings.indexOf(setting), 1);
  };

  $scope.addSetting = function (ativos, carteiras) {
    var newSetting = new Setting(ativos, carteiras);
    $scope.settings.push(newSetting);
  };

  $scope.getSettings = function () {
    return $scope.settings;
  };

};

function PortfolioController($scope) {

  function getSettings() {
    alert("Trigged");
    return SettingsController.getSettings();
  };

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
    //var settings = getSettings();
    var settings = [
      {"qtAtivos":"2", "qtCarteiras":"1"}
    ];
    for (var i = 0; i < settings.length; i++) {
      for (var i2 = 0; i2 < settings[i].qtCarteiras ; i2++) {
        var newGroup = createAssetGroup(settings[i].qtAtivos);
        // todo: create a validation for non repeated groups
        $scope.portfolio.push(newGroup);
      }
    }
  };

};