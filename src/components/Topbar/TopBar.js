import React from 'react'
import SearchBar from '../searchBar/SearchBar';
import Sun from '../Sunset-Sunrise/Sun';
import './TopBar.css'
import {useState, useEffect} from 'react';



function TopBar(){

    const [location, setlocation] = useState()

    useEffect(() => {
        const updatelocation = async () => {
            setlocation()
        };
    }, [])


    return(
        <div className='Wrapper'>
            <div className='Search'>
                <SearchBar/>
            </div>
            <div className='Sun'>
                <Sun/>
            </div>
            
        </div>
    )
}

export default TopBar;