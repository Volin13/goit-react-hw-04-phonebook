import { useEffect, useState } from 'react';
import {
  Section,
  Filter,
  Contacts,
  NewContactForm,
  Container,
} from '../components/index';
import { nanoid } from 'nanoid';

const App = () => {
  const [contacts, setContacts] = useState(() => {
    const savedData = localStorage.getItem('contacts');
    const parsedData = JSON.parse(savedData);
    return parsedData ?? [];
  });
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const seveData = JSON.stringify(contacts);
    return localStorage.setItem('contacts', seveData);
  }, [contacts]);

  const addContact = ({ name, number }) => {
    if (
      contacts.some(
        contact => contact.name.toLowerCase() === name.toLowerCase()
      )
    ) {
      alert('Contact already exists');
    } else {
      setContacts(phones => [...phones, { id: nanoid(), name, number }]);
    }
  };

  const formatedFilter = filter => {
    setFilter(filter.toLowerCase().trim());
  };

  const filterContacts = () => {
    return contacts.filter(({ name }) => name.toLowerCase().includes(filter));
  };

  const removeContact = idToRemove => {
    setContacts(phones => phones.filter(({ id }) => id !== idToRemove));
  };

  return (
    <Container title="Phone book">
      <Section title="Add new contact" variant="h3">
        <NewContactForm addContact={addContact} />
      </Section>
      <Section title="Your contacts" variant="h3">
        <Contacts contactsList={filterContacts()} removeContact={removeContact}>
          <Filter setFilter={formatedFilter} />
        </Contacts>
      </Section>
    </Container>
  );
};
export default App;
