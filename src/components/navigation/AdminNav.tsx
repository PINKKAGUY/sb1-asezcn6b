import { Link, useLocation } from 'react-router-dom';
import {
  HomeIcon,
  DocumentIcon,
  CalendarIcon,
  UserGroupIcon,
  ChatBubbleLeftIcon,
  CurrencyDollarIcon,
  Cog6ToothIcon,
} from '@heroicons/react/24/outline';

const navigation = [
  { name: 'Vue d\'ensemble', href: '/admin', icon: HomeIcon },
  { name: 'Ressources', href: '/admin/resources', icon: DocumentIcon },
  { name: 'Événements', href: '/admin/events', icon: CalendarIcon },
  { name: 'Utilisateurs', href: '/admin/users', icon: UserGroupIcon },
  { name: 'Messages', href: '/admin/messages', icon: ChatBubbleLeftIcon },
  { name: 'Paiements', href: '/admin/payments', icon: CurrencyDollarIcon },
  { name: 'Paramètres', href: '/admin/settings', icon: Cog6ToothIcon },
];

export default function AdminNav() {
  const location = useLocation();

  return (
    <nav className="space-y-1 bg-white shadow rounded-lg p-4">
      {navigation.map((item) => {
        const isActive = location.pathname === item.href;
        return (
          <Link
            key={item.name}
            to={item.href}
            className={`
              group flex items-center px-3 py-2 text-sm font-medium rounded-md
              ${
                isActive
                  ? 'bg-indigo-50 text-indigo-600'
                  : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
              }
            `}
          >
            <item.icon
              className={`
                mr-3 h-6 w-6 flex-shrink-0
                ${isActive ? 'text-indigo-600' : 'text-gray-400 group-hover:text-gray-500'}
              `}
              aria-hidden="true"
            />
            {item.name}
          </Link>
        );
      })}
    </nav>
  );
}