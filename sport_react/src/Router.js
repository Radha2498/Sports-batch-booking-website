import React from 'react';
import { BrowserRouter , Route} from 'react-router-dom';
import Home from './Components/Home';
import Header from './Components/Header';
import Contact from './Components/Contact_info';
import Aboutus from './Components/Aboutus';
import Activities from './Components/Activities';
import Badminton from './Components/badminton';
import Tennis from './Components/tennis';
import swim from './Components/swim';
import basketball from './Components/basketball';
import Tabletennis from './Components/tabletennis';
import Reservation from './Components/Reservation';


const Router = () =>{
  
return(
<BrowserRouter>
        <Header />
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/Contact" component={Contact}></Route>
        <Route exact path="/Aboutus" component={Aboutus}></Route>
        <Route exact path="/Activity" component={Activities}></Route>
        <Route exact path="/Badminton" component={Badminton}></Route>
        <Route exact path="/Tennis" component={Tennis}></Route>
        <Route  path="/Swim" component={swim}></Route>
        <Route  path="/Basketball" component={basketball}></Route>
        <Route  path="/Tabletennis" component={Tabletennis}></Route>
        <Route  path="/Reservation" component={Reservation}></Route>
        {/* <Route  path="/Admin" component={Admin}></Route> */}
</BrowserRouter>

)

}

export default Router;