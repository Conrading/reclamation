import React, { Component } from 'react'
import './App.css';


class Kalendarz extends Component {
  constructor () {
    super ();
    this.state = {
      rozpoczęcia: null,
      zakończenia: null,
      wynik: "How many month(s) between two dates, or counts from 1st date?",
      obliczenieNumer: null,
      każdy: [
        /*{"month": "January", "start": 7, "last": 31, "pto": [], "bank": [1, 6], "dateName": {"1": "New Year Day", "6": "Three Kings' Day"}},
        {"month": "February", "start": 3, "last": 28, "pto": [], "bank": []},
        {"month": "March", "start": 3, "last": 31, "pto": [], "bank": []},
        {"month": "April", "start": 6, "last": 30, "pto": [], "bank": [9, 10], "dateName": {"9": "Easter", "10": "Easter Monday"}},*/
        {"month": "May", "start": 1, "last": 31, "pto": [], "bank": [1, 3], "dateName": {"1": "Labour Day", "3": "Constitution Day"}},
        {"month": "June", "start": 4, "last": 30, "pto": [15, 16], "bank": [8], "dateName": {"8": "Corpus Christi Day"}},
        {"month": "July", "start": 6, "last": 31, "pto": [], "bank": []},
        {"month": "August", "start": 2, "last": 31, "pto": [], "bank": [15], "dateName": {"15": "Assumption Day"}},
        {"month": "September", "start": 5, "last": 30, "pto": [], "bank": []},
        {"month": "Octobor", "start": 0, "last": 31, "pto": [], "bank": []},
        {"month": "November", "start": 3, "last": 30, "pto": [], "bank": [1, 11], "dateName": {"1": "All Saints' Day", "11": "Independence Day"}},
        {"month": "December", "start": 5, "last": 31, "pto": [], "bank": [25, 26], "dateName": {"25": "Christmas Day", "26": "St. Stephen's Day"}}
      ],
      remark: "I am OOO on June 15 and 16"
    }
    this.kalkulator = this.kalkulator.bind(this)
  }
  kalkulator () {
    if (this.state.rozpoczęcia === null || this.state.zakończenia === null) {
      //confirm both input are valid
      this.setState({wynik: "there is problem of input, maybe try again?", obliczenieNumer: null})
    } else {
      if (this.state.rozpoczęcia.split("/").length === 3) {
        //confirm 1st Date is correct
        //verify 2nd Date
        if (this.state.zakończenia.split("/").length === 3 || Number.isInteger(Number(this.state.zakończenia)) === true) {
          var zakończeniaUpdate = this.state.zakończenia
          //2nd Date is valid
          //verify whether this is integer number
          if (Number.isInteger(Number(this.state.zakończenia)) === true && Number(this.state.zakończenia) > 0) {
            //next leap year is 2024 
            var date1 = new Date(this.state.rozpoczęcia);
            var Difference_In_Time = this.state.zakończenia * (1000 * 3600 * 24)
            var secondDateNumer = date1.getTime() + Difference_In_Time
            const defaultTime = new Date(secondDateNumer);
            var secondDateFormat = (Number(defaultTime.getMonth()) + 1) + "/" + defaultTime.getDate() + "/" + (Number(defaultTime.getYear()) + 1900)
            zakończeniaUpdate = secondDateFormat
          } else {
            this.setState({wynik: "Did you input positive integer number?", obliczenieNumer: null})
          }
          //now we have two dates, time to do the math
          let splittingRozpoczęcia = this.state.rozpoczęcia.split("/")
          let splittingZakończenia = zakończeniaUpdate.split("/")
          //confirm whether that all make sense
          //2nd date is later than start of date
          if (Number(splittingRozpoczęcia[2]) > Number(splittingZakończenia[2])) {
            this.setState({wynik: "maybe wrong year?", obliczenieNumer: null})
          } else if (splittingRozpoczęcia[2] === splittingZakończenia[2] && Number(splittingRozpoczęcia[0]) > Number(splittingZakończenia[0])) {
            this.setState({wynik: "maybe wrong month?", obliczenieNumer: null})
          } else if (splittingRozpoczęcia[2] === splittingZakończenia[2] && splittingRozpoczęcia[0] === splittingZakończenia[0] && Number(splittingRozpoczęcia[1]) > Number(splittingZakończenia[1]) ) {
            this.setState({wynik: "maybe wrong date?", obliczenieNumer: null})
          } else if (splittingRozpoczęcia[2] === splittingZakończenia[2]) {
            //okay, same year
            //we see the first number is month
            //calculate the difference between month, 
            let premiryMiesiąć = Number(splittingZakończenia[0]) - Number(splittingRozpoczęcia[0])
            if (premiryMiesiąć > 12 || premiryMiesiąć < 0) {
              this.setState({wynik: "maybe month typo?", obliczenieNumer: null})
            } else {
              //if the 2nd date is smaller than 1st date
              //we don't need to add another month
              //if it is at least the same data, we need to add another month
              if (Number(splittingZakończenia[1]) < Number(splittingRozpoczęcia[1])) {
                this.setState({ wynik: "the correct term is: ", obliczenieNumer: premiryMiesiąć})
              } else {
                let compensate = premiryMiesiąć + 1
                this.setState({ wynik: "the correct term is: ", obliczenieNumer: compensate})
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
              this.setState({ wynik: "the correct term is: ", obliczenieNumer: jedenNumer})
            } else {
              let jedenNumer = Number(monthGapByYear) + Number(monthGapByMonth) + 1
              this.setState({ wynik: "the correct term is: ", obliczenieNumer: jedenNumer})
            }
          }
        } else {
          this.setState({wynik: "the 2nd Date format could be incorrect, try Month/Date/Year format, or input integer number", obliczenieNumer: null})
        }
      } else {
        //confirm the 1st Date input is invalid
        this.setState({wynik: "the 1st Date format is incorrect, maybe try Month/Date/Year?", obliczenieNumer: null})
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
                      <h3>I am Out of Office</h3>
                      <p>from June 15 to 16</p>
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
        <div className='main-title'>-- Calendarizing 2023 --</div>
        <div className="kalkulator-frame">
          <div className='kalkulator-input-frame'>
            <input className="kalkulator-line" placeholder='1st date [Month/Date/Year]' onChange={(e) => {this.setState({ rozpoczęcia: e.target.value })}}/>
          </div>
          <div className='kalkulator-input-frame'>
            <input className="kalkulator-line" placeholder='2nd date [Month/Date/Year], or days in integer' onChange={(e) => {this.setState({ zakończenia: e.target.value })}}/>
          </div>
          <div className="kalkulator-button" onClick={() => {this.kalkulator()}}>Calculate</div>
          <div className='wynik-frame'>
            <div className='wynik-swój'>{this.state.wynik}</div>
            <div className='wynik-numer'>{this.state.obliczenieNumer}</div>
          </div>
        </div>
        <div className='center-separation-line'><hr /></div>
        <div className='remark-frame'>
          <div className='remark' onClick={() => {this.setState({remark: "will be back on June 19"})}}>{this.state.remark}</div>
        </div>
        <div className='center-by-margin'>{miesiąc}</div>
        <br />
        <div className='bottom-note'>
          <div className='bottom-note-bank' onClick={() => {window.location.href='https://www.officeholidays.com/countries/poland/2023'}}>* Bank Holiday in Poland</div>
          <div className='bottom-note-PTO'>* PTO duration</div>
        </div>
        <br />
        <div className='bottom-note'>
          <div>All Rights may not be Reserved 2023</div>
        </div>
        <br />
      </body>
    )
  }
}

export default Kalendarz;
