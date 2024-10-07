import { configureStore } from "@reduxjs/toolkit";

// Slices
import modalsSlice from "./slices/modalsSlice";
import projectsDataSlice from "./slices/projectsDataSlice";

export default configureStore({
  reducer: {
    modals: modalsSlice,
    projectsData: projectsDataSlice,
  },
});
