
import './App.css';
import React, { useEffect, useState } from 'react';
import Clock from 'react-clock';
import 'react-clock/dist/Clock.css';
import { useSelector, useDispatch } from 'react-redux';
import moment from 'moment'
import { clockoff } from './Redux/TimerSlice';
import {clockstart} from './Redux/TimerSlice'
function App() {
  const dispatch = useDispatch()
  const { time } = useSelector((e) => e.TimerSlice);




  let prevtime = window?.localStorage?.getItem("time")
  const [value, setValue] = useState(prevtime ? prevtime : new Date());
  const [clockon, setclockon] = useState(time)
  let [internet, setInternet] = useState()
console.log(time,"time")

const switchon=()=>{

  if(clockon==false){
    setclockon(true);
  dispatch(clockstart(true))
  }
 
}


  useEffect(() => {
    const interval = setInterval(() => setInternet(navigator?.onLine), 100);

    return () => {
      clearInterval(interval);
    };
  }, [internet])


  useEffect(() => {

    if (clockon === true && internet === true ) {
      const interval = setInterval(() => { setValue(new Date()); window?.localStorage?.setItem("time", moment(new Date()).format('HH:mm:ss')) }, 1000);

      return () => {
        clearInterval(interval);
      };
    }



  }, [clockon, internet,time]);





  return (
    <div className="App">
      <div >
        <div style={{ paddingButtom: "20px" }} >
          <p style={{ fontSize: '25px', color: "#296da9", marginTop: "0px" }}>Clock</p>
          <div className="clock-position">
            <Clock value={value} />
          </div>

        </div>
        <div className='action-button-outer'>

          <button className='button-action' onClick={() => { setclockon(false); dispatch(clockoff(false)) }}>Pause </button>
          <button className='button-action' onClick={() =>switchon()}>Resume</button>

        </div>
      </div>


    </div>
  );
}

export default App;