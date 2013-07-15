function SettingsController($scope) {
  $scope.settings = [
    {
      "qtAtivos":"2",
      "qtCarteiras":"2"
    },
    {
      "qtAtivos":"3",
      "qtCarteiras":"2"
    }
  ];

  $scope.addSetting = function() {
    $scope.settings.push($scope)
  }
}