import React from 'react';
import './sidePrevious.css'
// import windyimg from '../../assets/icons/ui/windyWeather.png'
// import sunnyimg from '../../assets/icons/ui/sunnyWeather.png'
// import stormyimg from '../../assets/icons/ui/stormyWeather.png'
// import lrainimg from '../../assets/icons/ui/lrainWeather.png'
// import hrainimg from '../../assets/icons/ui/hrainWeather.png'
// import partlycloudyimg from '../../assets/icons/ui/partlycloudyWeather.png'
// import snowyimg from '../../assets/icons/ui/snowyWeather.png'

function PreviousWeatherWidget({pastdays}) {
    function getPreviousDays() {
        const today = new Date();
        const previousDays = [];

        for (let i = 1; i <= 3; i++) {
            const previousDay = new Date(today);
            previousDay.setDate(today.getDate() - i);
            previousDays.push(previousDay.toISOString().split('T')[0]); 
        }

        return previousDays;
    }

    const previousWeather = [
        { date: pastdays[0], temp: pastdays[1]+'°C', rainfall: pastdays[2]+'mm', condition: pastdays[3] },
        { date: pastdays[5], temp: pastdays[6]+'°C', rainfall: pastdays[7]+'mm', condition: pastdays[8] },
        { date: pastdays[10], temp: pastdays[11]+'°C', rainfall: pastdays[12]+'mm', condition: pastdays[13] }
    ];

    return (
        <div className="side-widget">
            <h2 className ="side-widget-heading">Previous Day's Weather</h2>
            <div className ="previous-day-img"></div>
            <div className="previous-day-container">
                {previousWeather.map((dayWeather, index) => (
                     <div key={index} className="previous-day-layout">
                        <div className='text'>

                            <div className='date'>{dayWeather.date}</div>
                            <div className='Temp'>Temp: {dayWeather.temp}</div>
                            <div className='Rain'>Rainfall: {dayWeather.rainfall}</div>
                            <div className='condition'>Condition: {dayWeather.condition}</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default PreviousWeatherWidget;