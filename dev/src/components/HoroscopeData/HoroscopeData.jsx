import React from 'react'
import './HoroscopeData.css'

const HoroscopeData = ({ signObj }) => {
  return (
    <section id="horoscope-data" className="horoscope-data">
        <h1>{ signObj.name }</h1>
        <h2>{ `${signObj.date[0]} - ${signObj.date[1]}` }</h2>
        <sub>{ signObj.Description == "" ? "" : "Month - Day" }</sub>
        <img src={ `./src/resources/horoscopeIcons/${signObj.name == "" ? "main" : signObj.name}.jpg` } />
        <div>
            <p>{ signObj.Description }</p>
        </div>
    </section>
  )
}

export default HoroscopeData