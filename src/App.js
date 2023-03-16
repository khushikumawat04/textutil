// import logo from './logo.svg';
import './App.css';
import Nav from './component/nav';
import Alert from './component/alert';
import Form from './component/form';
import Mode from './component/dlmode';
import Contact from './component/Contact';


import React, {useState } from 'react';
import {
  BrowserRouter as Router,
 Routes,
  Route,
  Link
} from "react-router-dom";


 export default function App()
 {
  const [theme, setTTheme] = useState('light');
  const [btn, setBtn] = useState("Enable DarkMode");
  const [alert, setAlert] = useState(null);


  const showAlert =(message,type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(()=>{
     setAlert(null);
    },3000);

    }
    const yColor = () =>{

      document.body.style.backgroundColor = "skyblue";

      setTTheme("info")
    }
    const gColor = () =>{
      document.body.style.backgroundColor = "grey";
      setTTheme("secondary")
    }
 
    const grColor = () =>{
      document.body.style.backgroundColor = "lightgreen";
      setTTheme("success")
    }
    const rColor = () =>{
      document.body.style.backgroundColor = "crimson";
      setTTheme("danger")
    }
    

  
  const mode = () =>{
    // || theme=== "warning" || theme==="danger" || theme==="secondary" || theme==="success"

    if(theme === "light" || theme=== "warning" || theme==="danger" || theme==="secondary" || theme==="success"){
      setTTheme("dark")
      document.body.style.backgroundColor = "#042743";
      // document.body.style.color = "white";
      setBtn("Enable lightMode")
      showAlert("Dark Mode unable","success")
      document.title = "Enable dark mode"
      // setInterval(()=>{
      //   document.title = "Textanalyzer"

      // },1000)
      // setInterval(()=>{
      //   document.title = "text util"

      // },3000)
     
    }
    else{
      setTTheme("light")
      document.body.style.backgroundColor = "white"
      // document.body.style.color = "black";
      setBtn("Enable DarkMode")
      showAlert("Light Mode unable","success")
      document.title = "Enable light mode"
     
    }

  }



  return (
<>
<Router basename='/khushikumawat04.github.io'>
<Nav title='Text Analyzer' mode = {mode} ctheme = {theme} btn={btn} yColor={yColor} gColor={gColor} grColor={grColor} rColor={rColor}/>
<Alert  alert = {alert}/>





        {/* <Mode />
        <Contact ctheme = {theme}/>
        <Form heading = 'Enter Text To Analyze' ctheme = {theme} showAlert={showAlert} /> */}
         



   <Routes>
   <Route path="/khushikumawat04.github.io" element={<Form heading = 'Enter Your Data' ctheme = {theme} showAlert={showAlert} /> }/> 
    <Route path="/dlmode" element={<Mode/>}/> 
  
   

   <Route path="/Contact" element={ <Contact ctheme = {theme}/>}/> 



 </Routes>
 </Router>  
  







</>

    // <div className="App">
      
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}
