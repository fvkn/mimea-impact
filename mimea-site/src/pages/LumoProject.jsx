import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { MapPin, Calendar, DollarSign, Users, TrendingUp, Award, CheckCircle, ExternalLink } from 'lucide-react';
import { useEffect } from 'react';

const LumoProject = () => {
  const { t } = useTranslation();

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

  return (
    <div className="min-h-screen bg-[#F9F8F4]">
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
        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
        }
        .observe-fade {
          opacity: 0;
        }
      `}</style>

      {/* Hero Section */}
      <section className="relative h-[60vh]">
        <div className="absolute inset-0 z-0">
          <img
            src="/ecolodge.jpg"
            alt="Lumo Project"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#2C4A3B]/85 via-[#2C4A3B]/60 to-transparent"></div>
        </div>
        <div className="container mx-auto px-6 relative z-10 h-full flex items-center">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 animate-fade-in-up">
              {t('lumoDetail.title')}
            </h1>
          </div>
        </div>
      </section>

      {/* Key Info Cards */}
      <section className="py-8 bg-white border-b border-gray-100">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="observe-fade flex items-center gap-4 p-6 bg-gradient-to-br from-[#F9F8F4] to-white rounded-2xl hover:shadow-xl transition-all duration-300 border border-[#2C4A3B]/5 transform hover:-translate-y-1">
              <div className="w-14 h-14 bg-gradient-to-br from-[#2C4A3B] to-[#1a2b23] rounded-full flex items-center justify-center shadow-lg">
                <MapPin className="text-white" size={26} />
              </div>
              <div>
                <div className="text-sm text-gray-600 font-medium mb-1">{t('projectDetail.location')}</div>
                <div className="text-lg font-bold text-[#2C4A3B]">{t('lumoDetail.location')}</div>
              </div>
            </div>

            <div className="observe-fade flex items-center gap-4 p-6 bg-gradient-to-br from-[#F9F8F4] to-white rounded-2xl hover:shadow-xl transition-all duration-300 border border-[#2C4A3B]/5 transform hover:-translate-y-1" style={{ animationDelay: '0.1s' }}>
              <div className="w-14 h-14 bg-gradient-to-br from-[#D4A056] to-[#c4904a] rounded-full flex items-center justify-center shadow-lg">
                <Calendar className="text-white" size={26} />
              </div>
              <div>
                <div className="text-sm text-gray-600 font-medium mb-1">{t('projectDetail.duration')}</div>
                <div className="text-lg font-bold text-[#2C4A3B]">{t('lumoDetail.duration')}</div>
              </div>
            </div>

            <div className="observe-fade flex items-center gap-4 p-6 bg-gradient-to-br from-[#F9F8F4] to-white rounded-2xl hover:shadow-xl transition-all duration-300 border border-[#2C4A3B]/5 transform hover:-translate-y-1" style={{ animationDelay: '0.2s' }}>
              <div className="w-14 h-14 bg-gradient-to-br from-[#2C4A3B] to-[#1a2b23] rounded-full flex items-center justify-center shadow-lg">
                <DollarSign className="text-white" size={26} />
              </div>
              <div>
                <div className="text-sm text-gray-600 font-medium mb-1">{t('projectDetail.budget')}</div>
                <div className="text-lg font-bold text-[#2C4A3B]">{t('lumoDetail.budget')}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Le Problème / Introduction */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="observe-fade text-3xl font-bold text-[#2C4A3B] mb-6">{t('lumoDetail.challengeTitle')}</h2>
          <p className="observe-fade text-lg text-gray-700 leading-relaxed mb-4" style={{ animationDelay: '0.1s' }}>
            {t('lumoDetail.challengePara1')}
          </p>
          <p className="observe-fade text-gray-700 leading-relaxed mb-6" style={{ animationDelay: '0.2s' }}>
            {t('lumoDetail.challengePara2')}
          </p>
          <div className="observe-fade bg-gradient-to-r from-[#D4A056]/10 to-[#F9F8F4] border-l-4 border-[#D4A056] p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300" style={{ animationDelay: '0.3s' }}>
            <p className="text-[#2C4A3B] font-bold mb-3 text-lg">{t('lumoDetail.challengeBoxTitle')}</p>
            <p className="text-gray-700 leading-relaxed">
              {t('lumoDetail.challengeBoxText')}
            </p>
          </div>
        </div>
      </section>

      {/* Approach - Three Pillars */}
      <section className="py-16 bg-[#F9F8F4]">
        <div className="container mx-auto px-6 max-w-5xl">
          <h2 className="observe-fade text-3xl font-bold text-[#2C4A3B] mb-4 text-center">{t('lumoDetail.approachTitle')}</h2>
          <p className="observe-fade text-center text-gray-600 mb-4 max-w-3xl mx-auto leading-relaxed" style={{ animationDelay: '0.1s' }}>
            {t('lumoDetail.approachSubtitle')}
          </p>
          <p className="observe-fade text-center text-[#D4A056] font-semibold mb-12 max-w-3xl mx-auto text-lg" style={{ animationDelay: '0.2s' }}>
            {t('lumoDetail.approachHighlight')}
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="observe-fade bg-white p-6 rounded-xl shadow-sm border border-gray-100" style={{ animationDelay: '0.3s' }}>
              <div className="w-12 h-12 bg-[#2C4A3B] rounded-full flex items-center justify-center mb-4">
                <span className="text-lg font-bold text-white">1</span>
              </div>
              <h3 className="font-bold text-[#2C4A3B] mb-3">{t('lumoDetail.pillar1')}</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                {t('lumoDetail.pillar1Desc')}
              </p>
              <p className="text-[#2C4A3B] text-sm font-semibold bg-[#F9F8F4] px-3 py-2 rounded-lg">
                {t('lumoDetail.pillar1Benefits')}
              </p>
            </div>

            <div className="observe-fade bg-white p-6 rounded-xl shadow-sm border-2 border-[#D4A056] relative overflow-hidden" style={{ animationDelay: '0.4s' }}>
<div className="w-12 h-12 bg-[#D4A056] rounded-full flex items-center justify-center mb-4 relative z-10">
                <span className="text-lg font-bold text-white">2</span>
              </div>
              <h3 className="font-bold text-[#2C4A3B] mb-3">{t('lumoDetail.pillar2')}</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                {t('lumoDetail.pillar2Desc')}
              </p>
              <p className="text-[#D4A056] text-sm font-semibold bg-[#D4A056]/10 px-3 py-2 rounded-lg">
                {t('lumoDetail.pillar2Benefits')}
              </p>
            </div>

            <div className="observe-fade bg-white p-6 rounded-xl shadow-sm border border-gray-100" style={{ animationDelay: '0.5s' }}>
              <div className="w-12 h-12 bg-[#2C4A3B] rounded-full flex items-center justify-center mb-4">
                <span className="text-lg font-bold text-white">3</span>
              </div>
              <h3 className="font-bold text-[#2C4A3B] mb-3">{t('lumoDetail.pillar3')}</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                {t('lumoDetail.pillar3Desc')}
              </p>
              <p className="text-[#2C4A3B] text-sm font-semibold bg-[#F9F8F4] px-3 py-2 rounded-lg">
                {t('lumoDetail.pillar3Benefits')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Expected Impact */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="observe-fade text-3xl font-bold text-[#2C4A3B] mb-4">{t('lumoDetail.impactTitle')}</h2>
          <p className="observe-fade text-gray-700 mb-10 leading-relaxed text-lg" style={{ animationDelay: '0.1s' }}>
            {t('lumoDetail.impactIntro')}
          </p>

          <div className="observe-fade bg-gradient-to-br from-[#2C4A3B] via-[#2C4A3B] to-[#1a2b23] text-white p-10 rounded-3xl mb-10 shadow-2xl relative overflow-hidden" style={{ animationDelay: '0.2s' }}>
            <div className="absolute top-0 right-0 w-40 h-40 bg-white/5 rounded-full -mr-20 -mt-20"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/5 rounded-full -ml-16 -mb-16"></div>
            <div className="grid md:grid-cols-2 gap-8 relative z-10">
              <div className="transform hover:scale-105 transition-transform duration-300">
                <div className="text-5xl font-bold text-[#D4A056] mb-2">50-60</div>
                <div className="text-lg font-semibold mb-2">{t('lumoDetail.impactJobs')}</div>
                <div className="text-sm opacity-90">{t('lumoDetail.impactJobsDetail')}</div>
              </div>
              <div className="transform hover:scale-105 transition-transform duration-300">
                <div className="text-5xl font-bold text-[#D4A056] mb-2">×9</div>
                <div className="text-lg font-semibold mb-2">{t('lumoDetail.impactRevenue')}</div>
                <div className="text-sm opacity-90">{t('lumoDetail.impactRevenueDetail')}</div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="observe-fade flex items-start gap-4 p-6 bg-gradient-to-br from-[#F9F8F4] to-white rounded-2xl hover:shadow-lg transition-all duration-300 border border-[#2C4A3B]/5" style={{ animationDelay: '0.3s' }}>
              <CheckCircle className="text-[#D4A056] flex-shrink-0 mt-1" size={28} />
              <div>
                <h4 className="font-bold text-[#2C4A3B] mb-2 text-lg">{t('lumoDetail.impact1Title')}</h4>
                <p className="text-gray-600 text-sm leading-relaxed">{t('lumoDetail.impact1Text')}</p>
              </div>
            </div>

            <div className="observe-fade flex items-start gap-4 p-6 bg-gradient-to-br from-[#F9F8F4] to-white rounded-2xl hover:shadow-lg transition-all duration-300 border border-[#2C4A3B]/5" style={{ animationDelay: '0.4s' }}>
              <CheckCircle className="text-[#D4A056] flex-shrink-0 mt-1" size={28} />
              <div>
                <h4 className="font-bold text-[#2C4A3B] mb-2 text-lg">{t('lumoDetail.impact2Title')}</h4>
                <p className="text-gray-600 text-sm leading-relaxed">{t('lumoDetail.impact2Text')}</p>
              </div>
            </div>

            <div className="observe-fade flex items-start gap-4 p-6 bg-gradient-to-br from-[#F9F8F4] to-white rounded-2xl hover:shadow-lg transition-all duration-300 border border-[#2C4A3B]/5" style={{ animationDelay: '0.5s' }}>
              <CheckCircle className="text-[#D4A056] flex-shrink-0 mt-1" size={28} />
              <div>
                <h4 className="font-bold text-[#2C4A3B] mb-2 text-lg">{t('lumoDetail.impact3Title')}</h4>
                <p className="text-gray-600 text-sm leading-relaxed">{t('lumoDetail.impact3Text')}</p>
              </div>
            </div>

            <div className="observe-fade flex items-start gap-4 p-6 bg-gradient-to-br from-[#F9F8F4] to-white rounded-2xl hover:shadow-lg transition-all duration-300 border border-[#2C4A3B]/5" style={{ animationDelay: '0.6s' }}>
              <CheckCircle className="text-[#D4A056] flex-shrink-0 mt-1" size={28} />
              <div>
                <h4 className="font-bold text-[#2C4A3B] mb-2 text-lg">{t('lumoDetail.impact4Title')}</h4>
                <p className="text-gray-600 text-sm leading-relaxed">{t('lumoDetail.impact4Text')}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="py-16 bg-[#F9F8F4]">
        <div className="container mx-auto px-6 max-w-5xl">
          <h2 className="text-3xl font-bold text-[#2C4A3B] mb-8">{t('projectDetail.partners')}</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <Award className="text-[#D4A056] mb-3" size={32} />
              <p className="font-bold text-[#2C4A3B]">{t('lumoDetail.partner1')}</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <Award className="text-[#D4A056] mb-3" size={32} />
              <p className="font-bold text-[#2C4A3B]">{t('lumoDetail.partner2')}</p>
            </div>

            <a href="https://www.ttwcakenya.com/" target="_blank" rel="noopener noreferrer" className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <Award className="text-[#D4A056] mb-3" size={32} />
              <p className="font-bold text-[#2C4A3B]">{t('lumoDetail.partner4')}</p>
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[#2C4A3B] via-[#2C4A3B] to-[#1a2b23] text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -mr-48 -mt-48"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full -ml-32 -mb-32"></div>
        <div className="container mx-auto px-6 text-center max-w-3xl relative z-10">
          <h2 className="text-4xl font-bold mb-6">{t('lumoDetail.ctaTitle')}</h2>
          <p className="text-lg mb-10 opacity-90 leading-relaxed">
            {t('lumoDetail.ctaText')}
          </p>
          <Link to="/support" className="inline-block bg-[#D4A056] text-white px-10 py-4 rounded-xl font-bold hover:bg-opacity-90 hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
            {t('lumoDetail.ctaButton')}
          </Link>
        </div>
      </section>
    </div>
  );
};

export default LumoProject;
