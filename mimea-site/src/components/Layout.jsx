import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Leaf, Menu, X, Languages, Mail, Heart } from 'lucide-react';
import useSEO from '../hooks/useSEO';

const COLORS = {
  forest: '#2C4A3B',
  ochre: '#D4A056',
  cream: '#F9F8F4',
  anthracite: '#333333',
  lightGreen: '#E9EFEA'
};

const Layout = ({ children }) => {
  const { t, i18n } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showLangMenu, setShowLangMenu] = useState(false);
  const [newsletterEmail, setNewsletterEmail] = useState('');

  // SEO management for multilingual support
  useSEO();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (!showLangMenu) return;
    const handleClickOutside = (e) => {
      if (!e.target.closest('.lang-selector')) setShowLangMenu(false);
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [showLangMenu]);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setShowLangMenu(false);
  };

  const getCurrentLanguageLabel = () => {
    const labels = { fr: 'FR', en: 'EN', de: 'DE' };
    return labels[i18n.language] || 'DE';
  };

  const handleNewsletterSubmit = () => {
    if (newsletterEmail) {
      const subject = encodeURIComponent('Newsletter Subscription');
      const body = encodeURIComponent(`I would like to subscribe to the newsletter.\n\nEmail: ${newsletterEmail}`);
      window.location.href = `mailto:info@mimea-impact.ch?subject=${subject}&body=${body}`;
    }
  };

  return (
    <div className="min-h-screen font-sans" style={{ backgroundColor: COLORS.cream }}>
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700&display=swap');
          body { font-family: 'Inter', sans-serif; }
          .text-forest { color: ${COLORS.forest}; }
          .bg-forest { background-color: ${COLORS.forest}; }
          .text-ochre { color: ${COLORS.ochre}; }
          .bg-ochre { background-color: ${COLORS.ochre}; }
          .border-forest { border-color: ${COLORS.forest}; }
          .border-ochre { border-color: ${COLORS.ochre}; }
          .bg-cream { background-color: ${COLORS.cream}; }
        `}
      </style>

      {/* NAVIGATION */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-lg py-3' : 'bg-white/80 backdrop-blur-sm py-4'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <Link to="/" className="flex items-center group">
            <img src="/logo.svg" alt="Mimea Impact" className="h-10 group-hover:opacity-80 transition-opacity duration-300" />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <Link to="/" className="text-sm font-semibold hover:text-ochre transition-all duration-300 relative group">
              {t('nav.home')}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-ochre group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link to="/about" className="text-sm font-semibold hover:text-ochre transition-all duration-300 relative group">
              {t('nav.about')}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-ochre group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link to="/projects" className="text-sm font-semibold hover:text-ochre transition-all duration-300 relative group">
              {t('nav.projects')}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-ochre group-hover:w-full transition-all duration-300"></span>
            </Link>

            {/* Language Selector */}
            <div className="relative lang-selector">
              <button
                onClick={() => setShowLangMenu(!showLangMenu)}
                className="flex items-center gap-2 text-sm font-semibold hover:text-ochre transition-all duration-300 px-3 py-2 rounded-lg hover:bg-ochre/10"
              >
                <Languages size={16} />
                {getCurrentLanguageLabel()}
              </button>

              {showLangMenu && (
                <div className="absolute top-full mt-2 right-0 bg-white rounded-xl shadow-2xl border overflow-hidden min-w-[140px] animate-fade-in">
                  <button onClick={() => changeLanguage('de')} className={`w-full px-4 py-2.5 text-left text-sm hover:bg-ochre/10 transition-colors ${i18n.language === 'de' ? 'bg-ochre/20 font-bold' : ''}`}>🇩🇪 Deutsch</button>
                  <button onClick={() => changeLanguage('fr')} className={`w-full px-4 py-2.5 text-left text-sm hover:bg-ochre/10 transition-colors ${i18n.language === 'fr' ? 'bg-ochre/20 font-bold' : ''}`}>🇫🇷 Français</button>
                  <button onClick={() => changeLanguage('en')} className={`w-full px-4 py-2.5 text-left text-sm hover:bg-ochre/10 transition-colors ${i18n.language === 'en' ? 'bg-ochre/20 font-bold' : ''}`}>🇬🇧 English</button>
                </div>
              )}
            </div>

            <Link to="/support" className="bg-ochre text-white px-6 py-2.5 rounded-lg text-sm font-bold flex items-center gap-2 shadow-lg shadow-ochre/40 hover:opacity-90 hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <Heart size={16} className="fill-white" />
              {t('nav.support')}
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* MOBILE MENU */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-white z-40 flex flex-col items-center justify-center gap-6">
          <Link to="/" onClick={() => setIsMenuOpen(false)} className="text-2xl font-semibold">{t('nav.home')}</Link>
          <Link to="/about" onClick={() => setIsMenuOpen(false)} className="text-2xl font-semibold">{t('nav.about')}</Link>
          <Link to="/projects" onClick={() => setIsMenuOpen(false)} className="text-2xl font-semibold">{t('nav.projects')}</Link>
          <div className="flex gap-3">
            <button onClick={() => { changeLanguage('de'); setIsMenuOpen(false); }} className={`px-4 py-2 rounded-lg ${i18n.language === 'de' ? 'bg-ochre text-white' : 'bg-gray-100'}`}>DE</button>
            <button onClick={() => { changeLanguage('fr'); setIsMenuOpen(false); }} className={`px-4 py-2 rounded-lg ${i18n.language === 'fr' ? 'bg-ochre text-white' : 'bg-gray-100'}`}>FR</button>
            <button onClick={() => { changeLanguage('en'); setIsMenuOpen(false); }} className={`px-4 py-2 rounded-lg ${i18n.language === 'en' ? 'bg-ochre text-white' : 'bg-gray-100'}`}>EN</button>
          </div>
          <Link to="/support" onClick={() => setIsMenuOpen(false)} className="bg-ochre text-white px-8 py-3 rounded-lg font-bold flex items-center gap-2 shadow-lg"><Heart size={18} className="fill-white" />{t('nav.support')}</Link>
        </div>
      )}

      {/* Page Content */}
      <main>
        {children}
      </main>

      {/* FOOTER */}
      <footer className="bg-gradient-to-br from-[#2C4A3B] to-[#1a2b23] text-white py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div className="col-span-2">
              <img src="/logo.svg" alt="Mimea Impact" className="h-8 brightness-0 invert mb-6" />
              <p className="text-sm opacity-80 mb-6 max-w-md leading-relaxed whitespace-pre-line">
                {t('footer.description')}
              </p>
              <p className="text-sm opacity-60 whitespace-pre-line">
                {t('footer.address')}
              </p>
            </div>

            <div>
              <h5 className="font-bold mb-4 text-lg">{t('footer.quickLinks')}</h5>
              <ul className="space-y-3 text-sm opacity-80">
                <li><Link to="/about" className="hover:text-ochre transition-all duration-300 hover:translate-x-1 inline-block">{t('nav.about')}</Link></li>
                <li><Link to="/projects" className="hover:text-ochre transition-all duration-300 hover:translate-x-1 inline-block">{t('nav.projects')}</Link></li>
                <li><Link to="/contact" className="hover:text-ochre transition-all duration-300 hover:translate-x-1 inline-block">{t('nav.contact')}</Link></li>
              </ul>
            </div>

            <div>
              <h5 className="font-bold mb-4 text-lg">{t('footer.newsletter')}</h5>
              <p className="text-sm opacity-80 mb-4">{t('footer.newsletterText')}</p>
              <div className="relative">
                <input
                  type="email"
                  placeholder={t('footer.emailPlaceholder')}
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-ochre focus:bg-white/20 transition-all duration-300"
                />
                <button
                  onClick={handleNewsletterSubmit}
                  className="absolute right-2 top-2 bg-ochre p-1.5 rounded-lg hover:bg-white hover:text-ochre transition-all duration-300 hover:scale-110"
                >
                  <Mail size={16} />
                </button>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm opacity-60">
            <div className="flex gap-6">
              <Link to="/legal" className="hover:opacity-100 transition-opacity">{t('footer.legal')}</Link>
              <Link to="/privacy" className="hover:opacity-100 transition-opacity">{t('footer.privacy')}</Link>
              <Link to="/statutes" className="hover:opacity-100 transition-opacity">{t('footer.statutes')}</Link>
            </div>
            <div>© 2026 Mimea Impact - {t('footer.trustSignals.nonprofit')}</div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
