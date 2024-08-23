import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import styles from './login-form-style.module.scss';
import schema, { FormData } from '../../validation/yup-validation';
import FormControl from '../ui/form-input/form-control';
import Button from '../ui/button/button';

function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: 'onChange',
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log(data);
  };
  return (
    <div className={styles.signInFormSection}>
      <h2>Login</h2>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.formWrapper}>
        <FormControl
          type="email"
          label="Email"
          name="email"
          placeholder="example@gmai.com"
          register={register}
          error={!errors.email?.message ? '' : errors.email.message}
        />
        <FormControl
          type="password"
          label="Password"
          name="password"
          placeholder={undefined}
          register={register}
          error={!errors.password?.message ? '' : errors.password.message}
        />
        <Button btnType="submit">Submit</Button>
      </form>
    </div>
  );
}

export default LoginForm;
