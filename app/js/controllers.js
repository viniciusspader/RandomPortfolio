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
};