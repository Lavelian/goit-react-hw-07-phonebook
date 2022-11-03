// import Loader from 'components/Loader';
import { ListItem, Text, Button } from './ContactsListItem.styled';
import Loader from 'components/Loader';
import { useRemoveContactsMutation } from 'redux/contactsApi/contactsApi';

export default function ContactsListItem({ name, phone, id }) {
  const [removeContact, { isLoading }] = useRemoveContactsMutation();
  return (
    <ListItem>
      <Text>{name + ' : ' + phone} </Text>
      {isLoading && <Loader height={17} width={17} />}
      <Button
        type="button"
        onClick={() => removeContact(id)}
        disabled={isLoading}
      >
        Delete
      </Button>
    </ListItem>
  );
}
