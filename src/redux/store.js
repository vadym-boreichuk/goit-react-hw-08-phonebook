import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { filterReducer } from './filterSlice';
import { contactReducer } from './contacts/contactSlice';
import { authSliceReducer } from './auth/authSlice';

const rootReducer = combineReducers({
  auth: authSliceReducer,
  contacts: contactReducer,
  filter: filterReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});
