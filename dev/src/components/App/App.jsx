import './App.css'
import { useState } from 'react';
import Header from '../Header/Header.jsx'
import Footer from '../Footer/Footer.jsx'
import HoroscopeData from '../horoscopeData/HoroscopeData.jsx'
import generateHoroscopeData from '../horoscopeData/hooks/generateHoroscopeData.jsx'

function App() {
  let [intialHoroscopeData, setHoroscopeData] = useState({
    "name": "",
    "date": ["Waiting for date", "It will be awesome!"], 
    "ImageRoute": "",
    "Element":"",
    "Description":""
  });

  return (
    <>
      <Header/>
      <main>
        <section className="birthdate-container" id="birthdate-field">
          <form>
            <label htmlFor="birthdateInput">Fill up your birthdate to start</label>
            <input type="date" id="birthdateInput" name="birthdateInput" onChange={ event => intialHoroscopeData = setHoroscopeData(generateHoroscopeData(event)) }></input>
          </form>
        </section>
        <HoroscopeData signObj={ intialHoroscopeData }/>
      </main>
      <Footer/>
    </>
  )
}

export default App
