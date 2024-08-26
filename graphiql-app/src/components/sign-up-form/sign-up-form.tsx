import { useTranslation } from 'react-i18next';
import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigate } from '@remix-run/react';
import { useEffect } from 'react';
import styles from './sign-up-form-style.module.scss';
import schema, {
  RegistrationData,
} from '../../validation/registration-validation';
import FormControl from '../ui/form-input/form-control';
import Button from '../ui/button/button';
import { registerWithEmailAndPassword } from '../../firebase-auth/firebase';
import Loading from '../ui/loading/loading';
import useAuth from '../../hooks/useAuth-hook';

function SignUpForm() {
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
    if (user) navigate('/');
  }, [user, navigate, loading]);
  const onSubmit: SubmitHandler<RegistrationData> = async (data) => {
    await registerWithEmailAndPassword(
      data.nickname,
      data.email,
      data.password,
    );
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
      </form>
    </div>
  );
}

export default SignUpForm;
