export const cityData = (data) =>{
    return{
        type:"CITIES_DATA",
        payload:data
    }
}

export const weatherData = (data) =>{
    return{
        type:"WEATHER_DATA",
        payload:data
    }
}

export const filteredWeatherData = (data) =>{
    return{
        type:"FILTERED_WEARTHER_DATA",
        payload:data
    }
}

export const imagesData = (data) =>{
    return{
        type:"IMAGES_DATA",
        payload:data
    }
}

export const searchedCities = (data) =>{
    return{
        type:"NEW_CITIES_DATA",
        payload:data
    }
}

export const inputValue = (data) =>{
    return{
        type:"INPUT_VALUE",
        payload:data
    }
}


export const filteredCitiesData = (data) =>{
    return{
        type:"FILTERED_CITIES",
        payload:data
    }
}
