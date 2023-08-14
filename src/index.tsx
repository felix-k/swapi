import React from "react";
import ReactDOM from "react-dom/client";
import Providers from "./app/Providers";
import App from "./app";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Providers>
      <App />
    </Providers>
  </React.StrictMode>
);
