import { NavLink, Link } from 'react-router-dom';
// import { Linka } from './AuthNav.styled';

export const AuthNav = () => {
  return (
    <div>
      <NavLink to="/register">Register</NavLink>
      <NavLink to="/login">Log In</NavLink>
    </div>
  );
};
