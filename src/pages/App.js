import './App.css';
import'../style/Style.css';
import '../components/mainWidget/MainWidget';
import MainWidget from '../components/mainWidget/MainWidget';
import TopBar from '../components/Topbar/TopBar';
import {useState, useEffect} from 'react';
import '../components/Topbar/TopBar.css';
import '../components/searchBar/SearchBar.css';
import Sun from '../components/Sunset-Sunrise/Sun';
import Bottom from '../components/Bottom/Bottom';

function App() {
  const [locationlat, setLocationlat] = useState({location: ''})
  const [locationlon, setLocationlon] = useState({location: ''})
  const [city, setCity] = useState({city: ''})
  const backup_api = ''

  function getLocation(){
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
    setCity(event.target.value);
    console.log('set')
  };
  const handleKeyDown = (event) => {
    if ((event.key === 'Enter')) {
      setCity(event.target.value);
      console.log('set')
    }
  }
  const lonlat = [locationlat, locationlon, city]
  return (
    <div className="App">
      <div className='Wrapper_Top'>
        <div className='Search'>
          <div className='Wrapper_search'>
              <div className='SearchBar'>
                  <input type="text" placeholder="Search" className='search'  onChange={onChangeHandler}/>
              </div>

          </div>
        </div>
          <div className='Sun'> 
            <Sun lonlat={lonlat}/>
          </div>
      </div>
      <MainWidget />
      <Bottom />
    </div>
  );
}

export default App;
