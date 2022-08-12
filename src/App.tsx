import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LayerWithNavBar from "./components/Layer/LayerWithNavBar";
import AboutMe from "./components/pages/AboutMe";
import ContactMe from "./components/pages/ContactMe";
import HomePage from "./components/pages/HomePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<LayerWithNavBar childComp={<HomePage />} />}
        />
        <Route
          path="/about_me"
          element={<LayerWithNavBar childComp={<AboutMe />} />}
        />
        <Route
          path="/contact_me"
          element={<LayerWithNavBar childComp={<ContactMe />} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
