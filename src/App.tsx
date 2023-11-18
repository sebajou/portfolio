import React from 'react';
import logo from './logo.svg';
import './App.css';
import Visitcard from './components/Visitcard/Visitcard';
import Scrolling from './components/Scrolling/Scrolling';

function App() {
  return (
    <div className="App">
      <div className="relative">
        <div className="relative md:fixed w-full md:w-4/12 min-h-screen">
          <Visitcard/>
        </div>
        <div className="w-full md:w-8/12 ml-auto">
          <div className="h-screen flex flex-col">
            <Scrolling/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
