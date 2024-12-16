import { motion } from 'framer-motion';

const legalSections = [
  {
    title: 'Mentions Légales',
    content: [
      {
        subtitle: 'Éditeur du site',
        text: `Pure Energy Coaching App
        Société par Actions Simplifiée (SAS)
        Capital social : 10 000€
        RCS Paris B 123 456 789
        Siège social : 15 Rue de la Paix, 75002 Paris
        N° TVA : FR 12 345 678 901`
      },
      {
        subtitle: 'Directeur de la publication',
        text: 'Sarah Martin, Présidente'
      },
      {
        subtitle: 'Hébergeur',
        text: `Le site Pure Energy Coaching App est hébergé par :
        Amazon Web Services (AWS)
        38 Avenue John F. Kennedy
        L-1855 Luxembourg`
      }
    ]
  },
  {
    title: 'Politique de Confidentialité',
    content: [
      {
        subtitle: 'Collecte des données',
        text: 'Nous collectons uniquement les données personnelles nécessaires à la fourniture de nos services : nom, prénom, adresse email, et informations de paiement. Ces données sont traitées de manière confidentielle et sécurisée.'
      },
      {
        subtitle: 'Utilisation des données',
        text: 'Vos données sont utilisées pour : la gestion de votre compte, l\'accès aux services, l\'envoi d\'informations relatives à nos services, et l\'amélioration de votre expérience utilisateur.'
      },
      {
        subtitle: 'Protection des données',
        text: 'Conformément au RGPD, vous disposez d\'un droit d\'accès, de rectification, de suppression et de portabilité de vos données personnelles.'
      }
    ]
  },
  {
    title: 'Conditions Générales de Vente',
    content: [
      {
        subtitle: 'Services proposés',
        text: 'Pure Energy Coaching App propose des services de coaching en développement personnel et bien-être, accessibles via abonnement ou à la séance.'
      },
      {
        subtitle: 'Tarifs et paiement',
        text: 'Les prix sont indiqués en euros TTC. Le paiement s\'effectue en ligne par carte bancaire ou virement. Les abonnements sont automatiquement renouvelés sauf résiliation.'
      },
      {
        subtitle: 'Droit de rétractation',
        text: 'Conformément à la loi, vous disposez d\'un délai de 14 jours pour exercer votre droit de rétractation à compter de la souscription d\'un service.'
      }
    ]
  }
];

export default function Legal() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative isolate overflow-hidden bg-gradient-to-b from-indigo-100/20">
        <div 
          className="absolute inset-0 -z-10"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=2000')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-black/50" />
        </div>
        
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <motion.div
            className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              Informations Légales
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Consultez nos mentions légales, politique de confidentialité et conditions générales de vente.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Legal Content */}
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-4xl">
          {legalSections.map((section, sectionIdx) => (
            <motion.div
              key={section.title}
              className="mb-16"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: sectionIdx * 0.1 }}
            >
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-8">
                {section.title}
              </h2>
              <div className="space-y-8">
                {section.content.map((item, idx) => (
                  <div key={idx} className="bg-gray-50 rounded-lg p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">
                      {item.subtitle}
                    </h3>
                    <p className="text-gray-600 whitespace-pre-line">
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Contact Information */}
        <motion.div
          className="mx-auto max-w-4xl mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h2 className="text-2xl font-bold leading-10 tracking-tight text-gray-900">
            Besoin d'informations complémentaires ?
          </h2>
          <p className="mt-6 text-base leading-7 text-gray-600">
            Pour toute question concernant nos mentions légales ou nos conditions d'utilisation,
            notre équipe est à votre disposition.
          </p>
          <div className="mt-10">
            <a
              href="/contact"
              className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Contactez-nous
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}