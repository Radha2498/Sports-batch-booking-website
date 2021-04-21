import React from 'react';
import Modal from 'react-modal';
import '../Styles/header.css';
import axios from 'axios';
import '../Components/badminton.js';
import { Link } from 'react-router-dom';





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


class Header extends React.Component{
    constructor(){
        super();
        this.state={
            signUpModelIsOpen : false,
            loginModelIsOpen : false,
            batchModelOpen : false,
            name:'',
            email :'',
            contact_number:'',
            batch_time:'',
            date:'',
            day:'',
            area:'',
            catagory:'',
            pwd :'',
            FN :'',
            LN :'',
            isLoggedIn:false
        }
    }

    signUp = () =>{
        this.setState({ signUpModelIsOpen : true});
    }

    login = () =>{
        this.setState({ loginModelIsOpen : true});
    }

    batch =() =>{
        this.setState({ batchModelOpen : true});
    }

    handleCancelSignUp =() => {
        this.setState({ signUpModelIsOpen : false});

    }

    handleCancelLogin =() => {
        this.setState({ loginModelIsOpen : false});

    }

    handleCancelBatch =() =>{
        this.setState({ batchModelOpen : false});
    }

    handleChange = (event ,state) =>{
        this.setState({ [state] : event.target.value});

    }

    handleSignUp = () =>{
        const {email, pwd, FN, LN} =this.state;
        const signUpObj = {
            email:email,
            password:pwd,
            firstname :FN,
            lastname:LN
        };
        axios({
            method:'POST',
            url:'http://localhost:8001/signup',
            Header:{'Content-Type':'application/json'},
            data:signUpObj
        }).then(response =>{
            if(response.data.message=='User Signed Sucessfully'){
                this.setState({signUpModelIsOpen : false,
                    email :'',
                    pwd :'',
                    FN :'',
                    LN :''
                });
                alert(response.data.message);
                
            }
        })
        .catch(err=>console.log(err))
    }

    handleLogin =()=>{
        const {email , pwd} = this.state;
        const loginObj = {
            email:email,
            password:pwd
        
        };
        axios({
            method:'POST',
            url:'http://localhost:8001/login',
            Header:{'Content-Type':'application/json'},
            data:loginObj
        }).then(response =>{
        this.setState({ isLoggedIn :response.data.isAuthenticated, 
            loginModelIsOpen:false,
            email :'',
            pwd :''
        });
         sessionStorage.setItem('isLoggedIn',response.data.isAuthenticated);

        }).catch(err => console.log(err))

    }

    handleNavigate = () => {
        this.props.history.push("/");
        
    }
    handleContact = () =>{
        this.props.history.push('/Contact');
    }
    handleAbout = () =>{
        this.props.history.push('/About');
    }
    handleActivity = () =>{
        this.props.history.push('/Activity');
    }

