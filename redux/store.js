import { configureStore } from '@reduxjs/toolkit';
import trackStateReducer from './trackPlayer.js';

export default configureStore({
    reducer: {
        trackState: trackStateReducer
    }
});