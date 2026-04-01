import { BrowserRouter, Routes, Route, useSearchParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import LumoProject from './pages/LumoProject';
import MoringaProject from './pages/MoringaProject';
import Support from './pages/Support';
import Contact from './pages/Contact';
import LegalNotice from './pages/LegalNotice';
import PrivacyPolicy from './pages/PrivacyPolicy';
import StatutesPage from './pages/StatutesPage';

const LanguageHandler = () => {
  const [searchParams] = useSearchParams();
  const { i18n } = useTranslation();

  useEffect(() => {
    const lang = searchParams.get('lang');
    if (lang && ['fr', 'en', 'de'].includes(lang)) {
      i18n.changeLanguage(lang);
    }
  }, [searchParams, i18n]);

  return null;
};

const App = () => {
  return (
    <BrowserRouter>
      <LanguageHandler />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/lumo" element={<LumoProject />} />
          <Route path="/projects/moringa" element={<MoringaProject />} />
          <Route path="/support" element={<Support />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/legal" element={<LegalNotice />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/statutes" element={<StatutesPage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
