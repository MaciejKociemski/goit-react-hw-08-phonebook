import {
  Title,
  Wrap,
  UnderTitle,
  HomeLink,
  Section,
  HomeContactList,
} from './Home.styled'; 

import { useSelector } from 'react-redux';


export default function Home() {
  const { isLoaggedIn } = useSelector(state => state.auth); 

  return (
    <Section>
      <Title>Welcome to Phonebook</Title>
      <Wrap>
        {' '}
        <HomeContactList />
      </Wrap>

      {!isLoaggedIn ? (
        <UnderTitle>
          Please
          <HomeLink to="/register">Register</HomeLink>
          or
          <HomeLink to="/login">Log in</HomeLink>
          to be able to use your PhoneBook
        </UnderTitle>
      ) : (
        <UnderTitle>
          click on
          <HomeLink to="/contacts">Contacts</HomeLink>
          and organize your contacts
        </UnderTitle>
      )}
    </Section>
  );
}
