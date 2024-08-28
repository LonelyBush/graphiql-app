import { useNavigate } from '@remix-run/react';
import { ButtonProps } from '../../../types/types';
import styles from './button.module.scss';

function Button({
  btnType = 'button',
  children,
  onClick,
  to,
  disabled = false,
}: ButtonProps) {
  const navigate = useNavigate();
  const handleClick = () => {
    if (to) {
      navigate(to);
    }
    if (onClick) {
      onClick();
    }
  };

  return (
    <button
      className={styles.btn}
      type={btnType === 'button' ? 'button' : 'submit'}
      onClick={handleClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

export default Button;
