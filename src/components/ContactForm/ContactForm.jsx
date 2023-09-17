import React, { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import * as Yup from 'yup';

import { Form, Label, Input, Button, ErrorText } from './ContactForm.styled';

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .matches(
      /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
      'Name may contain only letters, apostrophe, dash and spaces'
    )
    .required('Name is required'),
  number: Yup.string()
    .matches(/^(?:\+380|0)[0-9]{9}$/, 'Invalid number format (e.g. +380XXXXXXXXX or 0XXXXXXXXX)')
    .required('Number is required'),
});

export const ContactForm = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [errors, setErrors] = useState({});

  const handleSubmit = async e => {
    e.preventDefault();

    try {
      await validationSchema.validate({ name, number }, { abortEarly: false });
      onSubmit(name, number);
      setName('');
      setNumber('');
      setErrors({});
    } catch (error) {
      const validationErrors = {};
      error.inner.forEach(err => {
        validationErrors[err.path] = err.message;
      });
      setErrors(validationErrors);
      toast.error('Please fill in all fields correctly');
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Label>
        Name
        <Input
          type="text"
          name="name"
          value={name}
          onChange={e => setName(e.target.value)}
          placeholder="Enter your name"
        />
        {errors.name && <ErrorText>{errors.name}</ErrorText>}
      </Label>
      <Label>
        Number
        <Input
          type="text"
          name="number"
          value={number}
          onChange={e => setNumber(e.target.value)}
          placeholder="0XXXXXXXXX"
        />
        {errors.number && <ErrorText>{errors.number}</ErrorText>}
      </Label>
      <Button type="submit">Add contact</Button>
      <Toaster position="top-right" />
    </Form>
  );
};
