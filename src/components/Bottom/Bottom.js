import React from "react";
import './Bottom.css';
import { useState, useEffect } from 'react';
import moment from 'moment'; 

function Bottom({bottomdata}){
    let url_backup = ""
    const apikey = "6e64a78c03e21e2143da3ea13650b0de"
    const [locationlat, setLocationlat] = useState(bottomdata[0])
    const [locationlon, setLocationlon] = useState(bottomdata[1])
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
    let url = `https://api.openweathermap.org/data/3.0/onecall?lat=${locationlat}&lon=${locationlon}&exclude=current,daily,minutely,alerts&units=Metric&appid=${apikey}`
    url_backup = `https://api.openweathermap.org/data/3.0/onecall?lat=51.5&lon=0.12&exclude=current,daily,minutely,alerts&units=Metric&appid=${apikey}`
    // let coordsurl = `http://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=${apikey}`

    console.log(bottomdata + 'hehehehadjhfakjdfhalkdsjfhaksjdfhaksjdfhasdkj')
    const [nowtemp, setNowtemp] = useState(bottomdata[0])
    const [nowhumidity, setNowhumidity] = useState(bottomdata[1])
    const [plus1, setPlus1] = useState(bottomdata[2])
    const [plus1temp, setPlus1temp] = useState()
    const [plus1humidity, setPlus1humidity] = useState()
    const [plus2, setPlus2] = useState('plus 2 hour')
    const [plus2temp, setPlus2temp] = useState()
    const [plus2humidity, setPlus2humidity] = useState()
    const [plus3, setPlus3] = useState('plus 3 hour')
    const [plus3temp, setPlus3temp] = useState()
    const [plus3humidity, setPlus3humidity] = useState()
    const [plus4, setPlus4] = useState('plus 4 hour')
    const [plus4temp, setPlus4temp] = useState()
    const [plus4humidity, setPlus4humidity] = useState()
    const [plus5, setPlus5] = useState('plus 5 hour')
    const [plus5temp, setPlus5temp] = useState()
    const [plus5humidity, setPlus5humidity] = useState()
    const [plus6, setPlus6] = useState('plus 6 hour')
    const [plus6temp, setPlus6temp] = useState()
    const [plus6humidity, setPlus6humidity] = useState()
    const [plus7, setPlus7] = useState('plus 7 hour')
    const [plus7temp, setPlus7temp] = useState()
    const [plus7humidity, setPlus7humidity] = useState()
    const [plus8, setPlus8] = useState('plus 8 hour')
    const [plus8temp, setPlus8temp] = useState()
    const [plus8humidity, setPlus8humidity] = useState()
    const [plus9, setPlus9] = useState('plus 9 hour')
    const [plus9temp, setPlus9temp] = useState()
    const [plus9humidity, setPlus9humidity] = useState()
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

                </div>
                <div className="time">
                    {bottomdata[26]}
                </div>
            </div>
        </div>
    )
}

export default Bottom;