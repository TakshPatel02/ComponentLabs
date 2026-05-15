import React from "react";
import { Route, Routes, Navigate, useLocation } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import DocsPage from "./Pages/DocsPage";
import IntroductionPage from "./Pages/IntroductionPage";
import InstallationPage from "./Pages/InstallationPage";
import NavBar from "./components/NavBar";
import ComponentsPage from "./Pages/ComponentsPage";
import TermsPage from "./Pages/TermsPage";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import ComponentPage from "./Pages/ComponentPage";
import ComponentsIndex from "./Pages/ComponentsIndex";

// ── Old component page imports (commented out — kept for rollback) ──
// import ButtonComponentPage from "./Pages/Components/ButtonComponentPage";
// import TextComponentPage from "./Pages/Components/TextComponentPage";
// import LinkComponentPage from "./Pages/Components/LinkComponentPage";
// import FormComponentPage from "./Pages/Components/FormComponentPage";
// import CardComponentPage from "./Pages/Components/CardComponentPage";
// import KeyBoardComponentPage from "./Pages/Components/KeyBoardComponentPage";
// import GridComponentPage from "./Pages/Components/GridComponentPage";
// import OtherComponentPage from "./Pages/Components/OtherComponentPage";
// import HeroPageComponentPage from "./Pages/Components/HeroPageComponentPage";
// import LandingPageComponentPage from "./Pages/Components/LandingPageComponentPage";
// import LogoCloudComponentPage from "./Pages/Components/LogoCloudComponentPage";
// import FooterComponentPage from "./Pages/Components/FooterComponentPage";
// import FAQComponentPage from "./Pages/Components/FAQComponentPage";
// import FeatureComponentPage from "./Pages/Components/FeatureComponentPage";
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
        <Route path="/docs/introduction" element={<IntroductionPage />} />
        <Route path="/docs/installation" element={<InstallationPage />} />

        {/* Components index page (sidebar + placeholder) */}
        <Route path="/components" element={<ComponentsIndex />} />

        {/* Dynamic component docs route */}
        <Route path="/components/:category/:slug" element={<ComponentPage />} />

        {/* ── Old routes (commented out — kept for rollback) ──
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
          <Route path="features" element={<FeatureComponentPage />} />
          <Route path="faq" element={<FAQComponentPage />} />
          <Route path="footers" element={<FooterComponentPage />} />
        </Route>
        */}

        <Route path="/terms" element={<TermsPage />} />
        {/* Preview routes — no NavBar / Footer */}
        <Route path="/preview/saas-landing" element={<SaaSLandingPage />} />
      </Routes>
      {!isPreview && !location.pathname.startsWith("/components") && !location.pathname.startsWith("/docs") && <Footer />}
    </>
  );
};

export default App;

