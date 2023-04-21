import { useAuth } from '../../hooks/useAuth';
import { StyledLink, Title, TitleBox } from 'components/AuthNav/AuthNav.styled';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <TitleBox>
      <StyledLink to="/">
        <Title>Home</Title>
      </StyledLink>
      {isLoggedIn && (
        <StyledLink to="/contacts">
          <Title>Contacts</Title>
        </StyledLink>
      )}
    </TitleBox>
  );
};
