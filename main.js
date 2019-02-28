const inquirer = require("inquirer");
const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
var xhr = new XMLHttpRequest();

function fuckTest() {
    xhr.open("GET", "http://foaas.com/awesome/:eric", true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState != 4 || xhr.status != 200) return;
        console.log(xhr.response);
    };
    
    console.log("something worked");

}

fuckTest();