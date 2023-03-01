import './home.css'
import Header from '../components/Header/header';
import React from 'react';
//import header.css
import '../components/Header/header.css';


export default function Home(){
    return (
    <div className=''>

      <div className="centered">
        <h1>SparkHacks 2023</h1>
        <b>April 7-8</b>

        <div>
          <button className='header-button'><b>RSVP</b></button>

          <button className='header-button'><b>Newsletter</b></button>
        </div>

      </div>  
      <Header />

    </div>
    )
}
