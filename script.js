
    var city = " ";
    var apiKey = "15d9b2f3d7ba2f7fe0dbe8a9e421a777";

    var requestUrl = "https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${apiKey}";


function current

    function getWeather (city) {
        fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data)