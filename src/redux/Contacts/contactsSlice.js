import { createSlice } from '@reduxjs/toolkit';

const contactSlice = createSlice({
  name: 'contacts',
  initialState: [],
  reducers: {
    addContact(state, { payload }) {
      state.push(payload);
      // return [...state, payload]
    },
    removeContact(state, { payload }) {
      return state.filter(item => item.id !== payload);
    },
  },
});

export const { addContact, removeContact } = contactSlice.actions;
const contactsReducer = contactSlice.reducer;
export default contactsReducer;
