import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { MapPin, Calendar, DollarSign, Users, Droplets, Sprout, School, Award, CheckCircle } from 'lucide-react';

const MoringaProject = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-[#F9F8F4]">
      {/* Hero Section */}
      <section className="relative h-[60vh]">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1560493676-04071c5f467b?q=80&w=2074&auto=format&fit=crop"
            alt="Moringa Project"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#2C4A3B]/80 via-[#2C4A3B]/50 to-transparent"></div>
        </div>
        <div className="container mx-auto px-6 relative z-10 h-full flex items-center">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              {t('moringaDetail.title')}
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
                <div className="text-lg font-bold text-[#2C4A3B]">{t('moringaDetail.location')}</div>
              </div>
            </div>

            <div className="flex items-center gap-4 p-4 bg-[#F9F8F4] rounded-lg">
              <div className="w-12 h-12 bg-[#D4A056] rounded-full flex items-center justify-center">
                <Calendar className="text-white" size={24} />
              </div>
              <div>
                <div className="text-sm text-gray-600 font-medium">{t('projectDetail.duration')}</div>
                <div className="text-lg font-bold text-[#2C4A3B]">{t('moringaDetail.duration')}</div>
              </div>
            </div>

            <div className="flex items-center gap-4 p-4 bg-[#F9F8F4] rounded-lg">
              <div className="w-12 h-12 bg-[#2C4A3B] rounded-full flex items-center justify-center">
                <DollarSign className="text-white" size={24} />
              </div>
              <div>
                <div className="text-sm text-gray-600 font-medium">{t('projectDetail.budget')}</div>
                <div className="text-lg font-bold text-[#2C4A3B]">{t('moringaDetail.budget')}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Le Problème / Introduction */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-3xl font-bold text-[#2C4A3B] mb-6">{t('moringaDetail.challengeTitle')}</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            {t('moringaDetail.challengePara1')}
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            {t('moringaDetail.challengePara2')}
          </p>
          <div className="bg-[#F9F8F4] border-l-4 border-[#D4A056] p-6 rounded-lg">
            <p className="text-[#2C4A3B] font-semibold mb-2">{t('moringaDetail.challengeBoxTitle')}</p>
            <p className="text-gray-700">
              {t('moringaDetail.challengeBoxText')}
            </p>
          </div>
        </div>
      </section>

      {/* Approach - Six Components */}
      <section className="py-16 bg-[#F9F8F4]">
        <div className="container mx-auto px-6 max-w-5xl">
          <h2 className="text-3xl font-bold text-[#2C4A3B] mb-4">{t('moringaDetail.approachTitle')}</h2>
          <p className="text-gray-700 mb-4 max-w-3xl mx-auto">
            {t('moringaDetail.approachSubtitle')}
          </p>
          <p className="text-[#D4A056] font-semibold mb-8 max-w-3xl mx-auto">
            {t('moringaDetail.approachHighlight')}
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#2C4A3B]/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Sprout className="text-[#2C4A3B]" size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-[#2C4A3B] mb-2">A. {t('moringaDetail.componentA')}</h3>
                  <p className="text-gray-600 text-sm">{t('moringaDetail.componentADesc')}</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#D4A056]/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <Sprout className="text-[#D4A056]" size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-[#2C4A3B] mb-2">B. {t('moringaDetail.componentB')}</h3>
                  <p className="text-gray-600 text-sm">{t('moringaDetail.componentBDesc')}</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#2C4A3B]/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Users className="text-[#2C4A3B]" size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-[#2C4A3B] mb-2">C. {t('moringaDetail.componentC')}</h3>
                  <p className="text-gray-600 text-sm">{t('moringaDetail.componentCDesc')}</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#D4A056]/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <Droplets className="text-[#D4A056]" size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-[#2C4A3B] mb-2">D. {t('moringaDetail.componentD')}</h3>
                  <p className="text-gray-600 text-sm">{t('moringaDetail.componentDDesc')}</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#2C4A3B]/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Award className="text-[#2C4A3B]" size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-[#2C4A3B] mb-2">E. {t('moringaDetail.componentE')}</h3>
                  <p className="text-gray-600 text-sm">{t('moringaDetail.componentEDesc')}</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#D4A056]/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <School className="text-[#D4A056]" size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-[#2C4A3B] mb-2">F. {t('moringaDetail.componentF')}</h3>
                  <p className="text-gray-600 text-sm">{t('moringaDetail.componentFDesc')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Expected Impact */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-3xl font-bold text-[#2C4A3B] mb-4">{t('moringaDetail.impactTitle')}</h2>
          <p className="text-gray-700 mb-8 leading-relaxed">
            {t('moringaDetail.impactIntro')}
          </p>

          <div className="bg-gradient-to-br from-[#2C4A3B] to-[#1a2b23] text-white p-8 rounded-xl mb-8">
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <div className="text-4xl font-bold text-[#D4A056] mb-2">2'500</div>
                <div className="text-lg font-semibold mb-1">{t('moringaDetail.impactHouseholds')}</div>
                <div className="text-sm opacity-80">{t('moringaDetail.impactHouseholdsDetail')}</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-[#D4A056] mb-2">12</div>
                <div className="text-lg font-semibold mb-1">{t('moringaDetail.impactSchools')}</div>
                <div className="text-sm opacity-80">{t('moringaDetail.impactSchoolsDetail')}</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-[#D4A056] mb-2">10</div>
                <div className="text-lg font-semibold mb-1">{t('moringaDetail.impactWater')}</div>
                <div className="text-sm opacity-80">{t('moringaDetail.impactWaterDetail')}</div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex items-start gap-4">
              <CheckCircle className="text-[#2C4A3B] flex-shrink-0 mt-1" size={24} />
              <div>
                <h4 className="font-bold text-[#2C4A3B] mb-2">{t('moringaDetail.impact1Title')}</h4>
                <p className="text-gray-600 text-sm">{t('moringaDetail.impact1Text')}</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <CheckCircle className="text-[#2C4A3B] flex-shrink-0 mt-1" size={24} />
              <div>
                <h4 className="font-bold text-[#2C4A3B] mb-2">{t('moringaDetail.impact2Title')}</h4>
                <p className="text-gray-600 text-sm">{t('moringaDetail.impact2Text')}</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <CheckCircle className="text-[#2C4A3B] flex-shrink-0 mt-1" size={24} />
              <div>
                <h4 className="font-bold text-[#2C4A3B] mb-2">{t('moringaDetail.impact3Title')}</h4>
                <p className="text-gray-600 text-sm">{t('moringaDetail.impact3Text')}</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <CheckCircle className="text-[#2C4A3B] flex-shrink-0 mt-1" size={24} />
              <div>
                <h4 className="font-bold text-[#2C4A3B] mb-2">{t('moringaDetail.impact4Title')}</h4>
                <p className="text-gray-600 text-sm">{t('moringaDetail.impact4Text')}</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <CheckCircle className="text-[#2C4A3B] flex-shrink-0 mt-1" size={24} />
              <div>
                <h4 className="font-bold text-[#2C4A3B] mb-2">{t('moringaDetail.impact5Title')}</h4>
                <p className="text-gray-600 text-sm">{t('moringaDetail.impact5Text')}</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <CheckCircle className="text-[#2C4A3B] flex-shrink-0 mt-1" size={24} />
              <div>
                <h4 className="font-bold text-[#2C4A3B] mb-2">{t('moringaDetail.impact6Title')}</h4>
                <p className="text-gray-600 text-sm">{t('moringaDetail.impact6Text')}</p>
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
              <p className="font-bold text-[#2C4A3B]">{t('moringaDetail.partner1')}</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <Award className="text-[#D4A056] mb-3" size={32} />
              <p className="font-bold text-[#2C4A3B]">{t('moringaDetail.partner2')}</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <Award className="text-[#D4A056] mb-3" size={32} />
              <p className="font-bold text-[#2C4A3B]">{t('moringaDetail.partner3')}</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <Award className="text-[#D4A056] mb-3" size={32} />
              <p className="font-bold text-[#2C4A3B]">{t('moringaDetail.partner4')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-[#2C4A3B] to-[#1a2b23] text-white">
        <div className="container mx-auto px-6 text-center max-w-3xl">
          <h2 className="text-3xl font-bold mb-4">{t('moringaDetail.ctaTitle')}</h2>
          <p className="text-lg mb-8 opacity-90">
            {t('moringaDetail.ctaText')}
          </p>
          <Link to="/support" className="inline-block bg-[#D4A056] text-white px-8 py-4 rounded-lg font-bold hover:bg-opacity-90 transition-all">
            {t('moringaDetail.ctaButton')}
          </Link>
        </div>
      </section>
    </div>
  );
};

export default MoringaProject;
