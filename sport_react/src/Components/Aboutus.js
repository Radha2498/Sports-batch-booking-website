import React from 'react';
import '../Styles/aboutus.css';
import Fade from 'react-reveal/Fade';
import Rotate from 'react-reveal/Rotate';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

class Aboutus extends React.Component{
    
    render(){
        return(            
            <div class="about_us">
                
                <div>
                  <img src= "http://tennisclub-html.themerex.net/images/slide2_bg.jpg" height="400px"  width="1343px" />
                  <Fade bottom>
                  <h1 className="aboutus_bannertitle"><b>Play with our instructor</b></h1>
                  <p className="about_subtitle">Making a new friends along the way,is always fun,and is something that sports is great at provided</p>
                  </Fade>
                  </div>
                  <button className="btn btn-success learn">Learn more</button>

                    <div>  
                   <img class="about_img" src= "http://tennisclub-html.themerex.net/images/custom_bg2.png" height="400px"  width="1343px" />
                   <div className="about_block2">
                       <Fade right>
                        <h1 className="about_welcome">Welcome</h1>
                        <p className="about_sports">TO OUR SPORTS CLUB</p>
                        <p className="about_info">Founded in 1964 by a team of professional tennis players our club is based in one of the most picturesque areas of the country and is ideal for family membership</p>
                        </Fade>
                   </div>
                    </div>

                    <div>
                    <Fade left>
                    <h1 className="sport_club">About Us</h1>
                    </Fade>

                    <p className="sport_info">You are invited to become an exclusive club member at The sportspirit Club, Pune Managed by Navanath Shete Sports Academy.
                        "A definitive haven for Sports and Fitness in Pune"
                          Club in Kothrud, Pune is one of the best players in the category of Sports & Fitness Clubs in Pune. The club includes 4 centers spread into different parts of Kothrud, Pune offering a range of excellent facilities.
                         These centers include various services comprising of an 18m swimming pool, state of the art gymnasium, an extensive range of fitness classes such as Zumba, Dance, Aerobics, Karate, Kickboxing, exciting sports such as Lawn Tennis, Table-Tennis, Football all professionally run by our well-experienced trainers & coaches</p>
                    </div>


          
  
                    
                    {/* <Fade left>
                    <h1 className="aboutus_Coaches">Our Awsome Coaches</h1>
                    <div>
                        <img className="" src=""/>
                    </div>
                    </Fade>                      */}

            <div class="footer">
            <div>
                <h1 class="club-12">Sports Club</h1>
                <div className="a12">A sports club or sporting club, sometimes athletics club or sports society or sports association, is a group of people formed for the purpose of playing sports</div>
                <h1 class="club-22">Club house</h1>
                <div className="timer">
                <div>Monday    6pm - 8pm</div>
                <div>Tuesday   4pm - 6pm</div>
                <div>Thusday   3pm - 5pm</div>
                <div>Friday    5pm - 7pm</div>
                </div>
                <h1 style={{ marginTop: '-183px', marginLeft: '71%',    color: 'orange'}}>Twitter Field</h1>
                <div className="twitter_about">
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


export default Aboutus;


const c1style={
    background :'steelblue',
    color:'white',
    padding:'1.5rem'
}