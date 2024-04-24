import React, { useState } from 'react';
import './App.css';
import TextTurningComponent from './textTurningComponent';
import Kalkulator from './kalkulator';

function App() {
  const [activeTab, setActiveTab] = useState('TextTurningComponent');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };
  return (
    <div className="App">
      <header className="App-header">
        <h1>Excel is Matter</h1>
      </header>
      <main>
        <div className="tabs">
          <button 
            className={activeTab === 'TextTurningComponent' ? 'active-tab' : 'inactive-tab'}
            onClick={() => handleTabClick('TextTurningComponent')}
          >
            Text Tuning
          </button>
          <button 
            className={activeTab === 'Kalkulator' ? 'active-tab' : 'inactive-tab'}
            onClick={() => handleTabClick('Kalkulator')}
          >
            Calculator
          </button>
        </div>
        {activeTab === 'TextTurningComponent' && <TextTurningComponent />}
        {activeTab === 'Kalkulator' && <Kalkulator />}
      </main>
    </div>
  );
}

export default App;
