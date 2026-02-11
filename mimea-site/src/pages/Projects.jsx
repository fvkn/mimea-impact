import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Projects = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-[#F9F8F4]">
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-br from-[#2C4A3B] to-[#1a2b23]">
        <div className="container mx-auto px-6 relative z-10">
          <h1 className="text-5xl font-bold text-white mb-6 text-center">{t('projects.title')}</h1>
          <div className="w-20 h-1 bg-[#D4A056] mx-auto"></div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
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
    </div>
  );
};

export default Projects;
