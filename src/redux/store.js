import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import filterReducer from './Filter/filterSlice';
import { contactsApi } from 'contactsApi/contactsApi';

export const store = configureStore({
  reducer: {
    [contactsApi.reducerPath]: contactsApi.reducer,
    filter: filterReducer,
  },

  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware(),
    contactsApi.middleware,
  ],
  devTools: process.env.NODE_ENV === 'development',
});

setupListeners(store.dispatch);
