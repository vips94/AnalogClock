import {createSlice} from '@reduxjs/toolkit';
 
import {Areas,TimeZones,Zones} from './data'





const time_slice = createSlice({
    name:"TimeZone",
    initialState: {
        areas:Areas,
        timeZones:TimeZones,
        selectedArea:"Asia",
        selectedLocation:"Dubai"
    },
    reducers:{
        selectArea(state,action){
            state.selectedArea = action.payload;
            const result = []
            Zones.filter((item)=>{
                const str = item.split('/')
                if(str[0] === action.payload){
                    if(str.length === 3) result.push(str[1]+"/"+str[2])
                    else result.push(str[1])
                }
                return item
            })
            state.timeZones = result;
            state.selectedLocation=state.timeZones[0];
        },

        selectLocation(state,action){
            state.selectedLocation = action.payload
        }
    }
})

export const timeAction = time_slice.actions;
export default time_slice.reducer;
  