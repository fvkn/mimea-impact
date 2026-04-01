import { useTranslation } from 'react-i18next';

const PrivacyPolicy = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-[#F9F8F4]">
      <section className="relative py-32 bg-gradient-to-br from-[#2C4A3B] to-[#1a2b23]">
        <div className="container mx-auto px-6 relative z-10">
          <h1 className="text-4xl font-bold text-white text-center">{t('privacyPage.title')}</h1>
          <div className="w-20 h-1 bg-[#D4A056] mx-auto mt-6"></div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-6 max-w-3xl">
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-sm space-y-8">
            {/* Responsible */}
            <div>
              <h2 className="text-2xl font-bold text-[#2C4A3B] mb-4">{t('privacyPage.responsible')}</h2>
              <div className="text-gray-700 leading-relaxed space-y-1">
                <p className="font-semibold">Mimea Impact</p>
                <p>Webereistrasse 59, 8134 Adliswil</p>
                <p>info@mimea-impact.ch</p>
              </div>
            </div>

            {/* General */}
            <div>
              <h2 className="text-2xl font-bold text-[#2C4A3B] mb-4">{t('privacyPage.general')}</h2>
              <p className="text-gray-700 leading-relaxed">{t('privacyPage.generalText')}</p>
            </div>

            {/* Data collected */}
            <div>
              <h2 className="text-2xl font-bold text-[#2C4A3B] mb-4">{t('privacyPage.dataCollected')}</h2>
              <p className="text-gray-700 leading-relaxed mb-3">{t('privacyPage.dataCollectedText')}</p>
              <ul className="text-gray-700 space-y-2">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-[#D4A056] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>{t('privacyPage.dataContact')}</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-[#D4A056] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>{t('privacyPage.dataNewsletter')}</span>
                </li>
              </ul>
            </div>

            {/* Cookies */}
            <div>
              <h2 className="text-2xl font-bold text-[#2C4A3B] mb-4">{t('privacyPage.cookies')}</h2>
              <p className="text-gray-700 leading-relaxed">{t('privacyPage.cookiesText')}</p>
            </div>

            {/* Third parties */}
            <div>
              <h2 className="text-2xl font-bold text-[#2C4A3B] mb-4">{t('privacyPage.thirdParties')}</h2>
              <p className="text-gray-700 leading-relaxed">{t('privacyPage.thirdPartiesText')}</p>
            </div>

            {/* Rights */}
            <div>
              <h2 className="text-2xl font-bold text-[#2C4A3B] mb-4">{t('privacyPage.rights')}</h2>
              <p className="text-gray-700 leading-relaxed">{t('privacyPage.rightsText')}</p>
            </div>

            {/* Applicable law */}
            <div>
              <h2 className="text-2xl font-bold text-[#2C4A3B] mb-4">{t('privacyPage.law')}</h2>
              <p className="text-gray-700 leading-relaxed">{t('privacyPage.lawText')}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
