import { createSlice } from '@reduxjs/toolkit';

export const trackPlayerSlice = createSlice({
  name: 'trackState',
  initialState: {
    value: 'Music'
  },
  reducers: {
    changeTrackPlayerState: (state, trackPlayerState) => {
        state.value = trackPlayerState.payload;
    }
  }
});

export const { changeTrackPlayerState } = trackPlayerSlice.actions;
export default trackPlayerSlice.reducer;