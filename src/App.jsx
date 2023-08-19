import React, { Component } from 'react';
import { GlobalStyle } from './components/styles/GlobalStyle';
import { Layout } from './components/styles/Layout';
import { Toaster } from 'react-hot-toast';
import { nanoid } from 'nanoid';

import { ContactForm } from './components/ContactForm';
import { ContactList } from './components/ContactList';
import { Filter } from './components/Filter';
import { PageContainer, Heading, Section, SubHeading } from './components/styles/App.styled';

class App extends Component {
  state = {
    contacts: [],
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
      isDeleted: false,
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
