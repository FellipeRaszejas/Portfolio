import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import "./styles/reset.css";
import "./styles/variables.css";
import "./styles/typography.css";
import "./styles/global.css";
import "./styles/animations.css";
import "./styles/scrollbar.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
