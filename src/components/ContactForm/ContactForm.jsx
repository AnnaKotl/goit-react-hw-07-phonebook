import React from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { nanoid } from 'nanoid';
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
} from './ContactForm.styled';
import { ErrorMessageComponent } from 'services/ErrorMessageComponent';

const initialValues = {
  name: '',
  number: '',
};

export const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const handleAddContact = async values => {
    try {
      console.log('Submitting form with values:', values); // Додайте цей рядок

      if (!values.name || !values.number) {
        toast.error('Both Name and Number are required.');
        return;
      }

      const existingContact = contacts.find(
        contact => contact.name.toLowerCase() === values.name.toLowerCase()
      );

      if (existingContact) {
        toast.error(`${values.name} has already been added to contacts!`);
      } else {
        const id = nanoid();
        const item = { id, name: values.name, phone: values.number };
        console.log('Adding contact:', item); // Додайте цей рядок
        await dispatch(addContact(item));
        toast.success(`${values.name} added to contacts!`);
      }
    } catch (error) {
      console.error('An error occurred while adding the contact:', error); // Додайте цей рядок
      toast.error('An error occurred while adding the contact.');
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={(values, { setSubmitting }) => {
        handleAddContact(values);
        setSubmitting(false);
      }}
    >
      <FormStyled>
        <Title>Create a new contact:</Title>
        <label>
          Name
          <Field
            type="text"
            name="name"
            placeholder="Enter name"
            component={InputStyled}
          />
          <ErrorMessage name="name" component="div" className="error" />
        </label>
        <label>
          Number
          <Field
            type="text"
            name="number"
            placeholder="Enter number"
            component={InputStyled}
          />
          <ErrorMessageComponent error={<ErrorMessage name="number" />} />
        </label>
        <ButtonSub type="submit">Add</ButtonSub>
      </FormStyled>
    </Formik>
  );
};
