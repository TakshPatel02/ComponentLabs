import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import DocsPage from "./Pages/DocsPage";
import NavBar from "./components/NavBar";
import ComponentsPage from "./Pages/ComponentsPage";
import TermsPage from "./Pages/TermsPage";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

const App = () => {
  return (
    <>
      <ScrollToTop />
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/docs" element={<DocsPage />} />
        <Route path="/components" element={<ComponentsPage />} />
        <Route path="/terms" element={<TermsPage />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
