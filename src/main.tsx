import React from "react";
import ReactDOM from "react-dom/client";

import AppProvider from "./providers";

import App from "./App";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AppProvider>
      <App />
    </AppProvider>
  </React.StrictMode>
);
