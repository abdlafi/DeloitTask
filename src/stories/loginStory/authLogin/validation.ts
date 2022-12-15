import {phoneNumber} from '@shared/utils/regex';
import * as yup from 'yup';
export const validationSchema = yup.object().shape({
  phoneNumber: yup
    .string()
    .matches(phoneNumber, 'please enter a valid phone number')
    .required('Please, provide your phone number'),
  email: yup.string().email().required('Please, provide your email'),
  dateOfBirth: yup
    .date()
    .min(
      yup.ref('dateOfBirth'),
      ({min}) => `Date needs to be before ${formatDate(min)}!!`,
    ),
});

function formatDate(date) {
  return new Date(date).toLocaleDateString();
}
