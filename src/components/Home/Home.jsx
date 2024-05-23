import React from 'react';
import '../Home/Home.css';
import Spline from '@splinetool/react-spline';
import instagram from '../../assets/instagram.svg'
import linkedin from '../../assets/linkedin.svg'
import twitter from '../../assets/twitter.svg'

const Home = () => {
  return (
 <>
    <div className="homepage-container">
      <div className="text-container">
        <h1>Transform<br/>Your Business<br/>With a Powerful Web<br/>Presence <span className="sparkle">✨</span></h1>
        <button className="cta-button">Book a call</button>
        <div className="indicator-container">
          <div className="indicator" > <img src={instagram} />  </div>
          <div className="indicator"> <img src={linkedin} />  </div>
          <div className="indicator"> <img src={twitter} /> </div>
         
        </div>
      </div>
      <div id='model'>

      <Spline scene="https://prod.spline.design/mXTk7YWKBaFyqHvG/scene.splinecode" />
      </div>
    </div>
    <div class="marquee" >
        <div class="track">
          <div class="content">
            &nbsp; Fast Website ✨ Elegant Design ✨ Affordable website at best Quality ✨ Sales Machine ✨ Unique ✨ Responsive Design ✨ 
            Digital Transformation ✨ Secure website ✨ Customized website ✨ Creative solution ✨ Fast Website ✨ Elegant Design ✨ Affordable website at best Quality ✨ Sales Machine ✨ Unique ✨ Responsive Design ✨ 
            Digital Transformation ✨ Secure website ✨ Customized website ✨ Creative solution ✨ Fast Website ✨ Elegant Design ✨ Affordable website at best Quality ✨ Sales Machine ✨ Unique ✨ Responsive Design ✨ 
            Digital Transformation ✨ Secure website ✨ Customized website ✨ Creative solution ✨  {" "}
          </div>
        </div>
      </div>
      </>
  );
};

export default Home;
