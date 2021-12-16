import React from 'react';
import classes from './Dropdown.module.css'
import {useSelector,useDispatch} from 'react-redux';
import {timeAction} from './../../store/time_slice'

const Dropdown = (props)=>{
    const dispatch = useDispatch()
    const dark = useSelector(state => state.ui.dark)
    const Areas = useSelector(state => state.timezone.areas)
    const TimeZones = useSelector(state => state.timezone.timeZones)
    const selectedArea = useSelector(state => state.timezone.selectedArea)
    const selectedLocation = useSelector(state => state.timezone.selectedLocation)

    const areaChangeHandler = (e)=>{
        dispatch(timeAction.selectArea(e.target.value))
    }

    const locationChangeHandler = (e) =>{
        dispatch(timeAction.selectLocation(e.target.value))
    }

    return(
        <div className={classes.dropdownDiv}>
            <div className={`${classes.container} ${dark?classes.dark:classes.light}`}>
                <h2>Select Area</h2>
                <select className={`${classes.dropdown} ${dark?classes.tdark:classes.tlight}`} value={selectedArea} onChange={areaChangeHandler}>
                    {
                        Areas.map((item,id)=>{
                            return(
                                <option key={id} value={item}>{item}</option>
                            )
                        })
                    }
                </select>
            </div>
            <div className={`${classes.container} ${dark?classes.dark:classes.light}`}>
                <h2>Location</h2>
                <select className={`${classes.dropdown} ${dark?classes.tdark:classes.tlight}`} value={selectedLocation} onChange={locationChangeHandler}>
                    {
                        TimeZones.map((item,id)=>{
                            return(
                                <option key={id} value={item}>{item}</option>
                            )
                        })
                    }
                </select>
            </div>
            
           
        </div>
    )
}

export default Dropdown;