import React, { Component } from 'react'
import '../Styles/activities.css';
import Fade from 'react-reveal/Fade';

export class Activities extends Component {
    
    
    render() {
        
        
        return (
            <div>
                
              
                    <div class="dropdown">
                    <span>Mouse over me</span>
                        <div class="dropdown-content">
                            <a href="badminton.js">Badminton</a><br/>
                            <a href="tennis.html">Tennis</a><br />
                            <a href="swim.js">Swimming</a><br />
                            <a href="gym.js">Gym</a><br />
                            <a href="dance.js">Dance</a><br />
                             </div>
                        </div>
             
                
            </div>
        )
    }
}

export default Activities;
