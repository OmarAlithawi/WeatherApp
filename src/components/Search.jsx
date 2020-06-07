import React, { useState } from 'react';
import {useSelector , useDispatch} from 'react-redux'
import {filteredCities , inputValue} from '../actions'

const  Search = () =>  {

  const dispatch = useDispatch();
    // we need handleSubmit and display
  const cities = useSelector(state => state.citiesDataReducer);

    const handleAutoSearch = (word , cities) => {
        const filteredCity =  cities.filter(city => {
          const regex = new RegExp(word , "gi");
          return city.city.match(regex) 
        })

        dispatch(filteredCities(filteredCity))
        return filteredCities;
      }
    
     const  display = (e) => {
        const matchedCities = handleAutoSearch(e.target.value , cities);
      }
    
    const handleSubmit = (e) =>{
      e.preventDefault()
      dispatch(inputValue(e.target[0].value))
    }
        return (
            <div className ="backImg">
            <div className="container">
            <form onSubmit = { (event) => handleSubmit(event)}>
                <div className="form-group">
                <h1 for="formGroupExampleInput">Choose a city</h1>
                <input type="text" className="form-control" list="autocomplete" name ="autocomplete" placeholder="city"  onChange = {e => display(e)}/>
                </div>
            <button  type = "submit" className ="btn btn-primary">Find a city</button>
            </form>
        </div>
        </div>
        )
    
}

export default Search
