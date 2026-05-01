import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import DocsPage from "./Pages/DocsPage";
import NavBar from "./components/NavBar";
import ComponentsPage from "./Pages/ComponentsPage";
import TermsPage from "./Pages/TermsPage";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

// Component Pages
import ButtonComponentPage from "./Pages/Components/ButtonComponentPage";
import TextComponentPage from "./Pages/Components/TextComponentPage";
import LinkComponentPage from "./Pages/Components/LinkComponentPage";
import FormComponentPage from "./Pages/Components/FormComponentPage";
import CardComponentPage from "./Pages/Components/CardComponentPage";
import KeyBoardComponentPage from "./Pages/Components/KeyBoardComponentPage";
import OtherComponentPage from "./Pages/Components/OtherComponentPage";

const App = () => {
  return (
    <>
      <ScrollToTop />
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/docs" element={<DocsPage />} />
        
        {/* Nested Components Routes */}
        <Route path="/components" element={<ComponentsPage />}>
          <Route index element={<Navigate to="text" replace />} />
          <Route path="buttons" element={<ButtonComponentPage />} />
          <Route path="text" element={<TextComponentPage />} />
          <Route path="links" element={<LinkComponentPage />} />
          <Route path="forms" element={<FormComponentPage />} />
          <Route path="cards" element={<CardComponentPage />} />
          <Route path="keyboard" element={<KeyBoardComponentPage />} />
          <Route path="other" element={<OtherComponentPage />} />
        </Route>
        
        <Route path="/terms" element={<TermsPage />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
