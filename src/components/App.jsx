import React, { Component } from 'react';
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };
  componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    if (contacts) this.setState({ contacts: JSON.parse(contacts) });
  }
  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== this.prevState) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }
  handleSubmit = newContact => {
    const { contacts } = this.state;
    const findSubmit = contacts.find(
      ({ name }) => name.toLowerCase() === newContact.name.toLowerCase()
    );
    if (findSubmit) {
      return alert(`${newContact.name} is already in contacts.`);
    }
    this.setState({ contacts: [newContact, ...contacts] });
  };

  eventFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  idDelete = id => {
    this.setState({
      contacts: this.state.contacts.filter(contact => contact.id !== id),
    });
  };

  render() {
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
        <ContactForm onSubmit={this.handleSubmit} />
        <h2>Contacts</h2>
        <Filter filter={this.state.filter} eventFilter={this.eventFilter} />
        <ContactList
          filter={this.state.filter}
          contacts={this.state.contacts}
          idDelete={this.idDelete}
        />
      </div>
    );
  }
}
