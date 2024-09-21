import { createRoot } from "react-dom/client";

// CSS (styles)
import "./index.css";

// Components
import App from "./App.jsx";

// Language provider
import { LanguageProvider } from "./language/LanguageProvider.jsx";

// Render the project
createRoot(document.getElementById("root")).render(
  <LanguageProvider>
    <App />
  </LanguageProvider>
);
