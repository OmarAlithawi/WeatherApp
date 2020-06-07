const filteredCitiesReducer = (state = [] , action) =>{
    switch(action.type){
        case "FILTERED_CITIES" :
            return state = action.payload;
        default :
            return state;
    }
}

export default filteredCitiesReducer;