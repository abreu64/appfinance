import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { GalleryPage } from './pages/GalleryPage';
import { PricingPage } from './pages/PricingPage';
import { FeaturesPage } from './pages/FeaturesPage';
import { PrivacyPage } from './pages/PrivacyPage';
import { TermsPage } from './pages/TermsPage';

// ScrollToTop component to handle scroll reset on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen bg-zinc-950 text-zinc-100 selection:bg-emerald-500/30 font-inter overflow-x-hidden">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/features" element={<FeaturesPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
          <Route path="/terms" element={<TermsPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;