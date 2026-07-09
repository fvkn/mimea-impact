import { useTranslation } from 'react-i18next';
import { Heart, Award, TrendingUp, CheckCircle, Mail } from 'lucide-react';

const Support = () => {
  const { t } = useTranslation();
  const reasons = ['reason1', 'reason2', 'reason3', 'reason4'];

  return (
    <div className="min-h-screen bg-[#F9F8F4]">
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-br from-[#2C4A3B] to-[#1a2b23]">
        <div className="max-w-3xl mx-auto px-6 relative z-10 text-center">
          <Heart className="w-16 h-16 text-[#D4A056] mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-white mb-6">{t('supportPage.title')}</h1>
          <p className="text-xl text-white/90">{t('supportPage.taxDeduction')}</p>
        </div>
      </section>

      {/* Why Support Section */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-[#2C4A3B] mb-12 text-center">{t('supportPage.whySupport')}</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {reasons.map((reason) => (
              <div key={reason} className="flex items-start gap-4 p-6 bg-[#F9F8F4] rounded-xl">
                <CheckCircle className="text-[#2C4A3B] flex-shrink-0" size={28} />
                <h3 className="font-bold text-[#2C4A3B] text-lg">{t(`supportPage.${reason}`)}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Donation Options */}
      <section className="py-16 bg-[#F9F8F4]">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-[#2C4A3B] mb-4 text-center">{t('supportPage.directDonation')}</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">{t('supportPage.donationIntro')}</p>

          {/* Bank Details + Swiss QR-bill (e-banking) */}
          <div className="bg-white p-8 rounded-2xl shadow-md border border-gray-200">
            <h3 className="text-2xl font-bold text-[#2C4A3B] mb-6 text-center">{t('supportPage.bankTitle')}</h3>
            <div className="grid md:grid-cols-2 gap-8 items-start">
              {/* Account details */}
              <div className="flex flex-col gap-4 text-sm">
                <div>
                  <p className="font-semibold text-gray-700 mb-1">{t('supportPage.beneficiary')}</p>
                  <p className="text-gray-600">Mimea Impact</p>
                  <p className="text-gray-600">Webereistrasse 59</p>
                  <p className="text-gray-600">8134 Adliswil</p>
                </div>
                <div>
                  <p className="font-semibold text-gray-700 mb-1">{t('supportPage.bank')}</p>
                  <p className="text-gray-600">Zürcher Kantonalbank</p>
                </div>
                <div>
                  <p className="font-semibold text-gray-700 mb-1">{t('supportPage.iban')}</p>
                  <p className="text-gray-700 font-mono tracking-wide">CH91 0070 0114 9053 9509 1</p>
                </div>
              </div>
              {/* QR code */}
              <div className="flex flex-col items-center text-center bg-[#F9F8F4] rounded-xl p-6">
                <p className="font-semibold text-[#2C4A3B] mb-1">{t('supportPage.qrTitle')}</p>
                <p className="text-sm text-gray-600 mb-4">{t('supportPage.qrText')}</p>
                <div className="bg-white p-3 rounded-lg shadow-sm">
                  <img src="/payment-qr.svg" alt="E-Banking QR" width="192" height="192" className="w-48 h-48" />
                </div>
              </div>
            </div>
            <div className="mt-6 p-4 bg-[#D4A056]/10 rounded-lg">
              <p className="text-sm text-gray-700">
                <strong>Note:</strong> {t('supportPage.bankNote')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <TrendingUp className="w-12 h-12 text-[#D4A056] mx-auto mb-6" />
          <h2 className="text-3xl font-bold text-[#2C4A3B] mb-4">{t('supportPage.partnership')}</h2>
          <p className="text-lg text-gray-700 mb-8">{t('supportPage.partnershipText')}</p>
          <a
            href="mailto:info@mimea-impact.ch"
            className="inline-flex items-center gap-2 bg-[#2C4A3B] text-white px-8 py-4 rounded-lg font-bold hover:bg-opacity-90 transition-all"
          >
            <Mail size={20} />
            {t('supportPage.partnershipCTA')}
          </a>
        </div>
      </section>

      {/* Tax Deduction Info */}
      <section className="py-12 bg-[#F9F8F4] border-t border-gray-200">
        <div className="max-w-3xl mx-auto px-6">
          <div className="bg-gradient-to-br from-[#2C4A3B] to-[#1a2b23] text-white rounded-2xl p-8 text-center shadow-lg">
            <Award className="w-12 h-12 text-[#D4A056] mx-auto mb-4" />
            <p className="text-2xl md:text-3xl font-bold mb-3">{t('supportPage.taxDeductible')}</p>
            <p className="text-white/90">{t('supportPage.taxDeduction')}. {t('supportPage.taxDeductionNote')}</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Support;
