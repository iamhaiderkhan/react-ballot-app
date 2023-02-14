import { createSlice } from "@reduxjs/toolkit";
import { getBallots, SLICE_NAME } from "./service";
const initialState = {
  isLoading: false,
  ballots: [],
  selectedNominee: {},
  showResultModal: false,
};

export const ballotSlice = createSlice({
  name: SLICE_NAME,
  initialState,
  reducers: {
    selectedNominee: (state, { payload }) => {
      console.log("PRESS", payload);
      state.selectedNominee = payload;
    },
    toggleResultModal: (state, { payload }) => {
      state.showResultModal = payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getBallots.pending, (state, { paylod }) => {
        state.isLoading = true;
      })
      .addCase(getBallots.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.ballots = payload;
      })
      .addCase(getBallots.rejected, (state, { paylod }) => {
        state.isLoading = false;
      });
  },
});

export const { selectedNominee, toggleResultModal } = ballotSlice.actions;

export default ballotSlice.reducer;
