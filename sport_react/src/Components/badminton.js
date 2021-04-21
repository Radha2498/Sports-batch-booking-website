import React, { Component } from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import '../Styles/badminton.css';
import { Carousel } from 'react-responsive-carousel'
import Fade from 'react-reveal/Fade';
import Rotate from 'react-reveal/Rotate';
import Modal from 'react-modal';
import axios from 'axios';

const customStyles = {
    content : {
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)',
    //   background            : 'silver',
    //   border                : 'solid 2px black',
       color                 : 'black',
       padding               : '46px',
    //    height                : '342px',
       width                 : '349px'   
    }
  };

export class Badminton extends Component {
    constructor(){
        super();
        this.state={
            batchModelOpen : false,
            name:'',
            contact_number:'',
            email:'',
            batch_time:'',
            date:'',
            day:'',
            packagee:'',
            area:'',
            catagory:'',
        }
    }

    batch =() =>{
        this.setState({ batchModelOpen : true});
    }

    
    handleCancelBatch =() =>{
        this.setState({ batchModelOpen : false});
    }

    handleChange = (event ,state) =>{
        this.setState({ [state] : event.target.value});

    }
    handleNavigate = () => {
        this.props.history.push("/");
        
    }
    handleBatch = () =>{
        const {name,contact_number,email, batch_time, date,day,packagee,area,catagory} =this.state;
        const BatchObj = {
            name:name,
            contact_number:contact_number,
            email:email,
            batch_time:batch_time,
            date:date,
            day:day,
            packagee: packagee,
            area:area,
            catagory:catagory
        };
        axios({
            method:'POST',
            url:'http://localhost:8001/batch',
            Header:{'Content-Type':'application/json'},
            data: BatchObj
        }).then(response=>{
            alert(response.data.message);
            if(response.data.message=="Batch Booked successfully! Payment method UPI: 9284257132@ybl"){
                this.setState({batchModelOpen : false,
                    name:'',
                    contact_number:'',
                    email:'',
                    batch_time :'',
                    date:'',
                    day:'',
                    packagee:'',
                    area:'',
                    catagory:''
                });
               
                
            }
        })
        .catch(err=>console.log(err))
    }
    render() {
        const {batchModelOpen,name,contact_number,email,batch_time,date,day,packagee,area,catagory  } =this.state
        return (
            <div>
                 <h1 className="sportspirit" onClick={this.handleNavigate}>Sportspirit</h1>
             {/* <Carousel>
                 <div>
                    <img src="http://tennisclub-html.themerex.net/images/slide1_bg.jpg" ></img>  
                  
                    <h1 class="badminton_firsttitle">Sports with Healthy Lifetime</h1>
                    <p className="badminton_subtitle">Badminton is a racket sport that can be played individually against a single opponent or between two teams of two players each</p>   
                    <button class="btn btn-success blearn">Learn more</button>
                 </div>

                 <div>
                    <img src="http://tennisclub-html.themerex.net/images/slide3_bg.jpg" ></img> 
                 
                    <h1 class="badminton_secondtitle">Play with your Friendsand Family</h1>
                    <p className="badminton_subtitle">Badminton is a racket sport that can be played individually against a single opponent or between two teams of two players each</p>
                    
                    <button class="btn btn-success activitylearn">Learn more</button>
                
                 </div>
             </Carousel> */}
            <div>
                        <img  class="badmition_banner" src="http://www.badmintonglos.co.uk/wp-content/uploads/2018/08/Net-shot-Vector.jpg" width="1358px"></img>      
                       <Fade right>
                        <h1 className="badminton_firsttitle">Sports with Healthy Lifetime</h1>  
                        </Fade>
                        <Fade left>
                        <p className="badminton_newsubtitle">Badminton is a racket sport that can be played individually against a single opponent or between two teams of two players each</p>   
                        </Fade>
                        <button class="btn btn-success blearnnew">Learn more</button>
                   </div>

                <div>
                <Rotate top left>
                    <h1 className="badminton_info">Badminton at Sportspirit</h1>
                    </Rotate>
                    <p className="badminton_subinfo">Sportspirit, a chain of seven conveniently located, well-equipped sports and fitness clubs across Pune, is committed to provide quality sports facilities and personalised fitness programmes. We strive to bestow ‘Recreation – the Spice of Life’ on you because we consider Relaxation and Recreation as the route to a healthy body, a healthier mind and the healthiest society.The best part about table tennis is that it doesn't have an age and ability barrier. Anyone with the willingness to learn is always welcome at our club regardless of age and ability. At our Table Tennis Coaching Classes and Court, we believe that ability is developed. From children to elders all enjoy playing table tennis at our indoor facility.</p>
                </div>
                {/* 
                <div>
                    <Fade right>
                    <img src="http://tennisclub-html.themerex.net/images/slide3_bg.jpg" className="badminton_block1" ></img>
                    </Fade>
                    <div className="badminton_couch">
                    <h1>Couch</h1>
                    <p>RAJASHREE WALIMBE</p>
                    <p>   National repute player.</p>
                    <p>  Best badminton coach award winner at Pune with experience of 30+ years</p>
                    </div>
                    </div>
                    <div className="badminton_block2">

                    </div> */}

                
                    <div className ="badminton_Court">
                        <h1 className="badminton_court_title">Court Review</h1>
                        <p className="badminton_courts_subtitle">
                         Extensive upgrades and thorough maintenance have made our courts a modern comfortable place for trainings
                        </p>
                        <div className="badminton_topp">
                        <Fade right>
                        <p><i class="fas fa-check">No daily water usage</i></p>
                        <p><i class="fas fa-check">Not affected by freezing weather</i></p>
                        <p><i class="fas fa-check">3 Distinct tennis court surface speed-of-play options</i></p>
                        <p><i class="fas fa-check">Adjustable court speeds that are great for serves</i> </p>
                        </Fade>
                        </div>
                        <div className="badminton_seccourt">
                            <img className="badminton_couch_img"src="http://tennisclub-html.themerex.net/images/lesson-1.jpg" width="400px" height="300"/>
                        </div><br />
                        <br />
                        <div className="col-md-12">
                          <h1 className="badminton_ourprices">Our Prices</h1>
                        <table>
  <tr>
    <th>Batch</th>
    <th>Timing</th>
    <th>Monthly</th>
    <th>Quterly</th>
    <th>Half-Yearly</th>
    <th>Yearly</th>
    <th>Booking</th>
  </tr>
  <tr>
   <td>Daily</td>
   <td>7am-10am  &  4pm-9pm</td>
   <td>₹ 2000</td>
   <td>₹ 5000</td>
   <td>₹ 10000</td>
   <td>₹ 18000</td>
   <th> 
    <button class="btn btn-outline-success btn-sm sign" onClick={this.batch} style={{color: 'black',marginTop: '-5px',marginLeft: '10px'}}>Book Batch</button></th>
  </tr>
  
  <tr>
    <td>Alternate Days</td>
    <td>7am-10am  &  4pm-9pm</td>
   <td>₹ 1000</td>
   <td>₹ 3000</td>
   <td>₹ 80000</td>
   <td>₹ 15000</td>
   <th> 
    <button class="btn btn-outline-success btn-sm sign" onClick={this.batch} style={{color: 'black',marginTop: '-5px',marginLeft: '10px'}}>Book Batch</button></th>
  </tr>
 
</table>
<Modal
         isOpen={batchModelOpen}
         style={customStyles}
        
        >
             <div class="input-group" style={{marginLeft: '37px'}}>
            <h3 style={{lineHeight:'31px',marginLeft: '28px',fontFamily:'serif', marginTop: '26px'}} >Book Your Batch</h3>
            <div><span> </span><input type ="text"     value={name} placeholder="Name"    class="form-control"  style={{height:'48px',width:'256px',     marginLeft:'-35px'}}    onChange={(event) => this.handleChange(event ,'name')} /></div>
         
            <div><span></span><input type ="text"  value={contact_number}  placeholder="Contact"  class="form-control"  style={{height:'48px',marginTop: '8px',  width:'256px',marginLeft:'-35px'}}    onChange={(event) => this.handleChange(event ,'contact_number')}/></div>
            <div><span> </span><input type ="text"     value={email} placeholder="Email"    class="form-control"  style={{height:'48px',width:'256px',     marginLeft:'-35px'}}    onChange={(event) => this.handleChange(event ,'email')} /></div>
            <div><span></span><input type ="text"      value={batch_time}   placeholder="Timing" class="form-control"  style={{marginTop: '8px',height:'48px',  width:'256px',marginLeft:'-35px'}}    onChange={(event) => this.handleChange(event ,'batch_time')}/></div>
            <div><span></span><input type ="text"      value={date}  placeholder="Date"   class="form-control"  style={{marginTop: '8px',height:'48px',  width:'256px',marginLeft:'-35px'}}    onChange={(event) => this.handleChange(event ,'date')}/></div>
            <div><span></span><input type ="text"      value={day}  placeholder="Day"   class="form-control"  style={{marginTop: '8px',height:'48px',  width:'256px',marginLeft:'-35px'}}    onChange={(event) => this.handleChange(event ,'day')}/></div>
            <div><span></span><input type ="text"   name="pack"   value={packagee}  placeholder="Package"   class="form-control"  style={{marginTop: '8px',height:'48px',  width:'256px',marginLeft:'-35px'}}    onChange={(event) => this.handleChange(event ,'packagee')}/></div>
                       
            <div><span></span><input type ="text"      value={area}  placeholder="Area"   class="form-control"  style={{marginTop: '8px',height:'48px',  width:'256px',marginLeft:'-35px'}}    onChange={(event) => this.handleChange(event ,'area')}/></div>
            <div><span></span><input type ="text"      value={catagory}  placeholder="Catagory"   class="form-control"  style={{marginTop: '8px',height:'48px',  width:'256px',marginLeft:'-35px'}}    onChange={(event) => this.handleChange(event ,'catagory')}/></div>

           
            <button onClick={this.handleBatch} class="btn-sm btn btn-success" style={{marginTop: '19px', width:'128px',marginLeft:'-34px',height:'40px'}}>Book</button>
            <button class=" btn-sm btn btn-success" style={{marginTop: '19px',marginLeft:'7px', width:'120px',height:'40px'}} onClick={this.handleCancelBatch}>Cancel</button>
            </div>

        </Modal>
        <div>
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
    </div>
 </div>
</div>     
    )
    }
}

export default Badminton;
