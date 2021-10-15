import { createSlice } from "@reduxjs/toolkit";

type IInitialState = {
  userInfo: {
    locale: string;
    tariffId: number;
  };
};

const initialState: IInitialState = {
  userInfo: {
    locale: "en",
    tariffId: 0,
  },
};

export const AuthData = createSlice({
  name: "request-auth-data",
  initialState,
  reducers: {
    reqAuthData: (state, action) => {
      state.userInfo.locale = action.payload.locale;
      state.userInfo.tariffId = action.payload.tarifId;
    },
  },
});

export const { reqAuthData } = AuthData.actions;
export default AuthData.reducer;
