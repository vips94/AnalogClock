import React from 'react';
import classes from './City.module.css'
import {useSelector} from 'react-redux';
const City = (props)=>{
    const dark = useSelector(state => state.ui.dark)
    return(
        <div className={`${classes.container} ${dark?classes.dark:classes.light}`}>
            <div className={classes.city}>
                {/* <div className={classes.flag}/> */}
                <h2>{props.city}</h2>
            </div>
            <div className={`${classes.time} ${dark?classes.tdark:classes.tlight}`}>
                <h3>{props.time}</h3>
            </div>
        </div>
    )
}

export default City;