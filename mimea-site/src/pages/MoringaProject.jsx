import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { MapPin, Calendar, DollarSign, Users, Wheat, Heart, Drumstick, Flame, Leaf, CheckCircle, Award, ArrowRight, Recycle } from 'lucide-react';

const MoringaProject = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-[#F9F8F4]">
      {/* Hero Section */}
      <section className="relative h-[60vh]">
        <div className="absolute inset-0 z-0">
          <img
            src="/moringa-field.jpg"
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

      {/* The Challenge */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-3xl font-bold text-[#2C4A3B] mb-6">{t('moringaDetail.challengeTitle')}</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            {t('moringaDetail.challengePara1')}
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            {t('moringaDetail.challengePara2')}
          </p>

          {/* Challenge Stats */}
          <div className="grid md:grid-cols-3 gap-4 mb-6">
            <div className="bg-[#F9F8F4] p-5 rounded-lg text-center">
              <div className="text-3xl font-bold text-[#D4A056] mb-1">30%+</div>
              <div className="text-sm text-gray-700">{t('moringaDetail.statStunting')}</div>
            </div>
            <div className="bg-[#F9F8F4] p-5 rounded-lg text-center">
              <div className="text-3xl font-bold text-[#D4A056] mb-1">47.5%</div>
              <div className="text-sm text-gray-700">{t('moringaDetail.statPoverty')}</div>
            </div>
            <div className="bg-[#F9F8F4] p-5 rounded-lg text-center">
              <div className="text-3xl font-bold text-[#D4A056] mb-1">&lt;10</div>
              <div className="text-sm text-gray-700">{t('moringaDetail.statProcessing')}</div>
            </div>
          </div>

          <div className="bg-[#F9F8F4] border-l-4 border-[#D4A056] p-6 rounded-lg">
            <p className="text-[#2C4A3B] font-semibold mb-2">{t('moringaDetail.challengeBoxTitle')}</p>
            <p className="text-gray-700">
              {t('moringaDetail.challengeBoxText')}
            </p>
          </div>
        </div>
      </section>

      {/* The Circular Economy Approach */}
      <section className="py-16 bg-[#F9F8F4]">
        <div className="container mx-auto px-6 max-w-5xl">
          <h2 className="text-3xl font-bold text-[#2C4A3B] mb-4">{t('moringaDetail.approachTitle')}</h2>
          <p className="text-gray-700 mb-4 max-w-3xl">
            {t('moringaDetail.approachSubtitle')}
          </p>
          <p className="text-[#D4A056] font-semibold mb-8 max-w-3xl">
            {t('moringaDetail.approachHighlight')}
          </p>

          {/* Circular Flow Diagram */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden mb-8">
            <div className="grid grid-cols-4 gap-0 text-sm font-bold text-[#2C4A3B] bg-[#2C4A3B]/5 p-4">
              <div>{t('moringaDetail.tableRawMaterial')}</div>
              <div>{t('moringaDetail.tableProduct')}</div>
              <div>{t('moringaDetail.tableUse')}</div>
              <div>{t('moringaDetail.tableByproduct')}</div>
            </div>
            {[
              { key: 'circularRow1' },
              { key: 'circularRow2' },
              { key: 'circularRow3' },
              { key: 'circularRow4' },
            ].map((row, idx) => (
              <div key={idx} className={`grid grid-cols-4 gap-0 text-sm p-4 ${idx % 2 === 0 ? 'bg-white' : 'bg-[#F9F8F4]'}`}>
                <div className="text-gray-700">{t(`moringaDetail.${row.key}Col1`)}</div>
                <div className="text-gray-700">{t(`moringaDetail.${row.key}Col2`)}</div>
                <div className="text-gray-700">{t(`moringaDetail.${row.key}Col3`)}</div>
                <div className="text-gray-700 flex items-center gap-1">
                  <Recycle size={14} className="text-[#2C4A3B] flex-shrink-0" />
                  {t(`moringaDetail.${row.key}Col4`)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Five Packages */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 max-w-5xl">
          <h2 className="text-3xl font-bold text-[#2C4A3B] mb-4">{t('moringaDetail.packagesTitle')}</h2>
          <p className="text-gray-700 mb-8 max-w-3xl">
            {t('moringaDetail.packagesSubtitle')}
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Package 1: Child Nutrition */}
            <div className="bg-[#F9F8F4] p-6 rounded-lg border border-gray-100">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#D4A056]/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <Wheat className="text-[#D4A056]" size={24} />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="font-bold text-[#2C4A3B]">{t('moringaDetail.package1')}</h3>
                    <span className="text-xs font-bold text-[#D4A056] bg-[#D4A056]/10 px-2 py-0.5 rounded-full">CHF 30'000</span>
                  </div>
                  <p className="text-gray-600 text-sm">{t('moringaDetail.package1Desc')}</p>
                </div>
              </div>
            </div>

            {/* Package 2: Women's Empowerment */}
            <div className="bg-[#F9F8F4] p-6 rounded-lg border border-gray-100">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#D4A056]/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <Heart className="text-[#D4A056]" size={24} />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="font-bold text-[#2C4A3B]">{t('moringaDetail.package2')}</h3>
                    <span className="text-xs font-bold text-[#D4A056] bg-[#D4A056]/10 px-2 py-0.5 rounded-full">CHF 30'000</span>
                  </div>
                  <p className="text-gray-600 text-sm">{t('moringaDetail.package2Desc')}</p>
                </div>
              </div>
            </div>

            {/* Package 3: Animal Feed */}
            <div className="bg-[#F9F8F4] p-6 rounded-lg border border-gray-100">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#D4A056]/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <Drumstick className="text-[#D4A056]" size={24} />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="font-bold text-[#2C4A3B]">{t('moringaDetail.package3')}</h3>
                    <span className="text-xs font-bold text-[#D4A056] bg-[#D4A056]/10 px-2 py-0.5 rounded-full">CHF 25'000</span>
                  </div>
                  <p className="text-gray-600 text-sm">{t('moringaDetail.package3Desc')}</p>
                </div>
              </div>
            </div>

            {/* Package 4: Community Bakery */}
            <div className="bg-[#F9F8F4] p-6 rounded-lg border border-gray-100">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#D4A056]/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <Flame className="text-[#D4A056]" size={24} />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="font-bold text-[#2C4A3B]">{t('moringaDetail.package4')}</h3>
                    <span className="text-xs font-bold text-[#D4A056] bg-[#D4A056]/10 px-2 py-0.5 rounded-full">CHF 25'000</span>
                  </div>
                  <p className="text-gray-600 text-sm">{t('moringaDetail.package4Desc')}</p>
                </div>
              </div>
            </div>

            {/* Package 5: Organic Certification */}
            <div className="bg-[#F9F8F4] p-6 rounded-lg border border-gray-100">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#D4A056]/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <Leaf className="text-[#D4A056]" size={24} />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="font-bold text-[#2C4A3B]">{t('moringaDetail.package5')}</h3>
                    <span className="text-xs font-bold text-[#D4A056] bg-[#D4A056]/10 px-2 py-0.5 rounded-full">CHF 20'000</span>
                  </div>
                  <p className="text-gray-600 text-sm">{t('moringaDetail.package5Desc')}</p>
                </div>
              </div>
            </div>

            {/* Programme Management */}
            <div className="bg-[#F9F8F4] p-6 rounded-lg border border-gray-100">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#D4A056]/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <Users className="text-[#D4A056]" size={24} />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="font-bold text-[#2C4A3B]">{t('moringaDetail.packageMgmt')}</h3>
                    <span className="text-xs font-bold text-[#D4A056] bg-[#D4A056]/10 px-2 py-0.5 rounded-full">CHF 20'000</span>
                  </div>
                  <p className="text-gray-600 text-sm">{t('moringaDetail.packageMgmtDesc')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Expected Impact */}
      <section className="py-16 bg-[#F9F8F4]">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-3xl font-bold text-[#2C4A3B] mb-4">{t('moringaDetail.impactTitle')}</h2>
          <p className="text-gray-700 mb-8 leading-relaxed">
            {t('moringaDetail.impactIntro')}
          </p>

          <div className="bg-gradient-to-br from-[#2C4A3B] to-[#1a2b23] text-white p-8 rounded-xl mb-8">
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <div className="text-4xl font-bold text-[#D4A056] mb-2">~750</div>
                <div className="text-lg font-semibold mb-1">{t('moringaDetail.impactDirect')}</div>
                <div className="text-sm opacity-80">{t('moringaDetail.impactDirectDetail')}</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-[#D4A056] mb-2">70</div>
                <div className="text-lg font-semibold mb-1">{t('moringaDetail.impactWomen')}</div>
                <div className="text-sm opacity-80">{t('moringaDetail.impactWomenDetail')}</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-[#D4A056] mb-2">400+</div>
                <div className="text-lg font-semibold mb-1">{t('moringaDetail.impactIndirect')}</div>
                <div className="text-sm opacity-80">{t('moringaDetail.impactIndirectDetail')}</div>
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
              <p className="font-bold text-[#2C4A3B] mb-1">{t('moringaDetail.partner1')}</p>
              <p className="text-gray-600 text-sm">{t('moringaDetail.partner1Desc')}</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <Award className="text-[#D4A056] mb-3" size={32} />
              <p className="font-bold text-[#2C4A3B] mb-1">{t('moringaDetail.partner2')}</p>
              <p className="text-gray-600 text-sm">{t('moringaDetail.partner2Desc')}</p>
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
