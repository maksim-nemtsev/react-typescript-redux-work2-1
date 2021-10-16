import { createSlice } from "@reduxjs/toolkit";

type IInitialState = {
  c: {
    [key: string]: {
      [key: number]: {
        n: number;
        v: number;
        p: string;
        t: string;
      }[];
    };
  };
  s: {
    [key: string]: {
      [key: number]: {
        n: number;
        v: number;
        p: string;
        t: string;
      }[];
    };
  };
  i: {
    [key: string]: {
      [key: number]: {
        n: number;
        v: number;
        p: string;
        t: string;
      }[];
    };
  };
};

const initialState: IInitialState = {
  c: {
    "07/29/2021": {
      1: [
        {
          n: 10,
          v: 3.49,
          p: "d",
          t: "g",
        },
      ],
    },
  },
  s: {
    "07/29/2021": {
      1: [
        {
          n: 10,
          v: 3.49,
          p: "d",
          t: "g",
        },
      ],
    },
  },
  i: {
    "07/29/2021": {
      1: [
        {
          n: 10,
          v: 3.49,
          p: "d",
          t: "g",
        },
      ],
    },
  },
};

export const FeedData = createSlice({
  name: "request-feed-data",
  initialState,
  reducers: {
    reqFeedData: (state, action) => {
      state.c = action.payload.c;
      state.s = action.payload.s;
      state.i = action.payload.i;
    },
  },
});

export const { reqFeedData } = FeedData.actions;
export default FeedData.reducer;
