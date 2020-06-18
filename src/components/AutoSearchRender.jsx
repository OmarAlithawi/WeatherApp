import React from "react";
import { useSelector, useDispatch } from "react-redux";

export default function AutoSearchRender() {
  const citiesNames = useSelector((state) => state.searchedCitiesDataReducer);

  return (
    <div>
      {citiesNames &&
        citiesNames.map((city) => {
          return (
            <datalist id="autocomplete">
              <option>{city.city}</option>
              <option>{"State : " + city.state}</option>
              <option>{"Rank :" + city.rank}</option>
              <option>{"Population : " + city.population}</option>
            </datalist>
          );
        })}
    </div>
  );
}
