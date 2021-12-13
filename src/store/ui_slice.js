import {createSlice} from '@reduxjs/toolkit';

const ui_slice = createSlice({
    name : 'UI',
    initialState : {dark : false},
    reducers:{
        toggleTheme(state){
            state.dark = !state.dark
        }
    }
})

export const uiActions = ui_slice.actions;
export default ui_slice.reducer;