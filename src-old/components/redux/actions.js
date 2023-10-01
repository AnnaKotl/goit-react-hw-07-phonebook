import { createAction } from '@reduxjs/toolkit';

export const setFilter = createAction('filter/setFilter');
export const setIsEmptyContacts = createAction('contacts/setIsEmptyContacts');
export const addContact = createAction('contacts/addContact');
export const deleteContact = createAction('contacts/deleteContact');