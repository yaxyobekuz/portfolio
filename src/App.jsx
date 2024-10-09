import React from "react";

// Router
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

// Layouts
import MainLayout from "./layouts/MainLayout";

// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Success from "./pages/Success";
import Projects from "./pages/Projects";

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/:lang" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="success" element={<Success />} />
        <Route path="contact" element={<Contact />} />
        <Route path="projects" element={<Projects />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
};

export default App;
