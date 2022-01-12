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
          <div className="margin-center">
            <div class="flip-card">
              <div class="flip-card-inner">
                <div class="flip-card-front">
                  <div>My favorite Song in 2021</div>
                </div>
                <div class="flip-card-back">
                  <div>
                    <b className='text-pointer' onClick={() => {window.location = `https://www.youtube.com/watch?v=xR_Pa1LY8mc`}}>Ostatni</b>
                  </div>
                </div>
              </div>
            </div>
            <div class="flip-card">
              <div class="flip-card-inner">
                <div class="flip-card-front">
                  <div>Movie <b>Ad Astra</b> is inspried by</div>
                </div>
                <div class="flip-card-back">
                  <div>
                    <b className='text-pointer' onClick={() => {window.location = `https://en.wikipedia.org/wiki/Heart_of_Darkness`}}>Heart of Darkness</b>
                  </div>
                </div>
              </div>
            </div>
            <div class="flip-card">
              <div class="flip-card-inner">
                <div class="flip-card-front">
                  <div>largest City in 2021</div>
                </div>
                <div class="flip-card-back">
                  <div>
                    <b className='text-pointer' onClick={() => {window.location = `https://www.re-thinkingthefuture.com/city-and-architecture/a4608-15-largest-cities-as-of-2021/`}}>Tokyo</b>
                  </div>
                </div>
              </div>
            </div>
            <div class="flip-card">
              <div class="flip-card-inner">
                <div class="flip-card-front">
                  <div>longest-running scripted USA TV serie</div>
                </div>
                <div class="flip-card-back">
                  <div>
                    <b className='text-pointer' onClick={() => {window.location = `https://en.wikipedia.org/wiki/List_of_longest-running_scripted_American_primetime_television_series`}}>the Simpsons</b>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="main-frame">
          <div className="second-margin-center">
            <div class="flip-card">
              <div class="flip-card-inner">
                <div class="flip-card-front">
                  <div>What?</div>
                </div>
                <div class="flip-card-back">
                  <div>
                    <b>Lin Yang-Yu</b> 
                    <div>is having <b>PTO</b></div>
                  </div>
                </div>
              </div>
            </div>
            <div class="flip-card">
              <div class="flip-card-inner">
                <div class="flip-card-front">
                  <div>When?</div>
                </div>
                <div class="flip-card-back">
                  <div>
                    <div>from <b>1/13</b> Thursday</div>
                    <div>to <b>1/14</b> Friday</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <br />
        <div className='centeline-isolation'><hr /></div>
      </body>
    )
  }
}

export default MainPage;
