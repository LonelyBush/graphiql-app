import { useTranslation } from 'react-i18next';
import * as yup from 'yup';
import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useEffect } from 'react';
import { useNavigate } from '@remix-run/react';
import { toast } from 'react-toastify';
import styles from './login-form-style.module.scss';
import getLoginSchema from '../../../utils/validation/login-validation';
import FormControl from '../../ui/form-input/form-control';
import Button from '../../ui/button/button';
import { logInWithEmailAndPassword } from '../../../utils/firebase-auth/firebase';
import Loading from '../../ui/loading/loading';
import useAuth from '../../../utils/hooks/useAuth-hook';
import authError from '../../../utils/authError/authError';

function LoginForm() {
  const { t } = useTranslation();
  const schema = getLoginSchema(t);
  type LoginData = yup.InferType<typeof schema>;
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
      navigate('/');
    }
  }, [user, navigate, loading]);

  const onSubmit: SubmitHandler<LoginData> = async (FormData) => {
    const promise = logInWithEmailAndPassword(
      FormData.email,
      FormData.password,
    );
    toast.promise(promise, {
      pending: {
        render() {
          return `${t('loading')}`;
        },
      },
      success: {
        render() {
          return `${t('accessGranted')}`;
        },
      },
      error: {
        render({ data }) {
          return `${data instanceof Error ? t(authError(data)) : ''}`;
        },
      },
    });
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
          placeholder="example@gmail.com"
          register={register}
          error={!errors.email?.message ? '' : errors.email.message}
        />
        <FormControl
          type="password"
          label={t('Password')}
          name="password"
          placeholder=""
          register={register}
          error={!errors.password?.message ? '' : errors.password.message}
        />
        <Button btnType="submit">{t('Submit')}</Button>
      </form>
    </div>
  );
}

export default LoginForm;
