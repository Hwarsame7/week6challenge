var citynameEl = document.querySelector("#city-input");
var formEl = document.querySelector("#city-form");
var currentweatherEl = document.querySelector("#weather-info");
var fivedayforecastEl = document.querySelector("#forecast");
var weatherpi = "c382daef54aa85684dcc8bb4f4fefd49";

function formsubmit(e) {
  e.preventDefault();
  var searchcity = citynameEl.value;
  getlocation(searchcity);
}

function getlocation(cityname) {
  var locationurl =
    "http://api.openweathermap.org/geo/1.0/direct?q=" +
    cityname +
    "&appid=" +
    weatherpi;
  fetch(locationurl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      var lat = data[0].lat

    //   getWeather
    });
}

formEl.addEventListener("submit", formsubmit);

function add(a, b) {
  return a + b;
}
var num = 54;
add(13, num);
for (var i = 0; i < 5; i++) {
  console.log("see me five times!");
}
