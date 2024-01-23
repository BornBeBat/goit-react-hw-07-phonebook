import { createAsyncThunk } from '@reduxjs/toolkit';
import * as api from 'api';

export const fetchContacts = createAsyncThunk('fetchContacts', async () => {
  const response = await api.getContacts();
  return response;
});

export const addContact = createAsyncThunk('fetchContacts', async data => {
  const response = await api.setContact(data);
  return response;
});
