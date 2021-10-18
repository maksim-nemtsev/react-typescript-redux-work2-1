import { createSlice } from "@reduxjs/toolkit";

type IInitialState = {
  countryId: number | string;
  isFetching: boolean;
};

const initialState: IInitialState = {
  countryId: 7,
  isFetching: false,
};

export const CountryData = createSlice({
  name: "request-init-data",
  initialState,
  reducers: {
    reqCountryData: (state, action) => {
      state.countryId = action.payload;
      state.isFetching = true;
    },
  },
});

export const { reqCountryData } = CountryData.actions;
export default CountryData.reducer;
