import { motion } from 'framer-motion';
import { CheckCircleIcon } from '@heroicons/react/20/solid';

const journeySteps = [
  {
    id: 1,
    name: 'Éveil Spirituel',
    description: 'Découverte de votre essence spirituelle',
    status: 'completed',
    progress: 100,
  },
  {
    id: 2,
    name: 'Guérison Énergétique',
    description: 'Libération des blocages énergétiques',
    status: 'current',
    progress: 65,
  },
  {
    id: 3,
    name: 'Développement Médiumnique',
    description: 'Connection avec le monde spirituel',
    status: 'upcoming',
    progress: 0,
  },
];

export default function JourneyProgress() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="overflow-hidden rounded-lg bg-white shadow"
    >
      <div className="p-6">
        <h3 className="text-base font-semibold leading-6 text-gray-900">
          Progression du voyage spirituel
        </h3>
        <div className="mt-6 flow-root">
          <ul role="list" className="-mb-8">
            {journeySteps.map((step, stepIdx) => (
              <li key={step.id}>
                <div className="relative pb-8">
                  {stepIdx !== journeySteps.length - 1 ? (
                    <span
                      className="absolute left-4 top-4 -ml-px h-full w-0.5 bg-gray-200"
                      aria-hidden="true"
                    />
                  ) : null}
                  <div className="relative flex space-x-3">
                    <div>
                      <span
                        className={`
                          h-8 w-8 rounded-full flex items-center justify-center ring-8 ring-white
                          ${
                            step.status === 'completed'
                              ? 'bg-green-500'
                              : step.status === 'current'
                              ? 'bg-indigo-500'
                              : 'bg-gray-200'
                          }
                        `}
                      >
                        <CheckCircleIcon
                          className="h-5 w-5 text-white"
                          aria-hidden="true"
                        />
                      </span>
                    </div>
                    <div className="flex min-w-0 flex-1 justify-between space-x-4 pt-1.5">
                      <div>
                        <p className="text-sm font-medium text-gray-900">{step.name}</p>
                        <p className="mt-1 text-sm text-gray-500">{step.description}</p>
                      </div>
                      <div className="whitespace-nowrap text-right text-sm text-gray-500">
                        {step.progress}%
                      </div>
                    </div>
                  </div>
                  {step.status === 'current' && (
                    <div className="mt-4 ml-11">
                      <div className="h-2 w-full bg-gray-100 rounded-full">
                        <div
                          className="h-2 bg-indigo-500 rounded-full"
                          style={{ width: `${step.progress}%` }}
                        />
                      </div>
                    </div>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
}