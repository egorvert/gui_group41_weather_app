import '../../style/Style.css';

function Today() {
    return(
        <div className='Today_Container'>
            <div className='TC_Top'>
                <div className='Location'>
                    Current Location
                </div>
                <div className='safety'>
                    Safe to climb
                </div>
            </div>
            <div className='Mid_Temp'>
                <div className='MTemp'>
                    Temp
                </div>
                <div className='MWeather'>
                    Image of weather type
                </div>
            </div>
            <div className='MBottom'>
                <div className='Temp'>
                    <div className='High'>
                        High
                    </div>
                    <div className='Low'>
                        Low
                    </div>
                </div>
                <div className='Humidity'>
                    Humidity
                </div>
                <div className='Feels'>
                    Feels like:
                </div>
            </div>
        </div>
    )
}

export default Today;