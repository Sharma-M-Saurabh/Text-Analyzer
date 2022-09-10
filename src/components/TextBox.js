import React,{useState} from "react";
import PropTypes from "prop-types";
import './TextBox.css'

export default function TextBox(props) {

  const changeUpperbtnClick = ()=>{
    //console.log("Upper button was clicked")
    setText("You have bee clicked on Changee Upper!" + text)
    let newtext = text.toUpperCase();
      setText(newtext);
  }
  const handlechange  = (event)=>{
    //console.log("On change have been done!")
    setText(event.target.value)

  }
  const changeLowerbtnClick = ()=>{
    let newtext = text.toLowerCase();
    setText(newtext);
  }
  const changeclearbtnClick = ()=>{
    let newtext = "";
    setText(newtext);
  }

  const Extraspaces = ()=>{
    let newText  =text.split(/[ ]+/);
    setText(newText.join(" "));
    


  }
  const CopyText=()=>{
    var text  = document.getElementById('myBox')
    text.select();
    navigator.clipboard.writeText(text.value);


  }

  const Getname=()=>{
    let text;
    let value = prompt("Enter the name");
    if(value === null || value ===""){
      text = "user cancelled the prompt"
    }
    else{
      text = `hello ${value} How are you`;
    }
    document.getElementById("demo").innerHTML = text;
  }
  
  const [text,setText] = useState("");
  //setText = ('new text');
  return (
    <>
   <div className='Sample'>Div 1</div>
      
    <div className="container mb-4" style = {{color : props.mode === 'dark'? 'white':'#042743'}}>
      <h1 className="head">{props.heading}</h1>
      <div className="mb-3" style = {{color : props.mode === 'dark'? '#042743':'white'}}>
        <textarea className="form-control" value = {text}  onChange = {handlechange}  id="myBox"rows="8"></textarea>
        </div>
         <button className="btn btn-primary mx-2"onClick={changeUpperbtnClick}>Convert UpperCase</button>
         <button className="btn btn-primary mx-2"onClick={changeLowerbtnClick}>Convert LowerCase</button>
         <button className="btn btn-primary mx-2"onClick={changeclearbtnClick}>Clear</button>
         <button className="btn btn-primary mx-2"onClick={CopyText}>Copy Text</button>
         <button className="btn btn-primary mx-2"onClick={Extraspaces}>Extra Spaces</button>
         <button className="btn btn-primary mx-2"onClick={Getname}>User</button>




    </div>
    <div className="container my-3" style = {{color : props.mode === 'dark'? 'white':'#042743'}}>
      <h3>Converted Text here!</h3>
      <h6>{text.split(" ").length} words and {text.length} characters</h6>
      <h6>{0.008 * text.split(" ").length}Minute to Read</h6>
      <h2>Preview</h2>
      <h6 className="Bold">{text.length>0?text:"Enter the Text to Preview"}</h6>
      <p id="demo"></p>
    </div>
  
    </> 
  );
}

         
          
       
         
 
TextBox.prototype = {
  heading: PropTypes.string.isRequired,
  // homeText : PropTypes.string.isRequired
};

TextBox.defaultProps = {
  heading: "Enter Text Here",
  // homeText : 'Homiesss'
};
