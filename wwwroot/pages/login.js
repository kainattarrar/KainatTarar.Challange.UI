app.controller("LoginController", function ($scope, $http) {

    $scope.Login = function () {
        $http({
            method: "POST",
            url: apiPath + "/User/Login",
            data: $scope.LoginUser
        }).then(function (d) {
            if (d.data.success) {
               
                localStorage.setItem("wbtkn", d.data.data.item2);
                window.location.href = "/Home/Index";
            }
        }).catch(function (e) {
            ErrorHandling(e);
        })
    }

})