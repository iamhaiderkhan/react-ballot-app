import { configureStore } from "@reduxjs/toolkit";
import ballotSlice from "./ballots/slice";
export const store = configureStore({
  reducer: {
    ballots: ballotSlice,
  },
});
