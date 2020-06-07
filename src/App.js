import React, { Component } from 'react';
import './App.css';
import Card from './components/Card.jsx'
import Search from './components/Search.jsx'
import LeafSearchRender from './components/LeafSearchRender.jsx'

export class App extends Component{

  constructor(){
    super()
    this.state = {
      data:[],
      images:[],
      cities:[],
      newCities:[]
    }
  }

  fetchWeather = async (urlTemp , urlImage) =>{
    const temp = await fetch(urlTemp);
    const image = await fetch(urlImage);
    let res = await temp.json();
    let res2 = await image.json();
    this.setState({
      data:res,
      images:res2
    })
   
    return res
  }

  fetchCities = async (urlCities) => {
    const cities = await fetch(urlCities)
    const res = await cities.json()
    this.setState({
      cities: res
    })
    console.log(this.state.cities)
  }

   construct = (city) =>{
    const urlTemp = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=3c52d516abbabc6e719907de6cd61344`
    const urlImage = `https://pixabay.com/api/?key=16722547-67cf654ed55a7d7c4fad8def1&q=${city}&image_type=photo`
    this.fetchWeather(urlTemp , urlImage)
  }

  constructCities = () => {
    const urlCities = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';
    this.fetchCities(urlCities)
  }

  componentDidMount(){
    this.constructCities();
  }

  handleLeafSearch = (word , cities) => {
    return cities.filter(city => {
      const regex = new RegExp(word , "gi");
      return city.city.match(regex) 
    })
  }

  display = (e) => {
    const matchedCities = this.handleLeafSearch(e.target.value , this.state.cities);
    
    
    return this.setState({
        newCities:matchedCities
    })
  
  }


  handleSubmit = (e) =>{
    e.preventDefault()
    let x =e.target[0]
    console.log(x.value)
    this.construct(x.value);
 }
  
 
   
  render(){
  return (
    <div className="weatherApp">
      <Search submit = {this.handleSubmit}  display = {this.display}/>
      <LeafSearchRender data ={this.state.newCities} />
      <Card  weatherData = {this.state.data} img = {this.state.images}/>

    </div>
  );
}
}


export default App;

/**
 * // component to handle time according to the city 
*/