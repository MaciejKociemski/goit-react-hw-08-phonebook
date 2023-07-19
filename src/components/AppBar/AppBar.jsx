import { Nav, Link, RegIcon, LogInIcon, Container } from './AppBar.styled';

import { Spiner } from '../../pages/ContactList/ContactList.styled';
import { useSelector } from 'react-redux';
import { UserMenu } from '../../components/UserMenu/UserMenu';

export const AppBar = () => {
  const { isLoaggedIn, isLoading } = useSelector(state => state.auth);

  return (
    <header>
      {isLoading && <Spiner />}

      <Container>
        <Nav>
          <div>
            <Link to="/">Home</Link>
            {isLoaggedIn && <Link to="/contacts">Contacts</Link>}
          </div>
          <div>
            {isLoaggedIn ? (
              <UserMenu />
            ) : (
              <>
                <Link to="/register">
                  <RegIcon />
                  Register
                </Link>
                <Link to="/login">
                  <LogInIcon />
                  Log in
                </Link>
              </>
            )}
          </div>
        </Nav>
      </Container>
    </header>
  );
};
