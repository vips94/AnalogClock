import {configureStore} from '@reduxjs/toolkit';
import ui_slice from './ui_slice';
const Store = configureStore({
    reducer : {ui:ui_slice}
})

export default Store;