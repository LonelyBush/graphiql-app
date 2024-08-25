import * as yup from 'yup';

const schema = yup.object().shape({
  nickname: yup
    .string()
    .matches(/^[a-zA-Z0-9]*$/, 'Remove special charecters from nickname')
    .required('Nickname is required'),
  email: yup
    .string()
    .email('Invalid email format')
    .required('Email is required'),
  password: yup
    .string()
    .required('Password is required')
    .matches(/.*\d.*/, 'Password should contain 1 number')
    .matches(/.*[A-Z].*/, 'Password should contain 1 uppercase letter [A-Z]')
    .matches(/.*[a-z].*/, 'Password should contain 1 lowercase letter [a-z]')
    .matches(
      /.*[!@#$%^&*(),.?":{}|<>].*/,
      'Password should contain 1 special charecters [!,@,#,$,% ..etc]',
    )
    .min(6),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password')], 'Password must match'),
});

export type RegistrationData = yup.InferType<typeof schema>;

export default schema;
