import { useTranslation } from 'react-i18next';
import * as yup from 'yup';
import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigate } from '@remix-run/react';
import { useEffect } from 'react';
import { toast } from 'react-toastify';
import styles from './sign-up-form-style.module.scss';
import getRegistrationSchema from '../../../utils/validation/registration-validation';
import FormControl from '../../ui/form-input/form-control';
import Button from '../../ui/button/button';
import { registerWithEmailAndPassword } from '../../../utils/firebase-auth/firebase';
import Loading from '../../ui/loading/loading';
import useAuth from '../../../utils/hooks/useAuth-hook';
import authError from '../../../utils/authError/authError';

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
  const navigate = useNavigate();
  useEffect(() => {
    if (user?.displayName) {
      navigate('/');
    }
  }, [user, loading, navigate]);
  const onSubmit: SubmitHandler<RegistrationData> = async (FormData) => {
    const promise = registerWithEmailAndPassword(
      FormData.nickname,
      FormData.email,
      FormData.password,
    );
    toast.promise(promise, {
      pending: {
        render() {
          return 'Loading...';
        },
      },
      success: {
        render() {
          navigate('/');
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
          placeholder="example@gmail.com"
          register={register}
          error={!errors.email?.message ? '' : errors.email.message}
        />
        <FormControl
          type="password"
          label={t('Password')}
          name="password"
          placeholder={t('Password')}
          register={register}
          error={!errors.password?.message ? '' : errors.password.message}
        />
        <FormControl
          type="password"
          label={t('ConfirmPassword')}
          name="confirmPassword"
          placeholder={t('ConfirmPassword')}
          register={register}
          error={
            !errors.confirmPassword?.message
              ? ''
              : errors.confirmPassword.message
          }
        />
        <Button btnType="submit">{t('Submit')}</Button>
      </form>
    </div>
  );
}

export default SignUpForm;
