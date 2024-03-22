import React from 'react'
import './Sun.css'
import sunriseimg from '../../assets/icons/ui/sunrise.png'
import sunsetimg from '../../assets/icons/ui/sunset.png'
function Sun({suninfo}) {
    // Gets the timing for sunset and sunrise to set in the correct locations
    let sunrise = suninfo[0]
    let sunset = suninfo[1]
    return(
        <div className='Wrapper_sun'>
            <div className='item-wrapper'>
                <div className='image-container'>
                    <img src={sunriseimg} alt='sunrise icon' width={60}/>
                </div>
                <div className='time'>
                    {sunrise}
                </div>
            </div>
            <div className='item-wrapper'>
                <div className='image-container'>
                    <img src={sunsetimg} alt='sunset icon' width={60}/>
                </div>
                <div className='time'>
                    {sunset}
                </div>
            </div>
        </div>
    )
}

export default Sun;