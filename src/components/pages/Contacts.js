import { ContactForm } from 'components/ContactForm/Form';
import { ContactList } from '../ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { Container, Div } from 'components/App/App.styled';

function Contacts() {
  return (
    <Container>
      {/* <Helmet>
        <title>Login</title>
      </Helmet> */}
      <Div>
        <h1>Phonebook</h1>
        <ContactForm />
      </Div>
      <Div>
        <h1>Contacts</h1>
        <Filter />
        <ContactList />
      </Div>
    </Container>
  );
}

export default Contacts;
