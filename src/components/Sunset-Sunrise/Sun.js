import React from 'react'
import './Sun.css'
import sunriseimg from '../../assets/icons/ui/sunrise.png'
import sunsetimg from '../../assets/icons/ui/sunset.png'
import { useState, useEffect } from 'react';
import moment from 'moment';    

function Sun({lonlat}) {
    
    let url_backup = ""
    const sunrise_apikey = "6e64a78c03e21e2143da3ea13650b0de"
    const locationlat = lonlat[0]
    const locationlon = lonlat[1]
    let city = lonlat[2]
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=Metric&appid=${sunrise_apikey}`
    const [sunrise, setSunrise] = useState()
    const [sunset, setSunset] = useState()
    console.log(city)
    
    if (typeof locationlat === "number"){
        url_backup = `https://api.openweathermap.org/data/2.5/weather?lat=${locationlat}&lon=${locationlon}&units=Metric&appid=${sunrise_apikey}`
        // url_backup = url
        console.log('3')
    }
    else{
        url_backup = `https://api.openweathermap.org/data/2.5/weather?q=London&units=Metric&appid=${sunrise_apikey}`
    }

    
    
    
    useEffect(() => {
        const fetchData = async () => {
                 let result = await fetch(url)
                 if ((result.status === 404) || (result.status === 400)){
                    console.log('Bad City Name')
                    result = await fetch(url_backup)
                    console.log(url_backup)
                }
                console.log('heee')
                console.log(result)
                result.json().then(json => {
                    console.log("H")
                    setSunrise(moment(json.sys.sunrise*1000).format('HH:mm'))
                    setSunset(moment(json.sys.sunset*1000).format('HH:mm'))
                    console.log(sunrise + '////' )
                })  


            
        }

        fetchData();
    })
    console.log('1')
    
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