import React from 'react';
import Search from './components/Search';
import AutoSearchRender from './components/AutoSearchRender';
import Fetch from './components/Fetch.jsx'
import './App.css'

import CardList from './components/CardList'

export default function App() {
    

    return (
        <div className="weatherApp">
           <Search />
            <AutoSearchRender />
            <CardList />
            <Fetch />
        </div>
    )
}
