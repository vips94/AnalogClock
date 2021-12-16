import React from 'react';
import classes from './Toggle.module.css'
import {useSelector} from 'react-redux';
const Toggle = (props)=>{
    const dark = useSelector(state => state.ui.dark)
    return(
        <label className={classes.checkbox}>
            <h3 className={`${classes.logo} ${dark?classes.logolight:classes.logodark}`}>{props.children}</h3>
            <input type="checkbox" className={classes.toggle} defaultChecked={dark} onClick={props.onClick}/>
            <span className={`${classes.slider} ${dark?classes.light:classes.dark}`}></span>
        </label>
    )
}

export default Toggle