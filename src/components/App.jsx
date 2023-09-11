import React, { useState, useEffect } from 'react';
import { GlobalStyle } from '../styles/GlobalStyle';
import { Layout } from '../styles/Layout';
import { Toaster } from 'react-hot-toast';
import { nanoid } from 'nanoid';

import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { PageContainer, Heading, Section, SubHeading } from '../styles/App.styled';
import { EmptyContactsMessage } from './EmptyContactsMessage/EmptyContactsMessage';

export const App = () => {
  const [contacts, setContacts] = useState(() => {
    const savedContacts = localStorage.getItem('contacts');
    return savedContacts ? JSON.parse(savedContacts) : [];
  });

  const [filter, setFilter] = useState('');
  const [isEmptyContacts, setIsEmptyContacts] = useState(false);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  useEffect(() => {
    const activeContacts = contacts.filter(contact => !contact.isDeleted);
    const filteredContacts = activeContacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );

    setIsEmptyContacts(filteredContacts.length === 0);
  }, [contacts, filter]);

  const addContact = (name, number) => {
    const newContact = {
      id: nanoid(),
      name,
      number,
      isDeleted: false,
    };
    setContacts(prevContacts => [...prevContacts, newContact]);
  };

  const deleteContact = id => {
    setContacts(prevContacts =>
      prevContacts.map(contact =>
        contact.id === id ? { ...contact, isDeleted: true } : contact
      )
    );
  };

  const filteredContacts = contacts.filter(contact =>
    !contact.isDeleted && contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <PageContainer>
      <GlobalStyle />
      <Layout>
        <Heading>Phonebook</Heading>
        <ContactForm onSubmit={addContact} />
        <Section>
          <SubHeading>Contacts</SubHeading>
          <Filter value={filter} onChange={e => setFilter(e.target.value)} />
          {isEmptyContacts ? (
            <EmptyContactsMessage />
          ) : (
            <ContactList contacts={filteredContacts} onDeleteContact={deleteContact} />
          )}
        </Section>
      </Layout>
      <Toaster position="top-right" />
    </PageContainer>
  );
};
