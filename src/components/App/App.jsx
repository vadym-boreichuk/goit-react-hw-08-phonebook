import { ToastContainer } from 'react-toastify';
import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Filter } from '../Filter/Filter';
import { AppBar } from 'components/AppBar/AppBar';
import { ContactList } from '../ContactList/ContactList';
import { ContactForm } from '../ContactForm/Form';
import { Div, Dive, Container, Title } from './App.styled';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchContacts } from 'redux/contacts/contactOperations';
import Home from '../pages/HomePage';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Contacts from '../pages/Contacts';
import { RestrictedRoute } from '../RestrictedRoute';

export const App = () => {
  const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(fetchContacts());
  // }, [dispatch]);
  return (
    <Container>
      <AppBar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Container>
    // <Container>
    //   <AppBar />
    //   <RegisterForm />
    //   <LoginForm />
    //   <Dive>
    //     <Div>
    //       <Title>Phonebook</Title>
    //       <ContactForm />
    //     </Div>
    //     <Div>
    //       <Title>Contacts</Title>
    //       <Filter />
    //       <ContactList />
    //     </Div>
    //   </Dive>
    //   <ToastContainer
    //     font-size="15px"
    //     position="top-right"
    //     autoClose={5000}
    //     hideProgressBar={false}
    //     newestOnTop={false}
    //     closeOnClick
    //     rtl={false}
    //     pauseOnFocusLoss
    //     draggable
    //     pauseOnHover
    //     theme="light"
    //   />
    // </Container>
  );
};
