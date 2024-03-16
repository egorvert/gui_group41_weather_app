import React from 'react'
import SearchBar from '../searchBar/SearchBar';
import Sun from '../Sunset-Sunrise/Sun';
import './TopBar.css'



function TopBar({lonlat}){

    
    lonlat = lonlat
    return(
        <div className='Wrapper_Top'>
            <div className='Search'>
                <SearchBar lonlat={lonlat}/>
            </div>
            <div className='Sun'>
                <Sun lonlat={lonlat}/>
            </div>
            
        </div>
    )
}

export default TopBar;