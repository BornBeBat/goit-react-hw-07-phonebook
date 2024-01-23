import { Item, List, Text } from './ContactList.styled';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from 'myRedux/contactsSlise';
import { filterArray } from 'utils';

export const ContactList = () => {
  const contacts = useSelector(state => state.contacts);
  const filter = useSelector(state => state.filter);
  const filteredContacts = filterArray(contacts, filter);
  const dispatch = useDispatch();

  return (
    <List>
      {filteredContacts.map(({ name, id, number }) => (
        <Item key={id}>
          <Text>
            {name}: {number}
          </Text>
          <button onClick={() => dispatch(deleteContact(id))}>Delete</button>
        </Item>
      ))}
    </List>
  );
};
