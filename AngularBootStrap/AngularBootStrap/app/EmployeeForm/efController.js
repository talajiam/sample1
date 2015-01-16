angularFormsApp.Controller('efController',
function efController($scope, efService) {
    $scope.employee = efService.employee;
});