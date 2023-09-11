import React from 'react';
import { List, ListItem, Button } from './ContactList.styled';

export const ContactList = ({ contacts, onDeleteContact }) => (
  <List>
    {contacts.map(contact => (
      <ListItem key={contact.id}>
        <p>{contact.name}: {contact.number}</p>
        <Button onClick={() => onDeleteContact(contact.id)}>Delete</Button>
      </ListItem>
    ))}
  </List>
);