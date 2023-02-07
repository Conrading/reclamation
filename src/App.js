import React, { Component } from 'react'
import './App.css';


class Kalendarz extends Component {
  constructor () {
    super ();
    this.state = {
      rozpoczęcia: null,
      zakończenia: null,
      wynik: "Wanna try to calculate how many month(s) between two days?",
      każdy: [
        {"month": "January", "start": 7, "last": 31, "pto": [], "bank": [1, 6], "dateName": {"1": "New Year Day", "6": "Three Kings' Day"}},
        {"month": "February", "start": 3, "last": 28, "pto": [9], "bank": []},
        {"month": "March", "start": 3, "last": 31, "pto": [], "bank": []},
        {"month": "April", "start": 6, "last": 30, "pto": [], "bank": [9, 10], "dateName": {"9": "Easter", "10": "Easter Monday"}},
        {"month": "May", "start": 1, "last": 31, "pto": [], "bank": [1, 3], "dateName": {"1": "Labour Day", "3": "Constitution Day"}},
        {"month": "June", "start": 4, "last": 30, "pto": [], "bank": [8], "dateName": {"8": "Corpus Christi Day"}},
        {"month": "July", "start": 6, "last": 31, "pto": [], "bank": []},
        {"month": "August", "start": 2, "last": 31, "pto": [], "bank": [15], "dateName": {"15": "Assumption Day"}},
        {"month": "September", "start": 5, "last": 30, "pto": [], "bank": []},
        {"month": "Octobor", "start": 0, "last": 31, "pto": [], "bank": []},
        {"month": "November", "start": 3, "last": 30, "pto": [], "bank": [1, 11], "dateName": {"1": "All Saints' Day", "11": "Independence Day"}},
        {"month": "December", "start": 5, "last": 31, "pto": [], "bank": [25, 26], "dateName": {"25": "Christmas Day", "26": "St. Stephen's Day"}}
      ],
      remark: null
    }
    this.kalkulator = this.kalkulator.bind(this)
  }
  kalkulator () {
    if (this.state.rozpoczęcia === null || this.state.zakończenia === null) {
      this.setState({wynik: "there is problem of input, maybe try again?"})
    } else {
      if (this.state.rozpoczęcia.split("/").length !== 3 || this.state.zakończenia.split("/").length !== 3) {
        this.setState({wynik: "the input format is incorrect, you sure it is like Month/Date/Year?"})
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
              this.setState({ wynik: "the correct number is: " + premiryMiesiąć})
            } else {
              let compensate = premiryMiesiąć + 1
              this.setState({ wynik: "the correct number term is: " + compensate})
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
            this.setState({ wynik: "the correct number term is: " + jedenNumer})
          } else {
            let jedenNumer = Number(monthGapByYear) + Number(monthGapByMonth) + 1
            this.setState({ wynik: "the correct number term is: " + jedenNumer})
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
              <div className='tooltip'>
                <div className='dni-pto-text'>
                  {d}
                  <div class="left">
                      <h3>I am OOO on Feb. 9</h3>
                      <p>just one day, will be back soon</p>
                      <i></i>
                  </div>  
                </div>
              </div>
            )
          } 
        }
        for (let b = 0; b < i.bank.length; b++) {
          if (d === i.bank[b]) {
            confirm = false
            return(
              <div className='tooltip'>
                <div className='dni-bank-text'>
                  {d}
                  <div class="left">
                      <h3>{i.dateName[d]}</h3>
                      <i></i>
                  </div>  
                </div>
              </div>
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
            <input className="kalkulator-line" placeholder='Start of Date, Month/Date/Year' onChange={(e) => {this.setState({ rozpoczęcia: e.target.value })}}/>
          </div>
          <div className='kalkulator-input-frame'>
            <input className="kalkulator-line" placeholder='End of Date, Month/Date/Year' onChange={(e) => {this.setState({ zakończenia: e.target.value })}}/>
          </div>
          <div className="kalkulator-button" onClick={() => {this.kalkulator()}}>Calculate</div>
          <div className='wynik'>{this.state.wynik}</div>
        </div>
        <br />
        {/**/}
        <div className='center-by-margin'>{miesiąc}</div>
        <div className='remark-frame'>
          <div className='remark' onClick={() => {this.setState({remark: null})}}>{this.state.remark}</div>
        </div>
        <div className='bottom-note'>
          <div className='bottom-note-bank' onClick={() => {window.location.href='https://www.officeholidays.com/countries/poland/2023'}}>* Bank Holiday in Poland</div>
          <div className='bottom-note-PTO'>* PTO duration</div>
        </div>
        <br />
      </body>
    )
  }
}

export default Kalendarz;
