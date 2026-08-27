import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Navbar } from './components/common/Navbar';
import { Footer } from './components/common/Footer';
import { ScrollProgress } from './components/common/ScrollProgress';
import { ScrollToTop } from './components/common/ScrollToTop';
import { FloatingActions } from './components/floating/FloatingActions';

// Pages
import { HomePage } from './pages/HomePage';
import { ServicesPage } from './pages/ServicesPage';
import { WorkPage } from './pages/WorkPage';
import { ProjectDetailPage } from './pages/ProjectDetailPage';
import { ProcessPage } from './pages/ProcessPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { NotFoundPage } from './pages/NotFoundPage';

export function App() {
  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-[#05070c] text-neutral-900 dark:text-neutral-100 selection:bg-cyan-500 selection:text-white transition-colors duration-300 relative">
      {/* Top Scroll Progress Indicator */}
      <ScrollProgress />
      
      {/* Scroll to Top on route change */}
      <ScrollToTop />

      {/* Sticky Glass Navbar */}
      <Navbar />

      {/* Main Dynamic View */}
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/work" element={<WorkPage />} />
          <Route path="/work/:projectSlug" element={<ProjectDetailPage />} />
          <Route path="/process" element={<ProcessPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>

      {/* Global Agency Footer */}
      <Footer />

      {/* Coordinated Floating Actions (AI Assistant + Fixed WhatsApp) */}
      <FloatingActions />
    </div>
  );
}

export default App;
