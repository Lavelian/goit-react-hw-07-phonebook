import { LiItem, ContactsList } from './ContactList.styled';
import { useRemoveContactsMutation } from 'contactsApi/contactsApi';

export default function ContactList({ filteredContacts }) {
  const [removeContact, result] = useRemoveContactsMutation();
  return (
    <ContactsList>
      {filteredContacts.map(({ id, name, number }) => (
        <LiItem key={id}>
          <span>{name + ':'}</span> <span>{number}</span>
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
