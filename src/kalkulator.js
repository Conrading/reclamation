import React, { Component } from 'react'
import './kalkulator.css';


class Kalendarz extends Component {
  constructor () {
    super ();
    this.state = {
      rozpoczęcia: null,
      zakończenia: null,
      wynik: "How many month(s) between two dates, or counts from 1st date?",
      obliczenieNumer: null,
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
    return (
      <body>
      <div className='center-separation-line'><hr /></div>
        <div className='main-title'>-- Date Calculator --</div>
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
        <br />
      </body>
    )
  }
}

export default Kalendarz;
