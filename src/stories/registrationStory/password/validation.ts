import {strongPasswordRegEx} from '@shared/utils/regex';
import * as yup from 'yup';
export const validationSchema = yup.object().shape({
  password: yup
    .string()
    .required('Please Enter your password')
    .matches(
      strongPasswordRegEx,
      'Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character',
    ),
  confirmPassowrd: yup
    .string()
    .required()
    .oneOf([yup.ref('password'), null], 'Passwords must match'),
});
