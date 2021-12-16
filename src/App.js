import './App.css';
import Clock from './component/Clock';
import Toggle from './component/ui/Toggle';
import {useSelector,useDispatch} from 'react-redux';
import {uiActions} from './store/ui_slice';
import React,{ useEffect, useState } from 'react';
import Dropdown from './component/ui/Dropdown';

function App() {
  const dark = useSelector(state => state.ui.dark)
  const selectedArea = useSelector(state => state.timezone.selectedArea)
  const selectedLocation = useSelector(state => state.timezone.selectedLocation)
  const[text,setText] = useState("");
  const [currentArea,setCurrentArea] = useState("Asia")
  const [currentLocation,setCurrentLocation] = useState("Kolkata")

  const dispatch = useDispatch()

  useEffect(()=>{
    if(dark){
      setText('Light')
    }
    else{
      setText('Dark')
    }

  },[dark,dispatch])

  const toggleThemeHandler = ()=>{
    dispatch(uiActions.toggleTheme())
  }

  useEffect(()=>{
    fetch("http://worldtimeapi.org/api/ip")
    .then(res=>res.json())
    .then((res)=>{
        const arr = res.timezone.split('/')
        setCurrentArea(arr[0])
        setCurrentLocation(arr[1])
    })
  },[currentArea,currentLocation])

  return (
    <div className={"App "+(dark?"dark":"light")}>
      <div className="clockDiv">
        <Clock currentArea={currentArea} currentLocation={currentLocation}/>
        <Clock currentArea={selectedArea} currentLocation={selectedLocation}/>
      </div>
      <Dropdown/>
      <Toggle onClick={toggleThemeHandler}>{text}</Toggle>
    </div>
  );
}

export default App;
