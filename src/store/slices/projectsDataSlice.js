import { createSlice } from "@reduxjs/toolkit";

export const projectsDataSlice = createSlice({
  name: "projects-data",
  initialState: { data: [] },
  reducers: {
    updateProjectsData: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { updateProjectsData } = projectsDataSlice.actions;
export default projectsDataSlice.reducer;
