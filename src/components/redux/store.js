import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import contactsReducer, { addContact } from './contactsSlice'; // Додано експорт додаткових функцій з contactsSlice

const rootReducer = combineReducers({
  contacts: contactsReducer,
});

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['contacts'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware({ serializableCheck: false }),
});

export const persistor = persistStore(store);

const savedContacts = localStorage.getItem('contacts');
if (savedContacts) {
  store.dispatch(addContact(JSON.parse(savedContacts)));
}

store.subscribe(() => {
  const state = store.getState();
  localStorage.setItem('contacts', JSON.stringify(state.contacts));
});
