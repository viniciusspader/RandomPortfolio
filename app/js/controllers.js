'use strict'

function SettingsController($scope) {
  $scope.settings = [];

  function setting(ativos, carteiras) {
    //this.index = $scope.settings.length;
    this.qtAtivos = ativos;
    this.qtCarteiras = carteiras;
  };

  $scope.removeSetting = function (setting) {
    $scope.settings.splice($scope.settings.indexOf(setting), 1);
  };

  $scope.addSetting = function () {
    $scope.settings.push(new setting($scope.settings.qtAtivos, $scope.settings.qtCarteiras));
  };

  $scope.getSettings = function () {
    return $scope.settings;
  };
};

function PortfolioController($scope) {
  $scope.getSettings = function () {
    return SettingsController.getSettings();
  };

  $scope.settings = $scope.getSettings();

  $scope.portfolio = [];

  function asset() {
    return Math.floor(Math.random()*61)
  }

  function createAssetGroup(group_length) {
    var group = [];
    if (group.length < group_length) {
      group.push(new asset());
      createAssetGroup(group_length);
    }
    return group;
  };

};