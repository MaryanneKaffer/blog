import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./App.tsx";
import { Provider } from "./provider.tsx";
import "@/styles/globals.css";
import { LanguageProvider } from "./context/languageContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider>
        <LanguageProvider>
          <App />
        </LanguageProvider>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
);
