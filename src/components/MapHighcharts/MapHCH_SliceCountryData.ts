import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

export const CountryData = createSlice({
  name: "request-country-data",
  initialState,
  reducers: {
    reqCountryData: (state, action) => {
      state = action.payload;
    },
  },
});

export const { reqCountryData } = CountryData.actions;
export default CountryData.reducer;
