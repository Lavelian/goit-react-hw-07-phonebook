import { nanoid } from 'nanoid';
import Container from './Container';
import Form from 'components/Form';
import Contact from 'components/Contact';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch, useSelector } from 'react-redux';
import { changeFilter } from 'redux/Filter/filterSlice';
import {
  useGetContactsQuery,
  useAddContactsMutation,
} from 'contactsApi/contactsApi';
export default function App() {
  const { data: contacts } = useGetContactsQuery();
  const [addContact] = useAddContactsMutation();

  const filter = useSelector(({ filter }) => filter);
  // const contacts = useSelector(({ contacts }) => contacts.value);
  const dispatch = useDispatch();

  const formSubmitHandler = async (name, number) => {
    try {
      if (isDuplicate(name, number)) {
        return notify();
      }
      await addContact({ name, number, id: nanoid() });
    } catch (error) {
      console.log(error);
    }
  };

  const getFilteredContacts = () => {
    if (!filter) {
      return contacts;
    }
    console.log(contacts[0].name.toLowerCase());

    return contacts.filter(
      ({ name, phone }) =>
        name.toLowerCase().includes(filter.toLowerCase()) ||
        phone.toLowerCase().includes(filter.toLowerCase())
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
      />
      <ToastContainer />
    </Container>
  );
}
