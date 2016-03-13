//HOme Controller
angular.module('sssapp').controller('homesctrl', function ($scope) {
  $scope.name = "will";
});

//T-SHirt COnrtroller
angular.module('sssapp').controller('shirtctrl', function ($scope, $http) {

  //  cars ajax call from json
  $http.get("json/tshirt.json").then(function (response) {
    $scope.shirts = response.data.tshirts;
  });

});

angular.module('sssapp').controller('shoectrl', function ($scope, $http) {

    //  cars ajax call from json
    $http.get("json/footwear.json").then(function (response) {
      $scope.shoes = response.data.Allshoes;
    });
});

angular.module('sssapp').controller('accessctrl', function ($scope, $http) {

  //  cars ajax call from json
  $http.get("json/access.json").then(function (response) {
    $scope.accessories = response.data.Allaccess;
  });


});