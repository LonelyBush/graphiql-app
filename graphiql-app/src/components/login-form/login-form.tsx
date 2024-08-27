import { useTranslation } from 'react-i18next';
import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useEffect } from 'react';
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
  const navigate = useNavigate();
  useEffect(() => {
    if (user) {
      console.log(user.displayName);
      navigate('/');
    }
  }, [user, navigate, loading]);

  const onSubmit: SubmitHandler<LoginData> = async (data) => {
    await logInWithEmailAndPassword(data.email, data.password);
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
      </form>
    </div>
  );
}

export default LoginForm;
