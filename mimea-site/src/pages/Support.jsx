import { useTranslation } from 'react-i18next';
import { Heart, Award, Users, TrendingUp, CheckCircle, Mail } from 'lucide-react';

const Support = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-[#F9F8F4]">
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-br from-[#2C4A3B] to-[#1a2b23]">
        <div className="container mx-auto px-6 relative z-10 text-center">
          <Heart className="w-16 h-16 text-[#D4A056] mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-white mb-6">{t('supportPage.title')}</h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            {t('supportPage.taxDeduction')}
          </p>
        </div>
      </section>

      {/* Why Support Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 max-w-5xl">
          <h2 className="text-3xl font-bold text-[#2C4A3B] mb-12 text-center">{t('supportPage.whySupport')}</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="flex items-start gap-4 p-6 bg-[#F9F8F4] rounded-lg">
              <CheckCircle className="text-[#2C4A3B] flex-shrink-0" size={28} />
              <div>
                <h3 className="font-bold text-[#2C4A3B] mb-2 text-lg">{t('supportPage.reason1')}</h3>
              </div>
            </div>

            <div className="flex items-start gap-4 p-6 bg-[#F9F8F4] rounded-lg">
              <CheckCircle className="text-[#2C4A3B] flex-shrink-0" size={28} />
              <div>
                <h3 className="font-bold text-[#2C4A3B] mb-2 text-lg">{t('supportPage.reason2')}</h3>
              </div>
            </div>

            <div className="flex items-start gap-4 p-6 bg-[#F9F8F4] rounded-lg">
              <CheckCircle className="text-[#2C4A3B] flex-shrink-0" size={28} />
              <div>
                <h3 className="font-bold text-[#2C4A3B] mb-2 text-lg">{t('supportPage.reason3')}</h3>
              </div>
            </div>

            <div className="flex items-start gap-4 p-6 bg-[#F9F8F4] rounded-lg">
              <CheckCircle className="text-[#2C4A3B] flex-shrink-0" size={28} />
              <div>
                <h3 className="font-bold text-[#2C4A3B] mb-2 text-lg">{t('supportPage.reason4')}</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Donation Options */}
      <section className="py-16 bg-[#F9F8F4]">
        <div className="container mx-auto px-6 max-w-5xl">
          <h2 className="text-3xl font-bold text-[#2C4A3B] mb-4 text-center">{t('supportPage.directDonation')}</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Choisissez un projet spécifique ou faites un don libre pour soutenir l'ensemble de nos activités
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {/* Free Donation */}
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200 hover:shadow-lg transition-all">
              <div className="w-12 h-12 bg-[#D4A056]/20 rounded-full flex items-center justify-center mb-4">
                <Heart className="text-[#D4A056]" size={24} />
              </div>
              <h3 className="text-xl font-bold text-[#2C4A3B] mb-2">{t('supportPage.donationOptions.free')}</h3>
              <p className="text-gray-600 text-sm mb-6">
                Soutenez l'ensemble de nos programmes
              </p>
            </div>

            {/* Lumo+ */}
            <div className="bg-white p-8 rounded-lg shadow-sm border-2 border-[#D4A056] hover:shadow-lg transition-all">
              <div className="w-12 h-12 bg-[#D4A056]/20 rounded-full flex items-center justify-center mb-4">
                <Award className="text-[#D4A056]" size={24} />
              </div>
              <h3 className="text-xl font-bold text-[#2C4A3B] mb-2">{t('supportPage.donationOptions.lumo')}</h3>
              <p className="text-gray-600 text-sm mb-6">
                CHF 250'000 - Tourisme & Conservation
              </p>
            </div>

            {/* Moringa */}
            <div className="bg-white p-8 rounded-lg shadow-sm border-2 border-[#D4A056] hover:shadow-lg transition-all">
              <div className="w-12 h-12 bg-[#D4A056]/20 rounded-full flex items-center justify-center mb-4">
                <Users className="text-[#D4A056]" size={24} />
              </div>
              <h3 className="text-xl font-bold text-[#2C4A3B] mb-2">{t('supportPage.donationOptions.moringa')}</h3>
              <p className="text-gray-600 text-sm mb-6">
                CHF 415'000 - Climat, Nutrition & Eau
              </p>
            </div>
          </div>

          {/* Bank Details */}
          <div className="bg-white p-8 rounded-lg shadow-md border border-gray-200">
            <h3 className="text-2xl font-bold text-[#2C4A3B] mb-6 text-center">Coordonnées bancaires</h3>
            <div className="grid md:grid-cols-2 gap-6 text-sm">
              <div>
                <p className="font-semibold text-gray-700 mb-1">Bénéficiaire</p>
                <p className="text-gray-600">Mimea Impact</p>
                <p className="text-gray-600">Webereistrasse 59</p>
                <p className="text-gray-600">8134 Adliswil, Suisse</p>
              </div>
              <div>
                <p className="font-semibold text-gray-700 mb-1">Banque</p>
                <p className="text-gray-600">PostFinance SA</p>
                <p className="text-gray-600 mt-3"><span className="font-semibold">IBAN:</span> [À compléter]</p>
                <p className="text-gray-600"><span className="font-semibold">BIC:</span> POFICHBEXXX</p>
              </div>
            </div>
            <div className="mt-6 p-4 bg-[#D4A056]/10 rounded-lg">
              <p className="text-sm text-gray-700">
                <strong>Note:</strong> Veuillez indiquer le projet que vous souhaitez soutenir dans la communication de paiement
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <TrendingUp className="w-12 h-12 text-[#D4A056] mx-auto mb-6" />
          <h2 className="text-3xl font-bold text-[#2C4A3B] mb-4">{t('supportPage.partnership')}</h2>
          <p className="text-lg text-gray-700 mb-8">
            {t('supportPage.partnershipText')}
          </p>
          <a
            href="mailto:info@mimea-impact.org"
            className="inline-flex items-center gap-2 bg-[#2C4A3B] text-white px-8 py-4 rounded-lg font-bold hover:bg-opacity-90 transition-all"
          >
            <Mail size={20} />
            {t('supportPage.partnershipCTA')}
          </a>
        </div>
      </section>

      {/* Tax Deduction Info */}
      <section className="py-12 bg-[#F9F8F4] border-t border-gray-200">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <Award className="w-10 h-10 text-[#D4A056] mx-auto mb-4" />
          <p className="text-gray-700 font-medium">
            {t('supportPage.taxDeduction')}
          </p>
          <p className="text-sm text-gray-600 mt-2">
            Une attestation de don vous sera envoyée pour votre déclaration d'impôts
          </p>
        </div>
      </section>
    </div>
  );
};

export default Support;
