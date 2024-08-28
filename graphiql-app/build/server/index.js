import { jsx, jsxs, Fragment } from 'react/jsx-runtime';
import { PassThrough } from 'node:stream';
import { createReadableStreamFromReadable } from '@remix-run/node';
import {
  RemixServer,
  NavLink,
  useMatches,
  Outlet,
  Link,
  Meta,
  Links,
  Scripts,
  useNavigate,
} from '@remix-run/react';
import * as isbotModule from 'isbot';
import { renderToPipeableStream } from 'react-dom/server';
import {
  initReactI18next,
  useTranslation,
  I18nextProvider,
} from 'react-i18next';
import i18n from 'i18next';
import { createSlice, configureStore } from '@reduxjs/toolkit';
import { useState, useRef, useEffect } from 'react';
import { useDispatch, useSelector, Provider } from 'react-redux';
import { FaGithub, FaEye, FaEyeSlash } from 'react-icons/fa';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useAuthState } from 'react-firebase-hooks/auth/dist/index.esm.js';
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
const ABORT_DELAY = 5e3;
function handleRequest(
  request,
  responseStatusCode,
  responseHeaders,
  remixContext,
  loadContext,
) {
  let prohibitOutOfOrderStreaming =
    isBotRequest(request.headers.get('user-agent')) || remixContext.isSpaMode;
  return prohibitOutOfOrderStreaming
    ? handleBotRequest(
        request,
        responseStatusCode,
        responseHeaders,
        remixContext,
      )
    : handleBrowserRequest(
        request,
        responseStatusCode,
        responseHeaders,
        remixContext,
      );
}
function isBotRequest(userAgent) {
  if (!userAgent) {
    return false;
  }
  if ('isbot' in isbotModule && typeof isbotModule.isbot === 'function') {
    return isbotModule.isbot(userAgent);
  }
  if ('default' in isbotModule && typeof isbotModule.default === 'function') {
    return isbotModule.default(userAgent);
  }
  return false;
}
function handleBotRequest(
  request,
  responseStatusCode,
  responseHeaders,
  remixContext,
) {
  return new Promise((resolve, reject) => {
    let shellRendered = false;
    const { pipe, abort } = renderToPipeableStream(
      /* @__PURE__ */ jsx(RemixServer, {
        context: remixContext,
        url: request.url,
        abortDelay: ABORT_DELAY,
      }),
      {
        onAllReady() {
          shellRendered = true;
          const body = new PassThrough();
          const stream = createReadableStreamFromReadable(body);
          responseHeaders.set('Content-Type', 'text/html');
          resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode,
            }),
          );
          pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500;
          if (shellRendered) {
            console.error(error);
          }
        },
      },
    );
    setTimeout(abort, ABORT_DELAY);
  });
}
function handleBrowserRequest(
  request,
  responseStatusCode,
  responseHeaders,
  remixContext,
) {
  return new Promise((resolve, reject) => {
    let shellRendered = false;
    const { pipe, abort } = renderToPipeableStream(
      /* @__PURE__ */ jsx(RemixServer, {
        context: remixContext,
        url: request.url,
        abortDelay: ABORT_DELAY,
      }),
      {
        onShellReady() {
          shellRendered = true;
          const body = new PassThrough();
          const stream = createReadableStreamFromReadable(body);
          responseHeaders.set('Content-Type', 'text/html');
          resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode,
            }),
          );
          pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500;
          if (shellRendered) {
            console.error(error);
          }
        },
      },
    );
    setTimeout(abort, ABORT_DELAY);
  });
}
const entryServer = /* @__PURE__ */ Object.freeze(
  /* @__PURE__ */ Object.defineProperty(
    {
      __proto__: null,
      default: handleRequest,
    },
    Symbol.toStringTag,
    { value: 'Module' },
  ),
);
const resources = {
  en: {
    translation: {
      Welcome: 'Welcome',
      WelcomeBack: 'Welcome Back',
      En: 'En',
      Ru: 'Ru',
      SignUp: 'Sign Up',
      SignIn: 'Sign In',
      MainPage: 'Main Page',
      ProjectDescription:
        'Here, you can seamlessly explore both REST and GraphQL APIs in one powerful and intuitive interface. Whether you are sending HTTP requests or crafting complex GraphQL queries, our platform gives you the tools to interact with APIs effortlessly. Dive into the world of endless possibilities, streamline your workflow, and unlock the full potential of your data. Happy exploring',
      OurUndefinedsTeam: 'Our Undefineds Team',
      AboutTeam: 'About team',
      AboutCourse: 'About Course',
      CourseDescription:
        'React course covers essential technologies and tools, ensuring you are well-equipped for real-world development challenges. You will deepen your expertise in React, Redux, Next.js, TypeScript, master Git and GitHub commands, enhance your ability to debug and optimize with Chrome DevTools. This course is the perfect next step for advancing your frontend development career.',
      TeamDescription:
        'Our team consists of skilled and enthusiastic professionals who are dedicated to crafting outstanding user interfaces. The team is committed to continuous learning, ensuring they stay current with the latest frontend technologies and industry trends. They actively explore new frameworks, libraries, and tools to enhance their work, delivering high-quality and modern digital experiences',
      RomanSokolov: 'Roman Sokolov',
      RomanText:
        'Passionate about crafting intuitive user interfaces and diving deep into backend architecture, I aspire to continually grow as a developer, bringing innovative solutions to every project I undertake.',
      NikitaRadevich: 'Nikita Radevich',
      NikitaText:
        'I have always wanted to try web development because I find its challenges appealing. I know I have much to learn, but with the right approach, I believe I can achieve my goal',
      YanaDyachok: 'Yana Dyachok',
      YanaText:
        'I love the latest technologies and constant development I want to succeed in my future profession, because it is much better to develop in the field that you like.',
      Registration: 'Registration',
      Login: 'Login',
      Email: ' Email',
      Nickname: 'Nickname',
      Password: 'Password',
      ConfirmPassword: 'Confirm password',
      Submit: 'Submit',
      NotFound: 'Ooops... Page not found',
      BackToMain: 'Back to main',
      RemoveSpecialCharacters: 'Remove special characters from nickname',
      NicknameRequired: 'Nickname is required',
      InvalidEmail: 'Invalid email format',
      EmailRequired: 'Email is required',
      PasswordRequired: 'Password is required',
      PasswordContainsNumber: 'Password should contain 1 number',
      PasswordContainsUppercase:
        'Password should contain 1 uppercase letter [A-Z]',
      PasswordContainsLowercase:
        'Password should contain 1 lowercase letter [a-z]',
      PasswordContainsSpecialCharacter:
        'Password should contain 1 special character [!,@,#,$,% ..etc]',
      PasswordMinLength: 'Password must be at least 6 characters long',
      PasswordMustMatch: 'Password must match',
    },
  },
  ru: {
    translation: {
      Welcome: 'Добро пожаловать',
      WelcomeBack: 'Добро пожаловать обратно',
      En: 'Анг',
      Ru: 'Рус',
      SignUp: 'Авторизоваться',
      SignIn: 'Войти',
      MainPage: 'Главная Страница',
      ProjectDescription:
        'Здесь вы можете легко изучить API REST и GraphQL в одном мощном и интуитивно понятном интерфейсе. Отправляете ли вы HTTP-запросы или создаете сложные запросы GraphQL, наша платформа предоставляет вам инструменты для легкого взаимодействия с API. Погрузитесь в мир бесконечной возможности, оптимизируйте свой рабочий процесс и раскройте весь потенциал ваших данных. Приятного изучения',
      OurUndefinedsTeam: 'Наша команда Неопределенные',
      AboutTeam: 'Про команду',
      AboutCourse: 'Про курс',
      CourseDescription:
        'Курс React охватывает основные технологии и инструменты, гарантируя, что вы хорошо подготовлены к решению реальных задач. Вы будете углублять ваш опыт работы с React, Redux, Next.js, TypeScript, владением Git и команд GitHub, расширите ваши возможности по отладке и оптимизации с помощью инструментов разработчика Chrome. Этот курс является идеальным следующим шагом для развития вашей карьеры фронтенд-разработчика.',
      TeamDescription:
        'Наша команда состоит из опытных и увлеченных профессионалов, которые посвящают себя созданию выдающихся пользовательских интерфейсов. Команда стремится к непрерывному обучению, гарантируя, что они будут в курсе последних  технологий разработки и тенденций отрасли. Они активно исследуют новые фреймворки, библиотеки и инструменты для улучшения их работы, обеспечивая высококачественный и современный цифровой опыт',
      RomanSokolov: 'Роман Соколов',
      RomanText:
        'Увлеченный созданием интуитивно понятных пользовательских интерфейсов и глубоким погружением в серверную архитектуру, я стремлюсь постоянно расти как разработчик, привнося инновационные решения в каждый проект, за который берусь.',
      NikitaRadevich: 'Никита Радевич',
      NikitaText:
        'Я всегда хотел попробовать себя в веб-разработке, потому что меня привлекали ее задачи. Я знаю, что мне нужно многому научиться, но при правильном подходе я верю, что смогу достичь своей цели.',
      YanaDyachok: 'Яна Дячок',
      YanaText:
        'Я люблю новейшие технологии и постоянное развитие. Хочу добиться успеха в своей будущей профессии, потому что гораздо лучше развиваться в той сфере, которая тебе нравится.',
      Registration: 'Регистрация',
      Login: 'Войти',
      Email: 'Электронная почта',
      Nickname: 'Псевдоним',
      Password: 'Пароль',
      ConfirmPassword: 'Подтвердите пароль',
      Submit: 'Отправить',
      NotFound: 'Упс... Страница не найдена',
      BackToMain: 'Вернуться на главную',
      RemoveSpecialCharacters: 'Удалите специальные символы из псевдонима',
      NicknameRequired: 'Псевдоним обязателен',
      InvalidEmail: 'Неверный формат электронной почты',
      EmailRequired: 'Электронная почта обязательна',
      PasswordRequired: 'Пароль обязателен',
      PasswordContainsNumber: 'Пароль должен содержать 1 цифру',
      PasswordContainsUppercase:
        'Пароль должен содержать 1 заглавную букву [A-Z]',
      PasswordContainsLowercase:
        'Пароль должен содержать 1 строчную букву [a-z]',
      PasswordContainsSpecialCharacter:
        'Пароль должен содержать 1 специальный символ [!,@,#,$,% ..и др.]',
      PasswordMinLength: 'Пароль должен содержать не менее 6 символов',
      PasswordMustMatch: 'Пароль должен совпадать',
    },
  },
};
const initialState = {
  language: 'en',
};
const languageSlice = createSlice({
  name: 'language',
  initialState,
  reducers: {
    setLanguage: (state, action) => {
      state.language = action.payload;
    },
  },
});
const { setLanguage } = languageSlice.actions;
const languageSlice$1 = languageSlice.reducer;
const makeStore = () =>
  configureStore({
    reducer: {
      language: languageSlice$1,
    },
  });
