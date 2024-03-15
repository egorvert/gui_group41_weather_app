import React from 'react'
import './SearchBar.css'

function SearchBar(){
    return(
        <div className='Wrapper_search'>
            <div className='SearchBar'>
                <input type="text" placeholder="Search" className='search' />
            </div>
        </div>
    )
}

export default SearchBar;