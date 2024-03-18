import './App.css';
import '../style/Style.css';
import '../components/mainWidget/MainWidget';
import MainWidget from '../components/mainWidget/MainWidget';
// import TopBar from '../components/Topbar/TopBar';
import { useState, useEffect } from 'react';
import '../components/Topbar/TopBar.css';
import '../components/searchBar/SearchBar.css';
import Sun from '../components/Sunset-Sunrise/Sun';
import Bottom from '../components/Bottom/Bottom';
import { wait } from '@testing-library/user-event/dist/utils';

function App() {
  const [locationlat, setLocationlat] = useState(0)
  const [locationlon, setLocationlon] = useState(0)
  const [citylat, setCitylat] = useState()
  const [citylon, setCitylon] = useState()
  const [city, setCity] = useState({ city: '' })
  const backup_api = ''
  const apikey = "6e64a78c03e21e2143da3ea13650b0de"

  
  let coordsurl = `http://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=${apikey}`
  let url_backup = ""
  // const apikey = "6e64a78c03e21e2143da3ea13650b0de"
  // const locationlat = lonlat[0]
  // const locationlon = lonlat[1]
  // let city = lonlat[2]
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=Metric&appid=${apikey}`
  const [sunrise, setSunrise] = useState()
  const [sunset, setSunset] = useState()
  let hoururl = `https://api.openweathermap.org/data/3.0/onecall?lat=${locationlat}&lon=${locationlon}&exclude=current,daily,minutely,alerts&units=Metric&appid=${apikey}`


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
          console.log('iiiii')
        }
        else {
          result.json().then(json => {
            setCitylat(json[0].lat)
            setCitylon(json[0].lon)
            console.log(citylat + ' jjjjjjj' + json[0].lat)
            console.log(typeof json[0].lat)
            console.log(citylat)
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
    }

    function error() {
      console.log("Unable to retrieve your location");
    }
  }
  getLocation()
  const onChangeHandler = event => {
    if (event.keyCode === 13) {
      setCity(event.target.value);
      setcoords()
      console.log(citylat +'////////////' + citylon)
    }
    else {
      console.log('he')
      if (event.keyCode === 8) {
        console.log('hehe')
        if (event.target.value.length === 1) {
          setCity('')
        }
      }
      else {

      }
    }
  };
  console.log(citylat + '/////[][].]/[.' +citylon)



  const lonlat = [locationlat, locationlon, city]
  
  const bottomlocation = [citylat, citylon]
  console.log('/////////////////// adjfhalskfdjha' +bottomlocation)
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
          <Sun lonlat={lonlat} />
        </div>
      </div>
      <MainWidget lonlat={lonlat} />
      <Bottom bottomlocation={bottomlocation} />
    </div>
  );
}

export default App;
