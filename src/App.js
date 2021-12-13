import './App.css';
import Clock from './component/Clock';
import Toggle from './component/ui/Toggle';
import {useSelector,useDispatch} from 'react-redux';
import {uiActions} from './store/ui_slice';
import React,{ useEffect, useState } from 'react';

function App() {
  const dark = useSelector(state => state.ui.dark)
  const[text,setText] = useState("");
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

  return (
    <div className={"App "+(dark?"dark":"light")}>
      <Clock/>
      <Toggle onClick={toggleThemeHandler}>{text}</Toggle>
    </div>
  );
}

export default App;
