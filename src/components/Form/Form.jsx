import { Formik, Field } from 'formik';
import { FormBox, Button } from './Form.styled';
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
  const [addContact] = useAddContactsMutation();

  const onSubmit = async ({ name, phone }, { resetForm }) => {
    try {
      if (isDuplicate(name, phone)) {
        resetForm();
        return toast('There is already a contact');
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
        <Button type="submit">Add to Contact</Button>
      </FormBox>
    </Formik>
  );
}
