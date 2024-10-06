import {configureStore} from "@reduxjs/toolkit"
import itemSlice from "./itemsSlice";
import fetchStatusSlice from "./fetchStatus";
import BagSlice from "./bagSlice";

const myntraStore = configureStore({
  reducer:{
    items:itemSlice.reducer,
    fetchstatus:fetchStatusSlice.reducer,
    bagFunction:BagSlice.reducer,
  }
})

export default myntraStore;