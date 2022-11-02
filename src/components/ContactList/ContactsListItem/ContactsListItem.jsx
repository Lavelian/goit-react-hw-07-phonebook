// import Loader from 'components/Loader';
import { ListItem, Text, Button } from './ContactsListItem.styled';
import { Oval } from 'react-loader-spinner';
import { useRemoveContactsMutation } from 'redux/contactsApi/contactsApi';

export default function ContactsListItem({ name, phone, id }) {
  const [removeContact, { isLoading }] = useRemoveContactsMutation();
  return (
    <ListItem>
      <Text>{name + ' : ' + phone} </Text>
      <Button
        type="button"
        onClick={() => removeContact(id)}
        disabled={isLoading}
      >
        Delete
      </Button>
      {isLoading && (
        <Oval
          height={20}
          width={20}
          color="#031903"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
          ariaLabel="oval-loading"
          secondaryColor="#4fa94d"
          strokeWidth={2}
          strokeWidthSecondary={2}
        />
      )}
    </ListItem>
  );
}
