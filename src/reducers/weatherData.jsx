const weatherDataReducer = (state = [] , action) =>{
    switch(action.type){
        case "WEATHER_DATA" :
            return state = action.payload;
        default :
            return state;
    }
}

export default weatherDataReducer;