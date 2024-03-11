import React from 'react'
import './Sun.css'
import sunriseimg from '../../assets/icons/ui/sunrise.png'
import sunsetimg from '../../assets/icons/ui/sunset.png'
import { useState, useEffect } from 'react';
import moment from 'moment';

function Sun() {

    const [sunrise, setSunrise] = useState()
    const [sunset, setSunset] = useState()

    const sunrise_apikey = "6e64a78c03e21e2143da3ea13650b0de"
    let url = `https://api.openweathermap.org/data/2.5/weather?q=London&units=Metric&appid=${sunrise_apikey}`

    useEffect(() => {
        const fetchData = async () => {
            const result = await fetch(url)
            result.json().then(json => {

                setSunrise(moment(json.sys.sunrise*1000).format('LT'))
                setSunset(moment(json.sys.sunset*1000).format('LT'))
                
            })
        }
        fetchData();
    }, [])

    
    return(
        
        <div className='Wrapper'>
            
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
            {/* {suntime} */}
        </div>
    )
}

export default Sun;