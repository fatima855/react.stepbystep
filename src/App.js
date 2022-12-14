import './App.css';
import React, { useState } from "react";
import Alert1 from './AppComponent/Alert1'
import Navbar from './AppComponent/Navbar'
// import Accordian from './AppComponent/Accordian'
import Form from './AppComponent/Form'
// import { Routes, Route } from "react-router-dom";
function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type

    });

  }
  const useToogle = () => {
    if (mode === 'dark') {
      setMode('light');
      document.body.style.backgroundColor = "white";
      showAlert('light mode has been enable', 'success');

    }
    else {
      setMode('dark');
      document.body.style.backgroundColor = "grey";
      showAlert('dark mode has been enable', 'danger');
    }
  }
  setTimeout(() => {
    setAlert(null);
  }, 5000);
  return (
    <>

<div className="container">
 <Navbar title="UTILS"  mode={mode} useToogle={useToogle}/>
  <Alert1 alert={alert} showAlert={showAlert}/>
  <Form  mode={mode}  showAlert={showAlert} />
  {/* <div className="container"> */}
  {/* <Routes> */}
   {/* <Route path="/" element={  <Form  mode={mode}  showAlert={showAlert} /> } /> */}
   {/* <Route path="about" element={ <Accordian/> } />  */}
{/*        */}
   {/* </Routes> */}
   </div>

{/* <Navbar title="Textutiles" mode={mode} useToogle={useToogle} /> */}
{/* <Alert1 alert={alert} /> */}
{/* <div className="container"> */}
      {/* <Routes> */}
          {/* <Route path="/" element={<Form mode={mode} showAlert={showAlert} />} /> */}
          {/* <Route path="about" element={<Accordian />} /> */}
      {/* </Routes> */}
      {/* </div> */}
    </>
  );
}

export default App;
