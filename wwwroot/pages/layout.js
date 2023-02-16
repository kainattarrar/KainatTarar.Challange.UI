var apiPath = "https://localhost:7270/api";
function GetHeader() {
    return {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem("wbtkn")
    };
}
function ErrorHandling(e) {
    if (e.status == 401) {
        window.location.href = "/Login/Index";
    }
    else if (e.status == 400) {
        alert(e.data.message);
    }
    else {
        alert(e.data.title);
    }
}
function Logout() {
    localStorage.removeItem("wbtkn");
    window.location.href = "/Login/Index";
}
function GetUser() {
    return UserInfo = {
        token: localStorage.getItem("wbtkn")
    };
}
var app = angular.module("ChallangeApp", []);
