import { createSlice } from '@reduxjs/toolkit';

const isEmptyContactsSlice = createSlice({
  name: 'isEmptyContacts',
  initialState: false,
  reducers: {
    setIsEmptyContacts: (state, action) => {
      return action.payload;
    },
  },
});

export const { setIsEmptyContacts } = isEmptyContactsSlice.actions;
export default isEmptyContactsSlice.reducer;
