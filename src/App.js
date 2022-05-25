import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import About from './components/About';
import Alerts from './components/Alerts';
import React, { useState } from 'react';
import {
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  const [mode, setmode] = useState('dark');
  const [alert, setalert] = useState(null);

  const showalert = (message,type) =>{
    setalert({
      msg:message,
      type:type
    })
    

    setTimeout(() => {
    setalert(null)
    }, 1500);
  }

  const togglemode = () =>{
    // console.log(mode);
    if(mode==='light')
    {
      setmode('dark')
      document.body.style.backgroundColor='black'
      showalert('Dark mode enbled','Success');
      document.title="Textutils - darkmode"
      
      setInterval(() => {
        document.title='download textutils'
      }, 2000);
      setInterval(() => {
        document.title='textutils is awesome'
      }, 1500);
    }
    else
    {
      setmode('light')
      document.body.style.backgroundColor='white'
      showalert('Light mode enbled','Success')
      document.title="Textutils - Lightmode"
    }
  }
  
  return (
   <>
   
   
   <Navbar mode={mode} togglemode={togglemode}></Navbar>
    <Alerts alert={alert}/>
    <Routes>
      
          <Route exact path="/" element={ <Textform heading="Enter your text" mode={mode} alert={alert}/>}>
         
          </Route>
          <Route exact path="/about" element={ <About name="subham" mode={mode}/>}>
         
          </Route>
      </Routes>
   
   </>
 );
}

// Navbar.propTypes={
//  title:propTypes.string,
// }



export default App;
