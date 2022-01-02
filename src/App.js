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
                  <div>Song of 2021</div>
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
                    <div>from <b>1/12</b> Wednesday</div>
                    <div>to <b>1/17</b> Thursday</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='centeline-isolation'><hr /></div>
        <div className='question-text-row text-center'>Which sport league generate most money</div>
        <div className="third-main-frame">
          <div className="margin-center">
            <div class="flip-card">
              <div class="flip-card-inner">
                <div class="flip-card-front">
                  <div>National Football League (NFL)</div>
                </div>
                <div class="flip-card-back">
                  <div>
                    <b className='text-pointer' onClick={() => {window.location = `https://en.wikipedia.org/wiki/2019_NFL_season`}}>16 billion Euro in 2019</b>
                  </div>
                </div>
              </div>
            </div>
            <div class="flip-card">
              <div class="flip-card-inner">
                <div class="flip-card-front">
                  <div>Major League Baseball (MLB)</div>
                </div>
                <div class="flip-card-back">
                  <div>
                    <b className='text-pointer' onClick={() => {window.location = `https://en.wikipedia.org/wiki/2019_Major_League_Baseball_season`}}>10 billion Euro in 2019</b>
                  </div>
                </div>
              </div>
            </div>
            <div class="flip-card">
              <div class="flip-card-inner">
                <div class="flip-card-front">
                  <div>National Basketball Association (NBA)</div>
                </div>
                <div class="flip-card-back">
                  <div>
                    <b className='text-pointer' onClick={() => {window.location = `https://en.wikipedia.org/wiki/2018%E2%80%9319_NBA_season`}}>8 billion Euro in 2019</b>
                  </div>
                </div>
              </div>
            </div>
            <div class="flip-card">
              <div class="flip-card-inner">
                <div class="flip-card-front">
                  <div>Premier League (EPL)</div>
                </div>
                <div class="flip-card-back">
                  <div>
                    <b className='text-pointer' onClick={() => {window.location = `https://en.wikipedia.org/wiki/2018%E2%80%9319_Premier_League`}}>5.3 billion Euro in 2019</b>
                  </div>
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
