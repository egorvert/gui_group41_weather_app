import './App.css';
import '../style/Style.css';
import '../components/mainWidget/MainWidget';
import MainWidget from '../components/mainWidget/MainWidget';
// import TopBar from '../components/Topbar/TopBar';
import moment from 'moment';
import { useState, useEffect } from 'react';
import '../components/Topbar/TopBar.css';
import '../components/searchBar/SearchBar.css';
import Sun from '../components/Sunset-Sunrise/Sun';
import Bottom from '../components/Bottom/Bottom';
import { wait } from '@testing-library/user-event/dist/utils';
import PreviousWeatherWidget from '../components/sideBar/sidePrevious';

function App() {
  const [locationlat, setLocationlat] = useState(0)
  const [locationlon, setLocationlon] = useState(0)
  const [citylat, setCitylat] = useState(51.5)
  const [citylon, setCitylon] = useState(0.12)
  const [city, setCity] = useState('')
  const apikey = "6e64a78c03e21e2143da3ea13650b0de"
  const [nowtemp, setNowtemp] = useState('')
    const [nowhumidity, setNowhumidity] = useState('')
    const [plus1, setPlus1] = useState('plus 1 hour')
    const [plus1temp, setPlus1temp] = useState('')
    const [plus1humidity, setPlus1humidity] = useState('')
    const [plus2, setPlus2] = useState('plus 2 hour')
    const [plus2temp, setPlus2temp] = useState('')
    const [plus2humidity, setPlus2humidity] = useState('')
    const [plus3, setPlus3] = useState('plus 3 hour')
    const [plus3temp, setPlus3temp] = useState('')
    const [plus3humidity, setPlus3humidity] = useState('')
    const [plus4, setPlus4] = useState('plus 4 hour')
    const [plus4temp, setPlus4temp] = useState('')
    const [plus4humidity, setPlus4humidity] = useState('')
    const [plus5, setPlus5] = useState('plus 5 hour')
    const [plus5temp, setPlus5temp] = useState('')
    const [plus5humidity, setPlus5humidity] = useState('')
    const [plus6, setPlus6] = useState('plus 6 hour')
    const [plus6temp, setPlus6temp] = useState('')
    const [plus6humidity, setPlus6humidity] = useState('')
    const [plus7, setPlus7] = useState('plus 7 hour')
    const [plus7temp, setPlus7temp] = useState('')
    const [plus7humidity, setPlus7humidity] = useState('')
    const [plus8, setPlus8] = useState('plus 8 hour')
    const [plus8temp, setPlus8temp] = useState('')
    const [plus8humidity, setPlus8humidity] = useState('')
    const [plus9, setPlus9] = useState('plus 9 hour')
    const [plus9temp, setPlus9temp] = useState('')
    const [plus9humidity, setPlus9humidity] = useState('')
    const [bottomdata, setBottomdata] = useState([''])
  
  
  let coordsurl = `http://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=${apikey}`
  let url_backup = ""
  // const apikey = "6e64a78c03e21e2143da3ea13650b0de"
  // const locationlat = lonlat[0]
  // const locationlon = lonlat[1]
  // let city = lonlat[2]
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=Metric&appid=${apikey}`
  const [sunrise, setSunrise] = useState()
  const [sunset, setSunset] = useState()
  let hoururl = `https://api.openweathermap.org/data/3.0/onecall?lat=${citylat}&lon=${citylon}&exclude=current,minutely,alerts&units=Metric&appid=${apikey}`
  let hoururl_backup = `https://api.openweathermap.org/data/3.0/onecall?lat=51.5&lon=0.12&exclude=current,minutely,alerts&units=Metric&appid=${apikey}`

  if (typeof locationlat === "number") {
    url_backup = `https://api.openweathermap.org/data/2.5/weather?lat=${locationlat}&lon=${locationlon}&units=Metric&appid=${apikey}`
  }
  else {
    url_backup = `https://api.openweathermap.org/data/2.5/weather?q=London&units=Metric&appid=${apikey}`
  }

  const [temp, setTemp] = useState('')
  const [humidity, setHumidity] = useState('')
  const [feelslike, setFeelslike] = useState('')
  const [high, setHigh] = useState('')
  const [low, setLow] = useState('')


    const setcoords = async () => {
      if ((city === '')) {

      }
      else {
        let result = await fetch(coordsurl)
        if ((result.status === 404) || (result.status === 400)) {
        }
        else {
          result.json().then(json => {
            setCitylat(json[0].lat)
            setCitylon(json[0].lon)
          })
        }
      }
    }
    
    function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(success, error);
    } else {
      console.log("Geolocation not supported");
    }
    function success(position) {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;
      setLocationlat(latitude)
      setLocationlon(longitude)
      // fetchBottomData();
    }

    function error() {
      console.log("Unable to retrieve your location");
    }
  }
  getLocation()
  const onChangeHandler = event => {
    if (event.keyCode === 13) {
      console.log(city)
      setCity(event.target.value);
      setcoords()
      fetchBottomData();
      console.log(city)
    }
    else {
      if (event.keyCode === 8) {
        if ((event.target.value.length === 1) || (event.target.value.length===0)) {
          setCity('')
        }
      }
      else {

      }
    }
  };


  
  // const lonlat = [locationlat, locationlon, city]
  
  const bottomlocation = [citylat, citylon]
  const fetchBottomData = async () =>{
             
    let bottomresult = await fetch(hoururl)
    if ((bottomresult.status === 404) || (bottomresult === 400)){
      console.log('help me ffs')
      bottomresult = await fetch(hoururl_backup)
     }
     bottomresult.json().then( json =>{
       console.log('successful')
       console.log(json)
       setNowtemp(Math.floor(json.hourly[0].temp) + '°C')
       console.log(Math.floor(json.hourly[0].temp) +'///////////////')
       setNowhumidity(Math.floor(json.hourly[0].humidity) + '%')

       setPlus1(moment(json.hourly[1].dt*1000).format('HH:mm'))
       setPlus1temp(Math.floor(json.hourly[1].temp) + '°C')
       setPlus1humidity(Math.floor(json.hourly[1].humidity) + '%')

       setPlus2(moment(json.hourly[2].dt*1000).format('HH:mm'))
       setPlus2temp(Math.floor(json.hourly[2].temp) + '°C')
       setPlus2humidity(Math.floor(json.hourly[2].humidity) + '%')

       setPlus3(moment(json.hourly[3].dt*1000).format('HH:mm'))
       setPlus3temp(Math.floor(json.hourly[3].temp) + '°C')
       setPlus3humidity(Math.floor(json.hourly[3].humidity) + '%')

       setPlus4(moment(json.hourly[4].dt*1000).format('HH:mm'))
       setPlus4temp(Math.floor(json.hourly[4].temp) + '°C')
       setPlus4humidity(Math.floor(json.hourly[4].humidity) + '%')

       setPlus5(moment(json.hourly[5].dt*1000).format('HH:mm'))
       setPlus5temp(Math.floor(json.hourly[5].temp) + '°C')
       setPlus5humidity(Math.floor(json.hourly[5].humidity) + '%')

       setPlus6(moment(json.hourly[6].dt*1000).format('HH:mm'))
       setPlus6temp(Math.floor(json.hourly[6].temp) + '°C')
       setPlus6humidity(Math.floor(json.hourly[6].humidity) + '%')

       setPlus7(moment(json.hourly[7].dt*1000).format('HH:mm'))
       setPlus7temp(Math.floor(json.hourly[7].temp) + '°C')
       setPlus7humidity(Math.floor(json.hourly[7].humidity) + '%')

       setPlus8(moment(json.hourly[8].dt*1000).format('HH:mm'))
       setPlus8temp(Math.floor(json.hourly[8].temp) + '°C')
       setPlus8humidity(Math.floor(json.hourly[8].humidity) + '%')
       
       setPlus9(moment(json.hourly[9].dt*1000).format('HH:mm'))
       setPlus9temp(Math.floor(json.hourly[9].temp) + '°C')
       setPlus9humidity(Math.floor(json.hourly[9].humidity) + '%')
       setBottomdata([nowtemp, nowhumidity, plus1,plus1temp,plus1humidity, plus2,plus2temp,plus2humidity, plus3,plus3temp,plus3humidity, plus4,plus4temp,plus4humidity, plus5,plus5temp,plus5humidity, plus6,plus6temp,plus6humidity, plus7,plus7temp,plus7humidity, plus8,plus8temp,plus8humidity, plus9,plus9temp,plus9humidity])
     // bottomdata = [now, hour1, hour2, hour3, hour4, hour5, hour6, hour7, hour8, hour9]
   })
   
}

    
  
  useEffect(() => {
    const fetchData = async () => {
      setcoords()
      // fetchBottomData();
      let badstatus = false
      let result = await fetch(url)
      if ((result.status === 404) || (result.status === 400) ){
        result = await fetch(url_backup)
        badstatus = true
     }
            result.json().then(json => {
              setSunrise(moment(json.sys.sunrise*1000).format('HH:mm'))
              setSunset(moment(json.sys.sunset*1000).format('HH:mm'))
              setTemp(Math.floor(json.main.temp))
              setFeelslike(Math.floor(json.main.feels_like))
              setHumidity(Math.floor(json.main.humidity))
              setLow(Math.floor(json.main.temp_min))
              setHigh(Math.floor(json.main.temp_max))
            })
            if(badstatus === true){
              setCity('London')
            }  
            // fetchBottomData();
            console.log('jj')

          }
      
     fetchData();
    //  fetchBottomData();

    })
    let mainWidgetinfo = [temp, feelslike, humidity, low, high, city]
    let suninfo = [sunrise, sunset]
  return (
    <div className="App">
      <div className='Wrapper_Top'>
        <div className='Search'>
          <div className='Wrapper_search'>
            <div className='SearchBar'>
              <input type="text" placeholder="Search" className='search' onKeyDown={onChangeHandler} />
            </div>

          </div>
        </div>
        <div className='Sun'>
          <Sun suninfo={suninfo} />
        </div>
      </div>
      <MainWidget mainWidgetinfo={mainWidgetinfo} />
      <PreviousWeatherWidget />
      <Bottom bottomdata={bottomdata} />
    </div>
  );
}

export default App;
