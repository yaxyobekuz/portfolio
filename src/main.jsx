import { createRoot } from "react-dom/client";

// I18next (for translate)
import "./i18n";

// Components
import App from "./App.jsx";

// CSS (styles)
import "./index.css";

// Render the project
createRoot(document.getElementById("root")).render(<App />);
