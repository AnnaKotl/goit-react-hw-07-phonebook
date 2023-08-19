import React, { Component } from 'react';
import { GlobalStyle } from './components/styles/GlobalStyle';
import { Layout } from './components/styles/Layout';
import toast, { Toaster } from 'react-hot-toast';
import { nanoid } from 'nanoid';

import { ContactForm } from './components/ContactForm';
import { ContactList } from './components/ContactList';
import { Filter } from './components/Filter';
import { PageContainer, Heading, Section, SubHeading } from './components/styles/App.styled';

class App extends Component {
  state = {
    contacts: [
      { id: nanoid(), name: 'Rosie Simpson', number: '459-12-56', isDeleted: false },
      { id: nanoid(), name: 'Hermione Kline', number: '443-89-12', isDeleted: false },
      { id: nanoid(), name: 'Eden Clements', number: '645-17-79', isDeleted: false },
      { id: nanoid(), name: 'Annie Copeland', number: '227-91-26', isDeleted: false },
    ],
    filter: '',
  };

  componentDidMount() {
    const savedContacts = localStorage.getItem('contacts');
    if (savedContacts) {
      this.setState({ contacts: JSON.parse(savedContacts) });
    }
  }

  componentDidUpdate(_, prevState) {
    const { contacts } = this.state;
    if (prevState.contacts !== contacts) {
      localStorage.setItem('contacts', JSON.stringify(contacts));
    }
  }

  addContact = (name, number) => {
    const newContact = {
      id: nanoid(),
      name,
      number,
      isDeleted: false, // Додаємо позначку
    };
    this.setState(prevState => ({ contacts: [...prevState.contacts, newContact] }));
  };

  deleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.map(contact =>
        contact.id === id ? { ...contact, isDeleted: true } : contact
      ),
    }));
  }

  render() {
    const { contacts, filter } = this.state;

    const activeContacts = contacts.filter(contact => !contact.isDeleted);

    const filteredContacts = activeContacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );

    return (
      <PageContainer>
        <GlobalStyle />
        <Layout>
          <Heading>Phonebook</Heading>
          <ContactForm onSubmit={this.addContact} />
          <Section>
            <SubHeading>Contacts</SubHeading>
            <Filter value={filter} onChange={e => this.setState({ filter: e.target.value })} />
            <ContactList contacts={filteredContacts} onDeleteContact={this.deleteContact} />
          </Section>
        </Layout>
        <Toaster position="top-right" />
      </PageContainer>
    );
  }
}

export default App;
