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
      { id: nanoid(), name: 'Rosie Simpson', number: '459-12-56' },
      { id: nanoid(), name: 'Hermione Kline', number: '443-89-12' },
      { id: nanoid(), name: 'Eden Clements', number: '645-17-79' },
      { id: nanoid(), name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  addContact = (name, number) => {
    const { contacts } = this.state;

    const existingContact = contacts.find(contact => contact.name.toLowerCase() === name.toLowerCase());

    if (existingContact) {
      toast.error(`${name} is already in contacts`);
      return;
    }

    const newContact = {
      id: nanoid(),
      name,
      number,
    };

    this.setState(prevState => ({ contacts: [...prevState.contacts, newContact] }));
  };

  deleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  render() {
    const { contacts, filter } = this.state;

    const filteredContacts = contacts.filter(contact =>
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
