import { useDispatch, useSelector } from 'react-redux';

import { logOut } from 'redux/auth/authOperations';
import { useAuth } from '../../hooks/useAuth';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  console.log(user);
  // console.log(isLoggedIn);

  return (
    <div>
      {/* {isLoggedIn && ( */}
      <>
        <p>Welcome, {user.name}</p>
        <button type="button" onClick={() => dispatch(logOut())}>
          Logout
        </button>
      </>
      {/* )} */}
    </div>
  );
};
