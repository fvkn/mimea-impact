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

      {/* Introduction Section */}
      <section className="py-12 bg-gradient-to-b from-white to-[#F9F8F4]">
        <div className="container mx-auto px-6 max-w-4xl">
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            <span className="font-bold text-[#2C4A3B]">Lumo+</span> lie les moyens de subsistance communautaires, la conservation de la faune et le tourisme durable au Kenya. Une initiative intégrée qui transforme les défis de coexistence en opportunités économiques.
          </p>
        </div>
      </section>

      {/* Challenge Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-3xl font-bold text-[#2C4A3B] mb-6">{t('projectDetail.challenge')}</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            {t('lumoDetail.challengeText')}
          </p>
          <p className="text-gray-600 leading-relaxed">
            Les communautés supportent les coûts sociaux et économiques de la protection de la faune, tout en bénéficiant peu des revenus du tourisme.
          </p>
        </div>
      </section>

      {/* Approach - Three Pillars */}
      <section className="py-16 bg-[#F9F8F4]">
        <div className="container mx-auto px-6 max-w-5xl">
          <h2 className="text-3xl font-bold text-[#2C4A3B] mb-4 text-center">Une approche intégrée en trois piliers</h2>
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            Chaque pilier génère des revenus et renforce la durabilité à long terme
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-[#2C4A3B]/10 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl font-bold text-[#2C4A3B]">1</span>
              </div>
              <h3 className="font-bold text-[#2C4A3B] mb-3 text-lg">{t('lumoDetail.pillar1')}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Opérations générant revenus et emplois dès la première phase, dirigées par un ranger expérimenté et primé
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 ring-2 ring-[#D4A056] ring-opacity-30">
              <div className="w-12 h-12 bg-[#D4A056]/20 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl font-bold text-[#D4A056]">2</span>
              </div>
              <h3 className="font-bold text-[#2C4A3B] mb-3 text-lg">{t('lumoDetail.pillar2')}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Lodge à faible impact environnemental avec énergies renouvelables, récupération d'eau et élimination du plastique
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-[#2C4A3B]/10 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl font-bold text-[#2C4A3B]">3</span>
              </div>
              <h3 className="font-bold text-[#2C4A3B] mb-3 text-lg">{t('lumoDetail.pillar3')}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Culture de tournesol, boulangerie communautaire et apiculture pour la sécurité alimentaire et la coexistence avec la faune
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Expected Impact */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-3xl font-bold text-[#2C4A3B] mb-8">{t('projectDetail.impact')}</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex items-start gap-4">
              <CheckCircle className="text-[#2C4A3B] flex-shrink-0" size={24} />
              <div>
                <h4 className="font-bold text-[#2C4A3B] mb-1">{t('lumoDetail.impact1')}</h4>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <CheckCircle className="text-[#2C4A3B] flex-shrink-0" size={24} />
              <div>
                <h4 className="font-bold text-[#2C4A3B] mb-1">{t('lumoDetail.impact2')}</h4>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <CheckCircle className="text-[#2C4A3B] flex-shrink-0" size={24} />
              <div>
                <h4 className="font-bold text-[#2C4A3B] mb-1">{t('lumoDetail.impact3')}</h4>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <CheckCircle className="text-[#2C4A3B] flex-shrink-0" size={24} />
              <div>
                <h4 className="font-bold text-[#2C4A3B] mb-1">{t('lumoDetail.impact4')}</h4>
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
          <h2 className="text-3xl font-bold mb-4">Soutenez le Project Lumo+</h2>
          <p className="text-lg mb-8 opacity-90">
            Votre soutien permet de créer des emplois locaux durables et de promouvoir la coexistence harmonieuse entre les communautés et la faune.
          </p>
          <Link to="/support" className="inline-block bg-[#D4A056] text-white px-8 py-4 rounded-lg font-bold hover:bg-opacity-90 transition-all">
            Faire un don maintenant
          </Link>
        </div>
      </section>
    </div>
  );
};

export default LumoProject;
