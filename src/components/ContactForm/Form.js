import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Button, Form, Input, Label } from './Form.styled';
import { useDispatch } from 'react-redux';
import { addContact } from 'redux/contacts/contactOperations';
import { useContacts } from '../../hooks/useContacts';

export const ContactForm = () => {
  const dispatch = useDispatch();
  const { selectedContacts } = useContacts();
  const contactName = selectedContacts.map(name => name.name);

  const addCont = event => {
    event.preventDefault();
    const name = event.currentTarget.elements.name.value;
    const number = event.currentTarget.elements.number.value;
    if (contactName.includes(name)) {
      return toast.warn(`This contact is already in phonebook!`);
    }
    dispatch(addContact({ name, number }));

    event.currentTarget.reset();
  };
  return (
    <Form onSubmit={addCont}>
      <Label className="user-name">
        Name
        <Input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </Label>
      <Label>
        Number
        <Input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </Label>
      <Button type="submit">Add contact</Button>
    </Form>
  );
};
