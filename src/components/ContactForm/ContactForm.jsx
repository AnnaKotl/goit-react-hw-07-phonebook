import React from 'react';
import { Formik, Field, ErrorMessage } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from 'Redux/selectors';
import { addContact } from 'services/API';
import { schema } from 'services/Yup';
import {
  FormStyled,
  ButtonSub,
  InputStyled,
  Title,
  StyledError,
  ErrorText,
} from './ContactForm.styled';

const initialValues = {
  name: '',
  number: '',
};

export const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const handleOnSubmit = (values, actions) => {
    if (
      contacts.find(
        contact => contact.name.toLowerCase() === values.name.toLowerCase()
      ) === undefined
    ) {
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
            <Field
              type="text"
              name="name"
              placeholder="Enter name"
              component={InputStyled}
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
            <Field
              type="text"
              name="number"
              placeholder="Enter number"
              component={InputStyled}
            />
            <StyledError name="number" component="div" />
            <ErrorMessage name="number">
              {() => (
                <ErrorText>
                  Phone number must start with +
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
