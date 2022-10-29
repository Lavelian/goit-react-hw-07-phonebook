import { useDispatch, useSelector } from 'react-redux';
import { InputLabel } from './ContactsInput.styled';
import { changeFilter } from 'redux/Filter/filterSlice';
export default function ContactsInput() {
  const filter = useSelector(({ filter }) => filter);
  const dispatch = useDispatch();
  const handleChange = e => {
    const { value } = e.target;
    dispatch(changeFilter(value));
  };
  return (
    <InputLabel>
      Find Contacts by name
      <input
        type="text"
        name="filter"
        onChange={handleChange}
        value={filter}
        placeholder="Filter"
      />
    </InputLabel>
  );
}
