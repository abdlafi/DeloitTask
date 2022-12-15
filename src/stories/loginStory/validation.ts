import * as yup from 'yup';
export const validationSchema = yup.object().shape({
  password: yup.string().required().min(8),
  email: yup.string().email().required('Please, provide your email'),
});
