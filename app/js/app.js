var RandomPortfolio = angular.module('RandomPortfolio', []);

RandomPortfolio.controller(
                "PortfolioController",
                function ($scope) {
  
  $scope.settings = [];
  $scope.ativos = 1;
  $scope.carteiras = 1;

  function Setting() {
    // todo: add an index
    this.qtAtivos = $scope.ativos;
    this.qtCarteiras = $scope.carteiras;
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

  $scope.addSetting = function () {
    var newSetting = new Setting($scope.ativos, $scope.carteiras);
    $scope.settings.push(newSetting);
    $scope.createPortfolio();
  };

  $scope.removeSetting = function (setting) {
    $scope.settings.splice($scope.settings.indexOf(setting), 1);
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

  $scope.exportPortfolio = function () {
    var data = $scope.portfolio;
    var csvContent = "data:text/csv;charset=utf-8,";
    data.forEach(function(infoArray, index){

    dataString = infoArray.join(";");
    csvContent += index < infoArray.length ? dataString + "\n" : dataString;

    var encodedUri = encodeURI(csvContent);

    var link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "portfolio.csv");
    link.click(); // This will download the data file named "my_data.csv"

}); 
  };

});