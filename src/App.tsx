import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ABOUT_ME_PATH, CONTACT_ME_PATH, HOME_PAGE_PATH, WELCOME_PATH } from "./components/constants/PathIndex";
import LayerWithNavBar from "./components/Layer/LayerWithNavBar";
import AboutMe from "./components/pages/AboutMe";
import ContactMe from "./components/pages/ContactMe";
import HomePage from "./components/pages/HomePage";
import Welcome from "./components/pages/Welcome";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={HOME_PAGE_PATH
          }
          element={<LayerWithNavBar childComp={<HomePage />} />}
        />
        <Route
          path={WELCOME_PATH
          }
          element={<LayerWithNavBar childComp={<Welcome />} />}
        />
        <Route
          path={ABOUT_ME_PATH}
          element={<LayerWithNavBar childComp={<AboutMe />} />}
        />
        <Route
          path={CONTACT_ME_PATH}
          element={<LayerWithNavBar childComp={<ContactMe />} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
