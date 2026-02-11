import { useTranslation } from 'react-i18next';
import { Mail, Linkedin } from 'lucide-react';

const About = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-[#F9F8F4]">
      {/* Hero Section */}
      <section className="relative py-32">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?q=80&w=2072&auto=format&fit=crop"
            alt="Kenya Community"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#2C4A3B]/70 via-[#2C4A3B]/40 to-transparent"></div>
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <h1 className="text-5xl font-bold text-white mb-6">{t('about.title')}</h1>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 max-w-4xl">
          <p className="text-xl text-gray-700 leading-relaxed mb-6">
            {t('about.intro')}
          </p>
          <p className="text-lg text-gray-600 leading-relaxed">
            {t('about.introText')}
          </p>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-16 bg-[#F9F8F4]">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Mission */}
            <div>
              <h2 className="text-3xl font-bold text-[#2C4A3B] mb-6">{t('about.mission')}</h2>
              <p className="text-gray-700 leading-relaxed">
                {t('about.missionText')}
              </p>
            </div>

            {/* Values */}
            <div>
              <h2 className="text-3xl font-bold text-[#2C4A3B] mb-6">{t('about.values')}</h2>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-[#D4A056] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span className="text-gray-700">{t('about.value1')}</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-[#D4A056] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span className="text-gray-700">{t('about.value2')}</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-[#D4A056] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span className="text-gray-700">{t('about.value3')}</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-[#D4A056] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span className="text-gray-700">{t('about.value4')}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Board Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-4xl font-bold text-[#2C4A3B] mb-4">{t('about.board')}</h2>
          <p className="text-gray-600 mb-10">{t('about.boardIntro')}</p>

          <div className="grid md:grid-cols-3 gap-8">
            {/* President */}
            <div className="bg-[#F9F8F4] p-6 rounded-lg border-l-4 border-[#D4A056]">
              <h3 className="text-xl font-bold text-[#2C4A3B] mb-2">
                {t('about.boardMembers.president')}
              </h3>
              <p className="text-[#D4A056] font-semibold mb-1">
                {t('about.boardMembers.presidentRole')}
              </p>
            </div>

            {/* Member 1 */}
            <div className="bg-[#F9F8F4] p-6 rounded-lg">
              <h3 className="text-xl font-bold text-[#2C4A3B] mb-2">
                {t('about.boardMembers.member1')}
              </h3>
              <p className="text-gray-600 font-semibold">
                {t('about.boardMembers.member1Role')}
              </p>
            </div>

            {/* Member 2 */}
            <div className="bg-[#F9F8F4] p-6 rounded-lg">
              <h3 className="text-xl font-bold text-[#2C4A3B] mb-2">
                {t('about.boardMembers.member2')}
              </h3>
              <p className="text-gray-600 font-semibold">
                {t('about.boardMembers.member2Role')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Project Team Section */}
      <section className="py-16 bg-[#F9F8F4]">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-4xl font-bold text-[#2C4A3B] mb-4">{t('about.team')}</h2>
          <p className="text-gray-600 mb-12">{t('about.teamIntro')}</p>

          <div className="space-y-10">
            {/* Fabrice */}
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
              <div className="flex items-start gap-6">
                <div className="w-24 h-24 bg-gradient-to-br from-[#2C4A3B] to-[#1a2b23] rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-3xl font-bold text-white">
                    {t('about.teamMember1.name').charAt(0)}
                  </span>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-[#2C4A3B] mb-1">
                    {t('about.teamMember1.name')}
                  </h3>
                  <p className="text-[#D4A056] font-semibold mb-4">
                    {t('about.teamMember1.role')}
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    {t('about.teamMember1.bio')}
                  </p>
                </div>
              </div>
            </div>

            {/* Esther */}
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
              <div className="flex items-start gap-6">
                <div className="w-24 h-24 bg-gradient-to-br from-[#D4A056] to-[#b8854a] rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-3xl font-bold text-white">
                    {t('about.teamMember2.name').charAt(0)}
                  </span>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-[#2C4A3B] mb-1">
                    {t('about.teamMember2.name')}
                  </h3>
                  <p className="text-[#D4A056] font-semibold mb-4">
                    {t('about.teamMember2.role')}
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    {t('about.teamMember2.bio')}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Legal Info */}
      <section className="py-12 bg-white border-t border-gray-200">
        <div className="container mx-auto px-6 max-w-4xl">
          <h3 className="text-2xl font-bold text-[#2C4A3B] mb-4">{t('about.legal')}</h3>
          <p className="text-gray-600">{t('about.legalText')}</p>
        </div>
      </section>
    </div>
  );
};

export default About;
