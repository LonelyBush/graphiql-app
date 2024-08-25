import * as yup from 'yup';

const schema = yup.object().shape({
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
});

export type LoginData = yup.InferType<typeof schema>;

export default schema;
