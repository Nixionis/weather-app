import domController from "./scripts/domController";

const weatherController = (function createController() {
  const domControl = domController(document);

  function parseWeatherData(weatherData) {
    const weatherForecast = [];

    weatherForecast.push({
      city: weatherData.location.name,
      localtime: weatherData.location.localtime_epoch,
      temp: weatherData.current.temp_c,
      feeltemp: weatherData.current.feelslike_c,
      conditionText: weatherData.current.condition.text,
      conditionCode: weatherData.current.condition.code,
    });

    weatherForecast.push({
      city: weatherData.location.name,
      localtime: weatherData.forecast.forecastday[1].date_epoch,
      maxtemp: weatherData.forecast.forecastday[1].day.maxtemp_c,
      mintemp: weatherData.forecast.forecastday[1].day.mintemp_c,
      conditionText: weatherData.forecast.forecastday[1].day.condition.text,
      conditionCode: weatherData.forecast.forecastday[1].day.condition.code,
    });

    weatherForecast.push({
      city: weatherData.location.name,
      localtime: weatherData.forecast.forecastday[2].date_epoch,
      maxtemp: weatherData.forecast.forecastday[2].day.maxtemp_c,
      mintemp: weatherData.forecast.forecastday[2].day.mintemp_c,
      conditionText: weatherData.forecast.forecastday[2].day.condition.text,
      conditionCode: weatherData.forecast.forecastday[2].day.condition.code,
    });

    domControl.fillCards(weatherForecast);
  }

  async function getWeatherData(cityName) {
    domControl.showLoading();

    const weatherResponse = await fetch(
      `https://api.weatherapi.com/v1/forecast.json?key=43ba231c1eed48d5a9f195216232810&q=${cityName}&days=3&aqi=no&alerts=no`,
      {
        mode: "cors",
      }
    );

    if (!weatherResponse.ok) {
      const errorObject = await weatherResponse.json();
      domControl.ShowSearchError(errorObject.error.message);
      domControl.hideLoading(true);
      return;
    }

    const dataObject = await weatherResponse.json();
    parseWeatherData(dataObject);
    domControl.hideLoading(false);
  }

  domControl.searchInput.addEventListener("keyup", (e) => {
    if (e.key === "Enter" || e.keyCode === 13) {
      if (!e.target.value) {
        domControl.ShowSearchError("Search field is empty");
        return;
      }
      getWeatherData(e.target.value).catch(() =>
        domControl.ShowSearchError("Internet connection error")
      );
    }
  });

  getWeatherData("London").catch(() =>
    domControl.ShowSearchError("Internet connection error")
  );
})();
