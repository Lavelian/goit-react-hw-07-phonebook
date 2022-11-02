import { Formik, Field } from 'formik';
import { FormBox, Button } from './Form.styled';
import { Oval } from 'react-loader-spinner';
import Box from 'components/Box';
import {
  useGetContactsQuery,
  useAddContactsMutation,
} from 'redux/contactsApi/contactsApi';
import { nanoid } from 'nanoid';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const initialValues = {
  name: '',
  phone: '',
};

export default function Form() {
  const { data: contacts } = useGetContactsQuery();
  const [addContact, { isLoading }] = useAddContactsMutation();
  console.log(isLoading);

  const onSubmit = async ({ name, phone }, { resetForm }) => {
    try {
      if (isDuplicate(name, phone)) {
        resetForm();
        return toast(`Contact ${name + ' :' + phone} already exists`);
      }
      await addContact({ name, phone, id: nanoid() });
    } catch (error) {
      console.log(error);
    }
    resetForm();
  };
  const isDuplicate = (name, phone) => {
    return contacts.find(
      contact => contact.name === name && contact.phone === phone
    );
  };

  return (
    <Formik onSubmit={onSubmit} initialValues={initialValues}>
      <FormBox>
        <label>
          Name
          <Field
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>
        <label>
          Number
          <Field
            type="tel"
            name="phone"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>
        <Box display="flex" alignItems="center">
          <Button type="submit">Add to Contact</Button>
          {isLoading && (
            <Oval
              height={25}
              width={25}
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
        </Box>
      </FormBox>
    </Formik>
  );
}
