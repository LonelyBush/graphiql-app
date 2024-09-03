export type ButtonProps = {
  btnType: 'button' | 'submit';
  children: string;
  to?: string;
  disabled?: boolean;
  onClick?: () => void;
};

export type RegistrationData = {
  confirmPassword?: string | undefined;
  email: string;
  password: string;
  nickname: string;
};

export type LoginData = {
  email: string;
  password: string;
};
