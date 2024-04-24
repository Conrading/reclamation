import React, { useState } from 'react';
import './textTurningComponent.css'

const TextAreaComponent = () => {
  const [inputData, setInputData] = useState('');
  const [formattedData, setFormattedData] = useState('');
  const [buttonSwitch, setButtonSwitch] = useState(false);

  const handleInputChange = (event) => {
    setInputData(event.target.value);
  };

  const formatData = () => {
    const lines = inputData.split(/\s+/).filter(Boolean);
    const formattedLines = lines.map(line => `"${line}"`).join(' OR ');
    setFormattedData(formattedLines);
    setButtonSwitch(true)
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(formattedData)
      .then(() => {
        alert('Data copied to clipboard!');
      })
      .catch((error) => {
        console.error('Error copying to clipboard: ', error);
      });
  };

  const clearData = () => {
    setInputData('');
    setFormattedData('');
    setButtonSwitch(false)
  }

  return (
    <div>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <div style={{ margin: '10px' }}>
              <div style={{ margin: '10px' }}>
                  <div className='TextTuningPageButton' onClick={clearData}>Clear Data</div>
              </div>
          </div>
          <textarea style={{ width: '89%', padding: '10px', margin: '10px 0'}}
              value={inputData}
              onChange={handleInputChange}
              placeholder="Enter data separated by spaces or new lines"
              rows={10}
              cols={50}
          />
        </div>
        <br />
        <div >
          {buttonSwitch===false && <div className='TextTuningPageButton' onClick={formatData}>Format Data</div>}
          {buttonSwitch===true && <div className='TextTuningPageButton' onClick={copyToClipboard}>Copy Result</div>}
        </div>
        <br />
        <p>{formattedData}</p>
    </div>
  );
};

export default TextAreaComponent;
