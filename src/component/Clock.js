import React, { useEffect, useState } from 'react';
import classes from './Clock.module.css';
import {useSelector} from 'react-redux'

const Clock = (props)=>{
    const [secondsStyle,setSecondStyle] = useState()
    const [minutesStyle,setMinutesStyle] = useState()
    const [hoursStyle,setHoursStyle] = useState()
    
    const class_name = classes.clock + " " + props.className;

    const dark = useSelector(state => state.ui.dark)

    useEffect(()=>{
        setInterval(() => {
            const deg = 6;
            let date = new Date()
            let hh = date.getHours() * 30
            let mm = date.getMinutes() * deg
            let sc = date.getSeconds() * deg
    
    
            setSecondStyle({
                transform: `rotateZ(${sc}deg)`
            });
    
            setMinutesStyle({
                transform: `rotateZ(${mm}deg)`
            });
    
            setHoursStyle({
                transform: `rotateZ(${hh+(mm/12)}deg)`
            });
        });
    },[])
    
    
    

    return(
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
    );
}

export default Clock;