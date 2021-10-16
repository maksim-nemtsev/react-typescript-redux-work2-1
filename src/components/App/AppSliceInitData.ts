import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  ents: {
    countries: {},
    sectors: [],
    industries: [],
    exchanges: [],
  },
  mapData: {
    date: "2021-07-28T00:00:00",
    data: [],
  },
  sce: [],
  feedData: null,
  ws: {
    map: {
      modes: [],
    },
  },
};

export const InitData = createSlice({
  name: "request-init-data",
  initialState,
  reducers: {
    reqInitData: (state, action) => {
      state.ents = action.payload.ents;
      state.mapData = action.payload.mapData;
      state.sce = action.payload.sce;
      state.ws = action.payload.ws;
    },
  },
});

export const { reqInitData } = InitData.actions;
export default InitData.reducer;
