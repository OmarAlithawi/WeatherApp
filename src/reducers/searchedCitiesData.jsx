const searchedCitiesDataReducer = (state = [] , action) =>{
    switch(action.type){
        case "NEW_CITIES_DATA" :
            return state = action.payload;
        default :
            return state;
    }
}

export default searchedCitiesDataReducer;
