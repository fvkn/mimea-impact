import { useTranslation } from 'react-i18next';
import { Link, useParams, Navigate } from 'react-router-dom';
import { MapPin, Users, Calendar, HandCoins, CheckCircle, ArrowLeft, ArrowRight, Award } from 'lucide-react';
import { PACKAGES, getPackage, formatCHF } from '../data/packages';

const ProjectDetail = () => {
  const { t } = useTranslation();
  const { slug } = useParams();
  const pkg = getPackage(slug);

  // Unknown slug (e.g. an old bookmarked /projects/lumo link) → back to the list.
  if (!pkg) {
    return <Navigate to="/projects" replace />;
  }

  const base = `packages.${pkg.slug}`;
  const results = t(`${base}.results`, { returnObjects: true });
  const resultList = Array.isArray(results) ? results : [];
  const others = PACKAGES.filter((p) => p.slug !== pkg.slug);

  const facts = [
    { icon: MapPin, label: t('packageDetail.location'), value: t('packageDetail.commonLocation') },
    { icon: Users, label: t('packageDetail.targetGroup'), value: t(`${base}.targetGroup`) },
    { icon: Calendar, label: t('packageDetail.timeframe'), value: t(`${base}.timeframe`) },
    { icon: HandCoins, label: t('packageDetail.fundingNeed'), value: formatCHF(pkg.amount) },
  ];

  return (
    <div className="min-h-screen bg-[#F9F8F4]">
      {/* Hero */}
      <section className="relative h-[60vh] min-h-[420px]">
        <div className="absolute inset-0 z-0">
          <img src={pkg.image} alt={t(`${base}.title`)} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#2C4A3B]/90 via-[#2C4A3B]/60 to-transparent"></div>
        </div>
        <div className="relative z-10 h-full max-w-7xl mx-auto px-6 flex flex-col justify-center">
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors mb-6 text-sm font-semibold w-fit"
          >
            <ArrowLeft size={16} /> {t('packageDetail.backToProjects')}
          </Link>
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{t(`${base}.title`)}</h1>
            <p className="text-xl text-white/90">{t(`${base}.heroSubtitle`)}</p>
          </div>
        </div>
      </section>

      {/* Key facts */}
      <section className="py-8 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {facts.map((fact, idx) => (
              <div key={idx} className="flex items-center gap-4 p-4 bg-[#F9F8F4] rounded-xl">
                <div className="w-12 h-12 bg-[#2C4A3B] rounded-full flex items-center justify-center flex-shrink-0">
                  <fact.icon className="text-white" size={22} />
                </div>
                <div>
                  <div className="text-xs text-gray-500 font-medium uppercase tracking-wide">{fact.label}</div>
                  <div className="text-sm font-bold text-[#2C4A3B] leading-snug">{fact.value}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Challenge + What it does */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6 flex flex-col gap-12">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-[#2C4A3B] mb-4">{t(`${base}.challengeTitle`)}</h2>
            <p className="text-lg text-gray-700 leading-relaxed">{t(`${base}.challenge`)}</p>
          </div>
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-[#2C4A3B] mb-4">{t(`${base}.whatTitle`)}</h2>
            <p className="text-lg text-gray-700 leading-relaxed">{t(`${base}.what`)}</p>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-16 bg-[#F9F8F4]">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-[#2C4A3B] mb-8">{t(`${base}.resultsTitle`)}</h2>
          <div className="grid md:grid-cols-2 gap-5">
            {resultList.map((result, idx) => (
              <div key={idx} className="flex items-start gap-3 bg-white p-5 rounded-xl border border-gray-100">
                <CheckCircle className="text-[#2C4A3B] flex-shrink-0 mt-0.5" size={22} />
                <p className="text-gray-700">{result}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 bg-white border-l-4 border-[#D4A056] p-6 rounded-r-xl">
            <p className="font-bold text-[#2C4A3B] mb-1">{t('packageDetail.sharedTitle')}</p>
            <p className="text-gray-700 text-sm">{t('packageDetail.sharedText')}</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-br from-[#2C4A3B] to-[#1a2b23] text-white">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">{t('packageDetail.ctaTitle')}</h2>
          <p className="text-lg mb-8 opacity-90">{t('packageDetail.ctaText')}</p>
          <Link
            to="/support"
            className="inline-flex items-center gap-2 bg-[#D4A056] text-white px-8 py-4 rounded-lg font-bold hover:bg-opacity-90 transition-all"
          >
            {t('packageDetail.ctaButton')} <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      {/* Other projects */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-[#2C4A3B] mb-8">{t('packageDetail.otherProjects')}</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {others.map((other) => {
              const OtherIcon = other.icon;
              return (
                <Link
                  key={other.slug}
                  to={`/projects/${other.slug}`}
                  className="group bg-[#F9F8F4] p-6 rounded-2xl border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all"
                >
                  <div className="w-12 h-12 bg-[#D4A056]/20 rounded-full flex items-center justify-center mb-4">
                    <OtherIcon className="text-[#D4A056]" size={22} />
                  </div>
                  <h3 className="font-bold text-[#2C4A3B] mb-1 group-hover:text-[#D4A056] transition-colors">
                    {t(`packages.${other.slug}.title`)}
                  </h3>
                  <span className="text-xs font-bold text-[#D4A056]">{formatCHF(other.amount)}</span>
                </Link>
              );
            })}
          </div>
          <div className="mt-8">
            <Link to="/projects" className="inline-flex items-center gap-2 text-[#2C4A3B] font-bold hover:text-[#D4A056] transition-colors">
              <Award size={18} /> {t('packageDetail.backToProjects')}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectDetail;
