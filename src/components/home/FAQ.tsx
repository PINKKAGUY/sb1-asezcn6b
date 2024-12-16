import { motion } from 'framer-motion';
import { Disclosure } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/24/outline';

const faqs = [
  {
    question: 'Qu\'est-ce que le Deep Healing ?',
    answer: 'Le Deep Healing est une approche thérapeutique holistique qui combine différentes techniques pour libérer les blocages énergétiques et émotionnels. Cette méthode permet une transformation profonde et durable.',
  },
  {
    question: 'Comment se déroule une séance de soins sonores ?',
    answer: 'Les séances de soins sonores utilisent les vibrations thérapeutiques des bols tibétains pour harmoniser votre corps et votre esprit. Chaque séance dure environ 60 minutes et se déroule dans un environnement calme et apaisant.',
  },
  {
    question: 'Les séances sont-elles en présentiel ou en ligne ?',
    answer: 'Nous proposons les deux formats. Les séances peuvent être suivies en présentiel dans notre centre ou en ligne via notre plateforme sécurisée, selon vos préférences et votre localisation.',
  },
  {
    question: 'Puis-je annuler ou modifier mon abonnement ?',
    answer: 'Oui, vous pouvez modifier ou annuler votre abonnement à tout moment depuis votre espace personnel. L\'annulation prendra effet à la fin de la période en cours.',
  },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

export default function FAQ() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 lg:py-40">
        <motion.div
          className="mx-auto max-w-4xl divide-y divide-gray-900/10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl font-bold leading-10 tracking-tight text-gray-900">
            Questions fréquentes
          </h2>
          <dl className="mt-10 space-y-6 divide-y divide-gray-900/10">
            {faqs.map((faq, index) => (
              <Disclosure as="div" key={index} className="pt-6">
                {({ open }) => (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 * index }}
                  >
                    <dt>
                      <Disclosure.Button className="flex w-full items-start justify-between text-left text-gray-900">
                        <span className="text-base font-semibold leading-7">{faq.question}</span>
                        <span className="ml-6 flex h-7 items-center">
                          <ChevronDownIcon
                            className={classNames(
                              open ? '-rotate-180' : 'rotate-0',
                              'h-6 w-6 transform transition duration-300'
                            )}
                            aria-hidden="true"
                          />
                        </span>
                      </Disclosure.Button>
                    </dt>
                    <Disclosure.Panel as="dd" className="mt-2 pr-12">
                      <p className="text-base leading-7 text-gray-600">{faq.answer}</p>
                    </Disclosure.Panel>
                  </motion.div>
                )}
              </Disclosure>
            ))}
          </dl>
        </motion.div>
      </div>
    </div>
  );
}