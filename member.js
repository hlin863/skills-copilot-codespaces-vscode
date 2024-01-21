function skillsMember() {
  return {
    restrict: 'E',
    templateUrl: 'views/skillsMember.html',
    controller: 'skillsMemberCtrl',
    controllerAs: 'skillsMemberCtrl',
    bindToController: true,
    scope: {
      member: '='
    }
  };
}