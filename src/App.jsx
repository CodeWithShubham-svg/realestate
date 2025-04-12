import React, { useEffect } from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  useLocation
} from 'react-router-dom';

import Header from './components/Header';
import Navbar from './components/PrivacyNavbar';
import LocationMap from './components/locationMap';
import Footer from './components/Footer';
import About from './components/About';
import FloorPlans from './components/FloorPlans'
import Projects from './components/Projects';
import Testimonails from './components/Testimonails';
import Contact from './components/Contact';
import TermsAndConditions from './pages/TermsAndConditions';
import AboutUs from './pages/AboutUs';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      setTimeout(() => {
        const target = document.querySelector(hash);
        if (target) {
          target.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }
  }, [pathname, hash]);

  return null;
};

const AppContent = () => {
  const location = useLocation();

  const isHomePage = location.pathname === '/';
  const isTncPage = location.pathname === '/TermsAndConditions';

  return (
    <div className="w-full overflow-hidden flex flex-col min-h-screen">
      <ToastContainer />
      <ScrollToTop />

      {/* Conditional Navbar/Header */}
      {isHomePage && <Header />}
      {isTncPage && <Navbar />}

      <main className="flex-grow">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <About />
                <FloorPlans />
                <Projects />
                <Testimonails />
                <LocationMap />
                <Contact />
              </>
            }
          />
          <Route path="/Tnc" element={<TermsAndConditions />} />
          <Route path="/about-us" element={<AboutUs />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
};

const App = () => (
  <BrowserRouter>
    <AppContent />
  </BrowserRouter>
);

export default App;
