import React from "react";
import { Route, Routes, Navigate, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import HomePage from "./Pages/HomePage";
import IntroductionPage from "./Pages/IntroductionPage";
import InstallationPage from "./Pages/InstallationPage";
import NavBar from "./components/NavBar";
import TermsPage from "./Pages/TermsPage";
import Footer from "./components/Footer";
import ComponentPage from "./Pages/ComponentPage";
import ComponentsIndex from "./Pages/ComponentsIndex";
import TemplatesPage from "./Pages/TemplatesPage";
import IconFlowPage from "./Pages/IconFlowPage";
import TemplatePreviewPage from "./Pages/TemplatePreviewPage";
import ExperiencesPage from "./Pages/ExperiencesPage";
import ThemeTransitionsPage from "./Pages/ThemeTransitionsPage";
import PageTransitionsPage from "./Pages/PageTransitionsPage";

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

/* ── Crossfade + Blur Shift page transition ── */
const pageVariants = {
  initial: {
    opacity: 0,
    filter: "blur(0px)",
  },
  animate: {
    opacity: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.5,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
    transitionEnd: {
      filter: "none",
    },
  },
  exit: {
    opacity: 0,
    filter: "blur(12px)",
    transition: {
      duration: 0.4,
      ease: [0.55, 0.06, 0.68, 0.19],
    },
  },
};

const App = () => {
  const location = useLocation();
  const isPreview = location.pathname.startsWith("/preview");

  return (
    <>
      {!isPreview && <NavBar />}
      <AnimatePresence mode="wait" onExitComplete={() => window.scrollTo(0, 0)}>
        <motion.div
          key={location.pathname}
          variants={pageVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          style={{ display: "flex", flexDirection: "column", minHeight: isPreview ? "100vh" : "auto", flex: 1, width: "100%" }}
        >
          <Routes location={location}>
            <Route path="/" element={<HomePage />} />
            <Route path="/templates" element={<TemplatesPage />} />
            <Route path="/templates/saas-landing" element={<TemplatePreviewPage />} />
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
            <Route path="/iconflow" element={<IconFlowPage />} />
            <Route path="/experiences" element={<ExperiencesPage />} />
            <Route path="/experiences/theme-transitions" element={<ThemeTransitionsPage />} />
            <Route path="/experiences/page-transitions" element={<PageTransitionsPage />} />
            {/* Preview routes — no NavBar / Footer */}
            <Route path="/preview/saas-landing" element={<SaaSLandingPage />} />
          </Routes>
          {!isPreview && !location.pathname.startsWith("/components") && !location.pathname.startsWith("/docs") && <Footer />}
        </motion.div>
      </AnimatePresence>
    </>
  );
};

export default App;
