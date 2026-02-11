import { useTranslation } from 'react-i18next';
import { Mail, MapPin, Phone } from 'lucide-react';

const Contact = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-[#F9F8F4]">
      {/* Hero Section */}
      <section className="relative py-32">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?q=80&w=2072&auto=format&fit=crop"
            alt="Contact"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#2C4A3B]/70 via-[#2C4A3B]/40 to-transparent"></div>
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <h1 className="text-5xl font-bold text-white mb-6">{t('nav.contact')}</h1>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Address */}
            <div>
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 bg-[#2C4A3B]/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin className="text-[#2C4A3B]" size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-[#2C4A3B] mb-3 text-xl">Adresse</h3>
                  <p className="text-gray-700 whitespace-pre-line">
                    {t('footer.address')}
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Button */}
            <div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#D4A056]/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <Mail className="text-[#D4A056]" size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-[#2C4A3B] mb-3 text-xl">Contactez-nous</h3>
                  <p className="text-gray-700 mb-6">
                    Pour toute question ou demande d'information, n'hésitez pas à nous contacter.
                  </p>
                  <a
                    href="mailto:info@mimeaimpact.org"
                    className="inline-flex items-center gap-2 bg-[#2C4A3B] text-white px-6 py-3 rounded-lg font-bold hover:bg-opacity-90 transition-all"
                  >
                    <Mail size={20} />
                    Contact
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
