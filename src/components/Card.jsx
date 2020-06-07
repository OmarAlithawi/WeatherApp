import React, { Component } from 'react'

const Card = (props) =>  {

       const toCe = () =>{
           return(  <div className="card mt-3 newCard" >
                <img className="card-img-top" src={props.img.hits[0].largeImageURL} alt="Card image cap" />
                <div className="card-body">
                    <h5 className="card-title">{props.weatherData.name}</h5>
                    <p className="card-text">{"Temprture is :"+" "+ Math.round((props.weatherData.main.temp) - 273 )+" " +"C"}</p>
                    <p className="card-text">{"Feels like :"+" "+ Math.round((props.weatherData.main.feels_like) - 273 )+" " +"C"}</p>
                    <a href="#" className="btn btn-primary">More Information</a>
                </div>
            </div>
               
           )
           
        }

   
    
        return (
            <div className = "container">
             {props.weatherData.main ?toCe():null}
            </div>
        )
}


export default Card


/**
 * 
 *   let info = []
            let counter = 0;
            for(let i in this.props.weatherData.main){
                if(counter < 3){ 
                    counter++
              info.push(<p>{(this.props.weatherData.main[i]) - 273 +" " +"C"}</p>)
              console.log(this.props.weatherData.main[i])
            }
            }
 */