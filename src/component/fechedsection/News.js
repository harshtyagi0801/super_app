import React, { useEffect, useState } from 'react';
import newsstyle from './news.module.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function News() {
    const [newsData, setNewsData] = useState([]);
    const [formattedDate, setFormattedDate] = useState('');
    const [formattedTime, setFormattedTime] = useState('');
   
    const navigate = useNavigate();

    useEffect(() => {
        axios
            .get('https://newsapi.org/v2/everything?q=tesla&from=2023-09-30&sortBy=publishedAt&apiKey=8c93c62aed7444e980c78cef5e0761ae')
            .then((response) => {
                const data = response.data;
                setNewsData(data.articles);
            })
            .catch((error) => {
                console.error('Error fetching news data:', error);
            });
    }, []); 

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
        <>
        <div className={newsstyle.container}>
            {newsData.length > 0 && (
                <div className={newsstyle.newsItem}>
                    <img src={newsData[0].urlToImage} alt={newsData[0].title} />
                    <p>{newsData[0].description}</p>
                </div>
            )}
            <div className={newsstyle.date}>
                {newsData.length > 0 && (
                    <p>{newsData[0].title}</p>
                )}
                <ul style={{ listStyle: 'none', display: 'flex', justifyContent: 'start' }} className={newsstyle.time}>
                    <li>{formattedDate}</li>|
                    <li>{formattedTime}</li>
                </ul>
            </div>
            
        </div>
        <button
        style={{position:'absolute',bottom:'1%', right:'3%' ,width:'10%'}}
        onClick={() => navigate('/Movies')}
        >Browse</button>
        </>
    );
}

export default News;
