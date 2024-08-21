import { jsx, jsxs } from 'react/jsx-runtime';
import { PassThrough } from 'node:stream';
import { createReadableStreamFromReadable } from '@remix-run/node';
import {
  RemixServer,
  Link,
  Meta,
  Links,
  Outlet,
  Scripts,
} from '@remix-run/react';
import * as isbotModule from 'isbot';
import { renderToPipeableStream } from 'react-dom/server';
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
const footer = '_footer_9dj0p_1';
const iconGitHub = '_iconGitHub_9dj0p_10';
const teamBlock = '_teamBlock_9dj0p_20';
const footerNav = '_footerNav_9dj0p_25';
const logoRS = '_logoRS_9dj0p_34';
const year = '_year_9dj0p_53';
const styles$2 = {
  footer,
  iconGitHub,
  teamBlock,
  footerNav,
  logoRS,
  year,
};
function Footer() {
  return /* @__PURE__ */ jsxs('footer', {
    className: styles$2.footer,
    children: [
      /* @__PURE__ */ jsx(Link, {
        to: 'https://rs.school/',
        className: styles$2.linkBlock,
        children: /* @__PURE__ */ jsx('div', { className: styles$2.logoRS }),
      }),
      /* @__PURE__ */ jsx('p', { className: styles$2.year, children: '2024' }),
      /* @__PURE__ */ jsxs('div', {
        className: styles$2.teamBlock,
        children: [
          /* @__PURE__ */ jsx('div', { className: styles$2.iconGitHub }),
          /* @__PURE__ */ jsxs('nav', {
            className: styles$2.footerNav,
            children: [
              ' ',
              /* @__PURE__ */ jsx(Link, {
                to: 'https://github.com/rs0048',
                children: 'Roman Sokolov',
              }),
              /* @__PURE__ */ jsx(Link, {
                to: 'https://github.com/Yana-Dyachok',
                children: 'Yana Dyachok',
              }),
              /* @__PURE__ */ jsx(Link, {
                to: 'https://github.com/lonelybush',
                children: 'Nikita Radevich',
              }),
            ],
          }),
        ],
      }),
    ],
  });
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
      /* @__PURE__ */ jsxs('body', {
        children: [
          /* @__PURE__ */ jsx(Outlet, {}),
          /* @__PURE__ */ jsx(Footer, {}),
          /* @__PURE__ */ jsx(Scripts, {}),
        ],
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
const btn = '_btn_1die7_1';
const styles$1 = {
  btn,
};
function Button({
  btnType = 'button',
  children,
  onClick,
  to,
  disabled = false,
}) {
  const handleClick = () => {
    if (to) {
      window.location.href = to;
    }
    if (onClick) {
      onClick();
    }
  };
  return /* @__PURE__ */ jsx('button', {
    className: styles$1.btn,
    type: btnType === 'button' ? 'button' : 'submit',
    onClick: handleClick,
    disabled,
    children,
  });
}
const errorBlock = '_errorBlock_xxmjs_1';
const errorContainer = '_errorContainer_xxmjs_11';
const title = '_title_xxmjs_18';
const spanError = '_spanError_xxmjs_22';
const digitFirst = '_digitFirst_xxmjs_29';
const digitSecond = '_digitSecond_xxmjs_30';
const digitThird = '_digitThird_xxmjs_31';
const styles = {
  errorBlock,
  errorContainer,
  title,
  spanError,
  digitFirst,
  digitSecond,
  digitThird,
};
function CatchAll() {
  return /* @__PURE__ */ jsxs('div', {
    className: styles.errorBlock,
    children: [
      /* @__PURE__ */ jsx('h1', {
        className: styles.title,
        children: ' Ooops... Page not found',
      }),
      /* @__PURE__ */ jsxs('section', {
        className: styles.errorContainer,
        children: [
          /* @__PURE__ */ jsx('span', {
            className: styles.spanError,
            children: /* @__PURE__ */ jsx('span', {
              className: styles.digitFirst,
              children: '4',
            }),
          }),
          /* @__PURE__ */ jsx('span', {
            className: `${styles.spanError} ${styles.digitSecond}`,
            children: '0',
          }),
          /* @__PURE__ */ jsx('span', {
            className: styles.spanError,
            children: /* @__PURE__ */ jsx('span', {
              className: styles.digitThird,
              children: '4',
            }),
          }),
        ],
      }),
      /* @__PURE__ */ jsx(Button, {
        btnType: 'button',
        to: '/',
        children: 'Back to main',
      }),
    ],
  });
}
const route1 = /* @__PURE__ */ Object.freeze(
  /* @__PURE__ */ Object.defineProperty(
    {
      __proto__: null,
      default: CatchAll,
    },
    Symbol.toStringTag,
    { value: 'Module' },
  ),
);
const serverManifest = {
  entry: {
    module: '/assets/entry.client-BH__2tK2.js',
    imports: [
      '/assets/jsx-runtime-56DGgGmo.js',
      '/assets/components-CG6_eaI5.js',
    ],
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
      module: '/assets/root-D41evuM_.js',
      imports: [
        '/assets/jsx-runtime-56DGgGmo.js',
        '/assets/components-CG6_eaI5.js',
      ],
      css: ['/assets/root-zSvSLjtG.css'],
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
      module: '/assets/_catchAll-DK7hozc_.js',
      imports: ['/assets/jsx-runtime-56DGgGmo.js'],
      css: ['/assets/_catchAll-CHJi0sn_.css'],
    },
  },
  url: '/assets/manifest-85a9fe45.js',
  version: '85a9fe45',
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
  'routes/$catchAll': {
    id: 'routes/$catchAll',
    parentId: 'root',
    path: ':catchAll',
    index: void 0,
    caseSensitive: void 0,
    module: route1,
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
