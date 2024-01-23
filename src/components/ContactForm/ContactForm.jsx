import { useState } from 'react';
import { nanoid } from 'nanoid';
import { useDispatch, useSelector } from 'react-redux';
import { Forma, Input, Label } from './ContactForm.styled';
import { addContact } from 'myRedux/contactsSlise';
import { getContacts } from 'myRedux/selectors';

export const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  const handleChange = e => {
    const { name, value } = e.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        break;
    }
  };
  const handleSubmit = e => {
    e.preventDefault();
    const isExist = contacts.find(elem => elem.name.toLowerCase() === name);
    if (isExist) {
      alert(`${name} is already in contacts`);
      return;
    }
    const id = nanoid();
    dispatch(addContact({ id, name, number }));
    setName('');
    setNumber('');
  };
  return (
    <>
      <Forma onSubmit={handleSubmit}>
        <Label>
          Name
          <Input
            type="text"
            name="name"
            value={name}
            required
            onChange={handleChange}
          />
        </Label>
        <Label>
          Number
          <Input
            type="tel"
            name="number"
            value={number}
            required
            onChange={handleChange}
          />
        </Label>
        <button type="submit">Add contact</button>
      </Forma>
    </>
  );
};
