// Main JS file

// CODE FROM FOAAS
// ***************
// GET /version HTTP/1.1
// Host: foaas.com
// Accept: application/json
// User-Agent: PostmanRuntime/7.15.2
// Cache-Control: no-cache
// Postman-Token: efdd2831-ac06-409d-ad94-83acd423f66f,e8bd97f4-1f5e-42cc-85c5-360e857f430f
// Host: foaas.com
// Cookie: __cfduid=db696832490dbcca4b1c3963037a6e1381564970656; i18next=dev
// Accept-Encoding: gzip, deflate
// Connection: keep-alive
// cache-control: no-cache



//Test for fetch functionality
if (!('fetch' in window)) {
    console.log('Fetch API not found, try including the polyfill');
    // return;
} else {
    // console.log("fetch good to go!")
    // document.getElementById('fetchStatus').innerHTML = "Fetch good to go!";
}
// We can safely use fetch from now on

//Testing button
function testClick() {
    console.log("test clicked!");
    document.getElementById('results').innerHTML = "FUCK OFF";
}

function clearResults() {
    console.log("Clear Clicked!");
    document.getElementById("results").innerHTML = "";
    document.getElementById("gifResults").innerHTML = "";
}

function checkVersion() {
    console.log("version checked!")
    fetch("https://cors-anywhere.herokuapp.com/http://foaas.com/version", {
        "method": "GET",
        "headers": {
            // "cookie": "__cfduid=d3ea086c95a883df11226f89fbcd0b0d31566958073; i18next=dev",
            "accept": "application/json"
        }
    })
        .then(response => {
            console.log(response);
            // console.log(responseText);
        })
        .catch(err => {
            document.getElementById("results").innerHTML = err;
            console.log(err);
        });
}

function getGif() {
    url = "https://api.giphy.com/v1/gifs/random?api_key=hjdE9lx9cGidHy5CN2GtAf1oyDZ9nEJN&tag=fuck&rating=R";
    console.log("gif reqested");

    document.getElementById("gifResults").innerHTML = "LOADING";
    
    fetch(url, {
        "method": "GET",
        "headers": {}
    })
        .then(response => {
            return response.json();
        })
        .then(json => {
           
            // console.log(response);
            console.log(json);
            document.getElementById("gifResults").innerHTML = "<img src=" + json.data.images.original.url + ">";
            // console.log(data.data[0])
        })
        .catch(err => {
            console.log(err);
        });
}