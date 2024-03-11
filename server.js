require('dotenv').config();
const axios = require('axios');

const apiKey = '84207c0c708b33ef09a7dfd22f7a967a';
const lat = 51.5074; // 伦敦的纬度
const lon = -0.1278; // 伦敦的经度

async function getLondonWeather() {
    const url = `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&exclude=minutely,hourly,daily&appid=${apiKey}&units=metric`;

    try {
        const response = await axios.get(url);
        console.log("伦敦的天气信息:", response.data);
    } catch (error) {
        console.error("获取天气信息时发生错误:", error);
    }
}

getLondonWeather();

