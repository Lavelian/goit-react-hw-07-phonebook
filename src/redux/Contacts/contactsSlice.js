import { createSlice } from '@reduxjs/toolkit';

const contactSlice = createSlice({
  name: 'contacts',
  initialState: { value: [] },
  reducers: {
    addContact({ value }, { payload }) {
      value.push(payload);
      // return [...state, payload]
    },
    removeContact({ value }, { payload }) {
      return value.filter(item => item.id !== payload);
    },
  },
});

export const { addContact, removeContact } = contactSlice.actions;
const contactsReducer = contactSlice.reducer;
export default contactsReducer;
