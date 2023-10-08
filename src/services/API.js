import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// my backend - https://mockapi.io/projects/65229d9ef43b17938414b3ab

axios.defaults.baseURL = "https://65229d9ef43b17938414b3aa.mockapi.io/"

export const fetchContacts = createAsyncThunk('contacts/fetchAll', async (_, thunkAPI) => {
  try {
    const response = await axios.get('/contacts');
    return response.data;
  } catch (e) {
    return thunkAPI.rejectWithValue(e.message);
  }
});

export const addContact = createAsyncThunk('contacts/addContact', async (contact, thunkAPI) => {
  try {
    const response = await axios.post('/contacts', contact);
    return response.data;
  } catch (e) {
    return thunkAPI.rejectWithValue(e.message);
  }
});

export const deleteContact = createAsyncThunk('contacts/deleteContact', async (taskId, thunkAPI) => {
  try {
    const response = await axios.delete(`/contacts/${taskId}`);
    return response.data;
  } catch (e) {
    return thunkAPI.rejectWithValue(e.message);
  }
});