import * as yup from 'yup';

const getRegistrationSchema = (t: (key: string) => string) => {
  return yup.object().shape({
    nickname: yup
      .string()
      .matches(/^[a-zA-Z0-9]*$/, t('RemoveSpecialCharacters'))
      .required(t('NicknameRequired')),
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
    confirmPassword: yup
      .string()
      .oneOf([yup.ref('password')], t('PasswordMustMatch')),
  });
};

export default getRegistrationSchema;
