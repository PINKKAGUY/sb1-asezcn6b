import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  UserCircleIcon, 
  CreditCardIcon, 
  KeyIcon, 
  BellIcon,
  CalendarIcon,
  DocumentTextIcon,
  ClockIcon
} from '@heroicons/react/24/outline';

const userProfile = {
  name: 'Marie Laurent',
  email: 'marie.laurent@example.com',
  avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1200',
  subscription: {
    plan: '1 AN',
    status: 'Actif',
    nextBilling: '15 avril 2024',
    price: '129,58€/mois'
  },
  stats: {
    sessionsCompleted: 24,
    hoursSpent: 36,
    resourcesAccessed: 15
  }
};

const upcomingEvents = [
  {
    id: 1,
    name: 'Séance Deep Healing',
    date: '15 Mars 2024',
    time: '14:00',
    type: 'En ligne'
  },
  {
    id: 2,
    name: 'Sound Healing',
    date: '20 Mars 2024',
    time: '10:30',
    type: 'Présentiel'
  }
];

const recentActivity = [
  {
    id: 1,
    type: 'resource',
    name: 'Guide de Méditation Avancée',
    date: 'Il y a 2 jours',
    icon: DocumentTextIcon
  },
  {
    id: 2,
    type: 'session',
    name: 'Breathwork Guidé',
    date: 'Il y a 5 jours',
    icon: ClockIcon
  }
];

export default function Profile() {
  const [activeTab, setActiveTab] = useState('profile');

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        {/* Profile Header */}
        <motion.div
          className="bg-white rounded-lg shadow-lg p-6 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="sm:flex sm:items-center sm:justify-between">
            <div className="sm:flex sm:space-x-5">
              <div className="flex-shrink-0">
                <img
                  className="mx-auto h-20 w-20 rounded-full"
                  src={userProfile.avatar}
                  alt={userProfile.name}
                />
              </div>
              <div className="mt-4 text-center sm:mt-0 sm:pt-1 sm:text-left">
                <p className="text-xl font-bold text-gray-900 sm:text-2xl">{userProfile.name}</p>
                <p className="text-sm font-medium text-gray-600">{userProfile.email}</p>
              </div>
            </div>
            <div className="mt-5 flex justify-center sm:mt-0">
              <button className="flex items-center justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500">
                Modifier le profil
              </button>
            </div>
          </div>
        </motion.div>

        {/* Navigation Tabs */}
        <div className="border-b border-gray-200 mb-8">
          <nav className="-mb-px flex space-x-8" aria-label="Tabs">
            {[
              { name: 'Profil', value: 'profile', icon: UserCircleIcon },
              { name: 'Abonnement', value: 'subscription', icon: CreditCardIcon },
              { name: 'Sécurité', value: 'security', icon: KeyIcon },
              { name: 'Notifications', value: 'notifications', icon: BellIcon },
            ].map((tab) => (
              <button
                key={tab.value}
                onClick={() => setActiveTab(tab.value)}
                className={`
                  flex items-center border-b-2 py-4 px-1 text-sm font-medium
                  ${
                    activeTab === tab.value
                      ? 'border-indigo-500 text-indigo-600'
                      : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
                  }
                `}
              >
                <tab.icon className="h-5 w-5 mr-2" />
                {tab.name}
              </button>
            ))}
          </nav>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-8">
            {/* Stats Cards */}
            <motion.div
              className="grid grid-cols-1 md:grid-cols-3 gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="bg-white rounded-lg shadow p-6">
                <div className="text-sm font-medium text-gray-500">Sessions Complétées</div>
                <div className="mt-2 text-3xl font-semibold text-gray-900">
                  {userProfile.stats.sessionsCompleted}
                </div>
              </div>
              <div className="bg-white rounded-lg shadow p-6">
                <div className="text-sm font-medium text-gray-500">Heures de Pratique</div>
                <div className="mt-2 text-3xl font-semibold text-gray-900">
                  {userProfile.stats.hoursSpent}h
                </div>
              </div>
              <div className="bg-white rounded-lg shadow p-6">
                <div className="text-sm font-medium text-gray-500">Ressources Consultées</div>
                <div className="mt-2 text-3xl font-semibold text-gray-900">
                  {userProfile.stats.resourcesAccessed}
                </div>
              </div>
            </motion.div>

            {/* Upcoming Events */}
            <motion.div
              className="bg-white rounded-lg shadow"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="p-6">
                <h3 className="text-lg font-medium text-gray-900">Prochaines Séances</h3>
                <div className="mt-6 flow-root">
                  <ul role="list" className="-my-5 divide-y divide-gray-200">
                    {upcomingEvents.map((event) => (
                      <li key={event.id} className="py-5">
                        <div className="flex items-center space-x-4">
                          <div className="flex-shrink-0">
                            <CalendarIcon className="h-8 w-8 text-indigo-600" />
                          </div>
                          <div className="min-w-0 flex-1">
                            <p className="truncate text-sm font-medium text-gray-900">{event.name}</p>
                            <p className="truncate text-sm text-gray-500">
                              {event.date} à {event.time} • {event.type}
                            </p>
                          </div>
                          <div>
                            <button className="inline-flex items-center rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
                              Voir
                            </button>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            {/* Subscription Info */}
            <motion.div
              className="bg-white rounded-lg shadow"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="p-6">
                <h3 className="text-lg font-medium text-gray-900">Abonnement</h3>
                <dl className="mt-6 space-y-6">
                  <div className="flex items-center justify-between">
                    <dt className="text-sm text-gray-500">Plan</dt>
                    <dd className="text-sm font-medium text-gray-900">{userProfile.subscription.plan}</dd>
                  </div>
                  <div className="flex items-center justify-between">
                    <dt className="text-sm text-gray-500">Statut</dt>
                    <dd className="inline-flex items-center rounded-full bg-green-50 px-2 py-1 text-xs font-medium text-green-700">
                      {userProfile.subscription.status}
                    </dd>
                  </div>
                  <div className="flex items-center justify-between">
                    <dt className="text-sm text-gray-500">Prochain paiement</dt>
                    <dd className="text-sm font-medium text-gray-900">{userProfile.subscription.nextBilling}</dd>
                  </div>
                  <div className="flex items-center justify-between">
                    <dt className="text-sm text-gray-500">Montant</dt>
                    <dd className="text-sm font-medium text-gray-900">{userProfile.subscription.price}</dd>
                  </div>
                </dl>
                <div className="mt-6">
                  <button className="w-full rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500">
                    Gérer l'abonnement
                  </button>
                </div>
              </div>
            </motion.div>

            {/* Recent Activity */}
            <motion.div
              className="bg-white rounded-lg shadow"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <div className="p-6">
                <h3 className="text-lg font-medium text-gray-900">Activité Récente</h3>
                <div className="mt-6 flow-root">
                  <ul role="list" className="-my-5 divide-y divide-gray-200">
                    {recentActivity.map((activity) => (
                      <li key={activity.id} className="py-5">
                        <div className="flex items-center space-x-4">
                          <div className="flex-shrink-0">
                            <activity.icon className="h-8 w-8 text-gray-400" />
                          </div>
                          <div className="min-w-0 flex-1">
                            <p className="truncate text-sm font-medium text-gray-900">{activity.name}</p>
                            <p className="truncate text-sm text-gray-500">{activity.date}</p>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}