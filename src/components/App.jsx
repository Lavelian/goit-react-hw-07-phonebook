import { nanoid } from 'nanoid';
import Container from './Container';
import Form from 'components/Form';
import Contact from 'components/Contact';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch, useSelector } from 'react-redux';
// import { changeFilter } from 'redux/Filter/filterReducer';
// import { removeContact, addContact } from 'redux/Contacts/contactsReducer';

import { changeFilter } from 'redux/Filter/filterSlice';
import { removeContact, addContact } from 'redux/Contacts/contactsSlice';

export default function App() {
  const filter = useSelector(({ filter }) => filter);
  const contacts = useSelector(({ contacts }) => contacts);
  const dispatch = useDispatch();

  const formSubmitHandler = (name, number) => {
    if (isDuplicate(name, number)) {
      return notify();
    }
    dispatch(addContact({ name, number, id: nanoid() }));
  };
  const removeContactById = id => {
    dispatch(removeContact(id));
  };
  const getFilteredContacts = () => {
    if (!filter) {
      return contacts;
    }

    return contacts.filter(
      ({ name, number }) =>
        name.toLocaleLowerCase().includes(filter.toLocaleLowerCase()) ||
        number.toLocaleLowerCase().includes(filter.toLocaleLowerCase())
    );
  };

  const handleChange = e => {
    const { value } = e.target;
    dispatch(changeFilter(value));
  };

  const isDuplicate = (name, number) => {
    return contacts.find(
      contact => contact.name === name && contact.number === number
    );
  };
  const notify = () => toast('There is already a contact');
  const filteredContacts = getFilteredContacts();
  return (
    <Container>
      <h1>PhoneBook</h1>
      <Form OnSubmitForm={formSubmitHandler} />
      <Contact
        filter={filter}
        filteredContacts={filteredContacts}
        handleChange={handleChange}
        removeContact={removeContactById}
      />
      <ToastContainer />
    </Container>
  );
}
