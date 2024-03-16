import React from 'react';
import './sidePrevious.css'
import windyimg from '../../assets/icons/ui/windyWeather.png'
import sunnyimg from '../../assets/icons/ui/sunnyWeather.png'
import stormyimg from '../../assets/icons/ui/stormyWeather.png'
import lrainimg from '../../assets/icons/ui/lrainWeather.png'
import hrainimg from '../../assets/icons/ui/hrainWeather.png'
import partlycloudyimg from '../../assets/icons/ui/partlycloudyWeather.png'
import snowyimg from '../../assets/icons/ui/snowyWeather.png'

function PreviousWeatherWidget() {
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
        { date: getPreviousDays()[0], rainfall: '0 mm', condition: 'Windy' },
        { date: getPreviousDays()[1], rainfall: '6 mm', condition: 'Light Rain' },
        { date: getPreviousDays()[2], rainfall: '16 mm', condition: 'Heavy Rain' }
    ];

    return (
        <div className="side-widget">
            <h2 className ="side-widget-heading">Previous Day's Weather</h2>
            <div className ="previous-day-img"></div>
            <div className="previous-day-container">
                {previousWeather.map((dayWeather, index) => (
                     <div key={index} className="previous-day-layout">
                        <div>{dayWeather.date}</div>
                        <div>Rainfall: {dayWeather.rainfall}</div>
                        <div>Condition: {dayWeather.condition}</div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default PreviousWeatherWidget;
