import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: [],
  reducers: {
    addContact: (state, action) => {
      const newContact = {
        id: nanoid(),
        ...action.payload,
        isDeleted: false,
      };
      return [...state, newContact];
    },
    deleteContact: (state, action) => {
      return state.map(contact =>
        contact.id === action.payload ? { ...contact, isDeleted: true } : contact
      );
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;
export default contactsSlice.reducer;