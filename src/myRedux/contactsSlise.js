import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addContact } from './operations';

export const contactsSlise = createSlice({
  name: 'contacts',
  initialState: { items: [], isLoading: false, error: null },
  reducers: {
    deleteContact: (state, action) => {
      return {
        ...state,
        items: state.items.filter(el => el.id !== action.payload),
      };
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = action.payload;
      })
      .addCase(fetchContacts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { deleteContact } = contactsSlise.actions;
