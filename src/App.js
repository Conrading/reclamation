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
                  <p>....</p>
                  <p>while you are working, </p>
                  <p>he is simply happy</p>
                </div>
              </div>
            </div>
            <div class="flip-card">
              <div class="flip-card-inner">
                <div class="flip-card-front">
                  <div className="flip-card-text-gap">When?</div>
                </div>
                <div class="flip-card-back">
                  <p>from</p> 
                  <p>23 December</p>
                  <p>(Thursday)</p>
                  <p>to</p> 
                  <p>27 December</p>
                  <p>(Monday)</p>
                  <p>will be back on Tuesday</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="surprise-text" onClick={() => {alert("no")}}>Surprise?</div>
      </body>
    )
  }
}

export default MainPage;
