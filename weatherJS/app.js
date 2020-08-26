const weather = new Weather('Boston', 'US');


document.addEventListener('DOMContentLoaded', getWeather);
// weather.changeLocation('Miami', 'US');

function getWeather() {
    weather.getWeather()
        .then(results => {
            console.log(results);
        })
        .catch(err => console.log(err));

}