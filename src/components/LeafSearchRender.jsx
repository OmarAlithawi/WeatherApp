import React from 'react'

export default function LeafSearchRender(props) {

    console.log(props.data)
    return (
        
        <div>
            { props.data && props.data.map((city) => { 
                return(
                 <datalist id = "autocomplete">
                    <option>{city.city}</option>
                    <option>{'State : ' + city.state}</option>
                    <option>{'Rank :' + city.rank}</option>
                    <option>{'Population : ' + city.population}</option>
                  </datalist>
                )
                }) 
            }
        </div>
    )
}
