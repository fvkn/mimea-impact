import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Users, Calendar, ArrowRight, Award, Sprout as SproutIcon } from 'lucide-react';
import { PACKAGES, PROGRAM_MGMT, PROGRAM_TOTAL, formatCHF, budgetShare } from '../data/packages';

const Projects = () => {
  const { t } = useTranslation();
  const budgetRows = [...PACKAGES, PROGRAM_MGMT];

  return (
    <div className="min-h-screen bg-[#F9F8F4]">
      {/* Hero */}
      <section className="relative py-32 bg-gradient-to-br from-[#2C4A3B] to-[#1a2b23]">
        <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
          <span className="text-[#D4A056] text-sm font-semibold uppercase tracking-wider">
            {t('projectsPage.programLabel')}
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">{t('projectsPage.title')}</h1>
          <p className="text-xl text-white/90">{t('projectsPage.lead')}</p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-lg text-gray-700 leading-relaxed text-center">{t('projectsPage.intro')}</p>
          <div className="mt-8 bg-gradient-to-br from-[#2C4A3B] to-[#1a2b23] text-white rounded-2xl p-6 border-l-4 border-[#D4A056]">
            <p className="font-semibold leading-relaxed">{t('projectsPage.povertyNote')}</p>
          </div>
        </div>
      </section>

      {/* Project cards */}
      <section className="py-8 pb-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-[#2C4A3B] mb-3">{t('projectsPage.chooseTitle')}</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">{t('projectsPage.chooseText')}</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PACKAGES.map((pkg) => {
              const base = `packages.${pkg.slug}`;
              return (
                <Link
                  key={pkg.slug}
                  to={`/projects/${pkg.slug}`}
                  className="group bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 flex flex-col"
                >
                  <div className="h-48 overflow-hidden relative">
                    <img
                      src={pkg.image}
                      alt={t(`${base}.title`)}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#2C4A3B]/70 to-transparent"></div>
                    <span className="absolute bottom-4 right-4 text-sm font-bold text-white bg-[#D4A056] px-3 py-1 rounded-full">
                      {formatCHF(pkg.amount)}
                    </span>
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <h3 className="text-xl font-bold text-[#2C4A3B] mb-2 group-hover:text-[#D4A056] transition-colors">
                      {t(`${base}.title`)}
                    </h3>
                    <p className="text-gray-600 mb-5 flex-1">{t(`${base}.tagline`)}</p>
                    <div className="flex flex-col gap-2 text-sm text-gray-600 mb-5">
                      <div className="flex items-start gap-2">
                        <Users size={16} className="text-[#D4A056] flex-shrink-0 mt-0.5" />
                        <span>
                          <span className="font-semibold text-[#2C4A3B]">{t('projectsPage.cardTargetGroup')}:</span>{' '}
                          {t(`${base}.targetGroup`)}
                        </span>
                      </div>
                      <div className="flex items-start gap-2">
                        <Calendar size={16} className="text-[#D4A056] flex-shrink-0 mt-0.5" />
                        <span>
                          <span className="font-semibold text-[#2C4A3B]">{t('projectsPage.cardTimeframe')}:</span>{' '}
                          {t(`${base}.timeframe`)}
                        </span>
                      </div>
                    </div>
                    <span className="flex items-center gap-2 text-[#2C4A3B] font-bold group-hover:text-[#D4A056] transition-colors mt-auto">
                      {t('projectsPage.learnMore')}
                      <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Proven + shared foundation */}
      <section className="py-16 bg-[#F9F8F4]">
        <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-2xl border border-gray-100">
            <div className="w-12 h-12 bg-[#D4A056]/20 rounded-full flex items-center justify-center mb-4">
              <Award className="text-[#D4A056]" size={24} />
            </div>
            <h3 className="text-xl font-bold text-[#2C4A3B] mb-3">{t('projectsPage.provenTitle')}</h3>
            <p className="text-gray-700 leading-relaxed">{t('projectsPage.provenText')}</p>
          </div>
          <div className="bg-white p-8 rounded-2xl border border-gray-100">
            <div className="w-12 h-12 bg-[#D4A056]/20 rounded-full flex items-center justify-center mb-4">
              <SproutIcon className="text-[#D4A056]" size={24} />
            </div>
            <h3 className="text-xl font-bold text-[#2C4A3B] mb-3">{t('projectsPage.farmTitle')}</h3>
            <p className="text-gray-700 leading-relaxed">{t('projectsPage.farmText')}</p>
          </div>
        </div>
      </section>

      {/* Budget breakdown */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-[#2C4A3B] mb-6">{t('projectsPage.budgetTitle')}</h2>
          <div className="rounded-2xl border border-gray-100 overflow-hidden">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-[#2C4A3B] text-white text-sm">
                  <th className="px-5 py-3 font-semibold">{t('projectsPage.budgetProject')}</th>
                  <th className="px-5 py-3 font-semibold text-right">{t('projectsPage.budgetAmount')}</th>
                  <th className="px-5 py-3 font-semibold text-right">{t('projectsPage.budgetShare')}</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                {budgetRows.map((row, idx) => (
                  <tr key={row.slug} className={idx % 2 === 0 ? 'bg-white' : 'bg-[#F9F8F4]'}>
                    <td className="px-5 py-3 text-gray-700">{t(`packages.${row.slug}.title`)}</td>
                    <td className="px-5 py-3 text-gray-700 text-right whitespace-nowrap">{formatCHF(row.amount)}</td>
                    <td className="px-5 py-3 text-gray-700 text-right">{budgetShare(row.amount)} %</td>
                  </tr>
                ))}
                <tr className="bg-[#E9EFEA] font-bold text-[#2C4A3B]">
                  <td className="px-5 py-3">{t('projectsPage.budgetTotal')}</td>
                  <td className="px-5 py-3 text-right whitespace-nowrap">{formatCHF(PROGRAM_TOTAL)}</td>
                  <td className="px-5 py-3 text-right">100 %</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm text-gray-500 mt-4">{t('projectsPage.budgetNote')}</p>
        </div>
      </section>
    </div>
  );
};

export default Projects;
