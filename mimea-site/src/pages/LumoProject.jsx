import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { MapPin, Calendar, DollarSign, Users, TrendingUp, Award, CheckCircle, ExternalLink } from 'lucide-react';

const LumoProject = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-[#F9F8F4]">
      {/* Hero Section */}
      <section className="relative h-[60vh]">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?q=80&w=2071&auto=format&fit=crop"
            alt="Lumo Project"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#2C4A3B]/80 via-[#2C4A3B]/50 to-transparent"></div>
        </div>
        <div className="container mx-auto px-6 relative z-10 h-full flex items-center">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              {t('lumoDetail.title')}
            </h1>
          </div>
        </div>
      </section>

      {/* Key Info Cards */}
      <section className="py-8 bg-white border-b border-gray-200">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="flex items-center gap-4 p-4 bg-[#F9F8F4] rounded-lg">
              <div className="w-12 h-12 bg-[#2C4A3B] rounded-full flex items-center justify-center">
                <MapPin className="text-white" size={24} />
              </div>
              <div>
                <div className="text-sm text-gray-600 font-medium">{t('projectDetail.location')}</div>
                <div className="text-lg font-bold text-[#2C4A3B]">{t('lumoDetail.location')}</div>
              </div>
            </div>

            <div className="flex items-center gap-4 p-4 bg-[#F9F8F4] rounded-lg">
              <div className="w-12 h-12 bg-[#D4A056] rounded-full flex items-center justify-center">
                <Calendar className="text-white" size={24} />
              </div>
              <div>
                <div className="text-sm text-gray-600 font-medium">{t('projectDetail.duration')}</div>
                <div className="text-lg font-bold text-[#2C4A3B]">{t('lumoDetail.duration')}</div>
              </div>
            </div>

            <div className="flex items-center gap-4 p-4 bg-[#F9F8F4] rounded-lg">
              <div className="w-12 h-12 bg-[#2C4A3B] rounded-full flex items-center justify-center">
                <DollarSign className="text-white" size={24} />
              </div>
              <div>
                <div className="text-sm text-gray-600 font-medium">{t('projectDetail.budget')}</div>
                <div className="text-lg font-bold text-[#2C4A3B]">{t('lumoDetail.budget')}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Le Problème / Introduction */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-3xl font-bold text-[#2C4A3B] mb-6">{t('lumoDetail.challengeTitle')}</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            {t('lumoDetail.challengePara1')}
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            {t('lumoDetail.challengePara2')}
          </p>
          <div className="bg-[#F9F8F4] border-l-4 border-[#D4A056] p-6 rounded-lg">
            <p className="text-[#2C4A3B] font-semibold mb-2">{t('lumoDetail.challengeBoxTitle')}</p>
            <p className="text-gray-700">
              {t('lumoDetail.challengeBoxText')}
            </p>
          </div>
        </div>
      </section>

      {/* Approach - Three Pillars */}
      <section className="py-16 bg-[#F9F8F4]">
        <div className="container mx-auto px-6 max-w-5xl">
          <h2 className="text-3xl font-bold text-[#2C4A3B] mb-4 text-center">{t('lumoDetail.approachTitle')}</h2>
          <p className="text-center text-gray-600 mb-4 max-w-3xl mx-auto">
            {t('lumoDetail.approachSubtitle')}
          </p>
          <p className="text-center text-[#D4A056] font-semibold mb-12 max-w-3xl mx-auto">
            {t('lumoDetail.approachHighlight')}
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-[#2C4A3B]/10 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl font-bold text-[#2C4A3B]">1</span>
              </div>
              <h3 className="font-bold text-[#2C4A3B] mb-3 text-lg">{t('lumoDetail.pillar1')}</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-3">
                {t('lumoDetail.pillar1Desc')}
              </p>
              <p className="text-[#2C4A3B] text-sm font-semibold">
                {t('lumoDetail.pillar1Benefits')}
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 ring-2 ring-[#D4A056] ring-opacity-30">
              <div className="w-12 h-12 bg-[#D4A056]/20 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl font-bold text-[#D4A056]">2</span>
              </div>
              <h3 className="font-bold text-[#2C4A3B] mb-3 text-lg">{t('lumoDetail.pillar2')}</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-3">
                {t('lumoDetail.pillar2Desc')}
              </p>
              <p className="text-[#D4A056] text-sm font-semibold">
                {t('lumoDetail.pillar2Benefits')}
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-[#2C4A3B]/10 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl font-bold text-[#2C4A3B]">3</span>
              </div>
              <h3 className="font-bold text-[#2C4A3B] mb-3 text-lg">{t('lumoDetail.pillar3')}</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-3">
                {t('lumoDetail.pillar3Desc')}
              </p>
              <p className="text-[#2C4A3B] text-sm font-semibold">
                {t('lumoDetail.pillar3Benefits')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Expected Impact */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-3xl font-bold text-[#2C4A3B] mb-4">{t('lumoDetail.impactTitle')}</h2>
          <p className="text-gray-700 mb-8 leading-relaxed">
            {t('lumoDetail.impactIntro')}
          </p>

          <div className="bg-gradient-to-br from-[#2C4A3B] to-[#1a2b23] text-white p-8 rounded-xl mb-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <div className="text-4xl font-bold text-[#D4A056] mb-2">50-60</div>
                <div className="text-lg font-semibold mb-1">{t('lumoDetail.impactJobs')}</div>
                <div className="text-sm opacity-80">{t('lumoDetail.impactJobsDetail')}</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-[#D4A056] mb-2">×9</div>
                <div className="text-lg font-semibold mb-1">{t('lumoDetail.impactRevenue')}</div>
                <div className="text-sm opacity-80">{t('lumoDetail.impactRevenueDetail')}</div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex items-start gap-4">
              <CheckCircle className="text-[#2C4A3B] flex-shrink-0 mt-1" size={24} />
              <div>
                <h4 className="font-bold text-[#2C4A3B] mb-2">{t('lumoDetail.impact1Title')}</h4>
                <p className="text-gray-600 text-sm">{t('lumoDetail.impact1Text')}</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <CheckCircle className="text-[#2C4A3B] flex-shrink-0 mt-1" size={24} />
              <div>
                <h4 className="font-bold text-[#2C4A3B] mb-2">{t('lumoDetail.impact2Title')}</h4>
                <p className="text-gray-600 text-sm">{t('lumoDetail.impact2Text')}</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <CheckCircle className="text-[#2C4A3B] flex-shrink-0 mt-1" size={24} />
              <div>
                <h4 className="font-bold text-[#2C4A3B] mb-2">{t('lumoDetail.impact3Title')}</h4>
                <p className="text-gray-600 text-sm">{t('lumoDetail.impact3Text')}</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <CheckCircle className="text-[#2C4A3B] flex-shrink-0 mt-1" size={24} />
              <div>
                <h4 className="font-bold text-[#2C4A3B] mb-2">{t('lumoDetail.impact4Title')}</h4>
                <p className="text-gray-600 text-sm">{t('lumoDetail.impact4Text')}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="py-16 bg-[#F9F8F4]">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-3xl font-bold text-[#2C4A3B] mb-8">{t('projectDetail.partners')}</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 flex items-center justify-center">
              <div className="text-center">
                <Award className="text-[#D4A056] mx-auto mb-3" size={32} />
                <p className="font-bold text-[#2C4A3B]">{t('lumoDetail.partner1')}</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 flex items-center justify-center">
              <div className="text-center">
                <Award className="text-[#D4A056] mx-auto mb-3" size={32} />
                <p className="font-bold text-[#2C4A3B]">{t('lumoDetail.partner2')}</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 flex items-center justify-center">
              <div className="text-center">
                <Award className="text-[#D4A056] mx-auto mb-3" size={32} />
                <p className="font-bold text-[#2C4A3B]">{t('lumoDetail.partner3')}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-[#2C4A3B] to-[#1a2b23] text-white">
        <div className="container mx-auto px-6 text-center max-w-3xl">
          <h2 className="text-3xl font-bold mb-4">{t('lumoDetail.ctaTitle')}</h2>
          <p className="text-lg mb-8 opacity-90">
            {t('lumoDetail.ctaText')}
          </p>
          <Link to="/support" className="inline-block bg-[#D4A056] text-white px-8 py-4 rounded-lg font-bold hover:bg-opacity-90 transition-all">
            {t('lumoDetail.ctaButton')}
          </Link>
        </div>
      </section>
    </div>
  );
};

export default LumoProject;
