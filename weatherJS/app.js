const weather = new Weather('Boston', 'US');

const ui = new UI();


document.addEventListener('DOMContentLoaded', getWeather);
// weather.changeLocation('Miami', 'US');

function getWeather() {
    weather.getWeather()
        .then(results => {
            ui.paint(results);
        })
        .catch(err => console.log(err));

}