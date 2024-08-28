import { useTranslation } from 'react-i18next';
import * as yup from 'yup';
import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigate } from '@remix-run/react';
import { useEffect, useState } from 'react';
import styles from './sign-up-form-style.module.scss';
import getRegistrationSchema from '../../validation/registration-validation';
import FormControl from '../ui/form-input/form-control';
import Button from '../ui/button/button';
import { registerWithEmailAndPassword } from '../../firebase-auth/firebase';
import Loading from '../ui/loading/loading';
import useAuth from '../../hooks/useAuth-hook';

function SignUpForm() {
  const { t } = useTranslation();
  const schema = getRegistrationSchema(t);
  type RegistrationData = yup.InferType<typeof schema>;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: 'onChange',
    resolver: yupResolver(schema),
  });
  const { user, loading } = useAuth();
  const [loader, setLoader] = useState<boolean>(false);
  const [authError, setAuthError] = useState<{ [key: string]: string }>({});
  const navigate = useNavigate();
  useEffect(() => {
    if (user) {
      setLoader(true);
      setTimeout(() => {
        navigate('/');
        setLoader(false);
      }, 500);
    }
  }, [user, loading, navigate]);
  const onSubmit: SubmitHandler<RegistrationData> = async (data) => {
    try {
      setAuthError({});
      await registerWithEmailAndPassword(
        data.nickname,
        data.email,
        data.password,
      );
    } catch (error) {
      if (error instanceof Error) {
        if (error.message === 'Firebase: Error (auth/email-already-in-use).') {
          setAuthError({
            message: 'Your email is already in use ! Try another one.',
          });
        }
      }
    }
  };

  return (
  return loading || loader ? (
    <Loading />
  ) : (
    <div className={styles.signInFormSection}>
      <h2>{t('Registration')}</h2>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.formWrapper}>
        <FormControl
          type="text"
          label={t('Nickname')}
          name="nickname"
          placeholder="JohnDoe"
          register={register}
          error={!errors.nickname?.message ? '' : errors.nickname.message}
        />
        <FormControl
          type="email"
          label={t('Email')}
          name="email"
          placeholder="example@gmai.com"
          register={register}
          error={!errors.email?.message ? '' : errors.email.message}
        />
        <FormControl
          type="password"
          label={t('Password')}
          name="password"
          placeholder={undefined}
          register={register}
          error={!errors.password?.message ? '' : errors.password.message}
        />
        <FormControl
          type="password"
          label={t('ConfirmPassword')}
          name="confirmPassword"
          placeholder={undefined}
          register={register}
          error={
            !errors.confirmPassword?.message
              ? ''
              : errors.confirmPassword.message
          }
        />
        <Button btnType="submit">{t('Submit')}</Button>
        {Object.keys(authError).length > 0 && (
          <span className={styles.errorMessage}>{authError.message}</span>
        )}
      </form>
    </div>
  );
}

export default SignUpForm;
