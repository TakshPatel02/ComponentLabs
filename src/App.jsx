import React from "react";
import { Route, Routes } from "react-router";
import HomePage from "./Pages/HomePage";
import DocsPage from "./Pages/DocsPage";
import NavBar from "./components/NavBar";
import ComponentsPage from "./Pages/ComponentsPage";

const App = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/docs" element={<DocsPage />} />
        <Route path="/components" element={<ComponentsPage />} />
      </Routes>
    </>
  );
};

export default App;
