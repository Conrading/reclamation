import React, { Component } from 'react'
import './App.css';

class MainPage extends Component {
  constructor () {
    super ();
    this.state = {
      anwortFullText: "Hi, I am ooo, from Wednesday Jan.26 to Thrusday Jan.27, will be back on Friday Jan.28",
      step: null
    }
  }
  render () {
    return (
      <body>
        <div className="main-frame">
          {this.state.step === null &&
          <div className='jedes-linie-gesprach'>
            <div className='jedes-linie-gesprach-inhalt'>
              <div className='jedes-linie-gesprach-font text-pointer' onClick={() => {this.setState({ step: "erste" })}}>{this.state.anwortFullText}</div>
            </div>
          </div>}
          <br />
          {this.state.step === "erste" &&
          <div className='jedes-linie-gesprach'>
            <div className='jedes-linie-gesprach-inhalt'>
              <div className='jedes-linie-gesprach-font text-pointer' onClick={() => {this.setState({ step: "zweite" })}}>thanks for paying attention, umm.. thanks .. um..</div>
            </div>
          </div>}
          <br />
          {this.state.step === "zweite" &&
          <div className='jedes-linie-gesprach'>
            <div className='jedes-linie-gesprach-inhalt'>
              <div className='jedes-linie-gesprach-font text-pointer' onClick={() => {this.setState({ step: "dreite" })}}>Do you happen to know someone?</div>
            </div>
          </div>}
          <br />
          {this.state.step === "dreite" &&
          <div className='jedes-linie-gesprach'>
            <div className='jedes-linie-gesprach-inhalt'>
              <div className='jedes-linie-gesprach-font text-pointer' onClick={() => {this.setState({ step: "viewrte" })}}>someone who plays music, any type, any instruments, I am looking for partner, just for fun</div>
            </div>
          </div>}
          <br />
          {this.state.step === "viewrte" &&
          <div className='jedes-linie-gesprach'>
            <div className='jedes-linie-gesprach-inhalt'>
              <div className='jedes-linie-gesprach-font text-pointer' onClick={() => {this.setState({ step: "funfte" })}}>Just cover some songs, something catchy, something familiar</div>
            </div>
          </div>}
          <br />
          {this.state.step === "viewrte" &&
          <div className='player-frame'>
            <br />
            <iframe width="511" height="100" scrolling="no" frameborder="no" allow="autoplay" className='player-center'
            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1176083725&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
          </div>}
          {this.state.step === "viewrte" &&
          <div className='player-frame'>
            <br />
            <iframe width="1280" height="540" src="https://www.youtube.com/embed/I2dyKtSbsbM" className='player-center'
            frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>}
          <br />
          {this.state.step === "funfte" &&
          <div className='jedes-linie-gesprach'>
            <div className='jedes-linie-gesprach-inhalt'>
              <div className='jedes-linie-gesprach-font text-pointer' onClick={() => {this.setState({ step: "sechte" })}}>For sure some Jazz can be super cool, just don't know whether my piano can follow </div>
            </div>
          </div>}
          {this.state.step === "funfte" &&
          <div className='player-frame'>
            <br />
            <iframe width="510" height="315" src="https://www.youtube.com/embed/tpGOXpvqtbY" className='player-center'
            frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>}
          <br />
          {this.state.step === "sechte" &&
          <div className='jedes-linie-gesprach'>
            <div className='jedes-linie-gesprach-inhalt'>
              <div className='jedes-linie-gesprach-font text-pointer' onClick={() => {this.setState({ step: "siebte" })}}>if you happen to know someone, who would be interested, that can be awesome</div>
            </div>
          </div>}
          <br />
          {this.state.step === "siebte" &&
          <div className='jedes-linie-gesprach'>
            <div className='jedes-linie-gesprach-inhalt'>
              <div className='jedes-linie-gesprach-font text-pointer' onClick={() => {this.setState({ step: null })}}>..thanks</div>
            </div>
          </div>}
        </div>
      </body>
    )
  }
}

export default MainPage;
