import './App.css';
import '../style/Style.css';
import '../components/mainWidget/MainWidget';
import MainWidget from '../components/mainWidget/MainWidget';
import moment from 'moment';
import { useState, useEffect } from 'react';
import '../components/Topbar/TopBar.css';
import '../components/searchBar/SearchBar.css';
import Sun from '../components/Sunset-Sunrise/Sun';
import Bottom from '../components/Bottom/Bottom';
import PreviousWeatherWidget from '../components/sideBar/sidePrevious';

function App() {
  //set the default values
  const [locationlat, setLocationlat] = useState(0)
  const [locationlon, setLocationlon] = useState(0)
  const [citylat, setCitylat] = useState(51.5)
  const [citylon, setCitylon] = useState(0.12)
  const [city, setCity] = useState('')
  const [icon, seticon] = useState('')
  const apikey = "6e64a78c03e21e2143da3ea13650b0de"
  // temp apiikey for previous days FLTVUZY62E39QKWE5SY7YW7GS
  // second apikey HJ662UQ43MYUPLGLYSMPMU9KP

  // set the values used for the bottom bar of the page
  const [nowtemp, setNowtemp] = useState('')
    const [nowhumidity, setNowhumidity] = useState('')
    const [nowicon, setnowicon] = useState('')
    const [plus1, setPlus1] = useState('plus 1 hour')
    const [plus1temp, setPlus1temp] = useState('')
    const [plus1humidity, setPlus1humidity] = useState('')
    const [plus1icon, setplus1icon] = useState('')
    const [plus2, setPlus2] = useState('plus 2 hour')
    const [plus2temp, setPlus2temp] = useState('')
    const [plus2humidity, setPlus2humidity] = useState('')
    const [plus2icon, setplus2icon] = useState('')
    const [plus3, setPlus3] = useState('plus 3 hour')
    const [plus3temp, setPlus3temp] = useState('')
    const [plus3humidity, setPlus3humidity] = useState('')
    const [plus3icon, setplus3icon] = useState('')
    const [plus4, setPlus4] = useState('plus 4 hour')
    const [plus4temp, setPlus4temp] = useState('')
    const [plus4humidity, setPlus4humidity] = useState('')
    const [plus4icon, setplus4icon] = useState('')
    const [plus5, setPlus5] = useState('plus 5 hour')
    const [plus5temp, setPlus5temp] = useState('')
    const [plus5humidity, setPlus5humidity] = useState('')
    const [plus5icon, setplus5icon] = useState('')
    const [plus6, setPlus6] = useState('plus 6 hour')
    const [plus6temp, setPlus6temp] = useState('')
    const [plus6humidity, setPlus6humidity] = useState('')
    const [plus6icon, setplus6icon] = useState('')
    const [plus7, setPlus7] = useState('plus 7 hour')
    const [plus7temp, setPlus7temp] = useState('')
    const [plus7humidity, setPlus7humidity] = useState('')
    const [plus7icon, setplus7icon] = useState('')
    const [plus8, setPlus8] = useState('plus 8 hour')
    const [plus8temp, setPlus8temp] = useState('')
    const [plus8humidity, setPlus8humidity] = useState('')
    const [plus8icon, setplus8icon] = useState('')
    const [plus9, setPlus9] = useState('plus 9 hour')
    const [plus9temp, setPlus9temp] = useState('')
    const [plus9humidity, setPlus9humidity] = useState('')
    const [plus9icon, setplus9icon] = useState('')
    let bottomdata = [nowtemp, nowhumidity, plus1, plus1temp, plus1humidity, plus2, plus2temp, plus2humidity, plus3, plus3temp, plus3humidity, plus4, plus4temp, plus4humidity, plus5, plus5temp, plus5humidity, plus6, plus6temp, plus6humidity, plus7, plus7temp, plus7humidity, plus8, plus8temp, plus8humidity, plus9, plus9temp, plus9humidity, nowicon, plus1icon, plus2icon, plus3icon, plus4icon, plus5icon, plus6icon, plus7icon, plus8icon, plus9icon]
    
    //get the dates in the correct format for the api for the previous days information
    let threedaysago = moment().subtract(3, 'days').format('YYYY-MM-DD')
    let twodaysago = moment().subtract(2, 'days').format('YYYY-MM-DD')
    let yesterday = moment().subtract(1, 'days').format('YYYY-MM-DD')

    //assign usestates for ease of setting for previous days sections
    const [yesterdaytemp, setyesterdaytemp] = useState('')
    const [yesterdaycondition, setyesterdaycondition] = useState('')
    const [yesterdayrain, setyesterdayrain] = useState('')
    const [yesterdayicon, setyesterdayicon] = useState('')
    

    const [twodaystemp, settwodaystemp] = useState('')
    const [twodayscondition, settwodayscondition] = useState('')
    const [twodaysrain, settwodaysrain] = useState('')
    const [twodaysicon, settwodaysicon] = useState('')

    const [threedaystemp, setthreedaystemp] = useState('')
    const [threedayscondition, setthreedayscondition] = useState('')
    const [threedaysrain, setthreedaysrain] = useState('')
    const [threedaysicon, setthreedaysicon] = useState('')
  
  //set the correct information for the api to get the longitude and latitude needed for the api call of hourly location 
  let coordsurl = `http://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=${apikey}`
  let url_backup = ""
  //set url for api call for current weather information
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=Metric&appid=${apikey}`
  const [sunrise, setSunrise] = useState()
  const [sunset, setSunset] = useState()


  let hoururl = `https://api.openweathermap.org/data/3.0/onecall?lat=${citylat}&lon=${citylon}&exclude=current,minutely,alerts&units=Metric&appid=${apikey}`

  //used to convert back to default settings if city is not entered
  if (typeof locationlat === "number") {
    url_backup = `https://api.openweathermap.org/data/2.5/weather?lat=${locationlat}&lon=${locationlon}&units=Metric&appid=${apikey}`
  }
  else {
    url_backup = `https://api.openweathermap.org/data/2.5/weather?q=London&units=Metric&appid=${apikey}`
  }

  //set default values for todays api
  const [temp, setTemp] = useState('')
  const [humidity, setHumidity] = useState('')
  const [feelslike, setFeelslike] = useState('')
  const [high, setHigh] = useState('')
  const [low, setLow] = useState('')
  
  //ensure correct api call for previous days data
  let previousurl  = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${citylon},${citylon}/${threedaysago}/${yesterday}?unitGroup=metric&include=days&key=PQ6XCBAJCZXKCCZDQVWWVLERZ&contentType=json`
  
  //function to set longitude and latitude of the searched city as it is needed for hte hourly updates  
  const setcoords = async () => {
      
      if ((city === '')) {

      }
      else {
        let result = await fetch(coordsurl)
        if ((result.status !== 404) || (result.status !== 400)) {
          //if api call is bad due to no city existing does not call the api
            result.json().then(json => {
              //sets the city longitude and latitude
              try {
                setCitylat(json[0].lat)
                setCitylon(json[0].lon)

              } catch (e) {
                console.log(e)
              }
              //calls the functions for setting the hourly update and previous days to be appropriate for the search location
              fetchBottomData();
              fetchPreviousDaysData();
        })
      }
        
      }
    }
    
    //get locational data if given permissions
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

  //to listen to the input values of the user
  const onChangeHandler = event => {
    if (event.keyCode === 13) { //if enter is pressed
      //sets city to the values that were entered and gets the coords for them which also updates all other relevant information
      setCity(event.target.value);
      setcoords()
    }
    else {
      if (event.keyCode === 8) {//update for backspace
        //if the input value is empty then update to empty value or if one character update
        if ((event.target.value.length === 1) || (event.target.value.length===0)) {
          setCity('')
        }
      }
    }
  };

  //function to set the bottomdata
    const fetchBottomData = async () => {
             let bottomresult = await fetch(hoururl)
             if ((bottomresult.status === 404) || (bottomresult.status === 400)){//if theres an issue it will revert back to the defaul t 
                bottomresult = await fetch(url_backup)
                
            }
            
            bottomresult.json().then(json => {
              //updates all the data
                setNowtemp(Math.floor(json.hourly[0].temp) + '°C')
                setNowhumidity(Math.floor(json.hourly[0].humidity) + '%')
                setnowicon(json.hourly[0].weather[0].icon)

                setPlus1(moment(json.hourly[1].dt*1000).format('HH:mm'))
                setPlus1temp(Math.floor(json.hourly[1].temp) + '°C')
                setPlus1humidity(Math.floor(json.hourly[1].humidity) + '%')
                setplus1icon(json.hourly[1].weather[0].icon)

                setPlus2(moment(json.hourly[2].dt*1000).format('HH:mm'))
                setPlus2temp(Math.floor(json.hourly[2].temp) + '°C')
                setPlus2humidity(Math.floor(json.hourly[2].humidity) + '%')
                setplus2icon(json.hourly[2].weather[0].icon)

                setPlus3(moment(json.hourly[3].dt*1000).format('HH:mm'))
                setPlus3temp(Math.floor(json.hourly[3].temp) + '°C')
                setPlus3humidity(Math.floor(json.hourly[3].humidity) + '%')
                setplus3icon(json.hourly[3].weather[0].icon)

                setPlus4(moment(json.hourly[4].dt*1000).format('HH:mm'))
                setPlus4temp(Math.floor(json.hourly[4].temp) + '°C')
                setPlus4humidity(Math.floor(json.hourly[4].humidity) + '%')
                setplus4icon(json.hourly[4].weather[0].icon)

                setPlus5(moment(json.hourly[5].dt*1000).format('HH:mm'))
                setPlus5temp(Math.floor(json.hourly[5].temp) + '°C')
                setPlus5humidity(Math.floor(json.hourly[5].humidity) + '%')
                setplus5icon(json.hourly[5].weather[0].icon)

                setPlus6(moment(json.hourly[6].dt*1000).format('HH:mm'))
                setPlus6temp(Math.floor(json.hourly[6].temp) + '°C')
                setPlus6humidity(Math.floor(json.hourly[6].humidity) + '%')
                setplus6icon(json.hourly[6].weather[0].icon)

                setPlus7(moment(json.hourly[7].dt*1000).format('HH:mm'))
                setPlus7temp(Math.floor(json.hourly[7].temp) + '°C')
                setPlus7humidity(Math.floor(json.hourly[7].humidity) + '%')
                setplus7icon(json.hourly[7].weather[0].icon)

                setPlus8(moment(json.hourly[8].dt*1000).format('HH:mm'))
                setPlus8temp(Math.floor(json.hourly[8].temp) + '°C')
                setPlus8humidity(Math.floor(json.hourly[8].humidity) + '%')
                setplus8icon(json.hourly[8].weather[0].icon)
                
                setPlus9(moment(json.hourly[9].dt*1000).format('HH:mm'))
                setPlus9temp(Math.floor(json.hourly[9].temp) + '°C')
                setPlus9humidity(Math.floor(json.hourly[9].humidity) + '%')
                setplus9icon(json.hourly[9].weather[0].icon)
            })  


        
    }

    const fetchPreviousDaysData = async () =>{ //gets the previous days data
      let yesterdayresult = await fetch(previousurl)
             if ((yesterdayresult.status === 404) || (yesterdayresult.status === 400) || (yesterdayresult.status === 429)){
                setyesterdaytemp('api error') //due to the limites of the api may throw an error 
            } 
            else{

              yesterdayresult.json().then(json => {
                  setyesterdaytemp(Math.floor(json.days[2].temp))
                  setyesterdayrain(Math.floor(json.days[2].precip))
                  setyesterdaycondition(json.days[2].conditions)
                  setyesterdayicon(json.days[2].icon)
  
                  settwodaystemp(Math.floor(json.days[1].temp))
                  settwodaysrain(Math.floor(json.days[1].precip))
                  settwodayscondition(json.days[1].conditions)
                  settwodaysicon(json.days[1].icon)
                  
                  console.log(json)
                  setthreedaystemp(Math.floor(json.days[0].temp))
                  setthreedaysrain(Math.floor(json.days[0].precip))
                  setthreedayscondition(json.days[0].conditions)
                  setthreedaysicon(json.days[0].icon)
                })
                
            }



    }
    //array to pass all relevant information to past days
    let pastdays = [yesterday,yesterdaytemp, yesterdayrain, yesterdaycondition, yesterdayicon, twodaysago, twodaystemp, twodaysrain, twodayscondition, twodaysicon, threedaysago, threedaystemp, threedaysrain, threedayscondition, threedaysicon]

  
    // to load all the information as the page is loaded
  useEffect(() => {
    const fetchData = async () => {
      setcoords() //sets coords and calls other functions
      let badstatus = false
      let result = await fetch(url)
      if ((result.status === 404) || (result.status === 400) ){
        result = await fetch(url_backup) //city is invalid city so resets to default backup option

        badstatus = true
     }      
            result.json().then(json => {
              //sets all relevant data
              setSunrise(moment(json.sys.sunrise*1000).format('HH:mm'))
              setSunset(moment(json.sys.sunset*1000).format('HH:mm'))
              setTemp(Math.floor(json.main.temp))
              setFeelslike(Math.floor(json.main.feels_like))
              setHumidity(Math.floor(json.main.humidity))
              setLow(Math.floor(json.main.temp_min))
              setHigh(Math.floor(json.main.temp_max))
              seticon(json.weather[0].icon)
            })
            if(badstatus === true){
              setCity('London')
            }  

          }
      
     fetchData();

    })
    //array for main widget
    let mainWidgetinfo = [temp, feelslike, humidity, low, high, city, icon]
    //array for sun 
    let suninfo = [sunrise, sunset]
  return (
    <div className="App">
      <div className='Wrapper_Top'>
        <div className='Search'>
          <div className='Wrapper_search'>
            <div className='SearchBar'>
              <input type="text" placeholder="Search for a new location" className='search' onKeyDown={onChangeHandler} />
            </div>
          </div>
        </div>
        <div className='Sun'>
          <Sun suninfo={suninfo} />
        </div>
      </div>
      <MainWidget mainWidgetinfo={mainWidgetinfo} previousWeather={pastdays} futureWeather={bottomdata}/>
      <PreviousWeatherWidget pastdays={pastdays}/>
      <Bottom bottomdata={bottomdata} />
    </div>
  );
}

export default App;
