import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/authOperations';
import { Form, Label } from '../../components/RegisterForm/RegisterForm.styled';
// import { register } from '../../redux/auth/auth-operations';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    const email = form.elements.email.value;
    const password = form.elements.password.value;
    // console.log({ name, email, password });
    dispatch(logIn({ email, password }));
    // form.reset();
  };

  return (
    <Form onSubmit={handleSubmit} autoComplete="off">
      <Label>
        Email
        <input type="email" name="email" />
      </Label>
      <Label>
        Password
        <input type="password" name="password" />
      </Label>
      <button type="submit">Log in</button>
    </Form>
  );
};
