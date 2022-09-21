import { useEffect, useState } from 'react';
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';

export function App() {
  const [contacts, setContacts] = useState(
    () => JSON.parse(localStorage.getItem('contacts')) ?? []
  );
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const handleSubmit = newContact => {
    if (
      contacts.find(
        ({ name }) => name.toLowerCase() === newContact.name.toLowerCase()
      )
    )
      return alert(`${newContact.name} is already in contacts.`);

    setContacts([newContact, ...contacts]);
  };

  const eventFilter = e => {
    setFilter(e.currentTarget.value);
  };

  const idDelete = e => {
    setContacts(prevContacts => prevContacts.filter(({ id }) => id !== e));
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <h1>Phonebook</h1>
      <ContactForm onSubmit={handleSubmit} />
      <h2>Contacts</h2>
      <Filter filter={filter} eventFilter={eventFilter} />
      <ContactList filter={filter} contacts={contacts} idDelete={idDelete} />
    </div>
  );
}
