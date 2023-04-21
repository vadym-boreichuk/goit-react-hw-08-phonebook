import { Title, TitleBox, StyledLink } from './AuthNav.styled';

export const AuthNav = () => {
  return (
    <TitleBox>
      <StyledLink to="/register">
        <Title>Register</Title>
      </StyledLink>
      <StyledLink to="/login">
        <Title>Log In</Title>
      </StyledLink>
    </TitleBox>
  );
};
