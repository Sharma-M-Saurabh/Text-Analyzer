import './App.css';
import { useState } from 'react';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextBox from './components/TextBox';

function App() {
  const [Mode , setMode] = useState('light');   //wheather darkmode is enabled or not
  const toggleMode = ()=>{
    if(Mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743'
    }


  
  else{
    setMode('light')
    document.body.style.backgroundColor = '#FFFFFF'

  }
}



  return (
    <>

<Navbar title ='TextUties' homeText = 'Home' mode = {Mode} toggleMode = {toggleMode}/>
<TextBox heading = 'Text Analyser' mode = {Mode}/>
{/* <About/> */}

  

    



</> 
 );
}

export default App;
