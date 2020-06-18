import React, { useState } from "react";
import Card from "./Card";
import { useSelector, useDispatch } from "react-redux";
import { filteredWeatherData, filteredCities } from "../actions";

export default function CardList() {
  const dispatch = useDispatch();
  const weatherData = useSelector((state) => state.weatherDataReducer);
  const img = useSelector((state) => state.imagesDataReducer);

  const deleteCard = (name) => {
    dispatch(filteredWeatherData(name));
  };

  const renderCards = (id) => {
    return weatherData.map((data, index) => {
      return (
        <Card weatherData={data} img={img[index]} deleteCard={deleteCard} />
      );
    });
  };

  return (
    <div className="container">
      <div className="row">{renderCards()}</div>
    </div>
  );
}
