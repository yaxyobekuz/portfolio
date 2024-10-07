import { createSlice } from "@reduxjs/toolkit";

export const modalsSlice = createSlice({
  name: "project-modal",
  initialState: {
    project: {
      data: null,
      isOpen: false,
    },
  },
  reducers: {
    openModal: (state, action) => {
      if (state[action.payload]) {
        state[action.payload].isOpen = true;
      } else {
        console.error(`"${action.payload}"is not a valid modal name!`);
      }
    },

    closeModal: (state, action) => {
      if (state[action.payload]) {
        state[action.payload].isOpen = false;
      } else {
        console.error(`"${action.payload}"is not a valid modal name!`);
      }
    },

    updateModalData: (state, action) => {
      if (state[action.payload.modal]) {
        state[action.payload.modal].data = action.payload.data;
      } else {
        console.error(`"${action.payload.modal}"is not a valid modal name!`);
      }
    },
  },
});

export const { openModal, closeModal, updateModalData } = modalsSlice.actions;
export default modalsSlice.reducer;
