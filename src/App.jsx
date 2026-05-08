import React from "react";
import { Route, Routes, Navigate, useLocation } from "react-router-dom";
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
import GridComponentPage from "./Pages/Components/GridComponentPage";
import OtherComponentPage from "./Pages/Components/OtherComponentPage";
import HeroPageComponentPage from "./Pages/Components/HeroPageComponentPage";
import LandingPageComponentPage from "./Pages/Components/LandingPageComponentPage";
import LogoCloudComponentPage from "./Pages/Components/LogoCloudComponentPage";
import SaaSLandingPage from "./components/LandingPageComponents/SaaSLandingPage";

const App = () => {
  const location = useLocation();
  const isPreview = location.pathname.startsWith("/preview");

  return (
    <>
      <ScrollToTop />
      {!isPreview && <NavBar />}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/docs" element={<DocsPage />} />
        <Route path="/components" element={<ComponentsPage />}>
          <Route index element={<Navigate to="text" replace />} />
          <Route path="buttons" element={<ButtonComponentPage />} />
          <Route path="text" element={<TextComponentPage />} />
          <Route path="links" element={<LinkComponentPage />} />
          <Route path="forms" element={<FormComponentPage />} />
          <Route path="cards" element={<CardComponentPage />} />
          <Route path="keyboard" element={<KeyBoardComponentPage />} />
          <Route path="grids" element={<GridComponentPage />} />
          <Route path="logocloud" element={<LogoCloudComponentPage />} />
          <Route path="other" element={<OtherComponentPage />} />
          <Route path="hero" element={<HeroPageComponentPage />} />
          <Route path="landing" element={<LandingPageComponentPage />} />
        </Route>
        <Route path="/terms" element={<TermsPage />} />
        {/* Preview routes — no NavBar / Footer */}
        <Route path="/preview/saas-landing" element={<SaaSLandingPage />} />
      </Routes>
      {!isPreview && <Footer />}
    </>
  );
};

export default App;
