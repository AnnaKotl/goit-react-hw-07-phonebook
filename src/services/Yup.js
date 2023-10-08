// import * as Yup from 'yup';

// export const schema = Yup.object().shape({
//   name: Yup.string()
//     .matches(/^[a-zA-Zа-яА-Я ':-]+$/)
//     .required('Required!')
//     .min(2, 'Too Short!')
//     .max(50, 'Too Long!'),
//   number: Yup.string()
//     .matches(/\+?\d{1,4}[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/)
//     .required('Required!')
//     .min(2, 'Too Short!')
//     .max(50, 'Too Long!'),
// });



// const schema = Yup.object().shape({
//   name: Yup.string()
//     .matches(
//       /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
//       'Name may contain only letters, apostrophe, dash and spaces'
//     )
//     .required('Name is required'),
//   number: Yup.string()
//     .matches(/^(?:\+380|0)[0-9]{9}$/, 'Invalid number format (e.g. +380XXXXXXXXX or 0XXXXXXXXX)')
//     .required('Number is required'),
// });
