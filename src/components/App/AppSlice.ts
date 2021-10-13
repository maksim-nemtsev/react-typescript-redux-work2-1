import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppThunk, RootState } from "../../store/store";

type IInitialState = {
  isAuth: boolean;
  userInfo: {
    locale: string;
    tariffId: number;
  };
};

const initialState: IInitialState = {
  isAuth: false,
  userInfo: {
    locale: "",
    tariffId: 0,
  },
};

export const AppSlice = createSlice({
  name: "isAuth",
  initialState,
  reducers: {
    authReducer: (state, action: PayloadAction<boolean>) => {
      state.isAuth = action.payload;
    },
  },
});

export const { authReducer } = AppSlice.actions;

export default AppSlice.reducer;
