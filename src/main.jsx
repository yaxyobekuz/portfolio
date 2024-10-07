import { createRoot } from "react-dom/client";

// I18next (for translate)
import "./i18n";

// CSS (styles)
import "./index.css";

// Components
import App from "./App.jsx";

// Redux
import store from "./store/store.js";
import { Provider } from "react-redux";

const root = createRoot(document.getElementById("root"));

// Render the project
root.render(<Provider store={store}><App /></Provider>);
