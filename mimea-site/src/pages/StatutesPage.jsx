import { useTranslation } from 'react-i18next';

const StatutesPage = () => {
  const { t } = useTranslation();

  const articles = [
    { key: 'name', article: '1' },
    { key: 'seat', article: '2' },
    { key: 'purpose', article: '3' },
    { key: 'membership', article: '5' },
    { key: 'organs', article: '8' },
    { key: 'assembly', article: '9' },
    { key: 'board', article: '12' },
    { key: 'finances', article: '16' },
    { key: 'dissolution', article: '21' },
  ];

  return (
    <div className="min-h-screen bg-[#F9F8F4]">
      <section className="relative py-32 bg-gradient-to-br from-[#2C4A3B] to-[#1a2b23]">
        <div className="container mx-auto px-6 relative z-10">
          <h1 className="text-4xl font-bold text-white text-center">{t('statutesPage.title')}</h1>
          <div className="w-20 h-1 bg-[#D4A056] mx-auto mt-6"></div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-6 max-w-3xl">
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-sm">
            <p className="text-gray-700 leading-relaxed mb-8">{t('statutesPage.intro')}</p>

            <div className="space-y-6">
              {articles.map(({ key, article }) => (
                <div key={key} className="border-l-4 border-[#D4A056] pl-6">
                  <h3 className="text-lg font-bold text-[#2C4A3B] mb-1">
                    Art. {article}: {t(`statutesPage.${key}Title`)}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">{t(`statutesPage.${key}Text`)}</p>
                </div>
              ))}
            </div>

            <div className="mt-10 p-6 bg-[#F9F8F4] rounded-xl">
              <p className="text-gray-600 text-sm">{t('statutesPage.fullVersion')}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default StatutesPage;
