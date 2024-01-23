import { createSlice } from '@reduxjs/toolkit';
import { contacts_BASE } from './contacts';

export const contactsSlise = createSlice({
  name: 'contacts',
  initialState: contacts_BASE,
  reducers: {
    addContact: (state, action) => {
      return [...state, action.payload];
    },
    deleteContact: (state, action) => {
      return state.filter(el => el.id !== action.payload);
    },
  },
});

export const { addContact, deleteContact } = contactsSlise.actions;
