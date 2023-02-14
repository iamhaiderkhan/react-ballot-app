import { createAsyncThunk } from "@reduxjs/toolkit";
import API, { ballotData } from "../../Api/Api";
export const SLICE_NAME = "ballots";
export const ACTION_TYPES = {
  GET_BALLOTS_LIST: `${SLICE_NAME}/GET_BALLOTS_LIST`,
};

export const getBallots = createAsyncThunk(
  ACTION_TYPES.GET_BALLOTS_LIST,
  async (data, { rejectWithValue }) => {
    try {
      const response = await API.getLocalData();
      // console.log(response, "====");
      return response.items;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
