import { createReducer, createAction } from '@reduxjs/toolkit';
export const addContact = createAction('filterReducer/addContact');
export const removeContact = createAction('filterReducer/removeContact');
const contactsReducer = createReducer([], {
  // [addContact]: (state, action) => [...state, action.payload],
  [addContact]: (state, action) => {
    state.push(action.payload);
  },
  [removeContact]: (state, action) =>
    state.filter(item => item.id !== action.payload),
});
export default contactsReducer;
