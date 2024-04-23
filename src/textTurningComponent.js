import React, { useState } from 'react';

const TextAreaComponent = () => {
  const [inputData, setInputData] = useState('');
  const [formattedData, setFormattedData] = useState('');

  const handleInputChange = (event) => {
    setInputData(event.target.value);
  };

  const formatData = () => {
    const lines = inputData.split(/\s+/).filter(Boolean);
    const formattedLines = lines.join(' OR ');
    setFormattedData(formattedLines);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(formattedData)
      .then(() => {
        alert('Formatted data copied to clipboard!');
      })
      .catch((error) => {
        console.error('Error copying to clipboard: ', error);
      });
  };

  const clearData = () => {
    setInputData('');
    setFormattedData('');
  }

  return (
    <div>
        <div style={{ display: 'flex', alignItems: 'center' }}>
        <div style={{ marginRight: '10px' }}>
            <div style={{ marginRight: '10px' }}>
                <button onClick={formatData}>Format Data</button>
            </div>
            <div style={{ marginRight: '10px' }}>
                <button onClick={clearData}>Clear Data</button>
            </div>
        </div>
        <textarea
            value={inputData}
            onChange={handleInputChange}
            placeholder="Enter data separated by spaces or new lines"
            rows={10}
            cols={50}
        />
        </div>
        <div style={{ marginRight: '10px' }}>
            <button onClick={copyToClipboard}>Copy Result</button>
        </div>
        <br />
        <label>Formatted Data:</label>
        <p>{formattedData}</p>
    </div>
  );
};

export default TextAreaComponent;
