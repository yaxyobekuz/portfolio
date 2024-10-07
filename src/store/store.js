import { configureStore } from "@reduxjs/toolkit";

// Slices
import projectsDataSlice from "./slices/projectsDataSlice";

export default configureStore({
  reducer: {
    projectsData: projectsDataSlice,
  },
});