const store = makeStore();
const savedLanguage = store.getState().language.language || 'en';
i18n.use(initReactI18next).init({
  resources,
  lng: savedLanguage,
  interpolation: {
    escapeValue: false,
  },
});
store.subscribe(() => {
  const newLanguage = store.getState().language.language;
  if (newLanguage && i18n.language !== newLanguage) {
    i18n.changeLanguage(newLanguage);
  }
});
const toggleControl = '_toggleControl_1al1l_1';
const language = '_language_1al1l_7';
const toggle = '_toggle_1al1l_1';
const indicator = '_indicator_1al1l_21';
const indicatorActive = '_indicatorActive_1al1l_33';
const styles$a = {
  toggleControl,
  language,
  toggle,
  indicator,
  indicatorActive,
};
function ToggleLanguages() {
  const dispatch = useDispatch();
  const { i18n: i18n2, t } = useTranslation();
  const currentLanguage = useSelector((state) => state.language.language);
  const [isLanguageToggled, setIsLanguageToggled] = useState(currentLanguage);
  const handleClick = () => {
    const newLanguage = isLanguageToggled === 'ru' ? 'en' : 'ru';
    setIsLanguageToggled(newLanguage);
    dispatch(setLanguage(newLanguage));
    i18n2.changeLanguage(newLanguage);
  };
  return /* @__PURE__ */ jsxs('div', {
    className: styles$a.toggleControl,
    children: [
      /* @__PURE__ */ jsx('span', {
        className: styles$a.language,
        children: t('En'),
      }),
      /* @__PURE__ */ jsx('button', {
        type: 'button',
        className: styles$a.toggle,
        onClick: handleClick,
        children: /* @__PURE__ */ jsx('div', {
          className: `${styles$a.indicator} ${isLanguageToggled === 'ru' ? styles$a.indicatorActive : ''}`,
        }),
      }),
      /* @__PURE__ */ jsx('span', {
        className: styles$a.language,
        children: t('Ru'),
      }),
    ],
  });
}
const header = '_header_3odap_1';
const sticky = '_sticky_3odap_13';
const navHeader = '_navHeader_3odap_22';
const logo = '_logo_3odap_28';
const logoActive = '_logoActive_3odap_42';
const iconSignIn = '_iconSignIn_3odap_53';
const iconSignInActive = '_iconSignInActive_3odap_67';
const iconSignUp = '_iconSignUp_3odap_78';
const iconSignUpActive = '_iconSignUpActive_3odap_92';
const iconLogOut = '_iconLogOut_3odap_103';
const styles$9 = {
  header,
  sticky,
  navHeader,
  logo,
  logoActive,
  iconSignIn,
  iconSignInActive,
  iconSignUp,
  iconSignUpActive,
  iconLogOut,
};
function Header() {
  const [isSticky, setIsSticky] = useState(false);
  const headerRef = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry2]) => {
        setIsSticky(!entry2.isIntersecting);
      },
      { threshold: [1] },
    );
    const currentHeader = headerRef.current;
    if (currentHeader) {
      observer.observe(currentHeader);
    }
    return () => {
      if (currentHeader) {
        observer.unobserve(currentHeader);
      }
    };
  }, []);
  return /* @__PURE__ */ jsxs(Fragment, {
    children: [
      /* @__PURE__ */ jsx('div', { ref: headerRef }),
      /* @__PURE__ */ jsxs('header', {
        className: `${styles$9.header} ${isSticky ? styles$9.sticky : ''}`,
        children: [
          /* @__PURE__ */ jsx(NavLink, {
            to: '/',
            className: ({ isActive, isPending }) =>
              isPending
                ? styles$9.logo
                : isActive
                  ? styles$9.logoActive
                  : styles$9.logo,
          }),
          /* @__PURE__ */ jsxs('nav', {
            className: styles$9.navHeader,
            children: [
              /* @__PURE__ */ jsx(ToggleLanguages, {}),
              /* @__PURE__ */ jsxs(Fragment, {
                children: [
                  /* @__PURE__ */ jsx(NavLink, {
                    to: '/registration',
                    className: ({ isActive, isPending }) =>
                      isPending
                        ? styles$9.iconSignUp
                        : isActive
                          ? styles$9.iconSignUpActive
                          : styles$9.iconSignUp,
                  }),
                  /* @__PURE__ */ jsx(NavLink, {
                    to: '/login',
                    className: ({ isActive, isPending }) =>
                      isPending
                        ? styles$9.iconSignIn
                        : isActive
                          ? styles$9.iconSignInActive
                          : styles$9.iconSignIn,
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
    ],
  });
}
function Layout() {
  const matches = useMatches();
  const isErrorPage = matches.some((match) => {
    var _a;
    return (_a = match.handle) == null ? void 0 : _a.hideHeader;
  });
  return /* @__PURE__ */ jsxs(Fragment, {
    children: [
      !isErrorPage && /* @__PURE__ */ jsx(Header, {}),
      /* @__PURE__ */ jsx(Outlet, {}),
    ],
  });
}
const footer = '_footer_16fxo_1';
const iconGitHub = '_iconGitHub_16fxo_10';
const teamBlock = '_teamBlock_16fxo_18';
const footerNav = '_footerNav_16fxo_24';
const link = '_link_16fxo_32';
const logoRS = '_logoRS_16fxo_57';
const styles$8 = {
  footer,
  iconGitHub,
  teamBlock,
  footerNav,
  link,
  logoRS,
};
function Footer() {
  const { t } = useTranslation();
  return /* @__PURE__ */ jsxs('footer', {
    className: styles$8.footer,
    children: [
      /* @__PURE__ */ jsxs('div', {
        className: styles$8.teamBlock,
        children: [
          /* @__PURE__ */ jsx(FaGithub, { className: styles$8.iconGitHub }),
          /* @__PURE__ */ jsxs('nav', {
            className: styles$8.footerNav,
            children: [
              ' ',
              /* @__PURE__ */ jsx(Link, {
                to: 'https://github.com/rs0048',
                className: styles$8.link,
                children: t('RomanSokolov'),
              }),
              /* @__PURE__ */ jsx(Link, {
                to: 'https://github.com/Yana-Dyachok',
                className: styles$8.link,
                children: t('YanaDyachok'),
              }),
              /* @__PURE__ */ jsx(Link, {
                to: 'https://github.com/lonelybush',
                className: styles$8.link,
                children: t('NikitaRadevich'),
              }),
            ],
          }),
        ],
      }),
      /* @__PURE__ */ jsx('p', { children: '2024' }),
      /* @__PURE__ */ jsx(Link, {
        to: 'https://rs.school/',
        className: styles$8.linkBlock,
        children: /* @__PURE__ */ jsx('div', { className: styles$8.logoRS }),
      }),
    ],
  });
}
function StoreProvider({ children }) {
  const storeRef = useRef();
  if (!storeRef.current) {
    storeRef.current = makeStore();
  }
  return /* @__PURE__ */ jsx(Provider, { store: storeRef.current, children });
}
function App() {
  return /* @__PURE__ */ jsxs('html', {
    lang: 'en',
    children: [
      /* @__PURE__ */ jsxs('head', {
        children: [
          /* @__PURE__ */ jsx('link', {
            rel: 'icon',
            href: '/favicon-react.ico',
            type: 'image/x-icon',
          }),
          /* @__PURE__ */ jsx(Meta, {}),
          /* @__PURE__ */ jsx(Links, {}),
        ],
      }),
      /* @__PURE__ */ jsx('body', {
        children: /* @__PURE__ */ jsxs(StoreProvider, {
          children: [
            /* @__PURE__ */ jsxs(I18nextProvider, {
              i18n,
              children: [
                /* @__PURE__ */ jsx(Layout, {}),
                /* @__PURE__ */ jsx(Footer, {}),
              ],
            }),
            /* @__PURE__ */ jsx(Scripts, {}),
          ],
        }),
      }),
    ],
  });
}
const route0 = /* @__PURE__ */ Object.freeze(
  /* @__PURE__ */ Object.defineProperty(
    {
      __proto__: null,
      default: App,
    },
    Symbol.toStringTag,
    { value: 'Module' },
  ),
);
const signInFormSection$1 = '_signInFormSection_tdlug_1';
const formWrapper$1 = '_formWrapper_tdlug_15';
const styles$7 = {
  signInFormSection: signInFormSection$1,
  formWrapper: formWrapper$1,
};
const getRegistrationSchema = (t) => {
  return yup.object().shape({
    nickname: yup
      .string()
      .matches(/^[a-zA-Z0-9]*$/, t('RemoveSpecialCharacters'))
      .required(t('NicknameRequired')),
    email: yup.string().email(t('InvalidEmail')).required(t('EmailRequired')),
    password: yup
      .string()
      .required(t('PasswordRequired'))
      .matches(/.*\d.*/, t('PasswordContainsNumber'))
      .matches(/.*[A-Z].*/, t('PasswordContainsUppercase'))
      .matches(/.*[a-z].*/, t('PasswordContainsLowercase'))
      .matches(
        /.*[!@#$%^&*(),.?":{}|<>].*/,
        t('PasswordContainsSpecialCharacter'),
      )
      .min(6, t('PasswordMinLength')),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref('password')], t('PasswordMustMatch')),
  });
};
const formControlWrapper = '_formControlWrapper_yya9m_1';
const errorMessage = '_errorMessage_yya9m_12';
const formInput = '_formInput_yya9m_19';
const faEyePosition = '_faEyePosition_yya9m_37';
const style = {
  formControlWrapper,
  errorMessage,
  formInput,
  faEyePosition,
};
function FormControl({ type, label, register, name, placeholder, error }) {
  const [showPassword, setShowPassword] = useState(false);
  let passwordToggle;
  if (showPassword) {
    passwordToggle = 'text';
  } else {
    passwordToggle = 'password';
  }
  return /* @__PURE__ */ jsxs('label', {
    htmlFor: name,
    className: style.formControlWrapper,
    children: [
      label,
      /* @__PURE__ */ jsx('input', {
        type: type === 'password' ? passwordToggle : type,
        ...register(name),
        name,
        placeholder: !placeholder ? '' : placeholder,
        className: style.formInput,
      }),
      type === 'password' &&
        /* @__PURE__ */ jsx('button', {
          className: style.faEyePosition,
          type: 'button',
          onClick: () => {
            setShowPassword(!showPassword);
          },
          children: showPassword
            ? /* @__PURE__ */ jsx(FaEye, {})
            : /* @__PURE__ */ jsx(FaEyeSlash, {}),
        }),
      /* @__PURE__ */ jsx('span', {
        className: style.errorMessage,
        children: error,
      }),
    ],
  });
}
const btn = '_btn_nkz0b_1';
const styles$6 = {
  btn,
};
function Button({
  btnType = 'button',
  children,
  onClick,
  to,
  disabled = false,
}) {
  const navigate = useNavigate();
  const handleClick = () => {
    if (to) {
      navigate(to);
    }
    if (onClick) {
      onClick();
    }
  };
  return /* @__PURE__ */ jsx('button', {
    className: styles$6.btn,
    type: btnType === 'button' ? 'button' : 'submit',
    onClick: handleClick,
    disabled,
    children,
  });
}
function SignUpForm() {
  var _a, _b, _c, _d;
  const { t } = useTranslation();
  const schema = getRegistrationSchema(t);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: 'onChange',
    resolver: yupResolver(schema),
  });
  const onSubmit = async (data) => {
    console.log(data);
  };
  return /* @__PURE__ */ jsxs('div', {
    className: styles$7.signInFormSection,
    children: [
      /* @__PURE__ */ jsx('h2', { children: t('Registration') }),
      /* @__PURE__ */ jsxs('form', {
        onSubmit: handleSubmit(onSubmit),
        className: styles$7.formWrapper,
        children: [
          /* @__PURE__ */ jsx(FormControl, {
            type: 'text',
            label: t('Nickname'),
            name: 'nickname',
            placeholder: 'John_Doe',
            register,
            error: !((_a = errors.nickname) == null ? void 0 : _a.message)
              ? ''
              : errors.nickname.message,
          }),
          /* @__PURE__ */ jsx(FormControl, {
            type: 'email',
            label: t('Email'),
            name: 'email',
            placeholder: 'example@gmai.com',
            register,
            error: !((_b = errors.email) == null ? void 0 : _b.message)
              ? ''
              : errors.email.message,
          }),
          /* @__PURE__ */ jsx(FormControl, {
            type: 'password',
            label: t('Password'),
            name: 'password',
            placeholder: void 0,
            register,
            error: !((_c = errors.password) == null ? void 0 : _c.message)
              ? ''
              : errors.password.message,
          }),
          /* @__PURE__ */ jsx(FormControl, {
            type: 'password',
            label: t('ConfirmPassword'),
            name: 'confirmPassword',
            placeholder: void 0,
            register,
            error: !((_d = errors.confirmPassword) == null
              ? void 0
              : _d.message)
              ? ''
              : errors.confirmPassword.message,
          }),
          /* @__PURE__ */ jsx(Button, {
            btnType: 'submit',
            children: t('Submit'),
          }),
        ],
      }),
    ],
  });
}
function RegistrationPage() {
  return /* @__PURE__ */ jsx(SignUpForm, {});
}
const route1 = /* @__PURE__ */ Object.freeze(
  /* @__PURE__ */ Object.defineProperty(
    {
      __proto__: null,
      default: RegistrationPage,
    },
    Symbol.toStringTag,
    { value: 'Module' },
  ),
);
const errorBlock = '_errorBlock_qrino_1';
const errorContainer = '_errorContainer_qrino_12';
const title$1 = '_title_qrino_19';
const spanError = '_spanError_qrino_23';
const digitFirst = '_digitFirst_qrino_30';
const digitSecond = '_digitSecond_qrino_31';
const digitThird = '_digitThird_qrino_32';
const styles$5 = {
  errorBlock,
  errorContainer,
  title: title$1,
  spanError,
  digitFirst,
  digitSecond,
  digitThird,
};
const handle = { hideHeader: true };
function CatchAll() {
  const { t } = useTranslation();
  return /* @__PURE__ */ jsxs('div', {
    className: styles$5.errorBlock,
    children: [
      /* @__PURE__ */ jsx('h1', {
        className: styles$5.title,
        children: t('NotFound'),
      }),
      /* @__PURE__ */ jsxs('section', {
        className: styles$5.errorContainer,
        children: [
          /* @__PURE__ */ jsx('span', {
            className: styles$5.spanError,
            children: /* @__PURE__ */ jsx('span', {
              className: styles$5.digitFirst,
              children: '4',
            }),
          }),
          /* @__PURE__ */ jsx('span', {
            className: `${styles$5.spanError} ${styles$5.digitSecond}`,
            children: '0',
          }),
          /* @__PURE__ */ jsx('span', {
            className: styles$5.spanError,
            children: /* @__PURE__ */ jsx('span', {
              className: styles$5.digitThird,
              children: '4',
            }),
          }),
        ],
      }),
      /* @__PURE__ */ jsx(Button, {
        btnType: 'button',
        to: '/',
        children: t('BackToMain'),
      }),
    ],
  });
}
const route2 = /* @__PURE__ */ Object.freeze(
  /* @__PURE__ */ Object.defineProperty(
    {
      __proto__: null,
      default: CatchAll,
      handle,
    },
    Symbol.toStringTag,
    { value: 'Module' },
  ),
);
const yana = '/assets/yana-BB-jdOhc.jpg';
const roman = '/assets/roman-BhWAxZYb.jpg';
const nikita = '/assets/nikita-DpnL6Sd8.jpg';
const cardBlock = '_cardBlock_1y4gj_1';
const imgBlock = '_imgBlock_1y4gj_14';
const img = '_img_1y4gj_14';
const cardInfoBlock = '_cardInfoBlock_1y4gj_30';
const cardName = '_cardName_1y4gj_37';
const info = '_info_1y4gj_43';
const styles$4 = {
  cardBlock,
  imgBlock,
  img,
  cardInfoBlock,
  cardName,
  info,
};
function AboutUsCard() {
  const { t } = useTranslation();
  return /* @__PURE__ */ jsxs(Fragment, {
    children: [
      /* @__PURE__ */ jsxs('article', {
        className: styles$4.cardBlock,
        children: [
          /* @__PURE__ */ jsx('div', {
            className: styles$4.imgBlock,
            children: /* @__PURE__ */ jsx('img', {
              src: roman,
              alt: t('RomanSokolov'),
              className: styles$4.img,
            }),
          }),
          /* @__PURE__ */ jsxs('div', {
            className: styles$4.cardInfoBlock,
            children: [
              /* @__PURE__ */ jsx('h3', {
                className: styles$4.cardName,
                children: t('RomanSokolov'),
              }),
              /* @__PURE__ */ jsx('p', {
                className: styles$4.info,
                children: t('RomanText'),
              }),
            ],
          }),
        ],
      }),
      /* @__PURE__ */ jsxs('article', {
        className: styles$4.cardBlock,
        children: [
          /* @__PURE__ */ jsx('div', {
            className: styles$4.imgBlock,
            children: /* @__PURE__ */ jsx('img', {
              src: yana,
              alt: t('YanaDyachok'),
              className: styles$4.img,
            }),
          }),
          /* @__PURE__ */ jsxs('div', {
            className: styles$4.cardInfoBlock,
            children: [
              /* @__PURE__ */ jsx('h3', {
                className: styles$4.cardName,
                children: t('YanaDyachok'),
              }),
              /* @__PURE__ */ jsx('p', {
                className: styles$4.info,
                children: t('YanaText'),
              }),
            ],
          }),
        ],
      }),
      /* @__PURE__ */ jsxs('article', {
        className: styles$4.cardBlock,
        children: [
          /* @__PURE__ */ jsx('div', {
            className: styles$4.imgBlock,
            children: /* @__PURE__ */ jsx('img', {
              src: nikita,
              alt: t('NikitaRadevich'),
              className: styles$4.img,
            }),
          }),
          /* @__PURE__ */ jsxs('div', {
            className: styles$4.cardInfoBlock,
            children: [
              /* @__PURE__ */ jsx('h3', {
                className: styles$4.cardName,
                children: t('NikitaRadevich'),
              }),
              /* @__PURE__ */ jsx('p', {
                className: styles$4.info,
                children: t('NikitaText'),
              }),
            ],
          }),
        ],
      }),
    ],
  });
}
const contentInner$1 = '_contentInner_q30k9_1';
const aboutUsBlock = '_aboutUsBlock_q30k9_10';
const description$1 = '_description_q30k9_17';
const styles$3 = {
  contentInner: contentInner$1,
  aboutUsBlock,
  description: description$1,
};
function AboutComponent() {
  const { t } = useTranslation();
  return /* @__PURE__ */ jsxs('div', {
    className: styles$3.contentInner,
    children: [
      /* @__PURE__ */ jsx('h2', { children: t('OurUndefinedsTeam') }),
      /* @__PURE__ */ jsx('div', {
        className: styles$3.aboutUsBlock,
        children: /* @__PURE__ */ jsx(AboutUsCard, {}),
      }),
      /* @__PURE__ */ jsx('h2', { children: t('AboutTeam') }),
      /* @__PURE__ */ jsx('p', {
        className: styles$3.description,
        children: t('TeamDescription'),
      }),
      /* @__PURE__ */ jsx('h2', { children: t('AboutCourse') }),
      /* @__PURE__ */ jsx('p', {
        className: styles$3.description,
        children: t('CourseDescription'),
      }),
    ],
  });
}
const contentInner = '_contentInner_8piex_1';
const description = '_description_8piex_9';
const buttonBlock = '_buttonBlock_8piex_13';
const title = '_title_8piex_18';
const styles$2 = {
  contentInner,
  description,
  buttonBlock,
  title,
};
const firebaseConfig = {
  apiKey: 'AIzaSyBdpwHTjeLfXkVZgVKnuGFhfCMZUxZsAc8',
  authDomain: 'graphiql-app-1e06a.firebaseapp.com',
  projectId: 'graphiql-app-1e06a',
  storageBucket: 'graphiql-app-1e06a.appspot.com',
  messagingSenderId: '230111088490',
  appId: '1:230111088490:web:21585fc589d0459e689f13',
  measurementId: 'G-S38B5ZRXD9',
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
getFirestore(app);
function WelcomeComponent() {
  const { t } = useTranslation();
  const userName = '';
  const [user] = useAuthState(auth);
  useEffect(() => {
    console.log(user);
  }, [user]);
  return /* @__PURE__ */ jsxs('div', {
    className: styles$2.contentInner,
    children: [
      /* @__PURE__ */ jsx('h1', {
        className: styles$2.title,
        children:
          userName.length === 0
            ? `${t('Welcome')}!`
            : `${t('WelcomeBack')}, ${userName}!`,
      }),
      /* @__PURE__ */ jsx('p', {
        className: styles$2.description,
        children: t('ProjectDescription'),
      }),
      /* @__PURE__ */ jsx('div', {
        className: styles$2.buttonBlock,
        children:
          userName.length > 0
            ? /* @__PURE__ */ jsx(Button, {
                btnType: 'button',
                to: '/main',
                children: t('MainPage'),
              })
            : /* @__PURE__ */ jsxs(Fragment, {
                children: [
                  ' ',
                  /* @__PURE__ */ jsx(Button, {
                    btnType: 'button',
                    to: '/login',
                    children: t('SignIn'),
                  }),
                  /* @__PURE__ */ jsx(Button, {
                    btnType: 'button',
                    to: '/registration',
                    children: t('SignUp'),
                  }),
                ],
              }),
      }),
    ],
  });
}
const container = '_container_10gft_1';
const styles$1 = {
  container,
};
function WelcomePage() {
  return /* @__PURE__ */ jsxs('div', {
    className: styles$1.container,
    children: [
      /* @__PURE__ */ jsx(WelcomeComponent, {}),
      /* @__PURE__ */ jsx(AboutComponent, {}),
    ],
  });
}
const route3 = /* @__PURE__ */ Object.freeze(
  /* @__PURE__ */ Object.defineProperty(
    {
      __proto__: null,
      default: WelcomePage,
    },
    Symbol.toStringTag,
    { value: 'Module' },
  ),
);
const signInFormSection = '_signInFormSection_tdlug_1';
const formWrapper = '_formWrapper_tdlug_15';
const styles = {
  signInFormSection,
  formWrapper,
};
const getLoginSchema = (t) => {
  return yup.object().shape({
    email: yup.string().email(t('InvalidEmail')).required(t('EmailRequired')),
    password: yup
      .string()
      .required(t('PasswordRequired'))
      .matches(/.*\d.*/, t('PasswordContainsNumber'))
      .matches(/.*[A-Z].*/, t('PasswordContainsUppercase'))
      .matches(/.*[a-z].*/, t('PasswordContainsLowercase'))
      .matches(
        /.*[!@#$%^&*(),.?":{}|<>].*/,
        t('PasswordContainsSpecialCharacter'),
      )
      .min(6, t('PasswordMinLength')),
  });
};
function LoginForm() {
  var _a, _b;
  const { t } = useTranslation();
  const schema = getLoginSchema(t);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: 'onChange',
    resolver: yupResolver(schema),
  });
  const onSubmit = async (data) => {
    console.log(data);
  };
  return /* @__PURE__ */ jsxs('div', {
    className: styles.signInFormSection,
    children: [
      /* @__PURE__ */ jsx('h2', { children: t('Login') }),
      /* @__PURE__ */ jsxs('form', {
        onSubmit: handleSubmit(onSubmit),
        className: styles.formWrapper,
        children: [
          /* @__PURE__ */ jsx(FormControl, {
            type: 'email',
            label: t('Email'),
            name: 'email',
            placeholder: 'example@gmai.com',
            register,
            error: !((_a = errors.email) == null ? void 0 : _a.message)
              ? ''
              : errors.email.message,
          }),
          /* @__PURE__ */ jsx(FormControl, {
            type: 'password',
            label: t('Password'),
            name: 'password',
            placeholder: void 0,
            register,
            error: !((_b = errors.password) == null ? void 0 : _b.message)
              ? ''
              : errors.password.message,
          }),
          /* @__PURE__ */ jsx(Button, {
            btnType: 'submit',
            children: t('Submit'),
          }),
        ],
      }),
    ],
  });
}
function LoginPage() {
  return /* @__PURE__ */ jsx(LoginForm, {});
}
const route4 = /* @__PURE__ */ Object.freeze(
  /* @__PURE__ */ Object.defineProperty(
    {
      __proto__: null,
      default: LoginPage,
    },
    Symbol.toStringTag,
    { value: 'Module' },
  ),
);
const methods = ['GET', 'POST', 'PUT', 'DELETE'];
function RestClient() {
  const [method, setMethod] = useState('GET');
  const [url, setUrl] = useState('');
  const [body, setBody] = useState('');
  const [response, setResponse] = useState({
    status: 0,
    body: '',
  });
  const handleRequest2 = async () => {
    try {
      const options = { method, headers: {} };
      if (method !== 'GET') {
        options.body = body;
      }
      const res = await fetch(url, options);
      const resBody = await res.text();
      setResponse({ status: res.status, body: resBody });
    } catch (error) {
      setResponse({ status: 0, body: 'Error' });
    }
  };
  return /* @__PURE__ */ jsxs('div', {
    children: [
      /* @__PURE__ */ jsxs('header', {
        children: [
          /* @__PURE__ */ jsx('select', {
            value: method,
            onChange: (e) => setMethod(e.target.value),
            children: methods.map((m) =>
              /* @__PURE__ */ jsx('option', { value: m, children: m }, m),
            ),
          }),
          /* @__PURE__ */ jsx('input', {
            type: 'text',
            value: url,
            onChange: (e) => setUrl(e.target.value),
            placeholder: 'Endpoint URL',
          }),
        ],
      }),
      /* @__PURE__ */ jsx('textarea', {
        value: body,
        onChange: (e) => setBody(e.target.value),
        placeholder: 'Request Body',
      }),
      /* @__PURE__ */ jsx(Button, {
        btnType: 'button',
        onClick: handleRequest2,
        children: 'Send Request',
      }),
      /* @__PURE__ */ jsxs('section', {
        children: [
          /* @__PURE__ */ jsx('h3', { children: 'Response' }),
          /* @__PURE__ */ jsxs('p', {
            children: ['Status: ', response.status],
          }),
          /* @__PURE__ */ jsx('pre', { children: response.body }),
        ],
      }),
    ],
  });
}
function MainPage() {
  return /* @__PURE__ */ jsx(RestClient, {});
}
const route5 = /* @__PURE__ */ Object.freeze(
  /* @__PURE__ */ Object.defineProperty(
    {
      __proto__: null,
      default: MainPage,
    },
    Symbol.toStringTag,
    { value: 'Module' },
  ),
);
const serverManifest = {
  entry: {
    module: '/assets/entry.client-BEnMypVQ.js',
    imports: ['/assets/index-k4sjWK-j.js', '/assets/components-D99Bc5lC.js'],
    css: [],
  },
  routes: {
    root: {
      id: 'root',
      parentId: void 0,
      path: '',
      index: void 0,
      caseSensitive: void 0,
      hasAction: false,
      hasLoader: false,
      hasClientAction: false,
      hasClientLoader: false,
      hasErrorBoundary: false,
      module: '/assets/root-DJdBqLQL.js',
      imports: [
        '/assets/index-k4sjWK-j.js',
        '/assets/components-D99Bc5lC.js',
        '/assets/useTranslation-pYUzJfcX.js',
        '/assets/index-BCQ0Yyab.js',
      ],
      css: ['/assets/root-a4weVIYH.css'],
    },
    'routes/registration': {
      id: 'routes/registration',
      parentId: 'root',
      path: 'registration',
      index: void 0,
      caseSensitive: void 0,
      hasAction: false,
      hasLoader: false,
      hasClientAction: false,
      hasClientLoader: false,
      hasErrorBoundary: false,
      module: '/assets/registration-D8azLGbF.js',
      imports: [
        '/assets/index-k4sjWK-j.js',
        '/assets/index-BCQ0Yyab.js',
        '/assets/form-control-Cv0RCtaP.js',
        '/assets/button-ikYNQhX4.js',
        '/assets/useTranslation-pYUzJfcX.js',
      ],
      css: [
        '/assets/form-control-DCnD3GZh.css',
        '/assets/button-C2KqssPe.css',
        '/assets/registration-hE8YMDmJ.css',
      ],
    },
    'routes/$catchAll': {
      id: 'routes/$catchAll',
      parentId: 'root',
      path: ':catchAll',
      index: void 0,
      caseSensitive: void 0,
      hasAction: false,
      hasLoader: false,
      hasClientAction: false,
      hasClientLoader: false,
      hasErrorBoundary: false,
      module: '/assets/_catchAll-CDO6J29j.js',
      imports: [
        '/assets/index-k4sjWK-j.js',
        '/assets/button-ikYNQhX4.js',
        '/assets/useTranslation-pYUzJfcX.js',
      ],
      css: ['/assets/button-C2KqssPe.css', '/assets/_catchAll-GDYeoeQ7.css'],
    },
    'routes/_index': {
      id: 'routes/_index',
      parentId: 'root',
      path: void 0,
      index: true,
      caseSensitive: void 0,
      hasAction: false,
      hasLoader: false,
      hasClientAction: false,
      hasClientLoader: false,
      hasErrorBoundary: false,
      module: '/assets/_index-Ccp4_-9c.js',
      imports: [
        '/assets/index-k4sjWK-j.js',
        '/assets/useTranslation-pYUzJfcX.js',
        '/assets/button-ikYNQhX4.js',
      ],
      css: ['/assets/button-C2KqssPe.css', '/assets/_index-L305D0Lk.css'],
    },
    'routes/login': {
      id: 'routes/login',
      parentId: 'root',
      path: 'login',
      index: void 0,
      caseSensitive: void 0,
      hasAction: false,
      hasLoader: false,
      hasClientAction: false,
      hasClientLoader: false,
      hasErrorBoundary: false,
      module: '/assets/login-BpbuJYcA.js',
      imports: [
        '/assets/index-k4sjWK-j.js',
        '/assets/index-BCQ0Yyab.js',
        '/assets/form-control-Cv0RCtaP.js',
        '/assets/button-ikYNQhX4.js',
        '/assets/useTranslation-pYUzJfcX.js',
      ],
      css: [
        '/assets/form-control-DCnD3GZh.css',
        '/assets/button-C2KqssPe.css',
        '/assets/registration-hE8YMDmJ.css',
      ],
    },
    'routes/main': {
      id: 'routes/main',
      parentId: 'root',
      path: 'main',
      index: void 0,
      caseSensitive: void 0,
      hasAction: false,
      hasLoader: false,
      hasClientAction: false,
      hasClientLoader: false,
      hasErrorBoundary: false,
      module: '/assets/main-B1ncNWTe.js',
      imports: ['/assets/index-k4sjWK-j.js', '/assets/button-ikYNQhX4.js'],
      css: ['/assets/button-C2KqssPe.css'],
    },
  },
  url: '/assets/manifest-83f3ee97.js',
  version: '83f3ee97',
};
const mode = 'production';
const assetsBuildDirectory = 'build\\client';
const basename = '/';
const future = {
  v3_fetcherPersist: false,
  v3_relativeSplatPath: false,
  v3_throwAbortReason: false,
  unstable_singleFetch: false,
  unstable_lazyRouteDiscovery: false,
};
const isSpaMode = false;
const publicPath = '/';
const entry = { module: entryServer };
const routes = {
  root: {
    id: 'root',
    parentId: void 0,
    path: '',
    index: void 0,
    caseSensitive: void 0,
    module: route0,
  },
  'routes/registration': {
    id: 'routes/registration',
    parentId: 'root',
    path: 'registration',
    index: void 0,
    caseSensitive: void 0,
    module: route1,
  },
  'routes/$catchAll': {
    id: 'routes/$catchAll',
    parentId: 'root',
    path: ':catchAll',
    index: void 0,
    caseSensitive: void 0,
    module: route2,
  },
  'routes/_index': {
    id: 'routes/_index',
    parentId: 'root',
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: route3,
  },
  'routes/login': {
    id: 'routes/login',
    parentId: 'root',
    path: 'login',
    index: void 0,
    caseSensitive: void 0,
    module: route4,
  },
  'routes/main': {
    id: 'routes/main',
    parentId: 'root',
    path: 'main',
    index: void 0,
    caseSensitive: void 0,
    module: route5,
  },
};
export {
  serverManifest as assets,
  assetsBuildDirectory,
  basename,
  entry,
  future,
  isSpaMode,
  mode,
  publicPath,
  routes,
};
