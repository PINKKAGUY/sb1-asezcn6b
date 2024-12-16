import { useState, Fragment } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Dialog, Menu, Transition } from '@headlessui/react';
import { 
  Bars3Icon, 
  XMarkIcon,
  UserCircleIcon,
  SparklesIcon,
  HeartIcon,
  BookOpenIcon,
  UserGroupIcon,
  QuestionMarkCircleIcon
} from '@heroicons/react/24/outline';
import { useAuth } from '../hooks/useAuth';

const navigation = [
  {
    name: 'Découvrir',
    icon: SparklesIcon,
    items: [
      { name: 'Accueil', href: '/' },
      { name: 'À propos', href: '/about' },
      { name: 'Témoignages', href: '/testimonials' },
      { name: 'Blog', href: '/blog' },
    ]
  },
  {
    name: 'Services',
    icon: HeartIcon,
    items: [
      { name: 'Marketplace', href: '/marketplace' },
      { name: 'Deep Healing', href: '/services/deep-healing' },
      { name: 'Sound Healing', href: '/services/sound-healing' },
      { name: 'Breathwork', href: '/services/breathwork' },
      { name: 'Méditation', href: '/services/meditation' },
      { name: 'Tous nos services', href: '/services' },
    ]
  },
  {
    name: 'Ressources',
    icon: BookOpenIcon,
    items: [
      { name: 'Bibliothèque', href: '/resources' },
      { name: 'Événements', href: '/events' },
      { name: 'FAQ', href: '/faq' },
    ]
  },
  {
    name: 'Communauté',
    icon: UserGroupIcon,
    items: [
      { name: 'Forum', href: '/community' },
      { name: 'Événements', href: '/events' },
      { name: 'Rejoindre', href: '/pricing' },
    ]
  },
  {
    name: 'Aide',
    icon: QuestionMarkCircleIcon,
    items: [
      { name: 'FAQ', href: '/faq' },
      { name: 'Contact', href: '/contact' },
      { name: 'Mentions légales', href: '/legal' },
      { name: 'Tarifs', href: '/pricing' },
    ]
  }
];

const userNavigation = [
  { name: 'Mon Profil', href: '/profile' },
  { name: 'Dashboard', href: '/dashboard' },
  { name: 'Mes Réservations', href: '/dashboard/events' },
  { name: 'Mes Messages', href: '/dashboard/messages' },
  { name: 'Mes Ressources', href: '/dashboard/resources' },
  { name: 'Paramètres', href: '/dashboard/settings' },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { user, logout } = useAuth();
  const location = useLocation();

  return (
    <header className="bg-white shadow-md fixed w-full top-0 z-50">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-4 sm:p-6 lg:px-8 backdrop-blur-sm bg-white/90" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link to="/" className="-m-1.5 p-1.5">
            <span className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-gradient">
              Pure Energy Coaching
            </span>
          </Link>
        </div>

        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2 sm:-m-2.5 inline-flex items-center justify-center rounded-md p-2 sm:p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>

        <div className="hidden lg:flex lg:gap-x-8">
          {navigation.map((category) => (
            <Menu as="div" className="relative" key={category.name}>
              <Menu.Button className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900 hover:text-indigo-600 transition-colors duration-200">
                <category.icon className="h-5 w-5 mr-1" />
                {category.name}
              </Menu.Button>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items className="absolute left-0 z-10 mt-3 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                  {category.items.map((item) => (
                    <Menu.Item key={item.name}>
                      {({ active }) => (
                        <Link
                          to={item.href}
                          className={`
                            ${active ? 'bg-gray-100' : ''} 
                            ${location.pathname === item.href ? 'text-indigo-600' : 'text-gray-900'}
                            block px-4 py-2 text-sm hover:text-indigo-600 transition-colors duration-200
                          `}
                        >
                          {item.name}
                        </Link>
                      )}
                    </Menu.Item>
                  ))}
                </Menu.Items>
              </Transition>
            </Menu>
          ))}
        </div>

        <div className="hidden lg:flex lg:flex-1 lg:justify-end items-center space-x-4">
          {user ? (
            <Menu as="div" className="relative ml-3">
              <Menu.Button className="flex items-center space-x-2 rounded-full bg-indigo-100 p-1.5 sm:p-2 text-indigo-600 hover:bg-indigo-200">
                <span className="sr-only">Open user menu</span>
                <UserCircleIcon className="h-8 w-8" />
                <span className="hidden sm:block text-sm font-medium">{user.name}</span>
              </Menu.Button>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-200"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                  {userNavigation.map((item) => (
                    <Menu.Item key={item.name}>
                      {({ active }) => (
                        <Link
                          to={item.href}
                          className={`block px-4 py-2 text-sm text-gray-700 ${
                            active ? 'bg-gray-100' : ''
                          }`}
                        >
                          {item.name}
                        </Link>
                      )}
                    </Menu.Item>
                  ))}
                  <Menu.Item>
                    {({ active }) => (
                      <button
                        onClick={logout}
                        className={`block w-full text-left px-4 py-2 text-sm text-gray-700 ${
                          active ? 'bg-gray-100' : ''
                        }`}
                      >
                        Déconnexion
                      </button>
                    )}
                  </Menu.Item>
                </Menu.Items>
              </Transition>
            </Menu>
          ) : (
            <Link
              to="/login"
              className="inline-flex items-center justify-center rounded-md bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 transition-colors"
            >
              Se connecter
            </Link>
          )}
        </div>
      </nav>

      <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link to="/" className="-m-1.5 p-1.5">
              <span className="text-xl font-bold text-indigo-600">Pure Energy Coaching</span>
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {navigation.map((category) => (
                  <div key={category.name} className="py-2">
                    <div className="flex items-center px-3 text-sm font-semibold text-gray-500">
                      <category.icon className="h-5 w-5 mr-2" />
                      {category.name}
                    </div>
                    {category.items.map((item) => (
                      <Link
                        key={item.name}
                        to={item.href}
                        className={`block rounded-lg px-3 py-2 text-base font-semibold leading-7 ${
                          location.pathname === item.href
                            ? 'bg-indigo-600 text-white'
                            : 'text-gray-900 hover:bg-gray-50'
                        }`}
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                ))}
              </div>
              {user ? (
                <div className="py-6">
                  {userNavigation.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      className="block px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                  <button
                    onClick={() => {
                      logout();
                      setMobileMenuOpen(false);
                    }}
                    className="block w-full px-3 py-2 text-left text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Déconnexion
                  </button>
                </div>
              ) : (
                <div className="py-6">
                  <Link
                    to="/login"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Se connecter
                  </Link>
                </div>
              )}
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}