import { Link, useLocation } from 'react-router-dom';
import {
  HomeIcon,
  ChartBarIcon,
  CalendarIcon,
  BookOpenIcon,
  ChatBubbleLeftIcon,
  UserGroupIcon,
  Cog6ToothIcon,
} from '@heroicons/react/24/outline';

const navigation = [
  { name: 'Vue d\'ensemble', href: '/dashboard', icon: HomeIcon },
  { name: 'Statistiques', href: '/dashboard/stats', icon: ChartBarIcon },
  { name: 'Événements', href: '/dashboard/events', icon: CalendarIcon },
  { name: 'Bibliothèque', href: '/dashboard/library', icon: BookOpenIcon },
  { name: 'Messages', href: '/dashboard/messages', icon: ChatBubbleLeftIcon },
  { name: 'Communauté', href: '/dashboard/community', icon: UserGroupIcon },
  { name: 'Paramètres', href: '/dashboard/settings', icon: Cog6ToothIcon },
];

export default function DashboardNav() {
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