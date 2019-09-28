import React, { Component } from 'react';
import './App.css';
import clock from '../src/icons/clock.png'
import phone from '../src/icons/phone.png'
import logo from '../src/icons/logo.png'
import cart from '../src/icons/cart.svg'
import body from '../src/icons/body.jpg'
import facebook from '../src/icons/facebook.svg'
import google from '../src/icons/google-plus.svg'
import instagram from '../src/icons/instagram.svg'
import twitter from '../src/icons/twitter.svg'
import navbar from '../src/icons/navbar.svg'
import down from '../src/icons/down.svg'


export default class App extends Component {
render(){
  return (
  /* header contents */
  <div className="App">
      <header className="App-header">
         <div ><p className="header-text">Welcome to hair salon!</p></div>
            <div className="header-info"> 
                <div className = "header-timing">
                <img className="header-image" src={clock} alt="Timings" width="20px" height="20px"/>
                <p className="header-text"> Mon-Sat: 8.00 to 17.00  </p>  
                </div>
                <div className="header-call">
                  <img className="header-image" src={phone} alt="" width="20px" height="20px"/>
                  <p className="header-text"> Call us: (+12)-345-6789 </p>
                </div>
            </div>
      </header>
            
       {/* navigation bar */}
      <nav className="App-nav">
            <div className="nav-image">
                <img className="logo-image" src={logo} alt="Akame"/>
            </div>
            <div className="small-nav-bar">
                <button className="small-nav">
                   <img src={navbar} alt="nav" width="20px" height="20px"/>
               </button>
            </div>
            <div className="classy-nav">
               <div className="list-nav">
                  <ul className ="list-nav-bar">
                    <li className="nav-row">
                      <a className="nav-element" href="#home">Home</a>
                    </li>
                    <li className="nav-row">
                        <div className="dropdown">
                          <p className="dropbtn">
                            Pages <img src={down} alt="" width="10px" height="10px"/>
                          </p>
                          <div className="dropdown-content">
                            <a href="#home">Home</a>
                            <a href="#portfolio">Portfolio</a>
                            <a href="#services">Services</a>
                            <a href="#about-us">About Us</a>
                            <a href="#blog">Blog</a>
                            <a href="#contact">Contact</a>
                          </div>
                        </div>
                    </li>
                    <li className="nav-row">
                        <a className="nav-element" href="#portfolio">Portfolio</a>
                    </li>
                    <li className="nav-row">
                        <a className="nav-element" href="#services">Services</a>
                    </li>
                    <li className="nav-row">
                        <a className="nav-element" href="#about-us">About Us</a>
                    </li>
                    <li className="nav-row">
                        <a className="nav-element" href="#blog">Blog</a>
                    </li>
                    <li className="nav-row">
                        <a className="nav-element" href="#contact">Contact</a>
                    </li>
                  </ul>
                 </div>
                 <div className="nav-image-container">
                    <img className="nav-image-cart" src={cart} alt="Timings" width="30px" height="30px"/>
                 </div>

                 <div className="nav-buttun">
                      <button className="book-now-button">BOOK NOW</button>
                 </div>
          </div>
      </nav>

      {/* body content */}
      <div className="body-part">
              <img className="body-image" src={body} alt="body"/>
              <h1 className="body-text">HELLO!</h1>
      </div>
      
      {/* footer content */}
      <footer className="footer-content">
              <div className="information">
                  <img className="footer-logo"src={logo} alt={<h1>Akame</h1>}/>
                  <div className="information-text">
                    <br/>  <p>We would love to serve you and let you enjoy<br/>
                        your culinary experience Excepteur sint <br/>
                        occaecat cupidatat non proident.</p>
                      <p>Copyright ©2019 All rights reserved | This <br/>
                        template is made with  by Colorlib</p>
                  </div>
              </div>

              <div className="time-details">
                  <div className="information-text">
                      <h1>Opening Times</h1><br/>
                      <p>Monday: Friday: 10.00 - 23.00</p>
                      <p>Saturday: 10.00 - 19.00</p>
                  </div>
                  <img src={facebook} alt="facebook" width="20px" height="30px"/>
                  <img className="social-icon" src={twitter} alt="twitter" width="20px" height="30px"/>
                  <img className="social-icon" src={google} alt="google-plus" width="20px" height="30px"/>
                  <img className="social-icon" src={instagram} alt="instagram" width="20px" height="30px"/>
              </div>
              
              <div className="details">
                <div className="information-text">
                  <h1>Contact Us</h1><br/>
                  <p>Tel: (+12) 345 678 910</p>
                  <p>Address: Iris Watson, P.O.</p>
                  <p>Box 283 8562 Fusce Rd, NY</p>
                </div>
            </div>
      </footer>
</div>
);
}
}



