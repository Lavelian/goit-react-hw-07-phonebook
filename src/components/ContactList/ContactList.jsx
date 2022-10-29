import { LiItem, ContactsList } from './ContactList.styled';
import {
  useGetContactsQuery,
  useRemoveContactsMutation,
} from 'redux/contactsApi/contactsApi';
import { useSelector } from 'react-redux';

export default function ContactList() {
  const [removeContact, result] = useRemoveContactsMutation();
  const { data: contacts = [] } = useGetContactsQuery();

  const filter = useSelector(({ filter }) => filter);
  const getFilteredContacts = () => {
    if (!filter) {
      return contacts;
    }
    return contacts.filter(
      ({ name, phone }) =>
        name.toLowerCase().includes(filter.toLowerCase()) ||
        phone.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const filteredContacts = getFilteredContacts();
  console.log(filteredContacts);

  return (
    <ContactsList>
      {filteredContacts.map(({ id, name, phone }) => (
        <LiItem key={id}>
          <span>{name + ' :'}</span> <span>{phone}</span>
          <button
            type="button"
            onClick={() => removeContact(id)}
            disabled={result.isLoading}
          >
            Delete
          </button>
        </LiItem>
      ))}
    </ContactsList>
  );
}
