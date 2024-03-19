import React from "react";
import './Bottom.css';
import { useState, useEffect } from 'react';
import moment from 'moment'; 
import clear from '../../assets/icons/ui/clear.png'
import cloudy from '../../assets/icons/ui/cloudy.png'
import fog from '../../assets/icons/ui/fog.png'
import heavyrain from '../../assets/icons/ui/heavyrain.png'
import lightrain from '../../assets/icons/ui/lightrain.png'
import night from '../../assets/icons/ui/night.png'
import partcloudy from '../../assets/icons/ui/partcloudy.png'
import snow from '../../assets/icons/ui/snow.png'
import wind from'../../assets/icons/ui/wind.png'
import storm from '../../assets/icons/ui/storm.png'

function Bottom({bottomdata}){
    //29
    let iconnow = bottomdata[29]
    let iconplus1 = bottomdata[30]
    let iconplus2 = bottomdata[31]
    let iconplus3 = bottomdata[32]
    let iconplus4 = bottomdata[33]
    let iconplus5 = bottomdata[34]
    let iconplus6 = bottomdata[35]
    let iconplus7 = bottomdata[36]
    let iconplus8 = bottomdata[37]
    let iconplus9 = bottomdata[38]
    console.log(bottomdata)
    const [nowimg, setnowimg] =useState(clear)
    const [plus1img, setplus1img] = useState(clear)
    const [plus2img, setplus2img] = useState(clear)
    const [plus3img, setplus3img] = useState(clear)
    const [plus4img, setplus4img] = useState(clear)
    const [plus5img, setplus5img] = useState(clear)
    const [plus6img, setplus6img] = useState(clear)
    const [plus7img, setplus7img] = useState(clear)
    const [plus8img, setplus8img] = useState(clear)
    const [plus9img, setplus9img] = useState(clear)
    useEffect(() =>{
        function set_icons(){
        if (( iconnow === '01dn')){
            setnowimg(clear)
          }
          else if((iconnow === '01n')){
            setnowimg(night)
          }
          else if((iconnow === '02d') || (iconnow === '02n') || (iconnow === '03d') || (iconnow === '03n') || (iconnow === '04d') || (iconnow === '04n')){
            console.log('change now //// '    + iconnow )
            setnowimg(cloudy)
          }
          else if((iconnow === '09d') || (iconnow === '09n')){
            setnowimg(lightrain)
          }
          else if((iconnow === '10d') || (iconnow === '10n')){
            setnowimg(heavyrain)
          }
          else if((iconnow ==='11d') || (iconnow ==='11n')){
            setnowimg(storm)
          }
          else if((iconnow === '13d') || (iconnow ==='13n')){
            setnowimg(snow)
          }
          else if((iconnow === '50d') || (iconnow === '50n')){
            setnowimg(fog)
          }
          if (( iconplus2 === '01d')){
            setplus2img(clear)
          }
          else if((iconplus2 === '01n')){
            setplus2img(night)
          }
          else if((iconplus2 === '02d') || (iconplus2 === '02n') || (iconplus2 === '03d') || (iconplus2 === '03n') || (iconplus2 === '04d') || (iconplus2 === '04n')){
            console.log('change 2 //// '    + iconplus2 )
            setplus2img(cloudy)
          }
          else if((iconplus2 === '09d') || (iconplus2 === '09n')){
            setplus2img(lightrain)
          }
          else if((iconplus2 === '10d') || (iconplus2 === '10n')){
            setplus2img(heavyrain)
          }
          else if((iconplus2 ==='11d') || (iconplus2 ==='11n')){
            setplus2img(storm)
          }
          else if((iconplus2 === '13d') || (iconplus2 ==='13n')){
            setplus2img(snow)
          }
          else if((iconplus2 === '50d') || (iconplus2 === '50n')){
            setplus2img(fog)
          }
          if (( iconplus3 === '01d')){
            setplus3img(clear)
          }
          else if((iconplus3 === '01n')){
            setplus3img(night)
          }
          else if((iconplus3 === '02d') || (iconplus3 === '02n') || (iconplus3 === '03d') || (iconplus3 === '03n') || (iconplus3 === '04d') || (iconplus3 === '04n')){
            console.log('change 3 //// '    + iconplus3 )
            setplus3img(cloudy)
          }
          else if((iconplus3 === '09d') || (iconplus3 === '09n')){
            setplus3img(lightrain)
          }
          else if((iconplus3 === '10d') || (iconplus3 === '10n')){
            setplus3img(heavyrain)
          }
          else if((iconplus3 ==='11d') || (iconplus3 ==='11n')){
            setplus3img(storm)
          }
          else if((iconplus3 === '13d') || (iconplus3 ==='13n')){
            setplus3img(snow)
          }
          else if((iconplus3 === '50d') || (iconplus3 === '50n')){
            setplus3img(fog)
          }
          if (( iconplus4 === '01d')){
            setplus4img(clear)
          }
          else if((iconplus4 === '01n')){
            setplus4img(night)
          }
          else if((iconplus4 === '02d') || (iconplus4 === '02n') || (iconplus4 === '03d') || (iconplus4 === '03n') || (iconplus4 === '04d') || (iconplus4 === '04n')){
            console.log('change 4 //// '    + iconplus4 )
            setplus4img(cloudy)
          }
          else if((iconplus4 === '09d') || (iconplus4 === '09n')){
            setplus4img(lightrain)
          }
          else if((iconplus4 === '10d') || (iconplus4 === '10n')){
            setplus4img(heavyrain)
          }
          else if((iconplus4 ==='11d') || (iconplus4 ==='11n')){
            setplus4img(storm)
          }
          else if((iconplus4 === '13d') || (iconplus4 ==='13n')){
            setplus4img(snow)
          }
          else if((iconplus4 === '50d') || (iconplus4 === '50n')){
            setplus4img(fog)
          }
          if (( iconplus5 === '01d')){
            setplus5img(clear)
          }
          else if((iconplus5 === '01n')){
            setplus5img(night)
          }
          else if((iconplus5 === '02d') || (iconplus5 === '02n') || (iconplus5 === '03d') || (iconplus5 === '03n') || (iconplus5 === '04d') || (iconplus5 === '04n')){
            // console.log('change 5 //// '    + iconplus5 )
            setplus5img(cloudy)
          }
          else if((iconplus5 === '09d') || (iconplus5 === '09n')){
            setplus5img(lightrain)
          }
          else if((iconplus5 === '10d') || (iconplus5 === '10n')){
            setplus5img(heavyrain)
          }
          else if((iconplus5 ==='11d') || (iconplus5 ==='11n')){
            setplus5img(storm)
          }
          else if((iconplus5 === '13d') || (iconplus5 ==='13n')){
            setplus5img(snow)
          }
          else if((iconplus5 === '50d') || (iconplus5 === '50n')){
            setplus5img(fog)
          }
          if (( iconplus6 === '01d')){
            setplus6img(clear)
          }
          else if((iconplus6 === '01n')){
            setplus6img(night)
          }
          else if((iconplus6 === '02d') || (iconplus6 === '02n') || (iconplus6 === '03d') || (iconplus6 === '03n') || (iconplus6 === '04d') || (iconplus6 === '04n')){
            console.log('heheh')
            setplus6img(cloudy)
          }
          else if((iconplus6 === '09d') || (iconplus6 === '09n')){
            setplus6img(lightrain)
          }
          else if((iconplus6 === '10d') || (iconplus6 === '10n')){
            setplus6img(heavyrain)
          }
          else if((iconplus6 ==='11d') || (iconplus6 ==='11n')){
            setplus6img(storm)
          }
          else if((iconplus6 === '13d') || (iconplus6 ==='13n')){
            setplus6img(snow)
          }
          else if((iconplus6 === '50d') || (iconplus6 === '50n')){
            setplus6img(fog)
          }
          if (( iconplus7 === '01d')){
            setplus7img(clear)
          }
          else if((iconplus7 === '01n')){
            setplus7img(night)
          }
          else if((iconplus7 === '02d') || (iconplus7 === '02n') || (iconplus7 === '03d') || (iconplus7 === '03n') || (iconplus7 === '04d') || (iconplus7 === '04n')){
            console.log('heheh')
            setplus7img(cloudy)
          }
          else if((iconplus7 === '09d') || (iconplus7 === '09n')){
            setplus7img(lightrain)
          }
          else if((iconplus7 === '10d') || (iconplus7 === '10n')){
            setplus7img(heavyrain)
          }
          else if((iconplus7 ==='11d') || (iconplus7 ==='11n')){
            setplus7img(storm)
          }
          else if((iconplus7 === '13d') || (iconplus7 ==='13n')){
            setplus7img(snow)
          }
          else if((iconplus7 === '50d') || (iconplus7 === '50n')){
            setplus7img(fog)
          }
          if (( iconplus8 === '01d')){
            setplus8img(clear)
          }
          else if((iconplus8 === '01n')){
            setplus8img(night)
          }
          else if((iconplus8 === '02d') || (iconplus8 === '02n') || (iconplus8 === '03d') || (iconplus8 === '03n') || (iconplus8 === '04d') || (iconplus8 === '04n')){
            console.log('heheh')
            setplus8img(cloudy)
          }
          else if((iconplus8 === '09d') || (iconplus8 === '09n')){
            setplus8img(lightrain)
          }
          else if((iconplus8 === '10d') || (iconplus8 === '10n')){
            setplus8img(heavyrain)
          }
          else if((iconplus8 ==='11d') || (iconplus8 ==='11n')){
            setplus8img(storm)
          }
          else if((iconplus8 === '13d') || (iconplus8 ==='13n')){
            setplus8img(snow)
          }
          else if((iconplus8 === '50d') || (iconplus8 === '50n')){
            setplus8img(fog)
          }
          if (( iconplus9 === '01d')){
            setplus9img(clear)
          }
          else if((iconplus9 === '01n')){
            setplus9img(night)
          }
          else if((iconplus9 === '02d') || (iconplus9 === '02n') || (iconplus9 === '03d') || (iconplus9 === '03n') || (iconplus9 === '04d') || (iconplus9 === '04n')){
            console.log('heheh')
            setplus9img(cloudy)
          }
          else if((iconplus9 === '09d') || (iconplus9 === '09n')){
            setplus9img(lightrain)
          }
          else if((iconplus9 === '10d') || (iconplus9 === '10n')){
            setplus9img(heavyrain)
          }
          else if((iconplus9 ==='11d') || (iconplus9 ==='11n')){
            setplus9img(storm)
          }
          else if((iconplus9 === '13d') || (iconplus9 ==='13n')){
            setplus9img(snow)
          }
          else if((iconplus9 === '50d') || (iconplus9 === '50n')){
            setplus9img(fog)
          }
          if (( iconplus1 === '01d')){
            setplus1img(clear)
          }
          else if((iconplus1 === '01n')){
            setplus1img(night)
          }
          else if((iconplus1 === '02d') || (iconplus1 === '02n') || (iconplus1 === '03d') || (iconplus1 === '03n') || (iconplus1 === '04d') || (iconplus1 === '04n')){
            console.log('heheh')
            setplus1img(cloudy)
          }
          else if((iconplus1 === '09d') || (iconplus1 === '09n')){
            setplus1img(lightrain)
          }
          else if((iconplus1 === '10d') || (iconplus1 === '10n')){
            setplus1img(heavyrain)
          }
          else if((iconplus1 ==='11d') || (iconplus1 ==='11n')){
            setplus1img(storm)
          }
          else if((iconplus1 === '13d') || (iconplus1 ==='13n')){
            setplus1img(snow)
          }
          else if((iconplus1 === '50d') || (iconplus1 === '50n')){
            setplus1img(fog)
          }
        }
        set_icons()
    })
    // let url_backup = ""
    // const apikey = "6e64a78c03e21e2143da3ea13650b0de"
    // const [locationlat, setLocationlat] = useState(bottomdata[0])
    // const [locationlon, setLocationlon] = useState(bottomdata[1])
    // useEffect(() =>{
    //     const setcoords = async () =>{
    //         setLocationlat(lonlat[0])
    //         setLocationlat(lonlat[1])
    //         let result = await fetch(coordsurl)
    //         if ((result.status === 404) || (result.status === 400)){
    //             console.log('iiiii')
    //         }
    //         else{
    //             result.json().then(json => {
    //                 setLocationlat(json[0].lat)
    //                 setLocationlon(json[0].lon)
    //                 console.log(locationlat + ' jjjjjjj' + json[0].lat)

    //             })
    //         }
    //     }
    //     setcoords();
    // },[])
    // console.log(locationlat)
    // const city = lonlat[2]
    // let locationlat = 51.5
    // let locationlon = 0.12
    // if(bottomlocation[0] instanceof Object){
    // }
    // else{
    //     locationlat = bottomlocation[0]
    //     locationlon = bottomlocation[1]
    // }
    
    // console.log(bottomlocation)
    // let url = `https://api.openweathermap.org/data/3.0/onecall?lat=${locationlat}&lon=${locationlon}&exclude=current,daily,minutely,alerts&units=Metric&appid=${apikey}`
    // url_backup = `https://api.openweathermap.org/data/3.0/onecall?lat=51.5&lon=0.12&exclude=current,daily,minutely,alerts&units=Metric&appid=${apikey}`
    // let coordsurl = `http://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=${apikey}`

    // useEffect(() => {
    //     const fetchData = async () => {
    //         console.log(bottomdata[0])
    //              let result = await fetch(url)
    //              if ((result.status === 404) || (result.status === 400)){
    //                 result = await fetch(url_backup)
    //                 console.log('whyyyyyyyy')
    //             }
                
    //             result.json().then(json => {
    //                 console.log(locationlat + 'llllllllllllll')
    //                 console.log(locationlon)
    //                 console.log(json)
    //                 setNowtemp(Math.floor(json.hourly[0].temp) + '°C')
    //                 setNowhumidity(Math.floor(json.hourly[0].humidity) + '%')

    //                 setPlus1(moment(json.hourly[1].dt*1000).format('HH:mm'))
    //                 setPlus1temp(Math.floor(json.hourly[1].temp) + '°C')
    //                 setPlus1humidity(Math.floor(json.hourly[1].humidity) + '%')

    //                 setPlus2(moment(json.hourly[2].dt*1000).format('HH:mm'))
    //                 setPlus2temp(Math.floor(json.hourly[2].temp) + '°C')
    //                 setPlus2humidity(Math.floor(json.hourly[2].humidity) + '%')

    //                 setPlus3(moment(json.hourly[3].dt*1000).format('HH:mm'))
    //                 setPlus3temp(Math.floor(json.hourly[3].temp) + '°C')
    //                 setPlus3humidity(Math.floor(json.hourly[3].humidity) + '%')

    //                 setPlus4(moment(json.hourly[4].dt*1000).format('HH:mm'))
    //                 setPlus4temp(Math.floor(json.hourly[4].temp) + '°C')
    //                 setPlus4humidity(Math.floor(json.hourly[4].humidity) + '%')

    //                 setPlus5(moment(json.hourly[5].dt*1000).format('HH:mm'))
    //                 setPlus5temp(Math.floor(json.hourly[5].temp) + '°C')
    //                 setPlus5humidity(Math.floor(json.hourly[5].humidity) + '%')

    //                 setPlus6(moment(json.hourly[6].dt*1000).format('HH:mm'))
    //                 setPlus6temp(Math.floor(json.hourly[6].temp) + '°C')
    //                 setPlus6humidity(Math.floor(json.hourly[6].humidity) + '%')

    //                 setPlus7(moment(json.hourly[7].dt*1000).format('HH:mm'))
    //                 setPlus7temp(Math.floor(json.hourly[7].temp) + '°C')
    //                 setPlus7humidity(Math.floor(json.hourly[7].humidity) + '%')

    //                 setPlus8(moment(json.hourly[8].dt*1000).format('HH:mm'))
    //                 setPlus8temp(Math.floor(json.hourly[8].temp) + '°C')
    //                 setPlus8humidity(Math.floor(json.hourly[8].humidity) + '%')
                    
    //                 setPlus9(moment(json.hourly[9].dt*1000).format('HH:mm'))
    //                 setPlus9temp(Math.floor(json.hourly[9].temp) + '°C')
    //                 setPlus9humidity(Math.floor(json.hourly[9].humidity) + '%')
    //             })  


            
    //     }

    //     fetchData();
    // },[])

    return(
        <div className="Wrapper_Bottom">
            <div className="hourly">
                <div className="temp">
                    {bottomdata[0]}
                </div>
                <div className="humidity">
                    {bottomdata[1]}
                </div>
                <div className="img_condition">
                    <img src={nowimg} className="image_condition"></img>
                </div>
                <div className="time">
                    now
                </div>
            </div>
            <div className="hourly">
            <div className="temp">
                    {bottomdata[3]}
                </div>
                <div className="humidity">
                    {bottomdata[4]}
                </div>
                <div className="img_condition">
                <img src={plus1img} className="image_condition"></img>
                </div>
                <div className="time">
                    {bottomdata[2]}
                </div>
            </div>
            <div className="hourly">
            <div className="temp">
                    {bottomdata[6]}
                </div>
                <div className="humidity">
                    {bottomdata[7]}
                </div>
                <div className="img_condition">
                <img src={plus2img} className="image_condition"></img>
                </div>
                <div className="time">
                    {bottomdata[5]}
                </div>
            </div>
            <div className="hourly">
            <div className="temp">
                    {bottomdata[9]}
                </div>
                <div className="humidity">
                    {bottomdata[10]}
                </div>
                <div className="img_condition">
                <img src={plus3img} className="image_condition"></img>
                </div>
                <div className="time">
                    {bottomdata[8]}
                </div>
            </div>
            <div className="hourly">
            <div className="temp">
                    {bottomdata[12]}
                </div>
                <div className="humidity">
                    {bottomdata[13]}
                </div>  
                <div className="img_condition">
                <img src={plus4img} className="image_condition"></img>
                </div>
                <div className="time">
                    {bottomdata[11]}
                </div>
            </div>
            <div className="hourly">
            <div className="temp">
                    {bottomdata[15]}
                </div>
                <div className="humidity">
                    {bottomdata[16]}
                </div>
                <div className="img_condition">
                <img src={plus5img} className="image_condition"></img>
                </div>
                <div className="time">
                    {bottomdata[14]}
                </div>
            </div>
            <div className="hourly">
            <div className="temp">
                    {bottomdata[18]}
                </div>
                <div className="humidity">
                    {bottomdata[19]}
                </div>
                <div className="img_condition">
                <img src={plus6img} className="image_condition"></img>
                </div>
                <div className="time">
                    {bottomdata[17]}
                </div>
            </div>
            <div className="hourly">
            <div className="temp">
                    {bottomdata[21]}
                </div>
                <div className="humidity">
                    {bottomdata[22]}
                </div>
                <div className="img_condition">
                <img src={plus7img} className="image_condition"></img>
                </div>
                <div className="time">
                    {bottomdata[20]}
                </div>
            </div>
            <div className="hourly">
            <div className="temp">
                    {bottomdata[24]}
                </div>
                <div className="humidity">
                    {bottomdata[25]}
                </div>
                <div className="img_condition">
                <img src={plus8img} className="image_condition"></img>
                </div>
                <div className="time">
                    {bottomdata[23]}
                </div>
            </div>
            <div className="hourly">
            <div className="temp">
                    {bottomdata[27]}
                </div>
                <div className="humidity">
                    {bottomdata[28]}
                </div>
                <div className="img_condition">
                <img src={plus9img} className="image_condition"></img>
                </div>
                <div className="time">
                    {bottomdata[26]}
                </div>
            </div>
        </div>
    )
}

export default Bottom;