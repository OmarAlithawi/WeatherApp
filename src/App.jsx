import React from 'react';
import Search from './components/Search';
import AutoSearchRender from './components/AutoSearchRender';
import Fetch from './components/Fetch.jsx'
import './App.css'

import Card from './components/Card'

export default function App() {
    

    return (
        <div className="weatherApp">
           <Search />
            <AutoSearchRender />
            <Fetch />
            <Card />
        </div>
    )
}
