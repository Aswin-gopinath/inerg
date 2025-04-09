import { createSlice } from '@reduxjs/toolkit';
import covidData from '../data/data.json';

const covidSlice = createSlice({
  name: 'covid',
  initialState: {
    data: covidData,
    selectedState: '',
  },
  reducers: {
    setSelectedState: (state, action) => {
      state.selectedState = action.payload;
    },
  },
});

export const { setSelectedState } = covidSlice.actions;
export default covidSlice.reducer;
