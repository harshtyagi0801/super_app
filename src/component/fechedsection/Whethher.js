import React, { useState, useEffect } from 'react';
import whtherstyle from './whether.module.css';
import axios from 'axios';
import { FaTemperatureHalf } from 'react-icons/fa6';
import { BiWind } from 'react-icons/bi';
import { BsDropletHalf } from 'react-icons/bs';


function Whethher() {
    const [weatherData, setWeatherData] = useState(null);
    const [formattedDate, setFormattedDate] = useState('');
   
    const [formattedTime, setFormattedTime] = useState('');
   
    useEffect(() => {
        axios.get('https://api.weatherapi.com/v1/current.json?key=bdea9abc5a54446482971503232210&q=ajmer&aqi=no')
            .then(response => {
                const data = response.data;
                console.log(data)
                setWeatherData(data);
            })
            .catch(error => {
                console.error('Error fetching weather data:', error);
            });
    });
    useEffect(() => {
        const currentDate = new Date();
        const day = currentDate.getDate();
        const month = currentDate.getMonth() + 1;
        const year = currentDate.getFullYear();
        const formattedDateStr = `${month}-${day}-${year}`;
        setFormattedDate(formattedDateStr);

        const hours = currentDate.getHours();
        const minutes = currentDate.getMinutes();
        const ampm = hours >= 12 ? 'PM' : 'AM';
        const formattedHours = hours % 12 || 12;
        const formattedTimeStr = `${formattedHours}:${minutes < 10 ? '0' : ''}${minutes} ${ampm}`;
        setFormattedTime(formattedTimeStr);
    }, []);
    return (
        <div className={whtherstyle.container}>
            <div className={whtherstyle.date}>
                <ul style={{ listStyle: 'none' }} className={whtherstyle.time}>
                    <li>{formattedDate}</li>
                    <li>{formattedTime}</li>
                </ul>
            </div>
            <div className={whtherstyle.icon}>
                {weatherData && (
                    <div className={whtherstyle.main}>
                        <div style={{textAlign:'center'}}>
                        {weatherData.current.condition.icon && (
                            <img
                                src={weatherData.current.condition.icon}
                                alt="Weather Icon"
                                style={{ width: '80px', height: '80px',marginTop:'-10px' }}
                            />
                        )}
                        <p  >{weatherData.current.condition.text}</p>
                        </div>
                        <span style={{fontSize:'45px', margin:'10px'}}>|</span>
                        <div style={{textAlign:'center',marginTop:'10px',marginLeft:'20px'}}>
                        <p style={{fontSize:'35px' ,marginBottom:'7px'}}> {weatherData.current.temp_c}°C</p>
                        <div style={{display:'flex'}}>
                        <FaTemperatureHalf style={{fontSize:'30px',marginTop:'5px'}}/>
                        <p >{weatherData.current.pressure_mb} mb<br/>Pressure </p>
                        </div>
                        </div >
                        <span style={{fontSize:'45px', margin:'10px'}}>|</span>
                        <div style={{textAlign:'start'}}>
                        <div style={{display:'flex',marginTop:'10px'}}>
                        <BiWind style={{fontSize:'30px',marginTop:'5px'}}/>
                        <p style={{fontSize:'14px' }}> {weatherData.current.wind_kph} km/h<br/>Wind</p>
                        </div >
                        <div style={{display:'flex'}} >
                        <BsDropletHalf style={{fontSize:'20px',marginTop:'20px'}}/>
                        <p style={{fontSize:'12px', marginTop:'20px'}}> {weatherData.current.humidity}%<br/>Humidity</p>
                        </div>
                        </div>
                    </div>
                )}
            </div>

        </div>
    );
}

export default Whethher;
