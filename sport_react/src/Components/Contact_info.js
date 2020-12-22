import React from 'react';
import Modal from 'react-modal';
import '../Styles/contact_info.css';
import axios from 'axios';
// import ball from '../Images/photo.webp';
import Banner from '../Images/tabletannis.jpg';
import capture from '../Images/capture.png';


class Contact extends React.Component{

    constructor(){
        super();
        this.state={
          uname:'',
          email:'',
          note:''
        }
    }

    handleContact_info = () =>{
        const {uname, email, note} =this.state;
        const signUpObj = {
            uname:uname,
            email:email,
           note:note
        };
        axios({
            method:'POST',
            url:'http://localhost:8001/contact',
            Header:{'Content-Type':'application/json'},
            data:signUpObj
        }).then(response =>{
            alert(response.data.message);
            if(response.data.message=='Message Sent Sucessfully'){
             
               
                
            }
        })
        .catch(err=>console.log(err))
    }

    handleChange = (event ,state) =>{
        this.setState({ [state] : event.target.value});

    }
    handleNavigate = () => {
        this.props.history.push("/");
        
    }

    render(){
        const { uname,email,note } =this.state
        return(
            <div>
           
           <div className="block-1">
            <h1 className="sportspirit" onClick={this.handleNavigate}>Sportspirit</h1>
            <div className="ph"><span class="fa fa-mobile">+1425897555</span></div>
            <div className="ad"><span class="fa fa-map-marker"> 158 Avenues Street</span></div>
            <div className="t"><span class="fa fa-clock-o"> Mon - Sat 6:00 - 10:00</span></div>
            </div>



            <img src= {Banner} height="348px"  width="1333px" />
            {/* <div className="boxx"></div> */}

            <img src= {capture} className='map' height="348px"  width="1333px" />

            <div style={{    marginLeft: '54%',color:'grey',    marginTop: ' -33%'}}>
            <h5>Contact Info</h5>
            <div style={{    marginTop: '11px'}}><span class="fa fa-map-marker">        158 Avenues Street New York, NY-90814</span></div>
            <div style={{    marginTop: '11px'}}><span class="fa fa-clock-o">            Mon - Sat 8.00 - 18.00 Sunday</span></div>
            <div style={{    marginTop: '11px'}}><span class="fa fa-envelope"><a href='@example.com'>@example.com</a></span></div>
            <div style={{    marginTop: '11px'}}><span class="fa fa-mobile">           +1-800-999-800</span></div>

            </div>
            <div><span> </span><input type ="text"     value={uname} placeholder="Name"    class="form-control"  style={{height:'48px',width:'256px',    marginTop: '11px',      marginLeft: '720px'}}    onChange={(event) => this.handleChange(event ,'uname')} /></div>
            <div><span> </span><input type ="text"     value={email} placeholder="Email"    class="form-control"  style={{height:'48px',width:'256px',    marginTop: '11px',      marginLeft: '720px'}}    onChange={(event) => this.handleChange(event ,'email')} /></div>
            <div><span> </span><input type ="text"     value={note} placeholder="Message"    class="form-control"  style={{height:'48px',width:'256px',     marginTop: '11px',     marginLeft: '720px'}}    onChange={(event) => this.handleChange(event ,'note')} /></div>

            <button onClick={this.handleContact_info} class=" btn-sm btn btn-success" style={{marginTop: '19px', width:'128px',    marginLeft: '721px',height:'40px'}}>Sent</button>
            </div>
        )
    }
}

export default Contact;