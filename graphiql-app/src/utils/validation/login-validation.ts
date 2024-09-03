import * as yup from 'yup';

const getLoginSchema = (t: (key: string) => string) => {
  return yup.object().shape({
    email: yup.string().email(t('InvalidEmail')).required(t('EmailRequired')),
    password: yup
      .string()
      .required(t('PasswordRequired'))
      .matches(/.*\d.*/, t('PasswordContainsNumber'))
      .matches(/.*[A-Z].*/, t('PasswordContainsUppercase'))
      .matches(/.*[a-z].*/, t('PasswordContainsLowercase'))
      .matches(
        /.*[!@#$%^&*(),.?":{}|<>].*/,
        t('PasswordContainsSpecialCharacter'),
      )
      .min(6, t('PasswordMinLength')),
  });
};

export default getLoginSchema;
