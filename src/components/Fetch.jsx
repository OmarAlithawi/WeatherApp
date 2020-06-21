import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { weatherData, cityData, imagesData } from "../actions";
import { API_KEY_WEATHER, API_KEY_IMAGE } from "../const.js";
const Fetch = () => {
  const dispatch = useDispatch();
  const event = useSelector((state) => state.inputValueReducer);

  const fetchWeatherTemperature = async (urlTemperature, urlImage) => {
    const temperature = await fetch(urlTemperature);
    const image = await fetch(urlImage);
    let temperatureData = await temperature.json();
    let imageData = await image.json();
    dispatch(imagesData(imageData));
    dispatch(weatherData(temperatureData));
  };

  const fetchCitiesNames = async (urlCities) => {
    const cities = await fetch(urlCities);
    const citiesData = await cities.json();
    dispatch(cityData(citiesData));
  };

  const constructUrls = (city) => {
    const urlTemperature = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY_WEATHER}`;
    const urlImage = `https://pixabay.com/api/?key=${API_KEY_IMAGE}&q=${city}&image_type=photo`;
    fetchWeatherTemperature(urlTemperature, urlImage);
  };

  const constructCitiesUrl = () => {
    const urlCities =
      "https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json";
    fetchCitiesNames(urlCities);
  };

  
  useEffect(() => {
    constructCitiesUrl();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <div>{event && constructUrls(event)}</div>;
};

export default Fetch;
