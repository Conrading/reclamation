import { useState } from 'react';
import './App.css';
import km from './km.json'

function MainPage () {
  const [showTable, setShowTable] = useState(true)
  let currentPlay = 1
  function switchPage (n) {
    playPage(currentPlay += n)
  }
  function playPage (n) {
    var i
    const jedesBild = document.getElementsByClassName('slideShowjedesBild')
    if (n > jedesBild.length) {currentPlay = 1}
    if (n < 1) {currentPlay = jedesBild.length}
    for (i = 0; i < jedesBild.length; i++) {
      jedesBild[i].style.display = "none"
    }
    jedesBild[currentPlay-1].style.display = "block"
  }
  return (
    <div>
      {showTable === true && <div className='main-frame'>
        <table className='updateTableFrame'>
          <tr className='updateTableTitleUniversal'>
            <th className='updateTableTitleErste'>Section</th>
            <th>Field</th>
            <th className='updateTableTitleErste'>Update from</th>
          </tr>
          <tr className='updateTableContent'>
            <td className='updateTableContentJedes' onClick={() => {setShowTable(false)}}>{km.jedes[0].section}</td>
            <td className='updateTableContentJedes' onClick={() => {setShowTable(false)}}>{km.jedes[0].field}</td>
            <td className='updateTableContentJedes' onClick={() => {setShowTable(false)}}>{km.jedes[0].update}</td>
          </tr>
        </table>
      </div>}
      {showTable === false && 
      <div className='main-frame'>
        <div className='jedesUpdateFrame'>
          <div className='makeRow'>
            <div className='jedesUpdateFieldFrame'>
              <div className='jedesUpdateFieldRow makeRow'>
                <div className='jedesUpdateFieldTitle'>Update: </div>
                <div className='jedesUpdateFieldImport'>{km.jedes[0].update}</div>
              </div>
              <div className='jedesUpdateFieldRow makeRow'>
                <div className='jedesUpdateFieldTitle'>Section: </div>
                <div className='jedesUpdateFieldImport'>{km.jedes[0].section}</div>
              </div>
              <div className='jedesUpdateFieldRow makeRow'>
                <div className='jedesUpdateFieldTitle'>Field: </div>
                <div className='jedesUpdateFieldImport'>{km.jedes[0].field}</div>
              </div>
              <div className='jedesUpdateFieldRow makeRow'>
                <div className='jedesUpdateFieldTitle'>Choice: </div>
                <div className='jedesUpdateFieldImport'>{km.jedes[0].option}</div>
              </div>
            </div>
            <div className='jedesUpdateFieldFrame'>
              <div className='jedesUpdateFieldRow'>
                <div className='jedesUpdateFieldTitle'>Commend:</div>
                <div>{km.jedes[0].commend}</div>
              </div>
            </div>
          </div>
          <div className='slideShowFrame'>
            <div className='sliderExample'>- Example -</div>
            <div className='slideShowContainer'>
              <img className='slideShowjedesBild' src="https://upload.wikimedia.org/wikipedia/commons/f/f1/An_example_for_a_nailed_note.jpg" />
              <img className='slideShowjedesBild' src="https://upload.wikimedia.org/wikipedia/commons/e/ee/Blocksatz-Beispiel_deutsch%2C_German_text_sample_with_fully_justified_text.svg" />
              <div className='sliderbottomFrame makeRow'>
                <button className='silderSwitcher' onClick={() => {switchPage(-1)}}>❮</button>
                <button className='silderSwitcher' onClick={() => {switchPage(1)}}>❯</button>
              </div>
            </div>
          </div>
          <div className='returnButton' onClick={() => {setShowTable(true)}}>Return</div>
        </div>
      </div>}
    </div>
  )
}

export default MainPage;
