 const citiesDataReducer = (state = [] , action) =>{
        switch(action.type){
            case "CITIES_DATA" :
                return state = action.payload;
            default :
                return state;
        }
    }

    export default citiesDataReducer;