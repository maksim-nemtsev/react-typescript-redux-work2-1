import { createSlice } from "@reduxjs/toolkit";

type IInitialState = {
  lab: {
    list: {
      id: number;
      name: string;
      updated_at: string;
      created_at: string;
    }[];
    defWs: {
      id: number;
      name: string;
      charts: {
        id: number;
        id_ws: number;
        name: string;
        data: string;
        updated_at: string;
        created_at: string;
      }[];
    };
  };
};

const initialState: IInitialState = {
  lab: {
    list: [
      {
        id: 1,
        name: "default",
        updated_at: "2021-05-03 10:12:17",
        created_at: "2021-05-03 10:12:17",
      },
    ],
    defWs: {
      id: 1,
      name: "default",
      charts: [
        {
          id: 1,
          id_ws: 1,
          name: "new Tab 1",
          data: '{"data": [], "name": "New Tab", "filter": {"isProfit": false, "marketCapRange": {"to": 5, "from": 0}}, "sectors": [], "chartView": {}, "checkList": [], "countries": [], "indicator": {"x": "Last Close Market Cap", "y": "Last Close TEV", "z": "Free Cash Flow from EV"}, "labPeriod": "y", "industries": []}',
          updated_at: "2021-05-03 10:12:17",
          created_at: "2021-05-03 10:12:17",
        },
      ],
    },
  },
};

export const WorkSpaces = createSlice({
  name: "request-work-spaces",
  initialState,
  reducers: {
    reqWorkSpaces: (state, action) => {
      state.lab = action.payload.lab;
    },
  },
});

export const { reqWorkSpaces } = WorkSpaces.actions;
export default WorkSpaces.reducer;
