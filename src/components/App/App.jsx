import React from 'react';
import { ContactForm } from '../ContactForm/ContactForm';
import { FormItems } from '../FormItems/FormItems';
import { Container } from './App.style';

export const App = () => {
  return (
    <Container>
      <ContactForm />
      <FormItems /> 
    </Container>
  );
};