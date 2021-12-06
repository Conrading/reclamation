import React, { Component } from 'react'
import './App.css';

class MainPage extends Component {
  constructor () {
    super ();
    this.state = {
      //
    }
  }
  render () {
    return (
      <body>
        <div className="main-frame">
          <div className="margin-center ">
            <div class="flip-card">
              <div class="flip-card-inner">
                <div class="flip-card-front">
                  <div className="flip-card-text-gap">What?</div>
                </div>
                <div class="flip-card-back">
                  <h1>Lin Yang-Yu</h1> 
                  <p>is</p> 
                  <p>having PTO</p>
                </div>
              </div>
            </div>
            <div class="flip-card">
              <div class="flip-card-inner">
                <div class="flip-card-front">
                  <div className="flip-card-text-gap">When?</div>
                </div>
                <div class="flip-card-back">
                  <h1>John Doe</h1> 
                  <p>Architect & Engineer</p> 
                  <p>We love that guy</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </body>
    )
  }
}

export default MainPage;
