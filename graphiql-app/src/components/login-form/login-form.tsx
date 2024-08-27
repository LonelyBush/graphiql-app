import { useTranslation } from 'react-i18next';
import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useEffect, useState } from 'react';
import { useNavigate } from '@remix-run/react';
import styles from './login-form-style.module.scss';
import schema, { LoginData } from '../../validation/login-validation';
import FormControl from '../ui/form-input/form-control';
import Button from '../ui/button/button';
import { logInWithEmailAndPassword } from '../../firebase-auth/firebase';
import Loading from '../ui/loading/loading';
import useAuth from '../../hooks/useAuth-hook';

function LoginForm() {
  const { t } = useTranslation();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: 'onChange',
    resolver: yupResolver(schema),
  });
  const { user, loading } = useAuth();
  const [authError, setAuthError] = useState<{ [key: string]: string }>({});
  const navigate = useNavigate();
  useEffect(() => {
    if (user) {
      navigate('/');
    }
  }, [user, navigate, loading]);

  const onSubmit: SubmitHandler<LoginData> = async (data) => {
    try {
      setAuthError({});
      await logInWithEmailAndPassword(data.email, data.password);
    } catch (err) {
      if (err instanceof Error) {
        if (err.message === 'Firebase: Error (auth/invalid-credential).') {
          setAuthError({
            message: 'Invalid user credentials! Try again.',
          });
        }
      }
    }
  };
  return loading ? (
    <Loading />
  ) : (
    <div className={styles.signInFormSection}>
      <h2>{t('Login')}</h2>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.formWrapper}>
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
        <Button btnType="submit">{t('Submit')}</Button>
        {Object.keys(authError).length > 0 && (
          <span className={styles.errorMessage}>{authError.message}</span>
        )}
      </form>
    </div>
  );
}

export default LoginForm;
