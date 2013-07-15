function SettingsController($scope) {
  $scope.settings = [];

  function setting(ativos, carteiras) {
    this.qtAtivos = ativos;
    this.qtCarteiras = carteiras;
  }

  $scope.addSetting = function() {
    $scope.settings.push(new setting($scope.settings.qtAtivos, $scope.settings.qtCarteiras));
  }
}