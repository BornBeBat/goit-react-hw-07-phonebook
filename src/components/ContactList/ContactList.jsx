import { Item, List, Text } from './ContactList.styled';
import { useSelector, useDispatch } from 'react-redux';
import { filterArray } from 'utils';
import { getContacts, getFilter } from 'myRedux/selectors';
import { useEffect } from 'react';
import { deleteContact, fetchContacts } from 'myRedux/operations';

export const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const filteredContacts = filterArray(contacts, filter);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <List>
      {filteredContacts.map(({ name, id, phone }) => (
        <Item key={id}>
          <Text>Name: {name}</Text>
          <Text>Phone: {phone}</Text>
          <button onClick={() => dispatch(deleteContact(id))}>Delete</button>
        </Item>
      ))}
    </List>
  );
};
