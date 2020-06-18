import citiesDataReducer from "./citiesData.jsx";
import weatherDataReducer from "./weatherData.jsx";
import imagesDataReducer from "./imagesData.jsx";
import searchedCitiesDataReducer from "./searchedCitiesData.jsx";
import inputValueReducer from "./inputValue.jsx";
import filteredCitiesDataReducer from "./filteredCitiesData";
import { combineReducers } from "redux";

const allReducers = combineReducers({
  weatherDataReducer,
  imagesDataReducer,
  citiesDataReducer,
  searchedCitiesDataReducer,
  inputValueReducer,
  filteredCitiesDataReducer,
});

export default allReducers;
