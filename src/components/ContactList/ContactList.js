import { ContactItem } from 'components/ContactItem/ContactItem';
import { useContacts } from '../../hooks/useContacts';
import { Div, List } from './ContactList.styled';

export const ContactList = () => {
  // Отримуємо частини стану
  const { selectedContacts } = useContacts();
  const { contactFilter } = useContacts();
  const filterValue = contactFilter.toLowerCase();

  const getVisibilityContacts = () => {
    if (!filterValue || filterValue === '') {
      return selectedContacts;
    }

    return selectedContacts.filter(contact =>
      contact.name.toLowerCase().includes(filterValue)
    );
  };

  const visibilityContacts = getVisibilityContacts();

  return (
    <Div>
      <List>
        {visibilityContacts &&
          visibilityContacts.map(({ name, number, id }) => (
            <ContactItem key={id} name={name} phone={number} id={id} />
          ))}
      </List>
    </Div>
  );
};
