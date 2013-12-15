var mainCtrl = function($scope) {
  $scope.users = [
    {"name":"taguchi", "score":52.22},
    {"name":"tanaka", "score":60.22},
    {"name":"yamada", "score":80.22},
    {"name":"hayashi", "score":5.25},
    {"name":"tanahashi", "score":75.15},
    {"name":"yasuda", "score":55.85},
    {"name":"minami", "score":32.8},
    {"name":"yanagi", "score":72.2}
  ];
  $scope.today = new Date();
}

var userItemCtrl = function($scope) {
  $scope.increment = function() {
    $scope.user.score++;
  }
}
