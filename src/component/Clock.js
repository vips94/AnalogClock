import React, { useEffect, useState } from 'react';
import classes from './Clock.module.css';
import {useSelector} from 'react-redux'
import City from './City';

const Clock = (props)=>{
    const [time , setTime] = useState()
    const [secondsStyle,setSecondStyle] = useState()
    const [minutesStyle,setMinutesStyle] = useState()
    const [hoursStyle,setHoursStyle] = useState()

    const dark = useSelector(state => state.ui.dark)

    const timeFunction = ()=>{
        const deg = 6;
            let date = new Date()
            
            let strTime = date.toLocaleString("en-US", {
                timeZone: `${props.currentArea}/${props.currentLocation}`,
                hour: '2-digit', minute: '2-digit',second:'2-digit',weekday:'long'
            });
            const arr = strTime.split(/:| /)
            let hh = arr[1] * 30
            let mm = arr[2] * deg
            let sc = arr[3] * deg

            setTime(`${arr[0]} ${arr[1]}:${arr[2]}:${arr[3]} ${arr[4]}`)

            setSecondStyle({
                transform: `rotateZ(${sc}deg)`
            });
    
            setMinutesStyle({
                transform: `rotateZ(${mm}deg)`
            });
    
            setHoursStyle({
                transform: `rotateZ(${hh+(mm/12)}deg)`
            });
    }

    useEffect(()=>{
        timeFunction();
        const interval =  setInterval(()=>{timeFunction()},1000);
        
        return(()=>{
            clearInterval(interval)
        })
    },[props.currentLocation])
 

    
    return(
        <div className={classes.container}>
            <div className={`${classes.clock} ${dark?classes.dark:classes.light}`}>
                <div className={classes.hour}>
                    <div className={classes.hr} style={hoursStyle}></div>
                </div>
                <div className={classes.min}>
                    <div className={`${classes.mn} ${dark?classes.mndark:classes.mnlight}`}  style={minutesStyle}></div>
                </div>
                <div className={classes.sec}>
                    <div className={classes.sc} style={secondsStyle}></div>
                </div>
            </div>
            <City city={props.currentLocation} time={time}/>
        </div>
    );
}

export default Clock;