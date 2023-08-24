import React, { useState, useEffect } from 'react';
import { GlobalStyle } from './components/styles/GlobalStyle';
import { Layout } from './components/styles/Layout';
import toast, { Toaster } from 'react-hot-toast';
import { nanoid } from 'nanoid';

import { ContactForm } from './components/ContactForm';
import { ContactList } from './components/ContactList';
import { Filter } from './components/Filter';
import { PageContainer, Heading, Section, SubHeading } from './components/styles/App.styled';
import { EmptyContactsMessage } from './components/EmptyContactsMessage';

export const App = () => {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');
  const [isEmptyContacts, setIsEmptyContacts] = useState(false);

  useEffect(() => {
    try {
      const savedContacts = localStorage.getItem('contacts');
      const parsedContacts = JSON.parse(savedContacts) || [];
      setContacts(parsedContacts);
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));

    const activeContacts = contacts.filter(contact => !contact.isDeleted);
    const filteredContacts = activeContacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );

    setIsEmptyContacts(filteredContacts.length === 0);

    if (isEmptyContacts) {
      toast.error('No contacts found.');
    }
  }, [contacts, filter, isEmptyContacts]);

  const addContact = (name, number) => {
    const newContact = {
      id: nanoid(),
      name: name.trim(),
      number: number.trim(),
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

  const handleFilterChange = e => {
    const filterValue = e.target.value;
    setFilter(filterValue);
  };

  const activeContacts = contacts.filter(contact => !contact.isDeleted);
  const filteredContacts = activeContacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <PageContainer>
      <GlobalStyle />
      <Layout>
        <Heading>Phonebook</Heading>
        <ContactForm onSubmit={addContact} />
        <Section>
          <SubHeading>Contacts</SubHeading>
          <Filter value={filter} onChange={handleFilterChange} />
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
