import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  EnvelopeIcon, 
  PhoneIcon, 
  MapPinIcon
} from '@heroicons/react/24/outline';

const footerNavigation = {
  main: [
    {
      title: 'À propos',
      links: [
        { name: 'Notre Histoire', href: '/about', new: false },
        { name: 'Notre Équipe', href: '/team', new: false },
        { name: 'Blog', href: '/blog', new: true },
        { name: 'Témoignages', href: '/testimonials', new: false }
      ]
    },
    {
      title: 'Services',
      links: [
        { name: 'Marketplace', href: '/marketplace', new: true },
        { name: 'Deep Healing', href: '/services/deep-healing', new: false },
        { name: 'Sound Healing', href: '/services/sound-healing', new: false },
        { name: 'Breathwork', href: '/services/breathwork', new: false },
        { name: 'Méditation', href: '/services/meditation', new: false }
      ]
    },
    {
      title: 'Ressources',
      links: [
        { name: 'Bibliothèque', href: '/resources', new: false },
        { name: 'Événements', href: '/events', new: false },
        { name: 'FAQ', href: '/faq', new: false },
        { name: 'Contact', href: '/contact', new: false }
      ]
    }
  ],
  legal: [
    { name: 'Mentions légales', href: '/legal/mentions' },
    { name: 'Politique de confidentialité', href: '/legal/privacy' },
    { name: 'CGV', href: '/legal/terms' },
  ],
  social: [
    {
      name: 'Facebook',
      href: 'https://facebook.com',
      icon: (props: React.SVGProps<SVGSVGElement>) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
            clipRule="evenodd"
          />
        </svg>
      )
    },
    {
      name: 'Instagram',
      href: 'https://instagram.com',
      icon: (props: React.SVGProps<SVGSVGElement>) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
            clipRule="evenodd"
          />
        </svg>
      )
    },
    {
      name: 'Twitter',
      href: 'https://twitter.com',
      icon: (props: React.SVGProps<SVGSVGElement>) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
        </svg>
      )
    },
    {
      name: 'LinkedIn',
      href: 'https://linkedin.com',
      icon: (props: React.SVGProps<SVGSVGElement>) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
            clipRule="evenodd"
          />
        </svg>
      )
    }
  ],
};

const contactInfo = {
  address: '15 Rue de la Paix, 75002 Paris',
  phone: '+33 1 23 45 67 89',
  email: 'contact@pureenergycoaching.com'
};
export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-gray-900 to-gray-800 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-10"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20 relative">
        {/* Newsletter Section */}
        <motion.div 
          className="mb-16 lg:mb-20 max-w-2xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl font-bold text-white text-center mb-4">
            Recevez nos actualités
          </h3>
          <p className="text-gray-300 text-center mb-8">
            Inscrivez-vous à notre newsletter pour recevoir nos dernières actualités et offres exclusives.
          </p>
          <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Votre email"
              className="min-w-0 flex-auto rounded-md border-0 bg-white/5 px-4 py-3 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6 placeholder:text-gray-400"
            />
            <button
              type="submit"
              className="flex-none rounded-md bg-indigo-600 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transition-all duration-200 hover:scale-105"
            >
              S'inscrire
            </button>
          </form>
        </motion.div>

        {/* Navigation Links */}
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 mb-16 lg:mb-20 max-w-6xl mx-auto">
          {footerNavigation.main.map((section) => (
            <div key={section.title} className="text-center">
              <h3 className="text-lg font-semibold text-white mb-6">{section.title}</h3>
              <ul className="space-y-4">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="text-sm text-gray-300 hover:text-white transition-all duration-200 inline-flex items-center justify-center hover:translate-y-[-2px]"
                    >
                      {link.name}
                      {link.new && (
                        <span className="ml-2 inline-flex items-center rounded-full bg-indigo-500/10 px-2 py-1 text-xs font-medium text-indigo-400 ring-1 ring-inset ring-indigo-500/20">
                          Nouveau
                        </span>
                      )}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact Information */}
        <div className="border-t border-gray-800 pt-10 mb-10 max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 text-center">
            <div className="flex items-center">
              <MapPinIcon className="h-6 w-6 text-indigo-400 mr-4 flex-shrink-0" />
              <span className="text-sm text-gray-300 hover:text-white transition-colors duration-200">{contactInfo.address}</span>
            </div>
            <div className="flex items-center">
              <PhoneIcon className="h-6 w-6 text-indigo-400 mr-4 flex-shrink-0" />
              <span className="text-sm text-gray-300 hover:text-white transition-colors duration-200">{contactInfo.phone}</span>
            </div>
            <div className="flex items-center">
              <EnvelopeIcon className="h-6 w-6 text-indigo-400 mr-4 flex-shrink-0" />
              <span className="text-sm text-gray-300 hover:text-white transition-colors duration-200">{contactInfo.email}</span>
            </div>
          </div>
        </div>
        {/* Social Links */}
        <div className="flex justify-center space-x-10 mb-10 max-w-xl mx-auto">
          {footerNavigation.social.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-gray-400 hover:text-white transition-all duration-200 transform hover:scale-110 hover:rotate-6 flex items-center justify-center"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="sr-only">{item.name}</span>
              <item.icon className="h-6 w-6 sm:h-7 sm:w-7" aria-hidden="true" />
            </a>
          ))}
        </div>

        {/* Legal Links */}
        <nav className="flex flex-wrap justify-center gap-6 mb-10 max-w-4xl mx-auto">
          {footerNavigation.legal.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className="text-sm leading-6 text-gray-400 hover:text-white transition-colors duration-200 whitespace-nowrap hover:underline text-center"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        <p className="text-center text-sm leading-6 text-gray-400 max-w-xl mx-auto">
          &copy; {new Date().getFullYear()} Pure Energy Coaching. Tous droits réservés.
        </p>
      </div>
    </footer>
  );
}