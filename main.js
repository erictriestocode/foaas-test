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

const versionURL = "http://foaas.com/version";
const urlOptions = {
    method: 'GET',
    mode: 'no-cors',
    // Accept: 'application/json'
}

//Test for fetch functionality
if (!('fetch' in window)) {
    console.log('Fetch API not found, try including the polyfill');
    // return;
  } else{
      console.log("fetch good to go!")
      document.getElementById('fetchStatus').innerHTML = "Fetch good to go!";
  }
  // We can safely use fetch from now on

//Testing button
function testClick(){
    document.getElementById('results').innerHTML = "FUCK OFF";
}

function clearResults(){
    document.getElementById("results").innerHTML = "";
}

function checkVersion(){
    console.log("version checked!")
    fetch(versionURL,urlOptions)
    .then(function(response){
        console.log("Data Fetched!");
        console.log(response)
  
    })
    .catch(function(error){
        console.log("Shit broke!");
        console.log(error);
    });
}