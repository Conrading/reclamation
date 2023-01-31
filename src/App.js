import React, { Component } from 'react'
import './App.css';


class Kalendarz extends Component {
  constructor () {
    super ();
    this.state = {
      rozpoczęcia: null,
      zakończenia: null,
      wynik: "Input format is Month/Date/Year",
      każdy: [
        {"month": "January", "start": 7, "last": 31, "pto": [24], "bank": [2, 6]},
        {"month": "February", "start": 3, "last": 28, "pto": [], "bank": []},
        {"month": "March", "start": 3, "last": 31, "pto": [], "bank": []},
        /*{"month": "January", "start": 6, "last": 31, "pto": [], "bank": [1, 6]},
        {"month": "February", "start": 2, "last": 28, "pto": [], "bank": []},
        {"month": "March", "start": 2, "last": 31, "pto": [], "bank": []},
        {"month": "April", "start": 5, "last": 30, "pto": [], "bank": [17]},
        {"month": "May", "start": 6, "last": 31, "pto": [], "bank": [1, 3]},
        {"month": "June", "start": 3, "last": 30, "pto": [], "bank": [16]},
        {"month": "July", "start": 5, "last": 31, "pto": [], "bank": []},
        {"month": "August", "start": 1, "last": 31, "pto": [], "bank": [15]},
        {"month": "September", "start": 4, "last": 30, "pto": [26, 27, 28, 29, 30], "bank": []},
        {"month": "Octobor", "start": 6, "last": 31, "pto": [3, 4, 5, 6, 7], "bank": []}*/
      ],
      remark: null
    }
    this.kalkulator = this.kalkulator.bind(this)
  }
  kalkulator () {
    if (this.state.rozpoczęcia === null || this.state.zakończenia === null) {
      this.setState({wynik: "System has some unidentified problem, maybe try again?"})
    } else {
      if (this.state.rozpoczęcia.split("/").length !== 3 || this.state.zakończenia.split("/").length !== 3) {
        this.setState({wynik: "the input format is incorrect, please try something like Month/Date/Year"})
      } else {
        //verify whether the same year
        let splittingRozpoczęcia = this.state.rozpoczęcia.split("/")
        let splittingZakończenia = this.state.zakończenia.split("/")
        if (splittingRozpoczęcia[2] === splittingZakończenia[2]) {
          //okay, same year
          //we see the first number is month
          //calculate the difference between month, 
          let premiryMiesiąć = splittingZakończenia[0] - splittingRozpoczęcia[0]
          if (premiryMiesiąć > 12 || premiryMiesiąć < 1) {
            this.setState({wynik: "try format Month/Date/Year again"})
          } else {
            //if the latter date is smaller than start date
            //we don't need to add another month
            //if it is at least the same data, we need to add another month
            if (splittingZakończenia[1] < splittingRozpoczęcia[1]) {
              this.setState({ wynik: "the correct initial term is: " + premiryMiesiąć})
            } else {
              let compensate = premiryMiesiąć + 1
              this.setState({ wynik: "the correct initial term is: " + compensate})
            }
          }
        } else {
          //not the same year
          //calculate month by year gap
          let monthGapByYear = 12 * (Number(splittingZakończenia[2]) - Number(splittingRozpoczęcia[2]))
          let monthGapByMonth = Number(splittingZakończenia[0]) - Number(splittingRozpoczęcia[0])
          let monthGapByDate = Number(splittingZakończenia[1]) - Number(splittingRozpoczęcia[1])
          if (monthGapByDate < 0) {
            let jedenNumer = Number(monthGapByYear) + Number(monthGapByMonth)
            this.setState({ wynik: "the correct initial term is: " + jedenNumer})
          } else {
            let jedenNumer = Number(monthGapByYear) + Number(monthGapByMonth) + 1
            this.setState({ wynik: "the correct initial term is: " + jedenNumer})
          }
        }
      }
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
              <div className='dni-pto-text' onClick={() => {this.setState({remark: "I am OOO on January 24, will be back on January 25"})}}>{d}</div>
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
        <div className='main-title'>2023 Calendar</div>
        <div className="kalkulator-frame">
          <div className='kalkulator-input-frame'>
            <input className="kalkulator-line" placeholder='Start of Date' onChange={(e) => {this.setState({ rozpoczęcia: e.target.value })}}/>
          </div>
          <div className='kalkulator-input-frame'>
            <input className="kalkulator-line" placeholder='End of Date' onChange={(e) => {this.setState({ zakończenia: e.target.value })}}/>
          </div>
          <div className="kalkulator-button" onClick={() => {this.kalkulator()}}>Ready to Calculate</div>
          <div className='wynik'>{this.state.wynik}</div>
        </div>
        {/**/}
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
