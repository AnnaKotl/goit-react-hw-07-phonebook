import * as Yup from 'yup';

export const schema = Yup.object().shape({
  name: Yup.string().min(3, 'Too Short!').required('A Name is required'),
  number: Yup.string()
    .matches(/^0[0-9]{9}$/, 'Invalid number format (e.g., 0XXXXXXXXX)')
    .required('A phone number is required'),
});