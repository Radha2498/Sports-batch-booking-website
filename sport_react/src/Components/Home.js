import React from 'react';
import '../Styles/home.css';
import Banner from '../Images/banner.jpg';
import golf from '../Images/golf.jpg';
import fea from '../Images/fea_2.jpg';
import fea3 from '../Images/fea_3.jpg';
import fea4 from '../Images/fea_4.jpg';
import img1 from '../Images/1.jpg';
import logo1 from "../Images/logo-1.jpg";
import logo2 from "../Images/logo-2.jpg"
import logo3 from "../Images/logo-3.jpg"
import logo4 from "../Images/logo-4.jpg"
import logo5 from "../Images/logo-5.jpg"
import 'video-react/dist/video-react.css';
import { Player } from 'video-react';

class Home extends React.Component{
    render(){
        return(
            <div>
                <div>
            <div className="block-1">
            <h1 className="sportspirit">Sportspirit</h1>
            {/* <div className="phone"><span class="fa fa-mobile">+91849384389</span></div>
            <div className="add"><span class="fa fa-map-marker">Rambug colony Mumbai</span></div> */}
            {/* <div className="tt"><span class="fa fa-clock-o"> Mon - Sat 6:00 - 10:00</span></div> */}
            </div>
            <img src= {Banner} height="700px"  width="1333px" />
            <div class="title">BEST PLACE TO PLAY</div>
            <div class="subtitle">We’re sure we are <br/>
            the best club!
            </div>
            <div class="quote">“Hard work beats talent when talent doesn't work hard"</div>
        </div>

        <div className="block">

        <div className="section">
        <img src={golf} class="image" />
        <h4 style={{marginLeft: '138px',fontSize: '20px',marginTop: '13px'}}>Movement</h4>

        <img src={fea} class="image-1" />
        <h4 style={{ marginLeft: '482px', fontSize: '20px', marginTop: '-30px'}}>Time</h4>

        <img src={fea3} class="image-2" />
        <h4 style={{ marginLeft: '776px', fontSize: '20px', marginTop: '-34px'}}>Practice</h4>

        <img src={fea4} class="image-3" />
        <h4 style={{marginLeft:  '1076px',  fontSize: '20px',   marginTop: '-32px'}}> Winner List</h4>
        </div>

        </div>

        <div class="block-2">
            <img src={img1}   height= "457px" />
            <h5 class="Choose">Why Choose Us</h5>
            <div class="sec">Sportspirit, a chain of seven conveniently located, well-equipped sports and fitness clubs across Pune, is committed to provide quality sports facilities and personalised fitness programmes. We strive to bestow ‘Recreation – the Spice of Life’ on you because we consider Relaxation and Recreation as the route to a healthy body, a healthier mind and the healthiest society</div>
            </div>


            <div class="block-3">
                <span class="fa fa-futbol-o football"></span>
                <h5 class="exp">Experience</h5>
                <div class="club">The Club is ideally suited for corporate events and parties where our team designs customised outbound training package to encourage team spirit</div>
                <span class="fa fa-trophy trophy"></span> 
                <h5 class="award">Award</h5>  
                <div class="club2">The spacious two and half acre club presents complete fun and enjoyment in a safe and green environment.</div>
                <span class="fa fa-grav grav"></span>
                <h5 class="guide">Guidance</h5>
                <div class="club3">The highlights include a 50 foot Rock Climbing wall, 11 station High-Wire Adventure, 4 Tennis Courts, 3 Badminton Courts, 1 Squash Court, 6 Table Tennis Tables.</div>
            </div>

            <div>
                <div class="block-4">
                    <div class="img-logo" style={{marginLeft: '216px'}}>
                    <img src={logo1}/>
                    <img src={logo2}/>
                    <img src={logo3}/>
                    <img src={logo4}/>
                    <img src={logo5}/>
                    </div>
                    <hr style={{width: '874px'}}/>
                    <div style={{ width: '663px',marginLeft: '341px'}}>Sports companies have become massive businesses owing to their huge presence across countries and high brand loyalty. Customers worldwide seek the latest in sports equipment, trendiest sportswear and hence, the market for these sports companies is massive.</div>
                </div>

            </div>
            
            <div class="block-5">
          
            </div>

            <div class="block-6">
            <div>
                <h1 class="club-1">Sports Club</h1>
                <div className="a1">A sports club or sporting club, sometimes athletics club or sports society or sports association, is a group of people formed for the purpose of playing sports</div>
                <h1 class="club-2">Club house</h1>
                <div className="time">
                <div>Monday    6pm - 8pm</div>
                <div>Tuesday   4pm - 6pm</div>
                <div>Thusday   3pm - 5pm</div>
                <div>Friday    5pm - 7pm</div>
                </div>
                <h1 style={{ marginTop: '-183px', marginLeft: '71%',    color: 'orange'}}>Twitter Field</h1>
                <div className="twitter">
                <div> Lorem ipsum dolor sit amet,</div>
                <a href="https://twitter.com/login?lang=en"> https://twitter.com/login?lang=en</a>
                    <div>consectetur adipisicing elit,</div>
                    <a href ="https://twitter.com/login?lang=en">https://twitter.com/login?lang=en</a>
                </div>

            </div>

            </div>
            
            </div>
        )
    }
}

export default Home;