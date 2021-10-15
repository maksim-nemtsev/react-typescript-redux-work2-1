import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import reqAuthReducer from "../components/App/AppSliceAuthData";
import reqInitReducer from "../components/App/AppSliceInitData";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    authData: reqAuthReducer,
    initData: reqInitReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