    handleAdminlogin = () =>{
        this.props.history.push('/Adminlogin');
    }
    handleBatch = () =>{
        const {name,email,contact_number, batch_time, date,day,area,catagory} =this.state;
        const BatchObj = {
            name:name,
            email:email,
            contact_number:contact_number,
            batch_time:batch_time,
            date:date,
            day:day,
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
            if(response.data.message=='Batch Booked successfully'){
                this.setState({batchModelOpen : false,
                    name:'',
                    email :'',
                    contact_number:'',
                    batch_time :'',
                    date:'',
                    day:'',
                    area:'',
                    catagory:''
                });
               
                
            }
        })
        .catch(err=>console.log(err))
    }
   
    

    render(){
        const {signUpModelIsOpen ,  loginModelIsOpen,batchModelOpen, email, pwd, FN, LN,name,contact_number,batch_time,date,day,area,catagory  } =this.state
        return(
            
            <div style ={{width:'100%' ,height:'43px',    backgroundColor: 'darkolivegreen',color:'white'}}>
                

                <button class="btn btn-outline-success btn-sm enter"  onClick={this.login} style={{color: 'white',marginTop: '8px'}}><i>Login</i></button>
                <button class="btn btn-outline-success btn-sm sign" onClick={this.signUp} style={{color: 'white',marginTop: '6px',marginLeft: '10px'}}><i>Create an account</i></button>

                <button class="btn btn-outline-success btn-sm sign" onClick={this.batch} style={{color: 'white',marginTop: '-57px',marginLeft: '10px'}}><i>Batches</i></button>
               
               <a onClick={this.handleContact} href='Contact' className='cont'>Contact</a>
               <a onClick={this.handleAbout} href='Aboutus' className='about'>About Us</a> 
               {/* <a onClick={this.handleAdminlogin} href='Adminlogin' className='adminlogin'>Admin</a>          */}
               <div class="dropdown">
                  
               <a className="activity">Activity </a>
                        <div class="dropdown-content">
                        <li><Link to="/Badminton">Badminton</Link></li>
                        <li><Link to="/Swim">Swimming</Link></li>
                        <li><Link to="/Gym">Gym</Link></li>
                        <li><Link to="/Yoga">Yoga</Link></li>
                        <li><Link to="/Tabletennis">Tabletennis</Link></li>
                        <li><Link to="/Basketball">Basketball</Link></li>
                        </div>
                        </div> 

         <Modal
          isOpen={signUpModelIsOpen}
          style={customStyles}
        >
          
          
         <div class="input-group" style={{marginLeft: '37px'}}>
            <h3 style={{lineHeight:'31px',marginLeft: '28px',fontFamily:'serif', marginTop: '26px'}} >SignUp User</h3>
            <div><span> </span><input type ="text"     value={email} placeholder="Email"    class="form-control"  style={{height:'48px',width:'256px',     marginLeft:'-35px'}}    onChange={(event) => this.handleChange(event ,'email')} /></div>
            <div><span></span><input type ="password"  value={pwd}  placeholder="Password"  class="form-control"  style={{height:'48px',marginTop: '8px',  width:'256px',marginLeft:'-35px'}}    onChange={(event) => this.handleChange(event ,'pwd')}/></div>
            <div><span></span><input type ="text"      value={FN}   placeholder="FirstName" class="form-control"  style={{marginTop: '8px',height:'48px',  width:'256px',marginLeft:'-35px'}}    onChange={(event) => this.handleChange(event ,'FN')}/></div>
            <div><span></span><input type ="text"      value={LN}  placeholder="LastName"   class="form-control"  style={{marginTop: '8px',height:'48px',  width:'256px',marginLeft:'-35px'}}    onChange={(event) => this.handleChange(event ,'LN')}/></div>
            <button onClick={this.handleSignUp} class=" btn-sm btn btn-success" style={{marginTop: '19px', width:'128px',marginLeft:'-34px',height:'40px'}}>SignUp</button>
            <button class=" btn-sm btn btn-success" style={{marginTop: '19px',marginLeft:'7px', width:'120px',height:'40px'}} onClick={this.handleCancelSignUp}>Cancel</button>

            

            <hr/>
            {/* <div>Already have an account?<a > Login</a></div> */}
         </div>
        
        </Modal>

        <Modal
          isOpen={loginModelIsOpen}
          style={customStyles}
        >
 
         
         <div class="input-group">
         {/* <div class="logoos">e!</div> */}
            <h3 style={{lineHeight:'31px',marginLeft: '72px',fontFamily:'serif'}}>Login User</h3>
            {/* <div><span>Email        </span><input type ="text" style={{marginLeft:'51px'}}/></div>
            <div><span>Password     </span><input type ="text" style={{marginLeft:'27px'}}/></div> */}

            <div><span>   </span><input  class="logg" type ="text" class="form-control"  value={email}  placeholder="Email"      style={{marginLeft:'12px',width: '225px', fontFamily:'serif',height:'43px'}}    onChange={(event) => this.handleChange(event ,'email')}/></div>
            <div><span>   </span><input class="sup" type ="password" class="form-control"   value={pwd} placeholder="Password"   style={{marginLeft: '12px', width: '224px',fontFamily: 'serif',marginTop: '10px',height:'43px'}}  onChange={(event) => this.handleChange(event ,'pwd')}/></div>
           
            <button onClick={this.handleLogin} class=" btn-sm btn btn-success" style={{marginTop: '19px',marginLeft:'9px',height:'38px', width:'113px'}}>Login</button>
            <button class=" btn-sm btn btn-success" style={{marginTop: '19px',marginLeft:'7px',height:'38px',width:'113px'}} onClick={this.handleCancelLogin}>Cancel</button>
            <hr/>
            {/* <div style={{marginLeft:'48px'}}>New to Foodlynn? <a>SignUp</a></div> */}
         </div>
          
        </Modal>

        <Modal
         isOpen={batchModelOpen}
         style={customStyles}
        
        >
             <div class="input-group" style={{marginLeft: '37px'}}>
            <h3 style={{lineHeight:'31px',marginLeft: '28px',fontFamily:'serif', marginTop: '26px'}} >Book Your Batch</h3>
            <div><span> </span><input type ="text"     value={name} placeholder="name"    class="form-control"  style={{height:'48px',width:'256px',     marginLeft:'-35px'}}    onChange={(event) => this.handleChange(event ,'name')} /></div>
            <div><span> </span><input type ="text"     value={email} placeholder="Email"    class="form-control"  style={{height:'48px',width:'256px',     marginLeft:'-35px'}}    onChange={(event) => this.handleChange(event ,'email')} /></div>
            <div><span></span><input type ="text"  value={contact_number}  placeholder="Contact"  class="form-control"  style={{height:'48px',marginTop: '8px',  width:'256px',marginLeft:'-35px'}}    onChange={(event) => this.handleChange(event ,'contact_number')}/></div>
            
            <div><span></span><input type ="text"      value={batch_time}   placeholder="Timing" class="form-control"  style={{marginTop: '8px',height:'48px',  width:'256px',marginLeft:'-35px'}}    onChange={(event) => this.handleChange(event ,'batch_time')}/></div>
            <div><span></span><input type ="text"      value={date}  placeholder="Date"   class="form-control"  style={{marginTop: '8px',height:'48px',  width:'256px',marginLeft:'-35px'}}    onChange={(event) => this.handleChange(event ,'date')}/></div>
            <div><span></span><input type ="text"      value={day}  placeholder="Day"   class="form-control"  style={{marginTop: '8px',height:'48px',  width:'256px',marginLeft:'-35px'}}    onChange={(event) => this.handleChange(event ,'day')}/></div>
            <div><span></span><input type ="text"      value={area}  placeholder="Area"   class="form-control"  style={{marginTop: '8px',height:'48px',  width:'256px',marginLeft:'-35px'}}    onChange={(event) => this.handleChange(event ,'area')}/></div>
            <div><span></span><input type ="text"      value={catagory}  placeholder="Catagory"   class="form-control"  style={{marginTop: '8px',height:'48px',  width:'256px',marginLeft:'-35px'}}    onChange={(event) => this.handleChange(event ,'catagory')}/></div>

             <button onClick={this.handleBatch} class="btn-sm btn btn-success" style={{marginTop: '19px', width:'128px',marginLeft:'-34px',height:'40px'}}>Book</button>
            <button class=" btn-sm btn btn-success" style={{marginTop: '19px',marginLeft:'7px', width:'120px',height:'40px'}} onClick={this.handleCancelBatch}>Cancel</button>
            </div>

        </Modal>

            </div>
            
        )
    }
}

export default Header;

