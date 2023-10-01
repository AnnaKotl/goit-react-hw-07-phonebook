import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: [],
  reducers: {
    addContact: (state, action) => {
      const newContact = {
        id: nanoid(),
        name: action.payload.name,
        number: action.payload.number,
        isDeleted: false,
      };
      state.push(newContact);
    },
    deleteContact: (state, action) => {
      const contact = state.find((contact) => contact.id === action.payload);
      if (contact) {
        contact.isDeleted = true;
      }
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;
export default contactsSlice.reducer;
