import React from 'react'
import './MainWidget.css'
import LocationPin from '../../assets/icons/ui/locationPin.svg'
import GreenTick from '../../assets/icons/ui/greenTick.svg'
import LargeSun from '../../assets/icons/weather/sunLarge.svg'

const MainWidget = () => {
  return (
    <div className='wrapper'>
        <div className='widget-header'>
            <div className='location'>
              <img src={LocationPin} alt="location pin icon" />
              <p>London, United Kingdom</p>
            </div>
            <div className='safety-status'>
              <img src={GreenTick} alt="safe to climb tick" />
              <p>Safe To Climb Today</p>
            </div>
        </div>

        <div className='widget-body'>
            <div className='temperature'>
              <p>12</p>
              <p className='degree-sign'>o</p>
            </div>
            <img src={LargeSun} alt="main sun icon" />
        </div>

        <div className='widget-footer'>
            <div className='temp-high-low'>
              <p>High - 15°C | Low - 9°C</p>
            </div>
            <div className='vertical-separator'>|</div>
            <div className='humidity'>
              <p>Humidity - 25%</p>
            </div>
            <div className='vertical-separator'>|</div>
            <div className='feels-like'>
              <p>Feels Like - 15°C</p>
            </div>
        </div>
    </div>
  )
}

export default MainWidget;