import React, { useState } from 'react';
import './sidePrevious.css'
import clear from '../../assets/icons/ui/clear.png'
import cloudy from '../../assets/icons/ui/cloudy.png'
import fog from '../../assets/icons/ui/fog.png'
import heavyrain from '../../assets/icons/ui/heavyrain.png'
import lightrain from '../../assets/icons/ui/lightrain.png'
import night from '../../assets/icons/ui/night.png'
import partcloudy from '../../assets/icons/ui/partcloudy.png'
import snow from '../../assets/icons/ui/snow.png'
import wind from'../../assets/icons/ui/wind.png'
import { useEffect } from 'react';

function PreviousWeatherWidget({pastdays}) {
    let icons = [pastdays[4], pastdays[9], pastdays[14]]
    const [yesterdayimg, setyesterdayimg] = useState(clear)
    const [twodaysimg, settwodaysimg] = useState(clear)
    const [threedaysimg, setthreedaysimg] = useState(clear)
    let img = [yesterdayimg, twodaysimg, threedaysimg]
    
    useEffect(()=>{
        function set_icons(){
            // console.log('entered')

            if ((icons[0] === 'cloudy') || (icons[0] === 'partly-cloudy-day') || (icons[0] === 'partly-cloudy-night')){
                setyesterdayimg(cloudy)
            }
            else if(icons[0] === 'snow'){
                setyesterdayimg(snow)
            }
            else if (icons[0] === 'rain'){
                setyesterdayimg(heavyrain)
            }
            else if (icons[0] === 'fog'){
                setyesterdayimg(fog)
            }
            else if (icons[0] === 'wind'){
                setyesterdayimg(wind)
            }
            else if (icons[0] === 'clear-day'){
                setyesterdayimg(clear)
            }
            else if (icons[0] === 'clear-night'){
                setyesterdayimg(night)
            }
            
            if ((icons[1] === 'cloudy') || (icons[1] === 'partly-cloudy-day') || (icons[1] === 'partly-cloudy-night')){
                settwodaysimg(cloudy)
            }
            else if(icons[1] === 'snow'){
                settwodaysimg(snow)
            }
            else if (icons[1] === 'rain'){
                settwodaysimg(heavyrain)
            }
            else if (icons[1] === 'fog'){
                settwodaysimg(fog)
            }
            else if (icons[1] === 'wind'){
                settwodaysimg(wind)
            }
            else if (icons[1] === 'clear-day'){
                settwodaysimg(clear)
            }
            else if (icons[1] === 'clear-night'){
                settwodaysimg(night)
            }
            
            if ((icons[2] === 'cloudy') || (icons[2] === 'partly-cloudy-day') || (icons[2] === 'partly-cloudy-night')){
                setthreedaysimg(cloudy)
            }
            else if(icons[2] === 'snow'){
                setthreedaysimg(snow)
            }
            else if (icons[2] === 'rain'){
                setthreedaysimg(heavyrain)
            }
            else if (icons[2] === 'fog'){
                setthreedaysimg(fog)
            }
            else if (icons[2] === 'wind'){
                setthreedaysimg(wind)
            }
            else if (icons[2] === 'clear-day'){
                setthreedaysimg(clear)
            }
            else if (icons[2] === 'clear-night'){
                setthreedaysimg(night)
            }

            
        }
        // console.log('called')
        set_icons();
    })
    
    console.log(pastdays[1])
    let previousWeather = [
        { date: pastdays[0], temp: pastdays[1]+'°C', rainfall: pastdays[2]+'mm', condition: pastdays[3], image: img[0]},
        { date: pastdays[5], temp: pastdays[6]+'°C', rainfall: pastdays[7]+'mm', condition: pastdays[8], image: img[1] },
        { date: pastdays[10], temp: pastdays[11]+'°C', rainfall: pastdays[12]+'mm', condition: pastdays[13], image: img[2] }
    ];
    // let yesterday= pastdays[0]
    

    return (
        <div className="side-widget">
            <h2 className ="side-widget-heading">Previous Day's Weather</h2>
            <div className="previous-day-container">
                
                {previousWeather.map((dayWeather, index) => (
                     <div key={index} className="previous-day-layout">
                        <div className='text'>

                            <div className='date'>{dayWeather.date}</div>
                            <div className='Temp'>Temp: {dayWeather.temp}</div>
                            <div className='Rain'>Rainfall: {dayWeather.rainfall}</div>
                            {/* <div className='condition'>Condition: {dayWeather.condition}</div> */}
                        </div>
                        <div className='image_side'>
                            <img src={dayWeather.image}></img>
                            
                        </div>  
                    </div>
                ))}
            </div>
        </div>
    );
}

export default PreviousWeatherWidget;