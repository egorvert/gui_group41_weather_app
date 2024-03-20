import React from 'react'
import './Sun.css'
import sunriseimg from '../../assets/icons/ui/sunrise.png'
import sunsetimg from '../../assets/icons/ui/sunset.png'
function Sun({suninfo}) {
    //gets the timing fopr sunset and sunrise to set in the correct locations
    let sunrise = suninfo[0]
    let sunset = suninfo[1]
    return(
        
        <div className='Wrapper_sun'>
            
            <div className='Wrapper-left'>
                <div className='Top'>
                    <img src={sunriseimg} alt='sunrise icon'/>
                </div>
                <div className='Sunrise-Time'>
                    {sunrise}
                </div>
            </div>
            <div className='Wrapper-right'>
                <div className='Top'>
                    <img src={sunsetimg} alt = 'sunset icon'/>
                </div>
                <div className='Sunset-Time'>
                    {sunset}
                </div>
            </div>
        </div>
    )
}

export default Sun;