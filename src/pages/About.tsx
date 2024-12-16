import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const team = [
  {
    name: 'Sarah Martin',
    role: 'Fondatrice & Coach Holistique',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1200',
    bio: '15 ans d\'expérience en coaching spirituel et développement personnel.',
  },
  {
    name: 'Marc Dubois',
    role: 'Expert en Méditation',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=1200',
    bio: 'Maître en méditation Vipassana et praticien certifié en pleine conscience.',
  },
  {
    name: 'Julie Chen',
    role: 'Praticienne Sound Healing',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1200',
    bio: 'Spécialiste des thérapies sonores et de l\'harmonisation énergétique.',
  },
];

const values = [
  {
    title: 'Authenticité',
    description: 'Nous croyons en l\'importance d\'être authentique dans notre approche et nos relations.',
    icon: '🌟',
  },
  {
    title: 'Bienveillance',
    description: 'L\'empathie et la compassion sont au cœur de notre pratique quotidienne.',
    icon: '💝',
  },
  {
    title: 'Excellence',
    description: 'Nous nous engageons à offrir des services de la plus haute qualité.',
    icon: '✨',
  },
  {
    title: 'Innovation',
    description: 'Nous intégrons les dernières avancées en matière de bien-être holistique.',
    icon: '🚀',
  },
];

const milestones = [
  {
    year: '2014',
    title: 'Création de Pure Energy',
    description: 'Lancement de notre première salle de pratique à Paris.',
  },
  {
    year: '2016',
    title: 'Expansion des Services',
    description: 'Introduction des thérapies sonores et du coaching en ligne.',
  },
  {
    year: '2019',
    title: 'Centre de Formation',
    description: 'Ouverture de notre académie de formation certifiante.',
  },
  {
    year: '2023',
    title: 'Pure Energy App',
    description: 'Lancement de notre plateforme digitale de coaching.',
  },
];

export default function About() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative isolate overflow-hidden bg-gradient-to-b from-indigo-100/20">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <motion.div
            className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-base font-semibold leading-7 text-indigo-600">Notre Histoire</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Une Approche Holistique du Bien-être
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Pure Energy Coaching est né de la vision d'unir les pratiques ancestrales de bien-être
              avec les innovations modernes en matière de développement personnel.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Values Section */}
      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-indigo-600">Nos Valeurs</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Ce qui nous Guide au Quotidien
            </p>
          </div>
          <motion.div
            className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-4">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                  className="flex flex-col items-center text-center"
                >
                  <div className="mb-6 text-4xl">{value.icon}</div>
                  <dt className="text-base font-semibold leading-7 text-gray-900">
                    {value.title}
                  </dt>
                  <dd className="mt-1 text-base leading-7 text-gray-600">
                    {value.description}
                  </dd>
                </motion.div>
              ))}
            </dl>
          </motion.div>
        </div>
      </div>

      {/* Team Section */}
      <div className="bg-gray-900 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-indigo-400">Notre Équipe</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Des Experts Passionnés
            </p>
          </div>
          <motion.div
            className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 * index }}
                className="relative overflow-hidden rounded-2xl bg-gray-800"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="aspect-[3/2] w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40" />
                <div className="absolute bottom-0 p-6">
                  <h3 className="font-semibold leading-7 text-white">{member.name}</h3>
                  <p className="mt-1 text-sm leading-6 text-gray-300">{member.role}</p>
                  <p className="mt-2 text-sm leading-6 text-gray-300">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Timeline Section */}
      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-indigo-600">Notre Parcours</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Une Histoire de Transformation
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl lg:mt-20">
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={milestone.year}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                  className="relative pl-16"
                >
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-full bg-indigo-600">
                    <span className="text-sm font-semibold text-white">{milestone.year}</span>
                  </div>
                  <div className="ml-4">
                    <h3 className="font-semibold text-gray-900">{milestone.title}</h3>
                    <p className="mt-1 text-gray-600">{milestone.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="relative isolate overflow-hidden bg-gray-900">
        <div className="px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Prêt à Commencer Votre Voyage ?
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-300">
              Rejoignez notre communauté et découvrez le pouvoir de la transformation personnelle.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                to="/contact"
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Contactez-nous
              </Link>
              <Link
                to="/services"
                className="text-sm font-semibold leading-6 text-white"
              >
                Découvrir nos services <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}