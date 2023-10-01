import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Formik, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from 'Redux/selectors';
import { addContact } from 'services/API';

import { FormStyled, Button, InputStyled, Title } from './ContactForm.styled';

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

  const handleAddContact = async values => {
    try {
      schema.validateSync(values, { abortEarly: false }); // Перевірка схеми
      const existingContact = contacts.find(
        contact => contact.name.toLowerCase() === values.name.toLowerCase()
      );

      if (existingContact) {
        toast.error(`${values.name} has already been added to contacts!`);
      } else {
        const item = { name: values.name, phone: values.number };
        await dispatch(addContact(item));
        toast.success(`${values.name} added to contacts!`);
      }
    } catch (error) {
      error.inner.forEach(err => {
        toast.error('Please fill in all fields correctly');
      });
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={handleAddContact}
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
          <ErrorMessage name="number" component="div" className="error" />
        </label>
        <Button type="submit">Add</Button>
      </FormStyled>
    </Formik>
  );
};
