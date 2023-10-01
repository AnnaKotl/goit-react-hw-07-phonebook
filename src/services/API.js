import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { mockapiUrl } from "./BASE_URL";

axios.defaults.baseURL = mockapiUrl;

export const fetchContacts = createAsyncThunk('contacts/fetchAll', async (_, { rejectWithValue }) => {
  try {
    const response = await axios.get('/contacts');
    return response.data;
  } catch (e) {
    toast.error("Error loading contacts");
    return rejectWithValue(e.message);
  }
});

export const addContact = createAsyncThunk('contacts/addContact', async (contact, { rejectWithValue }) => {
  try {
    console.log('Adding contact:', contact); // 
    const response = await axios.post('/contacts', contact);
    return response.data;
  } catch (e) {
    toast.error("Error adding contact");
    return rejectWithValue(e.message);
  }
});


export const deleteContact = createAsyncThunk('contacts/deleteContact', async (taskId, { rejectWithValue }) => {
  try {
    const response = await axios.delete(`/contacts/${taskId}`);
    return response.data;
  } catch (e) {
    toast.error("Error deleting contact");
    return rejectWithValue(e.message);
  }
});
