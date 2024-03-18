import React from "react";
import './Bottom.css';
import { useState, useEffect } from 'react';
import moment from 'moment'; 

function Bottom({bottomdata}){
    // let url_backup = ""
    // const apikey = "6e64a78c03e21e2143da3ea13650b0de"
    // const [locationlat, setLocationlat] = useState()
    // const [locationlon, setLocationlon] = useState()
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

    // for (let i =0; i<bottomdata.length; i++){
        
    // }
    const [nowtemp, setNowtemp] = useState()
    const [nowhumidity, setNowhumidity] = useState()
    const [plus1, setPlus1] = useState('plus 1 hour')
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
    useEffect(() => {
        const fetchData = async () => {
    //              let result = await fetch(url)
    //              if ((result.status === 404) || (result.status === 400)){
    //                 result = await fetch(url_backup)
    //                 console.log('whyyyyyyyy')
    //             }
                
    //             result.json().then(json => {
    //                 console.log(locationlat + 'llllllllllllll')
    //                 console.log(locationlon)
    //                 console.log(json)
                    setNowtemp(bottomdata[0])
                    setNowhumidity(bottomdata[1])

                    setPlus1(bottomdata[2])
                    setPlus1temp(bottomdata[3])
                    setPlus1humidity(bottomdata[4])

                    setPlus2(bottomdata[5])
                    setPlus2temp(bottomdata[6])
                    setPlus2humidity(bottomdata[7])

                    setPlus3(bottomdata[8])
                    setPlus3temp(bottomdata[9])
                    setPlus3humidity(bottomdata[10])

                    setPlus4(bottomdata[11])
                    setPlus4temp(bottomdata[12])
                    setPlus4humidity(bottomdata[13])

                    setPlus5(bottomdata[14])
                    setPlus5temp(bottomdata[15])
                    setPlus5humidity(bottomdata[16])

                    setPlus6(bottomdata[17])
                    setPlus6temp(bottomdata[18])
                    setPlus6humidity(bottomdata[19])

                    setPlus7(bottomdata[20])
                    setPlus7temp(bottomdata[21])
                    setPlus7humidity(bottomdata[22])

                    setPlus8(bottomdata[23])
                    setPlus8temp(bottomdata[24])
                    setPlus8humidity(bottomdata[25])
                    
                    setPlus9(bottomdata[26])
                    setPlus9temp(bottomdata[27])
                    setPlus9humidity(bottomdata[28])
        }


            
        

        fetchData();
    },[])
    console.log("hhhh" +bottomdata+plus1temp)
    return(
        <div className="Wrapper_Bottom">
            <div className="hourly">
                <div className="temp">
                    {nowtemp}
                </div>
                <div className="humidity">
                    {nowhumidity}
                </div>
                <div className="img_condition">

                </div>
                <div className="time">
                    now
                </div>
            </div>
            <div className="hourly">
            <div className="temp">
                    {bottomdata[2]}
                </div>
                <div className="humidity">
                    {plus1humidity}
                </div>
                <div className="img_condition">

                </div>
                <div className="time">
                    {plus1}
                </div>
            </div>
            <div className="hourly">
            <div className="temp">
                    {plus2temp}
                </div>
                <div className="humidity">
                    {plus2humidity}
                </div>
                <div className="img_condition">

                </div>
                <div className="time">
                    {plus2}
                </div>
            </div>
            <div className="hourly">
            <div className="temp">
                    {plus3temp}
                </div>
                <div className="humidity">
                    {plus3humidity}
                </div>
                <div className="img_condition">

                </div>
                <div className="time">
                    {plus3}
                </div>
            </div>
            <div className="hourly">
            <div className="temp">
                    {plus4temp}
                </div>
                <div className="humidity">
                    {plus4humidity}
                </div>  
                <div className="img_condition">

                </div>
                <div className="time">
                    {plus4}
                </div>
            </div>
            <div className="hourly">
            <div className="temp">
                    {plus5temp}
                </div>
                <div className="humidity">
                    {plus5humidity}
                </div>
                <div className="img_condition">

                </div>
                <div className="time">
                    {plus5}
                </div>
            </div>
            <div className="hourly">
            <div className="temp">
                    {plus6temp}
                </div>
                <div className="humidity">
                    {plus6humidity}
                </div>
                <div className="img_condition">

                </div>
                <div className="time">
                    {plus6}
                </div>
            </div>
            <div className="hourly">
            <div className="temp">
                    {plus7temp}
                </div>
                <div className="humidity">
                    {plus7humidity}
                </div>
                <div className="img_condition">

                </div>
                <div className="time">
                    {plus7}
                </div>
            </div>
            <div className="hourly">
            <div className="temp">
                    {plus8temp}
                </div>
                <div className="humidity">
                    {plus8humidity}
                </div>
                <div className="img_condition">

                </div>
                <div className="time">
                    {plus8}
                </div>
            </div>
            <div className="hourly">
            <div className="temp">
                    {plus9temp}
                </div>
                <div className="humidity">
                    {plus9humidity}
                </div>
                <div className="img_condition">

                </div>
                <div className="time">
                    {plus9}
                </div>
            </div>
        </div>
    )
}

export default Bottom;