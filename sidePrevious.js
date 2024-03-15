import React from 'react';

function PreviousWeatherWidget() {
    // Placeholder 
    const previousWeather = [
        { date: '2024-03-14', temperature: '15°C', condition: 'Windy' },
        { date: '2024-03-13', temperature: '13°C', condition: 'Light Rain' },
        { date: '2024-03-12', temperature: '12°C', condition: 'Heavy Rain' }
    ];

    return (
        <div className="previous-weather-widget">
            <h2>Previous Day's Weather</h2>
            <ul>
                {previousWeather.map((dayWeather, index) => (
                    <li key={index}>
                        <div>Date: {dayWeather.date}</div>
                        <div>Temperature: {dayWeather.temperature}</div>
                        <div>Condition: {dayWeather.condition}</div>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default PreviousWeatherWidget;