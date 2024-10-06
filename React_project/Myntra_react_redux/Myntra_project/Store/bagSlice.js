import { createSlice } from "@reduxjs/toolkit";

const BagSlice = createSlice({
  name: "bagFunction",
  initialState:[],
  reducers: {
    itemAddedToBag: (state, action) => {
       state.push(action.payload);
    },
    itemRemoveFromBag:(state,action)=>{
      const newStore = state.filter(itemId => itemId!==action.payload);
      return newStore;
    }
  },
});

export const BagSliceActions = BagSlice.actions;

export default BagSlice;
