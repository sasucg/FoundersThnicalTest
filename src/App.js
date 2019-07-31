import React from 'react';
import logo from './logo.svg';
import './App.css';
import MyFirstHeader from './components/MyFirstHeader'
import MySecondHeader from './components/MySecondHeader'
import Steps from './components/Steps'
import MainBox from './components/MainBox'
import Footer from './components/Footer'

function App() {
  return (
    <div className="App"> 
      <MyFirstHeader/>
      <MySecondHeader/>
      <Steps/>
      <MainBox/>
      <Footer/>
    </div>
  );
}

export default App;
