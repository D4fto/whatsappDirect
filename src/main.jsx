import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "bootstrap-icons/font/bootstrap-icons.css";
import App from "./App.jsx";
import { Providers } from "./contexts/Providers.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Providers>
      <App />
    </Providers>
  </StrictMode>
);
