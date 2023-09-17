import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { deleteContact } from 'components/redux/contactsSlice';
import { List, ListItem, Button } from './ContactList.styled';

export const ContactList = () => {
  const contacts = useSelector(state => state.contacts);
  const dispatch = useDispatch();

  const handleDeleteContact = id => {
    dispatch(deleteContact(id));
  };

const filteredContacts = contacts.filter(contact => !contact.isDeleted);

return (
  <List>
    {filteredContacts.map(contact => (
      <ListItem key={contact.id}>
        <p>{contact.name}: {contact.number}</p>
        <Button onClick={() => handleDeleteContact(contact.id)}>Delete</Button>
      </ListItem>
    ))}
  </List>
);

};

// import React from 'react';
// import { List, ListItem, Button } from './ContactList.styled';

// export const ContactList = ({ contacts, onDeleteContact }) => (
//   <List>
//     {contacts.map(contact => (
//       <ListItem key={contact.id}>
//         <p>{contact.name}: {contact.number}</p>
//         <Button onClick={() => onDeleteContact(contact.id)}>Delete</Button>
//       </ListItem>
//     ))}
//   </List>
// );