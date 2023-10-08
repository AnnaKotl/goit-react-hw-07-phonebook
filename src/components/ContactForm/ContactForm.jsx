import React from 'react';
import { Formik, ErrorMessage } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import * as Yup from 'yup';

import { selectContacts } from 'Redux/selectors';
import { addContact } from 'services/API';
import {
  FormStyled,
  ButtonSub,
  Title,
  StyledError,
  ErrorText,
  StyledField
} from './ContactForm.styled';

const initialValues = {
  name: '',
  number: '',
};

const schema = Yup.object().shape({
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

export const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const handleOnSubmit = (values, actions) => {
    if (contacts.find(contact => contact.name.toLowerCase() === values.name.toLowerCase()) === undefined) {
      const item = { name: values.name, phone: values.number };
      dispatch(addContact(item)); 
      actions.resetForm();
    } else {
      alert(`${values.name} is already in contacts.`);
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={handleOnSubmit}
    >
      {({ handleSubmit }) => (
        <FormStyled onSubmit={handleSubmit}>
          <Title>Create a new contact:</Title>
          <label>
            Name
            <StyledField name="name"
              placeholder="Enter name"
            />
            <StyledError name="name" component="div" />
            <ErrorMessage name="name">
              {() => (
                <ErrorText>
                  Wrong name: Name may contain only letters, apostrophe, dash
                  and spaces.
                </ErrorText>
              )}
            </ErrorMessage>
          </label>
          <label>
            Number
            <StyledField name="number"
              placeholder="Enter number"
            />
            <StyledError name="number" component="div" />
            <ErrorMessage name="number">
              {() => (
                <ErrorText>
                  Phone number must be +380XXXXXXXXX or 0XXXXXXXXX
                </ErrorText>
              )}
            </ErrorMessage>
          </label>
          <ButtonSub type="submit">Add</ButtonSub>
        </FormStyled>
      )}
    </Formik>
  );
};
