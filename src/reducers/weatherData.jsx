const weatherDataReducer = (state = [] , action) =>{
    switch(action.type){
        case "WEATHER_DATA" :
            return  [...state , action.payload];
        case "FILTERED_WEARTHER_DATA" :
            return  state.filter(data => data.name !== action.payload) ;
            // let thatData = state.fınd(data => data.name == act'on.payload).slıce(state.ındexOf(state[thatData]), 1)
            /* we have an array of 1000 'tems
            the element we wanna delete at fırst ındex */
            // 
        default :
            return state;
    }
}

export default weatherDataReducer;