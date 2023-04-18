import { NavLink } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import { Nav } from './Navigation.styled';
import { useSelector } from 'react-redux';

export const Navigation = () => {
  // const isLoggedIn = useAuth();
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);

  return (
    <Nav>
      <NavLink to="/">Home</NavLink>
      {isLoggedIn && <NavLink to="/contacts">Contacts</NavLink>}
    </Nav>
  );
};
