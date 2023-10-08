import { styled } from 'styled-components';
import { Form, ErrorMessage, Field } from 'formik';

export const StyledField = styled(Field)`
    display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 10px;
  margin-top: 10px;
  font-size: 16px;
  border: none;
  outline: 1px transparent;
  border-radius: 4px;
  width: 320px;
  height: 46px;

  transition: transform 0.3s ease, box-shadow 0.3s ease, border 0.3s ease,
    outline 0.3s ease;
  &:hover {
    border: 1px solid #a8890d;
  }

  &:focus {
    outline: none;
    border: 1px solid #a8890d;
    box-shadow: 0 0 0 2px #a8890d;
  }
`;

export const Title = styled.h1`
  font-size: 32px;
  text-align: center;
`;

export const FormStyled = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  justify-content: center;
  gap: 20px;
  padding: 20px;
  margin-bottom: 40px;
  background-color: #f2d044;

  /* border: 1px solid rgba(64, 52, 6, 0.1); */
  box-shadow: rgba(0, 0, 0, 0.1) 0px 20px 25px -5px,
    rgba(0, 0, 0, 0.04) 0px 10px 10px -5px;
`;

// export const InputStyled = styled.input`
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   text-align: center;
//   padding: 10px;
//   margin-top: 10px;
//   font-size: 16px;
//   border: none;
//   outline: 1px transparent;
//   border-radius: 4px;
//   width: 320px;
//   height: 46px;

//   transition: transform 0.3s ease, box-shadow 0.3s ease, border 0.3s ease,
//     outline 0.3s ease;
//   &:hover {
//     border: 1px solid #a8890d;
//   }

//   &:focus {
//     outline: none;
//     border: 1px solid #a8890d;
//     box-shadow: 0 0 0 2px #a8890d;
//   }
// `;

export const ButtonSub = styled.button`
  padding: 10px;
  font-size: 16px;
  background-color: #4caf50;
  font-weight: bold;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease, border 0.3s ease,
    outline 0.3s ease;
  max-width: 80px;
  width: 100%;
  align-self: center;

  &:hover {
    transform: scale(1.02);
    box-shadow: 0 8px 16px #355936;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px #355936;
  }

  &:active {
    transform: scale(0.95);
  }
`;

export const StyledError = styled(ErrorMessage)`
display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
  color: red;
  margin: 4px auto 0;
  max-width: 300px;
`;

export const ErrorText = styled.div`
display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
  margin: 4px auto 0;
  padding: 2px;
  color: red;
  font-size: 10px;
  font-weight: bold;
  max-width: 300px;
`;




// import { ErrorMessage, Formik } from 'formik';
// import { StyledForm, StyledField, StyledError, ErrorText } from './PhoneForm.styled';
// import * as Yup from 'yup';
// import { useDispatch, useSelector } from 'react-redux';
// import { selectContacts } from 'Redux/selector';
// import { addContact } from 'Redux/operations';


// const initialValues = {
//   name: '',
//   number: '',
// };

// const schema = Yup.object().shape({
//   name: Yup.string()
//     .matches(/^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/)
//     .required('Required!')
//     .min(2, 'Too Short!')
//     .max(50, 'Too Long!'),
//   number: Yup.string()
//     .matches(
//       /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/
//     )
//     .required('Required!')
//     .min(2, 'Too Short!')
//     .max(50, 'Too Long!'),
// });

// export const PhoneForm = () => {
//   const dispatch = useDispatch();
//   const contacts = useSelector(selectContacts);

//   const handleOnSubmit = (values, actions) => {
//     if (contacts.find(contact => contact.name.toLowerCase() === values.name.toLowerCase()) === undefined) {
//       const item = { name: values.name, phone: values.number };
//       dispatch(addContact(item)); 
//       actions.resetForm();
//     } else {
//       alert(`${values.name} is already in contacts.`);
//     }
//   };

//   return (
//     <Formik
//       initialValues={initialValues} 
//       validationSchema={schema}
//       onSubmit={handleOnSubmit}
//     >
//       {({ handleSubmit }) => (
//         <StyledForm onSubmit={handleSubmit}>
//           <label>
//             Name
//             <StyledField name="name" />
//             <StyledError name="name" component="div" />
//             <ErrorMessage name="name">
//               {() => (
//                 <ErrorText>
//                   Wrong name: Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer,
//                   Charles de Batz de Castelmore d'Artagnan
//                 </ErrorText>
//               )}
//             </ErrorMessage>
//           </label>
//           <label>
//             Number
//             <StyledField name="number" />
//             <StyledError name="number" component="div" />
//             <ErrorMessage name="number">
//               {() => (
//                 <ErrorText>
//                   Phone number must be digits and can contain spaces, dashes, parentheses and can start with +
//                 </ErrorText>
//               )}
//             </ErrorMessage>
//           </label>

//           <button type="submit">Add contact</button>
//         </StyledForm>
//       )}
//     </Formik>
//   );
// };