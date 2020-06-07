import React, { Component } from 'react'

const  Search = (props) =>  {
    
        return (
            <div className ="backImg">
            <div className="container">
            <form onSubmit = {e => props.submit(e)}>
                <div className="form-group">
                <h1 for="formGroupExampleInput">Choose a city</h1>
                <input type="text" className="form-control" list="autocomplete" name ="autocomplete" placeholder="city"  onChange = {e => props.display(e)}/>
                </div>
            <button  type = "submit" className ="btn btn-primary">Find a city</button>
            </form>
        </div>
        </div>
        )
    
}

export default Search
