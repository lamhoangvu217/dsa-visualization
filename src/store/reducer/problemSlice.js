import { createSlice } from "@reduxjs/toolkit";

const ProblemStore = createSlice({
  name: "ProblemStore",
  initialState: {
    selectedProblem: "SearchInsertPosition",
  },
  reducers: {
    setSelectedProblem: (state, action) => {
      state.selectedProblem = action.payload;
    },
  },
});

export const { setSelectedProblem } = ProblemStore.actions;
export default ProblemStore.reducer;
