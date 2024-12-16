import { motion } from 'framer-motion';

const stats = [
  { name: 'Clients Satisfaits', value: '2,000+' },
  { name: 'Séances Réalisées', value: '5,000+' },
  { name: 'Années d\'Expérience', value: '10+' },
  { name: 'Praticiens Certifiés', value: '15+' },
];

export default function StatsBanner() {
  return (
    <div className="bg-indigo-600 py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div 
          className="grid grid-cols-1 gap-y-8 gap-x-8 text-center sm:grid-cols-2 lg:grid-cols-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {stats.map((stat, index) => (
            <motion.div 
              key={stat.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="mx-auto flex max-w-xs flex-col gap-y-4"
            >
              <dt className="text-base leading-7 text-gray-200">{stat.name}</dt>
              <dd className="order-first text-3xl font-semibold tracking-tight text-white sm:text-5xl">
                {stat.value}
              </dd>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}