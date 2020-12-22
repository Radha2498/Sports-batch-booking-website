import React from 'react';
import { BrowserRouter , Route} from 'react-router-dom';
import Home from './Components/Home';
import Header from './Components/Header';

import Contact from './Components/Contact_info';


const Router = () =>{
  
return(
<BrowserRouter>
        <Header />
        
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/Contact" component={Contact}></Route>

</BrowserRouter>

)

}

export default Router;