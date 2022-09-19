import React, { Component } from 'react'
import './App.css';


class Kalendarz extends Component {
  constructor () {
    super ();
    this.state = {
      każdy: [
        /*{"month": "January", "start": 6, "last": 31, "pto": [], "bank": [1, 6]},
        {"month": "February", "start": 2, "last": 28, "pto": [], "bank": []},
        {"month": "March", "start": 2, "last": 31, "pto": [], "bank": []},
        {"month": "April", "start": 5, "last": 30, "pto": [], "bank": [17]},
        {"month": "May", "start": 6, "last": 31, "pto": [], "bank": [1, 3]},
        {"month": "June", "start": 3, "last": 30, "pto": [], "bank": [16]},*/
        {"month": "July", "start": 5, "last": 31, "pto": [], "bank": []},
        {"month": "August", "start": 1, "last": 31, "pto": [], "bank": [15]},
        {"month": "September", "start": 4, "last": 30, "pto": [26, 27, 28, 29, 30], "bank": []},
        {"month": "Octobor", "start": 6, "last": 31, "pto": [3, 4, 5, 6, 7], "bank": []}
      ],
      remark: null
    }
  }
  render () {
    let miesiąc = this.state.każdy.map( i => {
      let actualMonth = []
      for (let j = 0; j < i.start; j++) {
        actualMonth.push(null)
      }
      for (let k = 0; k < i.last; k++) {
        actualMonth.push(k+1)
      }
      let każdegoDnia = actualMonth.map( d => {
        let confirm = true
        for (let p = 0; p < i.pto.length; p++) {
          if (d === i.pto[p]) {
            confirm = false
            return(
              <div className='dni-pto-text' onClick={() => {this.setState({remark: "I am on PTO from September 26 to Octobor 7, will be back on Octobor 10 Monday"})}}>{d}</div>
            )
          } 
        }
        for (let b = 0; b < i.bank.length; b++) {
          if (d === i.bank[b]) {
            confirm = false
            return(
              <div className='dni-bank-text'>{d}</div>
            )
          } 
        }
        if (confirm = true) {
          return(
            <div className='centeringText'>{d}</div>
          )
        }
      })
      return (
        <div>
          <div className='card-project'>
              <div className='miesiąc'>{i.month}</div>
              <div className="limit-width-sieben"><hr /></div>
              <div className='tydzień'>
                <div className='tydzień-sunday centeringText'>Sun</div>
                <div className='centeringText'>Mon</div>
                <div className='centeringText'>Tue</div>
                <div className='centeringText'>Wed</div>
                <div className='centeringText'>Thu</div>
                <div className='centeringText'>Fri</div>
                <div className='tydzień-saturday'>Sat</div>
              </div>
              <div className="dni-container">{każdegoDnia}</div>
          </div>
        </div>
      )
    })
    return (
      <body>
        <div className='main-title'>2022 Calendar</div>
        <div className='center-by-margin'>{miesiąc}</div>
        <div className='remark-frame'>
          <div className='remark' onClick={() => {this.setState({remark: null})}}>{this.state.remark}</div>
        </div>
        <div className='bottom-note'>
          <div className='bottom-note-bank'>* Bank Holiday in Poland</div>
          <div className='bottom-note-PTO'>* PTO duration</div>
        </div>
      </body>
    )
  }
}

export default Kalendarz;
