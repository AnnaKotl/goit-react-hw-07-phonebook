import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addContact, deleteContact } from './redux/contactsSlice';
import { setFilter } from './redux/filterSlice';

import { GlobalStyle } from '../styles/GlobalStyle';
import { Layout } from '../styles/Layout';
import toast, { Toaster } from 'react-hot-toast';

import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { EmptyContactsMessage } from './EmptyContactsMessage/EmptyContactsMessage';
import {
  PageContainer,
  Heading,
  Section,
  SubHeading,
} from '../styles/App.styled';


export const App = () => {
  const contacts = useSelector(state => state.contacts);
  const filter = useSelector(state => state.filter);
  const dispatch = useDispatch();

  const handleFilterChange = e => {
    const filterValue = e.target.value;
    dispatch(setFilter(filterValue));
  };

  const isContactExists = (contacts, number) => {
    return contacts.some(contact => contact.number === number);
  };

  const saveContacts = (contacts) => {
    // localStorage
    localStorage.setItem('contacts', JSON.stringify(contacts));
  };

  const handleAddContact = (name, number) => {
    if (isContactExists(contacts, number)) {
      toast.error('A contact with such a number already exists.');
      return;
    }

    const newContact = {
      name,
      number,
    };
    dispatch(addContact(newContact));

    // після додавання контакту в Redux - зберігаємо контакти в localStorage.
    saveContacts(contacts);
  };

  const handleDeleteContact = id => {
    dispatch(deleteContact(id));
    // після видалення контакту з Redux - зберігаємо контакти в localStorage.
    saveContacts(contacts);
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
