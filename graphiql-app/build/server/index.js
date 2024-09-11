import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { PassThrough } from "node:stream";
import { createReadableStreamFromReadable } from "@remix-run/node";
import { RemixServer, NavLink, useMatches, Outlet, Link, useNavigate, Meta, Links, Scripts, useLocation, useSearchParams, useParams, useActionData, Form } from "@remix-run/react";
import * as isbotModule from "isbot";
import { renderToPipeableStream } from "react-dom/server";
import { initReactI18next, useTranslation, withTranslation, I18nextProvider } from "react-i18next";
import i18n from "i18next";
import { createSlice, configureStore } from "@reduxjs/toolkit";
import React, { useState, useRef, useEffect, createContext, useMemo, Children, useContext } from "react";
import { useAuthState } from "react-firebase-hooks/auth/dist/index.esm.js";
import { useDispatch, useSelector, Provider } from "react-redux";
import { initializeApp } from "firebase/app";
import { getAuth, signOut, signInWithEmailAndPassword, createUserWithEmailAndPassword, updateProfile, onAuthStateChanged } from "firebase/auth";
import { FaGithub, FaEye, FaEyeSlash } from "react-icons/fa";
import { Slide, ToastContainer, toast } from "react-toastify";
import { Editor } from "@monaco-editor/react";
import { GoTrash } from "react-icons/go";
import { AiOutlineApi } from "react-icons/ai";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
const ABORT_DELAY = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, remixContext, loadContext) {
  let prohibitOutOfOrderStreaming = isBotRequest(request.headers.get("user-agent")) || remixContext.isSpaMode;
  return prohibitOutOfOrderStreaming ? handleBotRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  ) : handleBrowserRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  );
}
function isBotRequest(userAgent) {
  if (!userAgent) {
    return false;
  }
  if ("isbot" in isbotModule && typeof isbotModule.isbot === "function") {
    return isbotModule.isbot(userAgent);
  }
  if ("default" in isbotModule && typeof isbotModule.default === "function") {
    return isbotModule.default(userAgent);
  }
  return false;
}
function handleBotRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = false;
    const { pipe, abort } = renderToPipeableStream(
      /* @__PURE__ */ jsx(
        RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        }
      ),
      {
        onAllReady() {
          shellRendered = true;
          const body = new PassThrough();
          const stream = createReadableStreamFromReadable(body);
          responseHeaders.set("Content-Type", "text/html");
          resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode
            })
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
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}
function handleBrowserRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = false;
    const { pipe, abort } = renderToPipeableStream(
      /* @__PURE__ */ jsx(
        RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        }
      ),
      {
        onShellReady() {
          shellRendered = true;
          const body = new PassThrough();
          const stream = createReadableStreamFromReadable(body);
          responseHeaders.set("Content-Type", "text/html");
          resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode
            })
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
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}
const entryServer = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: handleRequest
}, Symbol.toStringTag, { value: "Module" }));
const resources = {
  en: {
    translation: {
      Welcome: "Welcome",
      WelcomeBack: "Welcome Back",
      En: "En",
      Ru: "Ru",
      SignUp: "Sign Up",
      SignIn: "Sign In",
      MainPage: "Main Page",
      ProjectDescription: "Here, you can seamlessly explore both REST and GraphQL APIs in one powerful and intuitive interface. Whether you are sending HTTP requests or crafting complex GraphQL queries, our platform gives you the tools to interact with APIs effortlessly. Dive into the world of endless possibilities, streamline your workflow, and unlock the full potential of your data. Happy exploring",
      OurUndefinedsTeam: "Our Undefineds Team",
      AboutTeam: "About team",
      AboutCourse: "About Course",
      CourseDescription: "React course covers essential technologies and tools, ensuring you are well-equipped for real-world development challenges. You will deepen your expertise in React, Redux, Next.js, TypeScript, master Git and GitHub commands, enhance your ability to debug and optimize with Chrome DevTools. This course is the perfect next step for advancing your frontend development career.",
      TeamDescription: "Our team consists of skilled and enthusiastic professionals who are dedicated to crafting outstanding user interfaces. The team is committed to continuous learning, ensuring they stay current with the latest frontend technologies and industry trends. They actively explore new frameworks, libraries, and tools to enhance their work, delivering high-quality and modern digital experiences",
      RomanSokolov: "Roman Sokolov",
      RomanText: "Passionate about crafting intuitive user interfaces and diving deep into backend architecture, I aspire to continually grow as a developer, bringing innovative solutions to every project I undertake.",
      NikitaRadevich: "Nikita Radevich",
      NikitaText: "I have always wanted to try web development because I find its challenges appealing. I know I have much to learn, but with the right approach, I believe I can achieve my goal",
      YanaDyachok: "Yana Dyachok",
      YanaText: "I love the latest technologies and constant development I want to succeed in my future profession, because it is much better to develop in the field that you like.",
      Registration: "Registration",
      Login: "Login",
      Email: " Email",
      Nickname: "Nickname",
      Password: "Password",
      ConfirmPassword: "Confirm password",
      Submit: "Submit",
      NotFound: "Ooops... Page not found",
      ErrorMessage: "Ooops... You are getting an error",
      BackToMain: "Back to main",
      RemoveSpecialCharacters: "Remove special characters from nickname",
      NicknameRequired: "Nickname is required",
      InvalidEmail: "Invalid email format",
      EmailRequired: "Email is required",
      PasswordRequired: "Password is required",
      PasswordContainsNumber: "Password should contain 1 number",
      PasswordContainsUppercase: "Password should contain 1 uppercase letter [A-Z]",
      PasswordContainsLowercase: "Password should contain 1 lowercase letter [a-z]",
      PasswordContainsSpecialCharacter: "Password should contain 1 special character [!,@,#,$,% ..etc]",
      PasswordMinLength: "Password must be at least 6 characters long",
      PasswordMustMatch: "Password must match",
      History: "History",
      GraphiQLClient: "GraphiQL Client",
      RESTClient: "REST Client",
      Response: "Response",
      NoResponse: "Enter the URL and click Send to get a response",
      status: "status",
      Send: "Send",
      accessGranted: "Access granted!",
      loading: "Loading...",
      wrongCredentials: "Invalid email or password combination!",
      emailAlreadyUse: "Email you are using is already in use!",
      temporaryBlock: "Access to this account has been temporarily disabled due to many failed login attempts. Try again later.",
      unexpectedError: "An unexpected error occurred!",
      AddHeader: "Add Header",
      Key: "Key",
      Value: "Value",
      Body: " Body",
      Headers: "Headers",
      NoHistory: "You haven`t executed any requests.It`s empty here.Try these options:",
      HistoryRequests: "History Requests"
    }
  },
  ru: {
    translation: {
      Welcome: "Добро пожаловать",
      WelcomeBack: "Добро пожаловать обратно",
      En: "Анг",
      Ru: "Рус",
      SignUp: "Зарегистрироваться",
      SignIn: "Войти",
      MainPage: "Главная Страница",
      ProjectDescription: "Здесь вы можете легко изучить API REST и GraphQL в одном мощном и интуитивно понятном интерфейсе. Отправляете ли вы HTTP-запросы или создаете сложные запросы GraphQL, наша платформа предоставляет вам инструменты для легкого взаимодействия с API. Погрузитесь в мир бесконечной возможности, оптимизируйте свой рабочий процесс и раскройте весь потенциал ваших данных. Приятного изучения",
      OurUndefinedsTeam: "Наша команда Неопределенные",
      AboutTeam: "Про команду",
      AboutCourse: "Про курс",
      CourseDescription: "Курс React охватывает основные технологии и инструменты, гарантируя, что вы хорошо подготовлены к решению реальных задач. Вы будете углублять ваш опыт работы с React, Redux, Next.js, TypeScript, владением Git и команд GitHub, расширите ваши возможности по отладке и оптимизации с помощью инструментов разработчика Chrome. Этот курс является идеальным следующим шагом для развития вашей карьеры фронтенд-разработчика.",
      TeamDescription: "Наша команда состоит из опытных и увлеченных профессионалов, которые посвящают себя созданию выдающихся пользовательских интерфейсов. Команда стремится к непрерывному обучению, гарантируя, что они будут в курсе последних  технологий разработки и тенденций отрасли. Они активно исследуют новые фреймворки, библиотеки и инструменты для улучшения их работы, обеспечивая высококачественный и современный цифровой опыт",
      RomanSokolov: "Роман Соколов",
      RomanText: "Увлеченный созданием интуитивно понятных пользовательских интерфейсов и глубоким погружением в серверную архитектуру, я стремлюсь постоянно расти как разработчик, привнося инновационные решения в каждый проект, за который берусь.",
      NikitaRadevich: "Никита Радевич",
      NikitaText: "Я всегда хотел попробовать себя в веб-разработке, потому что меня привлекали ее задачи. Я знаю, что мне нужно многому научиться, но при правильном подходе я верю, что смогу достичь своей цели.",
      YanaDyachok: "Яна Дячок",
      YanaText: "Я люблю новейшие технологии и постоянное развитие. Хочу добиться успеха в своей будущей профессии, потому что гораздо лучше развиваться в той сфере, которая тебе нравится.",
      Registration: "Регистрация",
      Login: "Войти",
      Email: "Электронная почта",
      Nickname: "Псевдоним",
      Password: "Пароль",
      ConfirmPassword: "Подтвердите пароль",
      Submit: "Отправить",
      NotFound: "Упс... Страница не найдена",
      ErrorMessage: "Упс... Вы получаете ошибку",
      BackToMain: "Вернуться на главную",
      RemoveSpecialCharacters: "Удалите специальные символы из псевдонима",
      NicknameRequired: "Псевдоним обязателен",
      InvalidEmail: "Неверный формат электронной почты",
      EmailRequired: "Электронная почта обязательна",
      PasswordRequired: "Пароль обязателен",
      PasswordContainsNumber: "Пароль должен содержать 1 цифру",
      PasswordContainsUppercase: "Пароль должен содержать 1 заглавную букву [A-Z]",
      PasswordContainsLowercase: "Пароль должен содержать 1 строчную букву [a-z]",
      PasswordContainsSpecialCharacter: "Пароль должен содержать 1 специальный символ [!,@,#,$,% ..и др.]",
      PasswordMinLength: "Пароль должен содержать не менее 6 символов",
      PasswordMustMatch: "Пароль должен совпадать",
      History: "История",
      GraphiQLClient: "GraphiQL Клиент",
      RESTClient: "REST Клиент",
      Response: "Ответ",
      NoResponse: "Введите URL и нажмите «Отправить», чтобы получить ответ.",
      status: "состояние",
      Send: "Отправить",
      accessGranted: "Доступ получен!",
      loading: "Загрузка...",
      wrongCredentials: "Неверная электронная почта или пароль!",
      emailAlreadyUse: "Указанный вами адрес электронной почты уже используется!",
      temporaryBlock: "Доступ к этой учетной записи временно отключен из-за множества неудачных попыток входа. Попробуйте еще раз позже.",
      unexpectedError: "Произошла непредвиденная ошибка!",
      AddHeader: "Добавить заголовок",
      Key: "Ключ",
      Value: "Значение",
      Body: "Тело",
      Headers: "Заголовки",
      NoHistory: "Вы еще не выполнили ни одного запроса, Здесь пусто. Попробуйте эти варианты:",
      HistoryRequests: "История запросов"
    }
  }
};
const initialState$2 = {
  language: "en"
};
const languageSlice = createSlice({
  name: "language",
  initialState: initialState$2,
  reducers: {
    setLanguage: (state, action2) => {
      state.language = action2.payload;
    }
  }
});
const { setLanguage } = languageSlice.actions;
const languageSlice$1 = languageSlice.reducer;
const saveRequestToLocalStorage = (key, data) => {
  try {
    const jsonData = JSON.stringify(data);
    localStorage.setItem(key, jsonData);
  } catch (error) {
    throw new Error(`error ${error}`);
  }
};
const initialState$1 = {
  restLinks: []
  //   restLinks:(typeof window !== 'undefined' && getRequestFromLocalStorage('restfull'))||[],
};
const restLinksSlice = createSlice({
  name: "rest-links",
  initialState: initialState$1,
  reducers: {
    addRestLinks: (state, action2) => {
      state.restLinks.push(...action2.payload);
      saveRequestToLocalStorage("restfull", state.restLinks);
    }
  }
});
const { addRestLinks } = restLinksSlice.actions;
const restLinksSlice$1 = restLinksSlice.reducer;
const initialState = {
  graphiQLLinks: []
};
const graphiQLLinksSlice = createSlice({
  name: "graphiql-links",
  initialState,
  reducers: {
    addGraphiQLLinks: (state, action2) => {
      state.graphiQLLinks.push(...action2.payload);
      saveRequestToLocalStorage("graphiQL", state.graphiQLLinks);
    }
  }
});
graphiQLLinksSlice.actions;
const graphiQLLinksSlice$1 = graphiQLLinksSlice.reducer;
const makeStore = () => configureStore({
  reducer: {
    language: languageSlice$1,
    restLinks: restLinksSlice$1,
    graphiQLLinks: graphiQLLinksSlice$1
  }
});
const store = makeStore();
const savedLanguage = store.getState().language.language || "en";
i18n.use(initReactI18next).init({
  resources,
  lng: savedLanguage,
  interpolation: {
    escapeValue: false
  }
});
store.subscribe(() => {
  const newLanguage = store.getState().language.language;
  if (newLanguage && i18n.language !== newLanguage) {
    i18n.changeLanguage(newLanguage);
  }
});
const toggleControl = "_toggleControl_1al1l_1";
const language = "_language_1al1l_7";
const toggle = "_toggle_1al1l_1";
const indicator = "_indicator_1al1l_21";
const indicatorActive = "_indicatorActive_1al1l_33";
const styles$j = {
  toggleControl,
  language,
  toggle,
  indicator,
  indicatorActive
};
function ToggleLanguages() {
  const dispatch = useDispatch();
  const { i18n: i18n2, t } = useTranslation();
  const currentLanguage = useSelector(
    (state) => state.language.language
  );
  const [isLanguageToggled, setIsLanguageToggled] = useState(currentLanguage);
  const handleClick = () => {
    const newLanguage = isLanguageToggled === "ru" ? "en" : "ru";
    setIsLanguageToggled(newLanguage);
    dispatch(setLanguage(newLanguage));
    i18n2.changeLanguage(newLanguage);
  };
  return /* @__PURE__ */ jsxs("div", { className: styles$j.toggleControl, children: [
    /* @__PURE__ */ jsx("span", { className: styles$j.language, children: t("En") }),
    /* @__PURE__ */ jsx("button", { type: "button", className: styles$j.toggle, onClick: handleClick, children: /* @__PURE__ */ jsx(
      "div",
      {
        className: `${styles$j.indicator} ${isLanguageToggled === "ru" ? styles$j.indicatorActive : ""}`
      }
    ) }),
    /* @__PURE__ */ jsx("span", { className: styles$j.language, children: t("Ru") })
  ] });
}
const header = "_header_10klx_1";
const sticky = "_sticky_10klx_13";
const navHeader = "_navHeader_10klx_22";
const logo = "_logo_10klx_28";
const logoActive = "_logoActive_10klx_42";
const iconSignIn = "_iconSignIn_10klx_53";
const iconSignInActive = "_iconSignInActive_10klx_67";
const iconSignUp = "_iconSignUp_10klx_78";
const iconSignUpActive = "_iconSignUpActive_10klx_92";
const iconLogOut = "_iconLogOut_10klx_103";
const styles$i = {
  header,
  sticky,
  navHeader,
  logo,
  logoActive,
  iconSignIn,
  iconSignInActive,
  iconSignUp,
  iconSignUpActive,
  iconLogOut
};
const firebaseConfig = {
  apiKey: "AIzaSyBdpwHTjeLfXkVZgVKnuGFhfCMZUxZsAc8",
  authDomain: "graphiql-app-1e06a.firebaseapp.com",
  projectId: "graphiql-app-1e06a",
  storageBucket: "graphiql-app-1e06a.appspot.com",
  messagingSenderId: "230111088490",
  appId: "1:230111088490:web:21585fc589d0459e689f13",
  measurementId: "G-S38B5ZRXD9"
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const logInWithEmailAndPassword = async (email, password) => {
  return new Promise((resolve, reject) => {
    signInWithEmailAndPassword(auth, email, password).then((result) => {
      const { user } = result;
      if (user) {
        resolve(user);
      } else {
        reject(new Error("Auth is failed"));
      }
    }).catch((error) => reject(error));
  });
};
const registerWithEmailAndPassword = async (nickname, email, password) => {
  return new Promise((resolve, reject) => {
    createUserWithEmailAndPassword(auth, email, password).then(async (result) => {
      const { user } = result;
      if (user && auth.currentUser) {
        await updateProfile(user, {
          displayName: nickname
        });
        await user.reload();
        const updatedUser = auth.currentUser;
        resolve(updatedUser);
      }
    }).catch((error) => reject(error));
  });
};
const logout = () => {
  signOut(auth);
};
function Header() {
  const [isSticky, setIsSticky] = useState(false);
  const headerRef = useRef(null);
  const [user] = useAuthState(auth);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry2]) => {
        setIsSticky(!entry2.isIntersecting);
      },
      { threshold: [1] }
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
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("div", { ref: headerRef }),
    /* @__PURE__ */ jsxs("header", { className: `${styles$i.header} ${isSticky ? styles$i.sticky : ""}`, children: [
      /* @__PURE__ */ jsx(
        NavLink,
        {
          to: "/",
          className: ({ isActive, isPending }) => isPending ? styles$i.logo : isActive ? styles$i.logoActive : styles$i.logo
        }
      ),
      /* @__PURE__ */ jsxs("nav", { className: styles$i.navHeader, children: [
        /* @__PURE__ */ jsx(ToggleLanguages, {}),
        user ? /* @__PURE__ */ jsx(
          "button",
          {
            type: "button",
            className: styles$i.iconLogOut,
            "aria-label": "Log out",
            onClick: () => {
              logout();
            }
          }
        ) : /* @__PURE__ */ jsxs(Fragment, { children: [
          /* @__PURE__ */ jsx(
            NavLink,
            {
              to: "/registration",
              className: ({ isActive, isPending }) => isPending ? styles$i.iconSignUp : isActive ? styles$i.iconSignUpActive : styles$i.iconSignUp
            }
          ),
          /* @__PURE__ */ jsx(
            NavLink,
            {
              to: "/login",
              className: ({ isActive, isPending }) => isPending ? styles$i.iconSignIn : isActive ? styles$i.iconSignInActive : styles$i.iconSignIn
            }
          )
        ] })
      ] })
    ] })
  ] });
}
function Layout() {
  const matches = useMatches();
  const isErrorPage = matches.some(
    (match) => {
      var _a;
      return (_a = match.handle) == null ? void 0 : _a.hideHeader;
    }
  );
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    !isErrorPage && /* @__PURE__ */ jsx(Header, {}),
    /* @__PURE__ */ jsx(Outlet, {})
  ] });
}
const footer = "_footer_1vusc_1";
const iconGitHub = "_iconGitHub_1vusc_10";
const teamBlock = "_teamBlock_1vusc_18";
const footerNav = "_footerNav_1vusc_24";
const link = "_link_1vusc_32";
const logoRS = "_logoRS_1vusc_57";
const styles$h = {
  footer,
  iconGitHub,
  teamBlock,
  footerNav,
  link,
  logoRS
};
function Footer() {
  const { t } = useTranslation();
  return /* @__PURE__ */ jsxs("footer", { className: styles$h.footer, children: [
    /* @__PURE__ */ jsxs("div", { className: styles$h.teamBlock, children: [
      /* @__PURE__ */ jsx(FaGithub, { className: styles$h.iconGitHub }),
      /* @__PURE__ */ jsxs("nav", { className: styles$h.footerNav, children: [
        " ",
        /* @__PURE__ */ jsx(Link, { to: "https://github.com/rs0048", className: styles$h.link, children: t("RomanSokolov") }),
        /* @__PURE__ */ jsx(Link, { to: "https://github.com/Yana-Dyachok", className: styles$h.link, children: t("YanaDyachok") }),
        /* @__PURE__ */ jsx(Link, { to: "https://github.com/lonelybush", className: styles$h.link, children: t("NikitaRadevich") })
      ] })
    ] }),
    /* @__PURE__ */ jsx("p", { children: "2024" }),
    /* @__PURE__ */ jsx(Link, { to: "https://rs.school/", className: styles$h.linkBlock, children: /* @__PURE__ */ jsx("div", { className: styles$h.logoRS }) })
  ] });
}
function StoreProvider({
  children
}) {
  const storeRef = useRef();
  if (!storeRef.current) {
    storeRef.current = makeStore();
  }
  return /* @__PURE__ */ jsx(Provider, { store: storeRef.current, children });
}
const btn = "_btn_nkz0b_1";
const styles$g = {
  btn
};
function Button({
  btnType = "button",
  children,
  onClick,
  to,
  disabled = false
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
  return /* @__PURE__ */ jsx(
    "button",
    {
      className: styles$g.btn,
      type: btnType === "button" ? "button" : "submit",
      onClick: handleClick,
      disabled,
      children
    }
  );
}
const container$2 = "_container_lhbtw_1";
const styles$f = {
  container: container$2
};
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  render() {
    const { hasError } = this.state;
    const { t, children } = this.props;
    if (hasError) {
      return /* @__PURE__ */ jsxs("div", { className: styles$f.container, children: [
        /* @__PURE__ */ jsx("h2", { children: t("ErrorMessage") }),
        /* @__PURE__ */ jsx(Button, { btnType: "button", to: "/", children: t("BackToMain") })
      ] });
    }
    return children;
  }
}
const ErrorBoundaryComponent = withTranslation()(ErrorBoundary);
const AuthContext = createContext(void 0);
function AuthProvider({ children }) {
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();
  useEffect(() => {
    onAuthStateChanged(auth, (stateUser) => {
      if (!stateUser) {
        navigate("/");
      }
    });
  }, [user, navigate]);
  const value = useMemo(
    () => ({ user, loading, error }),
    [user, loading, error]
  );
  return /* @__PURE__ */ jsx(AuthContext.Provider, { value, children });
}
const toastBody = "_toastBody_ap29t_1";
const toastWrapper = "_toastWrapper_ap29t_7";
const styles$e = {
  toastBody,
  toastWrapper
};
const toastProps = {
  position: "bottom-right",
  bodyClassName: styles$e.toastBody,
  toastClassName: styles$e.toastWrapper,
  hideProgressBar: true,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  theme: "light",
  transition: Slide
};
function Toast() {
  return /* @__PURE__ */ jsx(ToastContainer, { ...toastProps });
}
function App() {
  return /* @__PURE__ */ jsxs("html", { lang: "en", children: [
    /* @__PURE__ */ jsxs("head", { children: [
      /* @__PURE__ */ jsx("link", { rel: "icon", href: "/favicon-react.ico", type: "image/x-icon" }),
      /* @__PURE__ */ jsx(Meta, {}),
      /* @__PURE__ */ jsx(Links, {})
    ] }),
    /* @__PURE__ */ jsx("body", { children: /* @__PURE__ */ jsx(ErrorBoundaryComponent, { children: /* @__PURE__ */ jsx(AuthProvider, { children: /* @__PURE__ */ jsxs(StoreProvider, { children: [
      /* @__PURE__ */ jsxs(I18nextProvider, { i18n, children: [
        /* @__PURE__ */ jsx(Layout, {}),
        /* @__PURE__ */ jsx(Toast, {}),
        /* @__PURE__ */ jsx(Footer, {})
      ] }),
      /* @__PURE__ */ jsx(Scripts, {})
    ] }) }) }) })
  ] });
}
const route0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: App
}, Symbol.toStringTag, { value: "Module" }));
const encodeToBase64 = (data) => {
  return btoa(data);
};
const decodeToString = (data) => {
  return atob(data);
};
const container$1 = "_container_w5b5q_1";
const RestBlock = "_RestBlock_w5b5q_12";
const methodSection = "_methodSection_w5b5q_20";
const formAction = "_formAction_w5b5q_26";
const methodBlock = "_methodBlock_w5b5q_32";
const customSelect = "_customSelect_w5b5q_43";
const inputUrl = "_inputUrl_w5b5q_81";
const styles$d = {
  container: container$1,
  RestBlock,
  methodSection,
  formAction,
  methodBlock,
  customSelect,
  inputUrl
};
const tabsWrapper = "_tabsWrapper_1g7tz_1";
const tabsNavigationSection = "_tabsNavigationSection_1g7tz_9";
const tabNav = "_tabNav_1g7tz_15";
const active = "_active_1g7tz_30";
const tabContentWrapper = "_tabContentWrapper_1g7tz_35";
const tabContent = "_tabContent_1g7tz_35";
const styles$c = {
  tabsWrapper,
  tabsNavigationSection,
  tabNav,
  active,
  tabContentWrapper,
  tabContent
};
function TabItem(props) {
  return /* @__PURE__ */ jsx("div", { ...props });
}
function Tabs({
  defaultSelect = 0,
  children
}) {
  const { t } = useTranslation();
  const [selected, setSelected] = useState(defaultSelect);
  const changeTab = (newIndex) => {
    return setSelected(newIndex);
  };
  return /* @__PURE__ */ jsxs("div", { className: styles$c.tabsWrapper, children: [
    /* @__PURE__ */ jsx("div", { className: styles$c.tabsNavigationSection, children: Children.map(children, ({ props: { index, label } }) => {
      return /* @__PURE__ */ jsx(
        "button",
        {
          type: "button",
          onClick: () => changeTab(index),
          className: selected === index ? `${styles$c.tabNav} ${styles$c.active}` : styles$c.tabNav,
          children: t(label)
        }
      );
    }) }),
    /* @__PURE__ */ jsx("div", { className: styles$c.tabContentWrapper, children: Children.map(children, ({ props: { index, ...props } }) => {
      return /* @__PURE__ */ jsx(
        "div",
        {
          ...props,
          className: `${styles$c.tabContent} ${selected === index ? styles$c.active : ""}`
        }
      );
    }) })
  ] });
}
const goTrashIcon = "_goTrashIcon_1mid8_1";
const inputSection = "_inputSection_1mid8_6";
const inputStyle = "_inputStyle_1mid8_11";
const headersList = "_headersList_1mid8_25";
const headersWrapper = "_headersWrapper_1mid8_31";
const tableHeaders = "_tableHeaders_1mid8_42";
const styles$b = {
  goTrashIcon,
  inputSection,
  inputStyle,
  headersList,
  headersWrapper,
  tableHeaders
};
function searchParamURLConverter(search) {
  return Object.entries(Object.fromEntries(new URLSearchParams(search))).map(
    (elem) => {
      return elem.reduce((acc, cur, index) => {
        if (index === 0) {
          acc["header-key"] = cur;
        }
        if (index === 1) {
          acc["header-value"] = cur;
        }
        return acc;
      }, {});
    }
  );
}
function HeadersRedactor({
  outerSetHeader
}) {
  const location = useLocation();
  const creatingState = () => {
    return searchParamURLConverter(location.search);
  };
  const { t } = useTranslation();
  const [, setSearchParams] = useSearchParams();
  const [headers, setHeaders] = useState(creatingState);
  const handleClick = () => {
    setHeaders([...headers, { "header-key": "", "header-value": "" }]);
  };
  const getHeadersJSON = (currentHeaders) => {
    const headersJSON = currentHeaders.reduce(
      (acc, header2) => {
        if (header2["header-key"]) {
          const key = header2["header-key"];
          acc[key] = header2["header-value"];
        }
        return acc;
      },
      {}
    );
    return headersJSON;
  };
  const handleInputChange = (index, event) => {
    const { name, value } = event.currentTarget;
    const updateHeaders = headers.map((header2, i) => {
      return i === index ? { ...header2, [name]: value } : header2;
    });
    setHeaders(updateHeaders);
  };
  const handleDelete = (index) => {
    setHeaders(headers.filter((_, i) => i !== index));
  };
  useEffect(() => {
    outerSetHeader(JSON.stringify(getHeadersJSON(headers)));
    setSearchParams(JSON.parse(JSON.stringify(getHeadersJSON(headers))));
  }, [headers, outerSetHeader, setSearchParams, location.search]);
  return /* @__PURE__ */ jsxs("div", { className: styles$b.headersWrapper, children: [
    /* @__PURE__ */ jsx(Button, { btnType: "button", onClick: handleClick, children: t("AddHeader") }),
    headers.length > 0 && /* @__PURE__ */ jsxs("div", { className: styles$b.tableHeaders, children: [
      /* @__PURE__ */ jsx("p", { children: t("Key") }),
      /* @__PURE__ */ jsx("p", { children: t("Value") })
    ] }),
    /* @__PURE__ */ jsx("div", { className: styles$b.headersList, children: headers.map((header2, index) => {
      return /* @__PURE__ */ jsxs("div", { className: styles$b.inputSection, children: [
        /* @__PURE__ */ jsx(
          "input",
          {
            className: styles$b.inputStyle,
            type: "text",
            name: "header-key",
            value: header2["header-key"],
            onChange: (e) => {
              handleInputChange(index, e);
            }
          }
        ),
        /* @__PURE__ */ jsx(
          "input",
          {
            className: styles$b.inputStyle,
            type: "text",
            name: "header-value",
            value: header2["header-value"],
            onChange: (e) => {
              handleInputChange(index, e);
            }
          }
        ),
        /* @__PURE__ */ jsx(
          "button",
          {
            type: "button",
            className: styles$b.goTrashIcon,
            onClick: () => {
              handleDelete(index);
            },
            children: /* @__PURE__ */ jsx(GoTrash, { color: "#e9c2c5" })
          }
        )
      ] }, `index-id-${index}`);
    }) })
  ] });
}
function dynamicPathConverter(pathStr) {
  return pathStr ? pathStr.split("/").reduce(
    (acc, cur, index) => ({
      ...acc,
      [index === 0 ? "url" : "body"]: cur
    }),
    {}
  ) : {};
}
const editorWrapper = "_editorWrapper_1sqom_1";
const styles$a = {
  editorWrapper
};
function BodyHeadersTabs({
  setBody,
  setHeaders,
  params
}) {
  const navigate = useNavigate();
  const location = useLocation();
  const editorRef = useRef(
    null
  );
  const handleBodyEditorChange = (editor) => {
    if (editor) setBody(editor);
  };
  const getValue = () => {
    return editorRef.current ? editorRef.current.getValue() : "";
  };
  const setValue = (newValue) => {
    if (editorRef.current) editorRef.current.setValue(newValue);
  };
  const handleEditorDidMount = (editor) => {
    var _a, _b;
    editorRef.current = editor;
    editor.setValue(
      ((_a = params["*"]) == null ? void 0 : _a.split("/")[1]) !== void 0 ? decodeToString((_b = params["*"]) == null ? void 0 : _b.split("/")[1]) : ""
    );
  };
  useEffect(() => {
    var _a, _b, _c, _d;
    if (params["*"]) {
      if (params["*"].split("/").length > 2) {
        navigate("/errorPage");
      }
      try {
        setBody(
          ((_a = params["*"]) == null ? void 0 : _a.split("/")[1]) !== void 0 ? decodeToString((_b = params["*"]) == null ? void 0 : _b.split("/")[1]) : ""
        );
        setValue(
          ((_c = params["*"]) == null ? void 0 : _c.split("/")[1]) !== void 0 ? decodeToString((_d = params["*"]) == null ? void 0 : _d.split("/")[1]) : ""
        );
      } catch (err) {
        if (err instanceof Error) {
          navigate("/error");
        }
      }
    }
  }, [params, navigate, setBody]);
  const { t } = useTranslation();
  return /* @__PURE__ */ jsxs(Tabs, { defaultSelect: 0, children: [
    /* @__PURE__ */ jsx(TabItem, { label: t("Body"), index: 0, children: /* @__PURE__ */ jsx(
      "div",
      {
        className: styles$a.editorWrapper,
        onBlur: () => {
          const transformed = dynamicPathConverter(params["*"]);
          transformed.body = encodeToBase64(getValue());
          const newPath = !Object.keys(transformed).includes("url") ? Object.values(Object.assign({ url: "" }, transformed)).join("/") : Object.values(transformed).join("/");
          navigate(`/REST/${params.method}/${newPath}${location.search}`);
        },
        children: /* @__PURE__ */ jsx(
          Editor,
          {
            theme: "vs-dark",
            loading: "Loading...",
            height: "30vh",
            defaultLanguage: "json",
            onChange: handleBodyEditorChange,
            onMount: handleEditorDidMount
          }
        )
      }
    ) }),
    /* @__PURE__ */ jsx(TabItem, { label: t("Headers"), index: 1, children: /* @__PURE__ */ jsx(HeadersRedactor, { outerSetHeader: setHeaders }) })
  ] });
}
const response = "_response_1rbvd_1";
const responseCode = "_responseCode_1rbvd_18";
const responseBlock = "_responseBlock_1rbvd_24";
const responseSummary = "_responseSummary_1rbvd_30";
const noResponse = "_noResponse_1rbvd_58";
const responseStatusOk = "_responseStatusOk_1rbvd_64";
const responseStatusError = "_responseStatusError_1rbvd_68";
const styles$9 = {
  response,
  responseCode,
  responseBlock,
  responseSummary,
  noResponse,
  responseStatusOk,
  responseStatusError
};
function Response$1({ responseStatus, response: response2, error }) {
  const { t } = useTranslation();
  return /* @__PURE__ */ jsxs("details", { className: styles$9.responseBlock, children: [
    /* @__PURE__ */ jsxs("summary", { className: styles$9.responseSummary, children: [
      /* @__PURE__ */ jsxs("span", { children: [
        t("Response"),
        " "
      ] }),
      responseStatus !== null && /* @__PURE__ */ jsxs(
        "span",
        {
          className: `${responseStatus < 300 ? styles$9.responseStatusOk : styles$9.responseStatusError}`,
          children: [
            t("status"),
            ": ",
            responseStatus
          ]
        }
      )
    ] }),
    /* @__PURE__ */ jsxs("div", { className: styles$9.response, children: [
      responseStatus === null && !error && /* @__PURE__ */ jsxs(Fragment, { children: [
        /* @__PURE__ */ jsx(AiOutlineApi, { color: "#e9c2c5", size: "8rem" }),
        /* @__PURE__ */ jsx("h2", { className: styles$9.noResponse, children: t("NoResponse") })
      ] }),
      responseStatus !== null && /* @__PURE__ */ jsxs("div", { children: [
        response2 && /* @__PURE__ */ jsxs("div", { children: [
          " ",
          /* @__PURE__ */ jsx(
            Editor,
            {
              theme: "vs-dark",
              loading: "Loading...",
              height: "50vh",
              defaultLanguage: "json",
              defaultValue: response2,
              options: { readOnly: true }
            }
          )
        ] }),
        error && /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h3", { children: "Error:" }),
          /* @__PURE__ */ jsx(
            Editor,
            {
              theme: "vs-dark",
              loading: "Loading...",
              height: "50vh",
              defaultLanguage: "json",
              defaultValue: error,
              options: { readOnly: true }
            }
          )
        ] })
      ] })
    ] })
  ] });
}
const action = async ({ request }) => {
  const formData = await request.formData();
  const method2 = formData.get("method");
  const url = formData.get("url");
  const headers = formData.get("headers");
  const body = formData.get("body");
  const parsedHeaders = headers ? JSON.parse(headers) : {};
  const options = {
    method: method2,
    headers: parsedHeaders,
    body: method2 !== "GET" ? body : void 0
  };
  try {
    const res = await fetch(url, options);
    const responseBody = await res.text();
    return {
      status: res.status,
      data: responseBody
    };
  } catch (error) {
    return { error: "Network error" };
  }
};
function RESTFullPage() {
  var _a;
  const navigate = useNavigate();
  const params = useParams();
  const actionData = useActionData();
  const location = useLocation();
  const [method2, setMethod] = useState(params.method || "GET");
  const [url, setUrl] = useState(((_a = params["*"]) == null ? void 0 : _a.split("/")[0]) || "");
  const [headers, setHeaders] = useState("");
  const [body, setBody] = useState("");
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const response2 = (actionData == null ? void 0 : actionData.data) || "";
  const responseStatus = (actionData == null ? void 0 : actionData.status) || null;
  const error = (actionData == null ? void 0 : actionData.error) || null;
  const handleStoreSafe = async () => {
    const requestTime = (/* @__PURE__ */ new Date()).toISOString();
    const parsedHeaders = headers ? JSON.parse(headers) : {};
    const requestData = {
      url,
      method: method2,
      headers: parsedHeaders,
      body: method2 !== "GET" ? body : void 0
    };
    const urlPage = location.pathname + location.search;
    const requestItemStore = {
      urlPage,
      requestData,
      data: requestTime
    };
    dispatch(addRestLinks([requestItemStore]));
  };
  useEffect(() => {
    var _a2;
    setMethod(params.method);
    if (params["*"]) {
      if (params["*"].split("/").length > 2) {
        navigate("/errorPage");
      }
      try {
        setUrl(decodeToString((_a2 = params["*"]) == null ? void 0 : _a2.split("/")[0]));
      } catch (err) {
        if (err instanceof Error) {
          navigate("/errorPage");
        }
      }
    }
  }, [params.method, params, navigate]);
  return /* @__PURE__ */ jsxs("div", { className: styles$d.container, children: [
    /* @__PURE__ */ jsxs("div", { className: styles$d.RestBlock, children: [
      /* @__PURE__ */ jsx("h2", { children: t("RESTClient") }),
      /* @__PURE__ */ jsx("div", { className: styles$d.methodSection, children: /* @__PURE__ */ jsxs(
        Form,
        {
          className: styles$d.formAction,
          method: "post",
          action: `/REST/${method2}/${params["*"]}${location.search}`,
          children: [
            /* @__PURE__ */ jsxs("div", { className: styles$d.methodBlock, children: [
              /* @__PURE__ */ jsxs(
                "select",
                {
                  name: "method",
                  className: styles$d.customSelect,
                  value: method2,
                  onChange: (e) => {
                    navigate(
                      `/REST/${e.target.value}/${params["*"]}${location.search}`
                    );
                    setMethod(e.target.value);
                  },
                  children: [
                    /* @__PURE__ */ jsx("option", { value: "GET", children: "GET" }),
                    /* @__PURE__ */ jsx("option", { value: "POST", children: "POST" }),
                    /* @__PURE__ */ jsx("option", { value: "PUT", children: "PUT" }),
                    /* @__PURE__ */ jsx("option", { value: "DELETE", children: "DELETE" })
                  ]
                }
              ),
              /* @__PURE__ */ jsx(
                "input",
                {
                  className: styles$d.inputUrl,
                  type: "text",
                  name: "url",
                  value: url,
                  onChange: (e) => {
                    const transformed = dynamicPathConverter(params["*"]);
                    transformed.url = encodeToBase64(e.target.value);
                    const newPath = Object.values(transformed).join("/");
                    navigate(
                      `/REST/${params.method}/${newPath}${location.search}`
                    );
                    setUrl(e.target.value);
                  }
                }
              )
            ] }),
            /* @__PURE__ */ jsx("input", { type: "hidden", name: "headers", value: headers }),
            /* @__PURE__ */ jsx("input", { type: "hidden", name: "body", value: body }),
            /* @__PURE__ */ jsx(Button, { btnType: "submit", onClick: handleStoreSafe, children: t("Send") })
          ]
        }
      ) }),
      /* @__PURE__ */ jsx(
        BodyHeadersTabs,
        {
          params: params || {},
          setHeaders,
          setBody
        }
      )
    ] }),
    /* @__PURE__ */ jsx(
      Response$1,
      {
        responseStatus,
        response: response2,
        error
      }
    )
  ] });
}
const route1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  action,
  default: RESTFullPage
}, Symbol.toStringTag, { value: "Module" }));
const signInFormSection$1 = "_signInFormSection_7ml70_1";
const formWrapper$1 = "_formWrapper_7ml70_15";
const errorMessage$2 = "_errorMessage_7ml70_35";
const styles$8 = {
  signInFormSection: signInFormSection$1,
  formWrapper: formWrapper$1,
  errorMessage: errorMessage$2
};
const getRegistrationSchema = (t) => {
  return yup.object().shape({
    nickname: yup.string().matches(/^[a-zA-Z0-9]*$/, t("RemoveSpecialCharacters")).required(t("NicknameRequired")),
    email: yup.string().email(t("InvalidEmail")).required(t("EmailRequired")),
    password: yup.string().required(t("PasswordRequired")).matches(/.*\d.*/, t("PasswordContainsNumber")).matches(/.*[A-Z].*/, t("PasswordContainsUppercase")).matches(/.*[a-z].*/, t("PasswordContainsLowercase")).matches(
      /.*[!@#$%^&*(),.?":{}|<>].*/,
      t("PasswordContainsSpecialCharacter")
    ).min(6, t("PasswordMinLength")),
    confirmPassword: yup.string().oneOf([yup.ref("password")], t("PasswordMustMatch"))
  });
};
const formControlWrapper = "_formControlWrapper_yya9m_1";
const errorMessage$1 = "_errorMessage_yya9m_12";
const formInput = "_formInput_yya9m_19";
const faEyePosition = "_faEyePosition_yya9m_37";
const style = {
  formControlWrapper,
  errorMessage: errorMessage$1,
  formInput,
  faEyePosition
};
function FormControl({
  type,
  label,
  register,
  name,
  placeholder,
  error
}) {
  const [showPassword, setShowPassword] = useState(false);
  let passwordToggle;
  if (showPassword) {
    passwordToggle = "text";
  } else {
    passwordToggle = "password";
  }
  return /* @__PURE__ */ jsxs("label", { htmlFor: name, className: style.formControlWrapper, children: [
    label,
    /* @__PURE__ */ jsx(
      "input",
      {
        type: type === "password" ? passwordToggle : type,
        ...register(name),
        name,
        placeholder: !placeholder ? "" : placeholder,
        className: style.formInput
      }
    ),
    type === "password" && /* @__PURE__ */ jsx(
      "button",
      {
        className: style.faEyePosition,
        type: "button",
        onClick: () => {
          setShowPassword(!showPassword);
        },
        children: showPassword ? /* @__PURE__ */ jsx(FaEye, {}) : /* @__PURE__ */ jsx(FaEyeSlash, {})
      }
    ),
    /* @__PURE__ */ jsx("span", { className: style.errorMessage, children: error })
  ] });
}
const loaderContainer = "_loaderContainer_1a5n2_1";
const loader = "_loader_1a5n2_1";
const spin = "_spin_1a5n2_1";
const styles$7 = {
  loaderContainer,
  loader,
  spin
};
function Loading() {
  return /* @__PURE__ */ jsx("section", { className: styles$7.loaderContainer, children: /* @__PURE__ */ jsx("div", { className: styles$7.loader, role: "status", "aria-live": "polite" }) });
}
const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within a AuthProvider");
  }
  return context;
};
function authError(error) {
  let errorStr;
  switch (error.message) {
    case "Firebase: Error (auth/invalid-credential).":
      errorStr = "wrongCredentials";
      break;
    case "Firebase: Error (auth/email-already-in-use).":
      errorStr = "emailAlreadyUse";
      break;
    case "Firebase: Access to this account has been temporarily disabled due to many failed login attempts. You can immediately restore it by resetting your password or you can try again later. (auth/too-many-requests).":
      errorStr = "temporaryBlock";
      break;
    default:
      errorStr = "unexpectedError";
  }
  return errorStr;
}
function SignUpForm() {
  var _a, _b, _c, _d;
  const { t } = useTranslation();
  const schema = getRegistrationSchema(t);
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(schema)
  });
  const { user, loading } = useAuth();
  const navigate = useNavigate();
  useEffect(() => {
    if (user == null ? void 0 : user.displayName) {
      navigate("/");
    }
  }, [user, loading, navigate]);
  const onSubmit = async (FormData) => {
    const promise = registerWithEmailAndPassword(
      FormData.nickname,
      FormData.email,
      FormData.password
    );
    toast.promise(promise, {
      pending: {
        render() {
          return "Loading...";
        }
      },
      success: {
        render() {
          navigate("/");
          return `${t("accessGranted")}`;
        }
      },
      error: {
        render({ data }) {
          return `${data instanceof Error ? t(authError(data)) : ""}`;
        }
      }
    });
  };
  return loading ? /* @__PURE__ */ jsx(Loading, {}) : /* @__PURE__ */ jsxs("div", { className: styles$8.signInFormSection, children: [
    /* @__PURE__ */ jsx("h2", { children: t("Registration") }),
    /* @__PURE__ */ jsxs("form", { onSubmit: handleSubmit(onSubmit), className: styles$8.formWrapper, children: [
      /* @__PURE__ */ jsx(
        FormControl,
        {
          type: "text",
          label: t("Nickname"),
          name: "nickname",
          placeholder: "JohnDoe",
          register,
          error: !((_a = errors.nickname) == null ? void 0 : _a.message) ? "" : errors.nickname.message
        }
      ),
      /* @__PURE__ */ jsx(
        FormControl,
        {
          type: "email",
          label: t("Email"),
          name: "email",
          placeholder: "example@gmai.com",
          register,
          error: !((_b = errors.email) == null ? void 0 : _b.message) ? "" : errors.email.message
        }
      ),
      /* @__PURE__ */ jsx(
        FormControl,
        {
          type: "password",
          label: t("Password"),
          name: "password",
          placeholder: void 0,
          register,
          error: !((_c = errors.password) == null ? void 0 : _c.message) ? "" : errors.password.message
        }
      ),
      /* @__PURE__ */ jsx(
        FormControl,
        {
          type: "password",
          label: t("ConfirmPassword"),
          name: "confirmPassword",
          placeholder: void 0,
          register,
          error: !((_d = errors.confirmPassword) == null ? void 0 : _d.message) ? "" : errors.confirmPassword.message
        }
      ),
      /* @__PURE__ */ jsx(Button, { btnType: "submit", children: t("Submit") })
    ] })
  ] });
}
function RegistrationPage() {
  return /* @__PURE__ */ jsx(SignUpForm, {});
}
const route2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: RegistrationPage
}, Symbol.toStringTag, { value: "Module" }));
const errorBlock = "_errorBlock_qrino_1";
const errorContainer = "_errorContainer_qrino_12";
const title$1 = "_title_qrino_19";
const spanError = "_spanError_qrino_23";
const digitFirst = "_digitFirst_qrino_30";
const digitSecond = "_digitSecond_qrino_31";
const digitThird = "_digitThird_qrino_32";
const styles$6 = {
  errorBlock,
  errorContainer,
  title: title$1,
  spanError,
  digitFirst,
  digitSecond,
  digitThird
};
const handle = { hideHeader: true };
function CatchAll() {
  const { t } = useTranslation();
  return /* @__PURE__ */ jsxs("div", { className: styles$6.errorBlock, children: [
    /* @__PURE__ */ jsx("h1", { className: styles$6.title, children: t("NotFound") }),
    /* @__PURE__ */ jsxs("section", { className: styles$6.errorContainer, children: [
      /* @__PURE__ */ jsx("span", { className: styles$6.spanError, children: /* @__PURE__ */ jsx("span", { className: styles$6.digitFirst, children: "4" }) }),
      /* @__PURE__ */ jsx("span", { className: `${styles$6.spanError} ${styles$6.digitSecond}`, children: "0" }),
      /* @__PURE__ */ jsx("span", { className: styles$6.spanError, children: /* @__PURE__ */ jsx("span", { className: styles$6.digitThird, children: "4" }) })
    ] }),
    /* @__PURE__ */ jsx(Button, { btnType: "button", to: "/", children: t("BackToMain") })
  ] });
}
const route3 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: CatchAll,
  handle
}, Symbol.toStringTag, { value: "Module" }));
const historyBlock = "_historyBlock_803f7_1";
const buttonBlock$1 = "_buttonBlock_803f7_11";
const resultBlock = "_resultBlock_803f7_16";
const method = "_method_803f7_21";
const linksBlock = "_linksBlock_803f7_25";
const styles$5 = {
  historyBlock,
  buttonBlock: buttonBlock$1,
  resultBlock,
  method,
  linksBlock
};
function History() {
  const { t } = useTranslation();
  const { user, loading } = useAuth();
  const navigate = useNavigate();
  useEffect(() => {
    if (loading) return;
    if (!user) {
      navigate("/");
    } else {
      navigate("/history");
    }
  }, [user, loading, navigate]);
  const restHistory = useSelector(
    (state) => state.restLinks.restLinks
  );
  const graphiQLHistory = useSelector(
    (state) => state.graphiQLLinks.graphiQLLinks
  );
  const sortedRequests = [...restHistory, ...graphiQLHistory].sort((a, b) => {
    const dateA = new Date(a.data).getTime();
    const dateB = new Date(b.data).getTime();
    return dateA - dateB;
  });
  return /* @__PURE__ */ jsx("div", { className: styles$5.historyBlock, children: sortedRequests.length === 0 ? /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs("p", { children: [
      t("NoHistory"),
      " "
    ] }),
    /* @__PURE__ */ jsxs("div", { className: styles$5.buttonBlock, children: [
      " ",
      /* @__PURE__ */ jsx(Button, { btnType: "button", to: "/REST/GET", children: t("RESTClient") }),
      /* @__PURE__ */ jsx(Button, { btnType: "button", to: "/graphiql", children: t("GraphiQLClient") })
    ] })
  ] }) : /* @__PURE__ */ jsxs(Fragment, { children: [
    " ",
    /* @__PURE__ */ jsx("h2", { children: t("HistoryRequests") }),
    /* @__PURE__ */ jsx("div", { className: styles$5.linksBlock, children: sortedRequests.map((result, index) => (
      /* eslint-disable react/no-array-index-key */
      /* @__PURE__ */ jsxs(
        "div",
        {
          className: styles$5.resultBlock,
          children: [
            /* @__PURE__ */ jsx(
              "p",
              {
                className: styles$5.method,
                children: result.requestData.method
              },
              result.requestData.method + index
            ),
            /* @__PURE__ */ jsx(Link, { to: `${result.urlPage}`, children: `${result.requestData.url}` }, result.urlPage + index)
          ]
        },
        result.requestData.method + result.urlPage + index
      )
    )) })
  ] }) });
}
function HistoryPage() {
  return /* @__PURE__ */ jsx(History, {});
}
const route4 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: HistoryPage
}, Symbol.toStringTag, { value: "Module" }));
const contentInner$1 = "_contentInner_8piex_1";
const description$1 = "_description_8piex_9";
const buttonBlock = "_buttonBlock_8piex_13";
const title = "_title_8piex_18";
const styles$4 = {
  contentInner: contentInner$1,
  description: description$1,
  buttonBlock,
  title
};
const yana = "/assets/yana-BB-jdOhc.jpg";
const roman = "/assets/roman-BhWAxZYb.jpg";
const nikita = "/assets/nikita-DpnL6Sd8.jpg";
const cardBlock = "_cardBlock_1y4gj_1";
const imgBlock = "_imgBlock_1y4gj_14";
const img = "_img_1y4gj_14";
const cardInfoBlock = "_cardInfoBlock_1y4gj_30";
const cardName = "_cardName_1y4gj_37";
const info = "_info_1y4gj_43";
const styles$3 = {
  cardBlock,
  imgBlock,
  img,
  cardInfoBlock,
  cardName,
  info
};
function AboutUsCard() {
  const { t } = useTranslation();
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs("article", { className: styles$3.cardBlock, children: [
      /* @__PURE__ */ jsx("div", { className: styles$3.imgBlock, children: /* @__PURE__ */ jsx("img", { src: roman, alt: t("RomanSokolov"), className: styles$3.img }) }),
      /* @__PURE__ */ jsxs("div", { className: styles$3.cardInfoBlock, children: [
        /* @__PURE__ */ jsx("h3", { className: styles$3.cardName, children: t("RomanSokolov") }),
        /* @__PURE__ */ jsx("p", { className: styles$3.info, children: t("RomanText") })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("article", { className: styles$3.cardBlock, children: [
      /* @__PURE__ */ jsx("div", { className: styles$3.imgBlock, children: /* @__PURE__ */ jsx("img", { src: yana, alt: t("YanaDyachok"), className: styles$3.img }) }),
      /* @__PURE__ */ jsxs("div", { className: styles$3.cardInfoBlock, children: [
        /* @__PURE__ */ jsx("h3", { className: styles$3.cardName, children: t("YanaDyachok") }),
        /* @__PURE__ */ jsx("p", { className: styles$3.info, children: t("YanaText") })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("article", { className: styles$3.cardBlock, children: [
      /* @__PURE__ */ jsx("div", { className: styles$3.imgBlock, children: /* @__PURE__ */ jsx("img", { src: nikita, alt: t("NikitaRadevich"), className: styles$3.img }) }),
      /* @__PURE__ */ jsxs("div", { className: styles$3.cardInfoBlock, children: [
        /* @__PURE__ */ jsx("h3", { className: styles$3.cardName, children: t("NikitaRadevich") }),
        /* @__PURE__ */ jsx("p", { className: styles$3.info, children: t("NikitaText") })
      ] })
    ] })
  ] });
}
const contentInner = "_contentInner_q30k9_1";
const aboutUsBlock = "_aboutUsBlock_q30k9_10";
const description = "_description_q30k9_17";
const styles$2 = {
  contentInner,
  aboutUsBlock,
  description
};
function AboutComponent() {
  const { t } = useTranslation();
  return /* @__PURE__ */ jsxs("div", { className: styles$2.contentInner, children: [
    /* @__PURE__ */ jsx("h2", { children: t("OurUndefinedsTeam") }),
    /* @__PURE__ */ jsx("div", { className: styles$2.aboutUsBlock, children: /* @__PURE__ */ jsx(AboutUsCard, {}) }),
    /* @__PURE__ */ jsx("h2", { children: t("AboutTeam") }),
    /* @__PURE__ */ jsx("p", { className: styles$2.description, children: t("TeamDescription") }),
    /* @__PURE__ */ jsx("h2", { children: t("AboutCourse") }),
    /* @__PURE__ */ jsx("p", { className: styles$2.description, children: t("CourseDescription") })
  ] });
}
function WelcomeComponent() {
  const { t } = useTranslation();
  const { user, loading } = useAuth();
  if (loading) {
    return /* @__PURE__ */ jsx(Loading, {});
  }
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs("div", { className: styles$4.contentInner, children: [
      /* @__PURE__ */ jsx("h1", { className: styles$4.title, children: user ? `${t("WelcomeBack")}, ${user == null ? void 0 : user.displayName}!` : `${t("Welcome")}!` }),
      /* @__PURE__ */ jsx("p", { className: styles$4.description, children: t("ProjectDescription") }),
      /* @__PURE__ */ jsx("div", { className: styles$4.buttonBlock, children: user ? /* @__PURE__ */ jsxs(Fragment, { children: [
        /* @__PURE__ */ jsx(Button, { btnType: "button", to: "/REST/GET", children: t("RESTClient") }),
        /* @__PURE__ */ jsx(Button, { btnType: "button", to: "/graphiql", children: t("GraphiQLClient") }),
        /* @__PURE__ */ jsx(Button, { btnType: "button", to: "/history", children: t("History") })
      ] }) : /* @__PURE__ */ jsxs(Fragment, { children: [
        /* @__PURE__ */ jsx(Button, { btnType: "button", to: "/login", children: t("SignIn") }),
        /* @__PURE__ */ jsx(Button, { btnType: "button", to: "/registration", children: t("SignUp") })
      ] }) })
    ] }),
    /* @__PURE__ */ jsx(AboutComponent, {})
  ] });
}
const container = "_container_10gft_1";
const styles$1 = {
  container
};
function WelcomePage() {
  return /* @__PURE__ */ jsx("div", { className: styles$1.container, children: /* @__PURE__ */ jsx(WelcomeComponent, {}) });
}
const route5 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: WelcomePage
}, Symbol.toStringTag, { value: "Module" }));
const signInFormSection = "_signInFormSection_7ml70_1";
const formWrapper = "_formWrapper_7ml70_15";
const errorMessage = "_errorMessage_7ml70_35";
const styles = {
  signInFormSection,
  formWrapper,
  errorMessage
};
const getLoginSchema = (t) => {
  return yup.object().shape({
    email: yup.string().email(t("InvalidEmail")).required(t("EmailRequired")),
    password: yup.string().required(t("PasswordRequired")).matches(/.*\d.*/, t("PasswordContainsNumber")).matches(/.*[A-Z].*/, t("PasswordContainsUppercase")).matches(/.*[a-z].*/, t("PasswordContainsLowercase")).matches(
      /.*[!@#$%^&*(),.?":{}|<>].*/,
      t("PasswordContainsSpecialCharacter")
    ).min(6, t("PasswordMinLength"))
  });
};
function LoginForm() {
  var _a, _b;
  const { t } = useTranslation();
  const schema = getLoginSchema(t);
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(schema)
  });
  const { user, loading } = useAuth();
  const navigate = useNavigate();
  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [user, navigate, loading]);
  const onSubmit = async (FormData) => {
    const promise = logInWithEmailAndPassword(
      FormData.email,
      FormData.password
    );
    toast.promise(promise, {
      pending: {
        render() {
          return `${t("loading")}`;
        }
      },
      success: {
        render() {
          return `${t("accessGranted")}`;
        }
      },
      error: {
        render({ data }) {
          return `${data instanceof Error ? t(authError(data)) : ""}`;
        }
      }
    });
  };
  return loading ? /* @__PURE__ */ jsx(Loading, {}) : /* @__PURE__ */ jsxs("div", { className: styles.signInFormSection, children: [
    /* @__PURE__ */ jsx("h2", { children: t("Login") }),
    /* @__PURE__ */ jsxs("form", { onSubmit: handleSubmit(onSubmit), className: styles.formWrapper, children: [
      /* @__PURE__ */ jsx(
        FormControl,
        {
          type: "email",
          label: t("Email"),
          name: "email",
          placeholder: "example@gmai.com",
          register,
          error: !((_a = errors.email) == null ? void 0 : _a.message) ? "" : errors.email.message
        }
      ),
      /* @__PURE__ */ jsx(
        FormControl,
        {
          type: "password",
          label: t("Password"),
          name: "password",
          placeholder: void 0,
          register,
          error: !((_b = errors.password) == null ? void 0 : _b.message) ? "" : errors.password.message
        }
      ),
      /* @__PURE__ */ jsx(Button, { btnType: "submit", children: t("Submit") })
    ] })
  ] });
}
function LoginPage() {
  return /* @__PURE__ */ jsx(LoginForm, {});
}
const route6 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: LoginPage
}, Symbol.toStringTag, { value: "Module" }));
const serverManifest = { "entry": { "module": "/assets/entry.client-mwnPJeH2.js", "imports": ["/assets/index-DeHznlkS.js", "/assets/components-D8uQ7O_9.js"], "css": [] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/root-BTf6KPi7.js", "imports": ["/assets/index-DeHznlkS.js", "/assets/components-D8uQ7O_9.js", "/assets/iconBase-z_erZi_H.js", "/assets/rest-history-slice-ClFBwpBo.js", "/assets/button-DYUIl9Ir.js", "/assets/auth-context-CQxQiTwU.js", "/assets/react-redux-ulQB2trU.js", "/assets/react-toastify.esm-OaNhFX5r.js"], "css": ["/assets/button-C2KqssPe.css", "/assets/root-Cdg9RSC8.css"] }, "routes/REST.$method.$": { "id": "routes/REST.$method.$", "parentId": "root", "path": "REST/:method/*", "index": void 0, "caseSensitive": void 0, "hasAction": true, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/REST._method._-D0gdg42k.js", "imports": ["/assets/index-DeHznlkS.js", "/assets/react-redux-ulQB2trU.js", "/assets/button-DYUIl9Ir.js", "/assets/iconBase-z_erZi_H.js", "/assets/components-D8uQ7O_9.js", "/assets/rest-history-slice-ClFBwpBo.js"], "css": ["/assets/button-C2KqssPe.css", "/assets/REST._method-Y-NZg37x.css"] }, "routes/registration": { "id": "routes/registration", "parentId": "root", "path": "registration", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/registration-DtD-NXTm.js", "imports": ["/assets/index-DeHznlkS.js", "/assets/iconBase-z_erZi_H.js", "/assets/react-toastify.esm-OaNhFX5r.js", "/assets/auth-context-CQxQiTwU.js", "/assets/authError-B8rNQ2NH.js", "/assets/button-DYUIl9Ir.js", "/assets/loading-DSuaqnr6.js", "/assets/useAuth-hook-6GkHdI7V.js"], "css": ["/assets/authError-DCnD3GZh.css", "/assets/button-C2KqssPe.css", "/assets/loading-CvO_vl3s.css", "/assets/registration-Cm-8Ewd9.css"] }, "routes/$catchAll": { "id": "routes/$catchAll", "parentId": "root", "path": ":catchAll", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/_catchAll-IDYfxFAU.js", "imports": ["/assets/index-DeHznlkS.js", "/assets/button-DYUIl9Ir.js"], "css": ["/assets/button-C2KqssPe.css", "/assets/_catchAll-GDYeoeQ7.css"] }, "routes/history": { "id": "routes/history", "parentId": "root", "path": "history", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/history-B24CQrKo.js", "imports": ["/assets/index-DeHznlkS.js", "/assets/auth-context-CQxQiTwU.js", "/assets/react-redux-ulQB2trU.js", "/assets/useAuth-hook-6GkHdI7V.js", "/assets/button-DYUIl9Ir.js", "/assets/components-D8uQ7O_9.js"], "css": ["/assets/button-C2KqssPe.css", "/assets/history-Bq2ZuxCp.css"] }, "routes/_index": { "id": "routes/_index", "parentId": "root", "path": void 0, "index": true, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/_index-BVcTRoH5.js", "imports": ["/assets/index-DeHznlkS.js", "/assets/auth-context-CQxQiTwU.js", "/assets/button-DYUIl9Ir.js", "/assets/loading-DSuaqnr6.js", "/assets/useAuth-hook-6GkHdI7V.js"], "css": ["/assets/button-C2KqssPe.css", "/assets/loading-CvO_vl3s.css", "/assets/_index-BK0YbrSU.css"] }, "routes/login": { "id": "routes/login", "parentId": "root", "path": "login", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/login-D3QTDWMT.js", "imports": ["/assets/index-DeHznlkS.js", "/assets/iconBase-z_erZi_H.js", "/assets/react-toastify.esm-OaNhFX5r.js", "/assets/auth-context-CQxQiTwU.js", "/assets/authError-B8rNQ2NH.js", "/assets/button-DYUIl9Ir.js", "/assets/loading-DSuaqnr6.js", "/assets/useAuth-hook-6GkHdI7V.js"], "css": ["/assets/authError-DCnD3GZh.css", "/assets/button-C2KqssPe.css", "/assets/loading-CvO_vl3s.css", "/assets/registration-Cm-8Ewd9.css"] } }, "url": "/assets/manifest-93e981e1.js", "version": "93e981e1" };
const mode = "production";
const assetsBuildDirectory = "build\\client";
const basename = "/";
const future = { "v3_fetcherPersist": false, "v3_relativeSplatPath": false, "v3_throwAbortReason": false, "unstable_singleFetch": false, "unstable_lazyRouteDiscovery": false };
const isSpaMode = false;
const publicPath = "/";
const entry = { module: entryServer };
const routes = {
  "root": {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: route0
  },
  "routes/REST.$method.$": {
    id: "routes/REST.$method.$",
    parentId: "root",
    path: "REST/:method/*",
    index: void 0,
    caseSensitive: void 0,
    module: route1
  },
  "routes/registration": {
    id: "routes/registration",
    parentId: "root",
    path: "registration",
    index: void 0,
    caseSensitive: void 0,
    module: route2
  },
  "routes/$catchAll": {
    id: "routes/$catchAll",
    parentId: "root",
    path: ":catchAll",
    index: void 0,
    caseSensitive: void 0,
    module: route3
  },
  "routes/history": {
    id: "routes/history",
    parentId: "root",
    path: "history",
    index: void 0,
    caseSensitive: void 0,
    module: route4
  },
  "routes/_index": {
    id: "routes/_index",
    parentId: "root",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: route5
  },
  "routes/login": {
    id: "routes/login",
    parentId: "root",
    path: "login",
    index: void 0,
    caseSensitive: void 0,
    module: route6
  }
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
  routes
};
