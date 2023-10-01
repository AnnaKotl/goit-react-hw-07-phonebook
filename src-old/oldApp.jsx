// import React, { Component } from 'react';
// import { GlobalStyle } from './styles/GlobalStyle';
// import { Layout } from './styles/Layout';
// import toast, { Toaster } from 'react-hot-toast';
// import { nanoid } from 'nanoid';

// import { ContactForm } from './components/ContactForm/ContactForm';
// import { ContactList } from './components/ContactList/ContactList';
// import { Filter } from './components/Filter/Filter';
// import { PageContainer, Heading, Section, SubHeading } from './styles/App.styled';
// import { EmptyContactsMessage } from './components/EmptyContactsMessage/EmptyContactsMessage';

// export class App extends Component {
//   state = {
//     contacts: [],
//     filter: '',
//     isEmptyContacts: false,
//   };

//   componentDidMount() {
//     const savedContacts = localStorage.getItem('contacts');
//     if (savedContacts) {
//       this.setState({ contacts: JSON.parse(savedContacts) });
//     }
//   }

//   componentDidUpdate(_, prevState) {
//     const { contacts, isEmptyContacts } = this.state;

//     if (prevState.isEmptyContacts !== isEmptyContacts) {
//       if (isEmptyContacts) {
//         toast.error('No contacts found.');
//       }
//     }

//     if (prevState.contacts !== contacts) {
//       localStorage.setItem('contacts', JSON.stringify(contacts));
//     }
//   }

//   addContact = (name, number) => {
//     const newContact = {
//       id: nanoid(),
//       name,
//       number,
//       isDeleted: false,
//     };
//     this.setState(prevState => ({ contacts: [...prevState.contacts, newContact] }));
//   };

//   deleteContact = id => {
//     this.setState(prevState => ({
//       contacts: prevState.contacts.map(contact =>
//         contact.id === id ? { ...contact, isDeleted: true } : contact
//       ),
//     }));
//   }

//   handleFilterChange = e => {
//     const filterValue = e.target.value;
//     this.setState({ filter: filterValue });

//     const activeContacts = this.state.contacts.filter(contact => !contact.isDeleted);
//     const filteredContacts = activeContacts.filter(contact =>
//       contact.name.toLowerCase().includes(filterValue.toLowerCase())
//     );

//     this.setState({ isEmptyContacts: filteredContacts.length === 0 });
//   };

//   render() {
//     const { contacts, filter, isEmptyContacts } = this.state;
//     const activeContacts = contacts.filter(contact => !contact.isDeleted);
//     const filteredContacts = activeContacts.filter(contact =>
//       contact.name.toLowerCase().includes(filter.toLowerCase())
//     );

//     return (
//       <PageContainer>
//         <GlobalStyle />
//         <Layout>
//           <Heading>Phonebook</Heading>
//           <ContactForm onSubmit={this.addContact} />
//           <Section>
//             <SubHeading>Contacts</SubHeading>
//             <Filter value={filter} onChange={this.handleFilterChange} />
//             {isEmptyContacts ? (
//               <EmptyContactsMessage />
//             ) : (
//               <ContactList contacts={filteredContacts} onDeleteContact={this.deleteContact} />
//             )}
//           </Section>
//         </Layout>
//         <Toaster position="top-right" />
//       </PageContainer>
//     );
//   }
// }