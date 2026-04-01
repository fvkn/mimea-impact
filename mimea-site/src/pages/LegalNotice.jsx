import { useTranslation } from 'react-i18next';

const LegalNotice = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-[#F9F8F4]">
      <section className="relative py-32 bg-gradient-to-br from-[#2C4A3B] to-[#1a2b23]">
        <div className="container mx-auto px-6 relative z-10">
          <h1 className="text-4xl font-bold text-white text-center">{t('legalPage.title')}</h1>
          <div className="w-20 h-1 bg-[#D4A056] mx-auto mt-6"></div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-6 max-w-3xl">
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-sm space-y-8">
            {/* Organisation */}
            <div>
              <h2 className="text-2xl font-bold text-[#2C4A3B] mb-4">{t('legalPage.org')}</h2>
              <div className="text-gray-700 leading-relaxed space-y-1">
                <p className="font-semibold">Mimea Impact</p>
                <p>Webereistrasse 59</p>
                <p>8134 Adliswil</p>
                <p>{t('legalPage.country')}</p>
              </div>
            </div>

            {/* Legal form */}
            <div>
              <h2 className="text-2xl font-bold text-[#2C4A3B] mb-4">{t('legalPage.legalForm')}</h2>
              <p className="text-gray-700 leading-relaxed">{t('legalPage.legalFormText')}</p>
            </div>

            {/* Board */}
            <div>
              <h2 className="text-2xl font-bold text-[#2C4A3B] mb-4">{t('legalPage.board')}</h2>
              <ul className="text-gray-700 space-y-1">
                <li>Evelyn Graf – {t('legalPage.president')}</li>
                <li>Charly Landry, lic. iur. – {t('legalPage.member')}</li>
                <li>Thomas Wegmann – {t('legalPage.member')}</li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h2 className="text-2xl font-bold text-[#2C4A3B] mb-4">{t('legalPage.contact')}</h2>
              <p className="text-gray-700">info@mimea-impact.ch</p>
            </div>

            {/* Liability */}
            <div>
              <h2 className="text-2xl font-bold text-[#2C4A3B] mb-4">{t('legalPage.liability')}</h2>
              <p className="text-gray-700 leading-relaxed">{t('legalPage.liabilityText')}</p>
            </div>

            {/* Copyright */}
            <div>
              <h2 className="text-2xl font-bold text-[#2C4A3B] mb-4">{t('legalPage.copyright')}</h2>
              <p className="text-gray-700 leading-relaxed">{t('legalPage.copyrightText')}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LegalNotice;
