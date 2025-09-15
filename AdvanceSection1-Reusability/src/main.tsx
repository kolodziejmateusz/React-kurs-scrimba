/* eslint-disable @typescript-eslint/ban-ts-comment */
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
// @ts-expect-error
import App from "./App2.jsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
