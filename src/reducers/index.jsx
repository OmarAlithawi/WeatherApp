
import  citiesDataReducer  from './citiesData.jsx' ;
import  weatherDataReducer  from './weatherData.jsx' ;
import  imagesDataReducer  from './imagesData.jsx' ;
import  searchedCitiesDataReducer  from './searchedCitiesData.jsx' ;
import  inputValueReducer  from './inputValue.jsx' ;
import  filteredCitiesReducer from './filteredCities'
import {combineReducers} from 'redux'

const allReducers = combineReducers({
    weatherDataReducer,
    imagesDataReducer,
    citiesDataReducer,
    searchedCitiesDataReducer,
    inputValueReducer,
    filteredCitiesReducer
})

export default allReducers;