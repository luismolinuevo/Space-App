import React from 'react';
import { useLoaderData, Link } from "react-router-dom";
import "./DailyImage.css";

export default function DailyImage() {
    const dailyImageData = useLoaderData();
    console.log(dailyImageData)
    return (
      <div className='dailyimage'>
        <div className='container'>
          <div className='dimain'>
            <h1 className='heading'>Nasa's Astronomy Picture of the Day</h1>
            {dailyImageData ? (
            <div className='diapidata'>
              <img src={dailyImageData.url}/>
              <p>{dailyImageData.explanation}</p>
            </div>
            ) : (
              <div>Error loading info</div>
            )}
          </div>
        </div>
      </div>
    )
}
