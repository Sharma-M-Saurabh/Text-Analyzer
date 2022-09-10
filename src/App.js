import "./App.css";
import { useState } from "react";
import About from './components/About';
import Navbar from "./components/Navbar";
import TextBox from "./components/TextBox";
import Alert from "./components/Alert";
import Validation from "./components/Validation";
import PropTypes from "prop-types";
 



import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
  Link,
} from "react-router-dom";

function App() {
  const initialValues = {username : "", Password : ""};
  const[formValues , setformValues] = useState(initialValues);
  const [Mode, setMode] = useState("light"); //wheather darkmode is enabled or not
  const [NewMode, setSecMode] = useState("light"); 

  const [alert, SetAlert] = useState(null);

  // Alert Method
  

  const ShowAlert = (Message, type) => {
    SetAlert({
      msg: Message,
      type: type,
    });
    setTimeout(() => {
      SetAlert(null);
    }, 1500);
    };
      
  

  const toggleMode = () => {
    if (Mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      ShowAlert("DarkMode is Enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "#FFFFFF";
      ShowAlert("DarkMode is Disable", "success");
      document.title = "light Mode";
    }
  
  };
  const toggleModeSec = () => {
    if (NewMode === "light") {
      setSecMode("dark");
      document.body.style.backgroundColor = "Black";
      ShowAlert("DarkMode is Enabled", "success");
    } else {
      setSecMode("light");
      document.body.style.backgroundColor = "#FFFFFF";
      ShowAlert("DarkMode is Disable", "success");
      document.title = "light Mode";
    }
  
  };

  return (
    <>
     
      <Router>
      <Navbar
        title="TextUties"
        homeText="Home"
        mode={Mode}
        modeSec={NewMode}
        about = "About"
        toggleMode={toggleMode}
        toggleModeSec={toggleModeSec}
        login="Login"

      />
      <Alert alert={alert} />
     

      {/* <div className="container my-4"> */}
      <div className="app">
        <Routes>
          <Route path="/" element={<TextBox heading="Text Analyser" mode={Mode} />} />
          <Route path="about/" element={<About />} />
          <Route path="validation/" element={<Validation placeholder ="Username" pass = "Password"/>} />

            

       

        </Routes>

      </div>
      

      
      </Router>
      

    </>
  );
}

export default App;
