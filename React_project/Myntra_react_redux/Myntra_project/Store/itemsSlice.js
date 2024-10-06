import { createSlice } from "@reduxjs/toolkit";



const itemSlice = createSlice({
  name: "items",
  initialState:[],
  reducers: {
    addInitialItems: (store, action) => {
      return action.payload;
    },
  },
});

export const itemsAction = itemSlice.actions;

export default itemSlice;


