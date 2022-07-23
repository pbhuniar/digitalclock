
import './App.css';
import React, { useEffect, useState } from 'react';
import Clock from 'react-clock';
import 'react-clock/dist/Clock.css';
function App() {
  const [value, setValue] = useState(new Date());
  const [clockon,setclockon]=useState(true)
  useEffect(() => {
if(clockon){
  const interval = setInterval(() => setValue(new Date()), 1000);

  return () => {
    clearInterval(interval);
  };
}


    
  }, [clockon]);
  return (
    <div className="App">
      <div >
      <div style={{paddingButtom:"20px"}} >
        <p style={{fontSize:'25px',color:"#296da9",marginTop:"0px"}}>Clock</p>
        <div   className="clock-position">
        <Clock value={value} />
        </div>
     
      </div>
      <div className='action-button-outer'>
     
      <button className='button-action' onClick={()=>setclockon(false)}>Pause </button>
      <button className='button-action' onClick={()=>setclockon(true)}>Resume</button>
     
      </div>
      </div>
     

    </div>
  );
}

export default App;
