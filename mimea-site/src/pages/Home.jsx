import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import {
  Home as HomeIcon,
  School,
  Calendar,
  ArrowRight,
  Shield,
  FileText,
  Users,
  TrendingUp
} from 'lucide-react';

const Home = () => {
  const { t } = useTranslation();

  return (
    <>
      {/* HERO SECTION */}
      <section className="relative h-screen flex items-center">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?q=80&w=2072&auto=format&fit=crop"
            alt="Kenya Community"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#2C4A3B]/70 via-[#2C4A3B]/40 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 mt-16">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl text-white font-bold leading-tight mb-6">
              {t('hero.title')}
            </h1>
            <p className="text-white/90 text-lg md:text-xl mb-10 leading-relaxed">
              {t('hero.subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/projects" className="bg-[#D4A056] text-white px-8 py-4 rounded-lg font-bold flex items-center justify-center gap-2 hover:bg-opacity-90 transition-all">
                {t('hero.cta1')} <ArrowRight size={18} />
              </Link>
              <Link to="/support" className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold hover:bg-white hover:text-[#2C4A3B] transition-all text-center">
                {t('hero.cta2')}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* IMPACT STATS */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: <HomeIcon />, value: "2'500+", label: t('stats.households') },
              { icon: <School />, value: "12", label: t('stats.schools') },
              { icon: <TrendingUp />, value: "2", label: t('stats.projects') },
              { icon: <Calendar />, value: "4", label: t('stats.years') }
            ].map((stat, idx) => (
              <div key={idx} className="text-center p-6 rounded-xl bg-[#F9F8F4] hover:shadow-lg transition-all">
                <div className="inline-flex items-center justify-center w-14 h-14 bg-[#2C4A3B]/10 text-[#2C4A3B] rounded-full mb-4">
                  {React.cloneElement(stat.icon, { size: 24 })}
                </div>
                <div className="text-3xl font-bold text-[#2C4A3B] mb-2">{stat.value}</div>
                <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS SECTION */}
      <section id="projects" className="py-20 px-6 bg-[#F9F8F4]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#2C4A3B] mb-4">{t('projects.title')}</h2>
            <div className="w-20 h-1 bg-[#D4A056] mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Project Lumo+ */}
            <Link to="/projects/lumo" className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all group cursor-pointer">
              <div className="h-64 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?q=80&w=2071&auto=format&fit=crop"
                  alt="Lumo Project"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-[#2C4A3B] mb-3">{t('projects.lumo.title')}</h3>
                <p className="text-gray-600 mb-6">{t('projects.lumo.description')}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-bold text-[#D4A056]">CHF 250'000</span>
                  <span className="flex items-center gap-2 text-[#2C4A3B] font-bold group-hover:text-[#D4A056] transition-colors">
                    {t('projects.lumo.learnMore')}
                  </span>
                </div>
              </div>
            </Link>

            {/* Project Moringa */}
            <Link to="/projects/moringa" className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all group cursor-pointer">
              <div className="h-64 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1560493676-04071c5f467b?q=80&w=2074&auto=format&fit=crop"
                  alt="Moringa Project"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-[#2C4A3B] mb-3">{t('projects.moringa.title')}</h3>
                <p className="text-gray-600 mb-6">{t('projects.moringa.description')}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-bold text-[#D4A056]">CHF 415'000</span>
                  <span className="flex items-center gap-2 text-[#2C4A3B] font-bold group-hover:text-[#D4A056] transition-colors">
                    {t('projects.moringa.learnMore')}
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
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#2C4A3B] mb-4">{t('trust.title')}</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="flex items-start gap-4 p-6 bg-[#F9F8F4] rounded-xl">
              <div className="w-12 h-12 bg-[#D4A056]/20 rounded-full flex items-center justify-center flex-shrink-0">
                <Shield className="text-[#D4A056]" size={24} />
              </div>
              <div>
                <h3 className="font-bold text-[#2C4A3B] mb-2">{t('trust.nonprofit')}</h3>
              </div>
            </div>

            <div className="flex items-start gap-4 p-6 bg-[#F9F8F4] rounded-xl">
              <div className="w-12 h-12 bg-[#D4A056]/20 rounded-full flex items-center justify-center flex-shrink-0">
                <FileText className="text-[#D4A056]" size={24} />
              </div>
              <div>
                <h3 className="font-bold text-[#2C4A3B] mb-2">{t('trust.transparency')}</h3>
              </div>
            </div>

            <div className="flex items-start gap-4 p-6 bg-[#F9F8F4] rounded-xl">
              <div className="w-12 h-12 bg-[#D4A056]/20 rounded-full flex items-center justify-center flex-shrink-0">
                <Users className="text-[#D4A056]" size={24} />
              </div>
              <div>
                <h3 className="font-bold text-[#2C4A3B] mb-2">{t('about.value2')}</h3>
              </div>
            </div>
          </div>

          {/* Partners */}
          <div className="text-center">
            <p className="text-sm text-gray-500 uppercase tracking-wider font-bold mb-6">{t('trust.partners')}</p>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
              <a
                href="https://kilifimoringa.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl font-bold text-gray-700 hover:text-[#D4A056] hover:opacity-100 transition-all"
              >
                Kilifi Moringa Estate
              </a>
              <a
                href="https://www.instagram.com/mwaluawildlife/?hl=fr"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl font-bold text-gray-700 hover:text-[#D4A056] hover:opacity-100 transition-all"
              >
                Mwalua Wildlife Trust
              </a>
              <a
                href="https://www.kefri.org/home.html"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl font-bold text-gray-700 hover:text-[#D4A056] hover:opacity-100 transition-all"
              >
                KEFRI
              </a>
              <a
                href="https://www.pu.ac.ke/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl font-bold text-gray-700 hover:text-[#D4A056] hover:opacity-100 transition-all"
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
