import React, { useEffect } from 'react';
import { nanoid } from 'nanoid';
import { useSelector, useDispatch } from 'react-redux';
import {
  setFilter,
  setIsEmptyContacts,
  addContact,
  deleteContact,
} from './redux/actions';

import { GlobalStyle } from '../styles/GlobalStyle';
import { Layout } from '../styles/Layout';
import toast, { Toaster } from 'react-hot-toast';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import {
  PageContainer,
  Heading,
  Section,
  SubHeading,
} from '../styles/App.styled';
import { EmptyContactsMessage } from './EmptyContactsMessage/EmptyContactsMessage';



export const App = () => {
  const contacts = useSelector(state => state.contacts);
  const filter = useSelector(state => state.filter);
  const dispatch = useDispatch();

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  useEffect(() => {
    const activeContacts = contacts.filter(contact => !contact.isDeleted);
    const filteredContacts = activeContacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );

    dispatch(setIsEmptyContacts(filteredContacts.length === 0));
  }, [contacts, filter, dispatch]);

  const handleFilterChange = e => {
    const filterValue = e.target.value;
    dispatch(setFilter(filterValue));
  };

  const handleAddContact = (name, number) => {
    const newContact = {
      name,
      number,
      id: nanoid(),
    };
    dispatch(addContact(newContact));
    toast.success('Contact added successfully!');
  };

  const handleDeleteContact = id => {
    dispatch(deleteContact(id));
  };

  const filteredContacts = contacts.filter(
    contact =>
      !contact.isDeleted &&
      contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <PageContainer>
      <GlobalStyle />
      <Layout>
        <Heading>Phonebook</Heading>
        <ContactForm onSubmit={handleAddContact} />
        <Section>
          <SubHeading>Contacts</SubHeading>
          <Filter value={filter} onChange={handleFilterChange} />
          {filteredContacts.length === 0 ? (
            <EmptyContactsMessage />
          ) : (
            <ContactList
              contacts={filteredContacts}
              onDeleteContact={handleDeleteContact}
            />
          )}
        </Section>
      </Layout>
      <Toaster position="top-right" />
    </PageContainer>
  );
};
