import { combineReducers } from '@reduxjs/toolkit';

// import contactsReducer from './Contacts/contactsReducer';
// import filterReducer from './Filter/filterReducer';
import contactsReducer from './Contacts/contactsSlice';
import filterReducer from './Filter/filterSlice';

const rootReducer = combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
});

export default rootReducer;
