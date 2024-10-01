//import React from 'react'
import './../App.css';
import AboutUs from './AboutUs';
import ContactUs from './ContactUs';
import Products from './Products';

function Home() {
  return (
    <div className='inputvalue'>
      <input id="search" type="text" placeholder="Search Something"></input>
      <Products/>
      <AboutUs/>
      <ContactUs/>
    </div>
  )
}

export default Home
