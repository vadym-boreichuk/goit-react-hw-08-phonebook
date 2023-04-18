import { useSelector } from 'react-redux';
import {
  selectUser,
  selectIsLoggedIn,
  selectIsRefreshing,
} from 'redux/auth/authSelectors';

export const useAuth = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isRefreshing = 1;
  // useSelector(selectIsRefreshing);
  const user = useSelector(state => state.auth.user);
  // console.log(user);
  return {
    isLoggedIn,
    isRefreshing,
    user,
  };
};
