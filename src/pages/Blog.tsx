import { motion } from 'framer-motion';

const featuredPosts = [
  {
    id: 1,
    title: 'Le Pouvoir Transformateur du Sound Healing',
    description: 'Découvrez comment les vibrations sonores peuvent harmoniser votre corps et votre esprit.',
    author: {
      name: 'Sarah Martin',
      role: 'Experte en Sound Healing',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1200'
    },
    date: '2 Mars 2024',
    readTime: '8 min',
    category: 'Sound Healing',
    image: 'https://images.unsplash.com/photo-1514533450685-4493e01d1fdc?q=80&w=1200'
  },
  {
    id: 2,
    title: 'Guide Complet du Breathwork',
    description: 'Les techniques de respiration essentielles pour votre pratique quotidienne.',
    author: {
      name: 'Marc Dubois',
      role: 'Instructeur Breathwork',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=1200'
    },
    date: '28 Février 2024',
    readTime: '12 min',
    category: 'Breathwork',
    image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=1200'
  },
  {
    id: 3,
    title: 'Méditation : Les Clés du Succès',
    description: 'Comment établir une pratique méditative régulière et en tirer tous les bénéfices.',
    author: {
      name: 'Julie Chen',
      role: 'Coach en Méditation',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1200'
    },
    date: '25 Février 2024',
    readTime: '10 min',
    category: 'Méditation',
    image: 'https://images.unsplash.com/photo-1593811167562-9cef47bfc4d7?q=80&w=1200'
  }
];

const categories = [
  'Tous',
  'Méditation',
  'Sound Healing',
  'Breathwork',
  'Développement Personnel',
  'Nutrition',
  'Spiritualité'
];

export default function Blog() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative isolate overflow-hidden bg-gradient-to-b from-indigo-100/20">
        <div 
          className="absolute inset-0 -z-10"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1512438248247-f0f2a5a8b7f0?q=80&w=2000')`,
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
              Blog & Ressources
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Explorez nos articles inspirants sur le développement personnel, la spiritualité et le bien-être holistique.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Categories Section */}
      <div className="mx-auto max-w-7xl px-6 py-8 lg:px-8">
        <div className="flex items-center space-x-4 overflow-x-auto pb-4">
          {categories.map((category) => (
            <button
              key={category}
              className="rounded-full bg-indigo-50 px-4 py-2 text-sm font-medium text-indigo-600 hover:bg-indigo-100 whitespace-nowrap"
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Featured Posts */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {featuredPosts.map((post) => (
            <motion.article
              key={post.id}
              className="flex flex-col items-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="relative w-full">
                <img
                  src={post.image}
                  alt={post.title}
                  className="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
                />
                <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
              </div>
              <div className="max-w-xl">
                <div className="mt-8 flex items-center gap-x-4 text-xs">
                  <time dateTime={post.date} className="text-gray-500">
                    {post.date}
                  </time>
                  <span className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">
                    {post.category}
                  </span>
                </div>
                <div className="group relative">
                  <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                    <span className="absolute inset-0" />
                    {post.title}
                  </h3>
                  <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
                    {post.description}
                  </p>
                </div>
                <div className="relative mt-8 flex items-center gap-x-4">
                  <img
                    src={post.author.image}
                    alt={post.author.name}
                    className="h-10 w-10 rounded-full bg-gray-100"
                  />
                  <div className="text-sm leading-6">
                    <p className="font-semibold text-gray-900">
                      <span className="absolute inset-0" />
                      {post.author.name}
                    </p>
                    <p className="text-gray-600">{post.author.role}</p>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <div className="relative isolate overflow-hidden bg-gray-900 px-6 py-24 shadow-2xl sm:rounded-3xl sm:px-24 xl:py-32">
            <h2 className="mx-auto max-w-2xl text-center text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Recevez nos derniers articles
            </h2>
            <p className="mx-auto mt-2 max-w-xl text-center text-lg leading-8 text-gray-300">
              Inscrivez-vous à notre newsletter pour ne manquer aucun contenu inspirant
            </p>
            <form className="mx-auto mt-10 flex max-w-md gap-x-4">
              <label htmlFor="email-address" className="sr-only">
                Adresse email
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-white sm:text-sm sm:leading-6"
                placeholder="Entrez votre email"
              />
              <button
                type="submit"
                className="flex-none rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                S'inscrire
              </button>
            </form>
            <svg
              viewBox="0 0 1024 1024"
              className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-x-1/2"
              aria-hidden="true"
            >
              <circle cx={512} cy={512} r={512} fill="url(#759c1415-0410-454c-8f7c-9a820de03641)" fillOpacity="0.7" />
              <defs>
                <radialGradient
                  id="759c1415-0410-454c-8f7c-9a820de03641"
                  cx={0}
                  cy={0}
                  r={1}
                  gradientUnits="userSpaceOnUse"
                  gradientTransform="translate(512 512) rotate(90) scale(512)"
                >
                  <stop stopColor="#7775D6" />
                  <stop offset={1} stopColor="#E935C1" stopOpacity={0} />
                </radialGradient>
              </defs>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}