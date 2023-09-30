import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'filter',
  initialState: {
    filterValue: "",
  },
  reducers: {
    findContacts(state,action) {
        state.filterValue = action.payload
    },
  },
});

export const filterReducer = slice.reducer;
export const { findContacts } = slice.actions;