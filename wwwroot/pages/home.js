app.controller("HomeController", function ($scope, $http) {

    $scope.GeetingName = "";
    $scope.returnData = "";
    angular.element(document).ready(function () {
        $scope.CheckUserSession();
    })

    $scope.CheckUserSession = function () {
        $scope.ActiveUser = GetUser();
        if ($scope.ActiveUser.token == null) {
            Logout();
        }
    };

    $scope.GetGeeting = function () {
      
            $http({
                method: "GET",
                url: apiPath + "/User/GetGreeting?name=" + $scope.GeetingName,
                headers: GetHeader(),
               
            }).then(function (d) {
                if (d.data.success) {
                    $scope.returnData = d.data.message;
                }
            }).catch(function (e) {
                ErrorHandling(e);
            })
        
    };



});