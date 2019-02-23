/**
 *  WELCOME, LOCATION and WEATHER functions
 */

//check if there is user name in the localstorage, if not, set it
var user;
if (!localStorage.name) {
    var name = prompt('It seems you\'re visiting for the first time. May I know your name?');
    localStorage.setItem('name', name);
    user = name;
} else {
    user = localStorage.name;
}

//starting function to get location by IP address and call the weather functions 
function getLocationByIP(user, dom1, dom2, callback) {
    dom1.html('<p>Loading location...</p>')
    $.getJSON('http://ip-api.com/json/', (data) => {
        console.log(data);
        dom1.html(`
            <h1>Hi ${user}!</h1>
            <p>You seem to be in <span class="emp">${data.city}</span>.</p> 
            <p class="separator"></p>
            <p>Today it's <span class="emp">${moment().format('dddd, YYYY MMMM Do')}</span>.</p>
            <p class="separator"></p> `);
        callback(data, dom2); //getWeather()
    })
}

//function to get weather from DarkSky API via my PHP on the server and call the displaying function
function getWeather(loc, dom2) {
    var key = keys.weatherKey; //from separate js file 
    var cors = 'https://cors-anywhere.herokuapp.com/'; //if needed
    dom2.html('<p>Fetching weather data...</p>');
    $.getJSON(`http://ptkin.net/start/php/weather.php?lat=${loc.lat}&lon=${loc.lon}&key=${key}`, (data) => {
        console.log(data);
        showWeather(data, dom2);
    })
}

//function to display the weather data (and call function to determine wind data)
function showWeather(data, dom2) {
    var andOrBut = data.currently.temperature !== data.currently.apparentTemperature ? 'but it' : 'and it also'
    var html = `
    <p>The weather is <span class="emp">${data.currently.summary}</span>, temperature is <span class="emp">${Math.round(data.currently.temperature)} &degC</span>, ${andOrBut} feels like <span class="emp">${Math.round(data.currently.apparentTemperature)} &degC</span>. ${windData(data)}</p>
    <p class="separator"></p>
    <p>They say it's gonna be <span class="emp">${data.daily.data[0].summary}</span></p>
    `
    dom2.html(html);
}

//function to determine wind data by it's speed and bearing
function windData(data) {
    var wSpeed = data.currently.windSpeed;
    var wBearing = data.currently.windBearing;   
    var wDir = '';

    if (wSpeed > 0) {
        if (wBearing == 0) {wDir = 'North';}
        else if (wBearing > 0 && wBearing < 90) {wDir = 'Northeast';}
        else if (wBearing == 90) {wDir = 'East';}
        else if (wBearing > 90 && wBearing < 180) {wDir = 'Southeast';}
        else if (wBearing == 180) {wDir = 'South';}
        else if (wBearing > 180 && wBearing < 270) {wDir = 'Southwest';}
        else if (wBearing == 270) {wDir = 'West';}
        else if (wBearing > 270 && wBearing < 360) {wDir = 'Northwest';}
        return `The wind speed is <span class="emp">${Math.round(wSpeed)} m/s</span> and it\'s from the <span class="emp">${wDir}</span>.`
        
    } else {
        return 'Fortunately it\'s <span class="emp">not windy</span> today.'
    }
}


