import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import {
  Home as HomeIcon,
  School,
  ArrowRight,
  Shield,
  FileText,
  Users,
  TrendingUp,
  CalendarDays,
  ChevronDown
} from 'lucide-react';

const Home = () => {
  const { t } = useTranslation();
  const statsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in-up');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.observe-fade');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const scrollToStats = () => {
    statsRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes bounce {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
        }
        .animate-bounce-slow {
          animation: bounce 2s ease-in-out infinite;
        }
        .observe-fade {
          opacity: 0;
        }
      `}</style>

      {/* HERO SECTION */}
      <section className="relative h-screen flex items-center">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?q=80&w=2072&auto=format&fit=crop"
            alt="Kenya Community"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#2C4A3B]/80 via-[#2C4A3B]/50 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 mt-16">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl text-white font-bold leading-tight mb-6 animate-fade-in-up">
              {t('hero.title')}
            </h1>
            <p className="text-white/90 text-lg md:text-xl mb-10 leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              {t('hero.subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              <Link to="/projects" className="bg-[#D4A056] text-white px-8 py-4 rounded-lg font-bold flex items-center justify-center gap-2 hover:bg-opacity-90 hover:shadow-xl transition-all transform hover:scale-105">
                {t('hero.cta1')} <ArrowRight size={18} />
              </Link>
              <Link to="/support" className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold hover:bg-white hover:text-[#2C4A3B] transition-all text-center transform hover:scale-105">
                {t('hero.cta2')}
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <button
          onClick={scrollToStats}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/80 hover:text-white transition-colors cursor-pointer z-10 animate-bounce-slow"
          aria-label="Scroll to content"
        >
          <div className="flex flex-col items-center gap-2">
            <span className="text-sm font-medium">Scroll</span>
            <ChevronDown size={32} />
          </div>
        </button>
      </section>

      {/* IMPACT STATS */}
      <section ref={statsRef} className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: <HomeIcon />, value: "2'500+", label: t('stats.households') },
              { icon: <School />, value: "12", label: t('stats.schools') },
              { icon: <TrendingUp />, value: "2", label: t('stats.projects') },
              { icon: <CalendarDays />, value: "5", label: t('stats.years') }
            ].map((stat, idx) => (
              <div
                key={idx}
                className="observe-fade text-center p-8 rounded-2xl bg-gradient-to-br from-[#F9F8F4] to-white hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-[#2C4A3B]/5"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-[#E8E6E0] text-[#2C4A3B] rounded-full mb-4">
                  {React.cloneElement(stat.icon, { size: 28 })}
                </div>
                <div className="text-4xl font-bold text-[#2C4A3B] mb-2">{stat.value}</div>
                <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS SECTION */}
      <section id="projects" className="py-20 px-6 bg-[#F9F8F4]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 observe-fade">
            <h2 className="text-3xl md:text-4xl font-bold text-[#2C4A3B] mb-4">{t('projects.title')}</h2>
            <div className="w-20 h-1 bg-[#D4A056] mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Project Lumo+ */}
            <Link to="/projects/lumo" className="observe-fade bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 group cursor-pointer transform hover:-translate-y-2">
              <div className="h-64 overflow-hidden relative">
                <img
                  src="/ecolodge.jpg"
                  alt="Lumo Project"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2C4A3B]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-[#2C4A3B] mb-3 group-hover:text-[#D4A056] transition-colors">{t('projects.lumo.title')}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{t('projects.lumo.description')}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-bold text-[#D4A056] bg-[#D4A056]/10 px-3 py-1 rounded-full">CHF 250'000</span>
                  <span className="flex items-center gap-2 text-[#2C4A3B] font-bold group-hover:text-[#D4A056] transition-colors">
                    {t('projects.lumo.learnMore')}
                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </div>
            </Link>

            {/* Project Moringa */}
            <Link to="/projects/moringa" className="observe-fade bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 group cursor-pointer transform hover:-translate-y-2" style={{ animationDelay: '0.2s' }}>
              <div className="h-64 overflow-hidden relative">
                <img
                  src="/moringa-field.jpg"
                  alt="Moringa Project"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2C4A3B]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-[#2C4A3B] mb-3 group-hover:text-[#D4A056] transition-colors">{t('projects.moringa.title')}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{t('projects.moringa.description')}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-bold text-[#D4A056] bg-[#D4A056]/10 px-3 py-1 rounded-full">CHF 150'000</span>
                  <span className="flex items-center gap-2 text-[#2C4A3B] font-bold group-hover:text-[#D4A056] transition-colors">
                    {t('projects.moringa.learnMore')}
                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* TRUST SIGNALS */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 observe-fade">
            <h2 className="text-3xl font-bold text-[#2C4A3B] mb-4">{t('trust.title')}</h2>
            <div className="w-20 h-1 bg-[#D4A056] mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="observe-fade flex items-start gap-4 p-8 bg-gradient-to-br from-[#F9F8F4] to-white rounded-2xl hover:shadow-xl transition-all duration-300 border border-[#2C4A3B]/5 transform hover:-translate-y-1">
              <div className="w-14 h-14 bg-gradient-to-br from-[#D4A056] to-[#c4904a] rounded-full flex items-center justify-center flex-shrink-0 shadow-lg">
                <Shield className="text-white" size={26} />
              </div>
              <div>
                <h3 className="font-bold text-[#2C4A3B] mb-2 text-lg">{t('trust.nonprofit')}</h3>
              </div>
            </div>

            <div className="observe-fade flex items-start gap-4 p-8 bg-gradient-to-br from-[#F9F8F4] to-white rounded-2xl hover:shadow-xl transition-all duration-300 border border-[#2C4A3B]/5 transform hover:-translate-y-1" style={{ animationDelay: '0.1s' }}>
              <div className="w-14 h-14 bg-gradient-to-br from-[#D4A056] to-[#c4904a] rounded-full flex items-center justify-center flex-shrink-0 shadow-lg">
                <FileText className="text-white" size={26} />
              </div>
              <div>
                <h3 className="font-bold text-[#2C4A3B] mb-2 text-lg">{t('trust.transparency')}</h3>
              </div>
            </div>

            <div className="observe-fade flex items-start gap-4 p-8 bg-gradient-to-br from-[#F9F8F4] to-white rounded-2xl hover:shadow-xl transition-all duration-300 border border-[#2C4A3B]/5 transform hover:-translate-y-1" style={{ animationDelay: '0.2s' }}>
              <div className="w-14 h-14 bg-gradient-to-br from-[#D4A056] to-[#c4904a] rounded-full flex items-center justify-center flex-shrink-0 shadow-lg">
                <Users className="text-white" size={26} />
              </div>
              <div>
                <h3 className="font-bold text-[#2C4A3B] mb-2 text-lg">{t('about.value2')}</h3>
              </div>
            </div>
          </div>

          {/* Partners */}
          <div className="text-center observe-fade">
            <p className="text-sm text-gray-500 uppercase tracking-wider font-bold mb-8">{t('trust.partners')}</p>
            <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-6 opacity-70">
              <a
                href="https://www.instagram.com/mwaluawildlife/?hl=fr"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl font-bold text-gray-700 hover:text-[#D4A056] hover:opacity-100 transition-all duration-300 transform hover:scale-110"
              >
                Mwalua Wildlife Trust
              </a>
              <a
                href="https://www.kefri.org/home.html"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl font-bold text-gray-700 hover:text-[#D4A056] hover:opacity-100 transition-all duration-300 transform hover:scale-110"
              >
                KEFRI
              </a>
              <a
                href="https://www.pu.ac.ke/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl font-bold text-gray-700 hover:text-[#D4A056] hover:opacity-100 transition-all duration-300 transform hover:scale-110"
              >
                Pwani University
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
