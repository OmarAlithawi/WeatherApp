const weatherDataReducer = (state = [] , action) =>{
    switch(action.type){
        case "WEATHER_DATA" :
            return  [...state , action.payload];
        case "FILTERED_WEARTHER_DATA" :
            return  state.filter(data => data.name !== action.payload) ;
        default :
            return state;
    }
}

export default weatherDataReducer;