import { createRequestHandler } from "@netlify/remix-adapter";
import { b as build } from "./assets/server-build-Bght6Iq6.js";
import "react/jsx-runtime";
import "node:stream";
import "@remix-run/node";
import "@remix-run/react";
import "isbot";
import "react-dom/server";
import "react-i18next";
import "i18next";
import "@reduxjs/toolkit";
import "react";
import "react-firebase-hooks/auth/dist/index.esm.js";
import "react-redux";
import "firebase/app";
import "firebase/auth";
import "react-icons/fa";
import "react-toastify";
import "@monaco-editor/react";
import "react-icons/go";
import "react-icons/ai";
import "react-hook-form";
import "@hookform/resolvers/yup";
import "yup";
const _virtual_netlifyServer = createRequestHandler({
  build,
  getLoadContext: async (_req, ctx) => ctx
});
export {
  _virtual_netlifyServer as default
};
