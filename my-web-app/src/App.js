import React from 'react'
import './App.css';
import Header from './components/Header';
import Projects from './components/Projects';

function App() {
  return (
    <div className='App'>
      <Header />
      <Projects />
      <p>This is the body of the webpage</p>
    </div>
  );
}

export default App;
