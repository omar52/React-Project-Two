import { createSlice } from "@reduxjs/toolkit";

const counter = createSlice({
  name: "counter",
  initialState: {
    current_value: 0,
    watchList: {},
  },

  reducers: {
    addMovie(state, action) {
      const movie_id = action.payload.id;
      state.current_value += 1;
      state.watchList[movie_id] = { ...action.payload };
    },

    removeMovie(state, action) {
      const movie_id = action.payload.id;
      state.current_value -= 1;
      delete state.watchList[movie_id];
    },
  },
});

export const { addMovie, removeMovie } = counter.actions;
export default counter.reducer;
