class Weather {
    constructor(city, country) {
        this.apiKey = '3ad9369f5dd481e8bc0a070cb5745947';
        this.city = city;
        this.country = country;
    }

    async getWeather() {
        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.country}&appid=${this.apiKey}&units=imperial`
        );

        const responseData = await response.json();
        return responseData;
    }

    changeLocation(city, country) {
        this.city = city;
        this.country = country;
    }
}

