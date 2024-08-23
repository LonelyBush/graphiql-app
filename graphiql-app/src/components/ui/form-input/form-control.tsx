import { Path, UseFormRegister } from 'react-hook-form';
import style from './form-control.module.scss';
import { FormData } from '../../../validation/yup-validation';

function FormControl({
  type,
  label,
  register,
  name,
  placeholder,
  error,
}: {
  type: string;
  label: string;
  register: UseFormRegister<FormData>;
  name: Path<FormData>;
  placeholder: string | undefined;
  error: string;
}) {
  return (
    <label htmlFor={name} className={style.formControlWrapper}>
      {label}
      <input
        type={type}
        {...register(name)}
        name={name}
        placeholder={!placeholder ? '' : placeholder}
        className={style.formInput}
      />
      <span className={style.errorMessage}>{error}</span>
    </label>
  );
}

export default FormControl;
