import { useDispatch } from 'react-redux';

import { logOut } from 'redux/auth/authOperations';
import { useAuth } from '../../hooks/useAuth';
import { Title, TitleBox } from 'components/AuthNav/AuthNav.styled';
import { Button } from 'components/ContactItem/ContactItem.styled';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <TitleBox>
      <Title>Welcome, {user.name}</Title>
      <Button type="button" onClick={() => dispatch(logOut())}>
        Logout
      </Button>
    </TitleBox>
  );
};
