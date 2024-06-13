/** @format */

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { WebAppProvider } from "@vkruglikov/react-telegram-web-app";

ReactDOM.createRoot(document.getElementById("root")).render(
    <WebAppProvider options={{ smoothButtonsTransition: true }}>
        <App />
    </WebAppProvider>
);
