import {configureStore} from '@reduxjs/toolkit';
import time_slice from './time_slice';
import ui_slice from './ui_slice';
const Store = configureStore({
    reducer : {
        ui:ui_slice,
        timezone:time_slice
    }
})

export default Store;