import { Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';
import {
  ChartBarIcon,
  CalendarIcon,
  FolderIcon,
  HomeIcon,
  UsersIcon,
  BellIcon,
} from '@heroicons/react/24/outline';

const navigation = [
  { name: 'Vue d\'ensemble', value: 'overview', icon: HomeIcon },
  { name: 'Statistiques', value: 'stats', icon: ChartBarIcon },
  { name: 'Événements', value: 'events', icon: CalendarIcon },
  { name: 'Ressources', value: 'resources', icon: FolderIcon },
  { name: 'Communauté', value: 'community', icon: UsersIcon },
];

interface DashboardHeaderProps {
  selectedView: string;
  onViewChange: (view: string) => void;
}

export default function DashboardHeader({ selectedView, onViewChange }: DashboardHeaderProps) {
  return (
    <header className="bg-white shadow">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 justify-between">
          <div className="flex">
            <div className="flex flex-shrink-0 items-center">
              <span className="text-xl font-bold text-indigo-600">Pure Energy</span>
            </div>
            <nav className="hidden sm:ml-6 sm:flex sm:space-x-8" aria-label="Navigation">
              {navigation.map((item) => (
                <button
                  key={item.name}
                  onClick={() => onViewChange(item.value)}
                  className={`
                    inline-flex items-center border-b-2 px-1 pt-1 text-sm font-medium
                    ${
                      selectedView === item.value
                        ? 'border-indigo-500 text-gray-900'
                        : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
                    }
                  `}
                >
                  <item.icon className="h-5 w-5 mr-2" />
                  {item.name}
                </button>
              ))}
            </nav>
          </div>

          <div className="flex items-center">
            <button
              type="button"
              className="rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:outline-none"
            >
              <BellIcon className="h-6 w-6" aria-hidden="true" />
            </button>

            <Menu as="div" className="relative ml-3">
              <Menu.Button className="flex rounded-full bg-white text-sm focus:outline-none">
                <span className="sr-only">Open user menu</span>
                <div className="h-8 w-8 rounded-full bg-indigo-600" />
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
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="#"
                        className={`
                          block px-4 py-2 text-sm text-gray-700
                          ${active ? 'bg-gray-100' : ''}
                        `}
                      >
                        Mon profil
                      </a>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="#"
                        className={`
                          block px-4 py-2 text-sm text-gray-700
                          ${active ? 'bg-gray-100' : ''}
                        `}
                      >
                        Paramètres
                      </a>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="#"
                        className={`
                          block px-4 py-2 text-sm text-gray-700
                          ${active ? 'bg-gray-100' : ''}
                        `}
                      >
                        Déconnexion
                      </a>
                    )}
                  </Menu.Item>
                </Menu.Items>
              </Transition>
            </Menu>
          </div>
        </div>
      </div>
    </header>
  );
}