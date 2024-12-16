import { motion } from 'framer-motion';
import { Disclosure } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/24/outline';

const faqs = [
  {
    category: 'Services',
    questions: [
      {
        question: "Qu'est-ce que le Deep Healing ?",
        answer: "Le Deep Healing est une approche thérapeutique holistique qui combine différentes techniques énergétiques pour libérer les blocages émotionnels et physiques. Cette méthode permet une transformation profonde et durable."
      },
      {
        question: "Comment se déroule une séance de Sound Healing ?",
        answer: "Une séance de Sound Healing dure environ 60 minutes. Vous êtes allongé confortablement pendant que le praticien utilise différents instruments (bols tibétains, gongs, etc.) pour créer des vibrations thérapeutiques qui harmonisent votre corps et votre esprit."
      },
      {
        question: "Les séances peuvent-elles être faites en ligne ?",
        answer: "Oui, certaines séances comme le Breathwork et la méditation guidée peuvent être suivies en ligne. D'autres, comme le Sound Healing, nécessitent une présence physique pour une expérience optimale."
      }
    ]
  },
  {
    category: 'Abonnements',
    questions: [
      {
        question: "Quels sont les différents types d'abonnement ?",
        answer: "Nous proposons deux formules principales : l'abonnement 6 mois (895€) et l'abonnement 1 an (1.555€). Chaque formule donne accès à l'ensemble de nos services et ressources."
      },
      {
        question: "Puis-je annuler mon abonnement ?",
        answer: "Oui, vous pouvez annuler votre abonnement à tout moment. L'annulation prendra effet à la fin de la période en cours, sans frais supplémentaires."
      },
      {
        question: "Y a-t-il un engagement minimum ?",
        answer: "Non, il n'y a pas d'engagement minimum. Vous pouvez choisir la durée qui vous convient le mieux, avec des tarifs préférentiels pour les engagements plus longs."
      }
    ]
  },
  {
    category: 'Pratique',
    questions: [
      {
        question: "Faut-il avoir de l'expérience en méditation ?",
        answer: "Non, aucune expérience préalable n'est nécessaire. Nos praticiens vous guideront pas à pas dans votre pratique, quel que soit votre niveau."
      },
      {
        question: "Que dois-je porter pour les séances ?",
        answer: "Portez des vêtements confortables et amples qui ne gênent pas vos mouvements. Pour les séances de méditation et de Sound Healing, prévoyez également une couverture légère."
      },
      {
        question: "Combien de temps faut-il pour voir des résultats ?",
        answer: "Les effets varient selon les personnes et les pratiques. Certains ressentent des bienfaits dès la première séance, tandis que d'autres observent des changements plus progressifs sur plusieurs semaines."
      }
    ]
  }
];

export default function FAQ() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative isolate overflow-hidden bg-gradient-to-b from-indigo-100/20">
        <div 
          className="absolute inset-0 -z-10"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?q=80&w=2000')`,
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
              Questions Fréquentes
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Trouvez rapidement des réponses à vos questions sur nos services et notre approche.
            </p>
          </motion.div>
        </div>
      </div>

      {/* FAQ Content */}
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-4xl divide-y divide-gray-900/10">
          {faqs.map((section, sectionIdx) => (
            <motion.div
              key={section.category}
              className="py-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: sectionIdx * 0.1 }}
            >
              <h3 className="text-2xl font-bold leading-7 text-gray-900 mb-8">{section.category}</h3>
              <dl className="space-y-6 divide-y divide-gray-900/10">
                {section.questions.map((faq) => (
                  <Disclosure as="div" key={faq.question} className="pt-6">
                    {({ open }) => (
                      <>
                        <dt>
                          <Disclosure.Button className="flex w-full items-start justify-between text-left text-gray-900">
                            <span className="text-base font-semibold leading-7">{faq.question}</span>
                            <span className="ml-6 flex h-7 items-center">
                              <ChevronDownIcon
                                className={`h-6 w-6 transform ${
                                  open ? 'rotate-180' : 'rotate-0'
                                } transition-transform duration-200 ease-in-out`}
                                aria-hidden="true"
                              />
                            </span>
                          </Disclosure.Button>
                        </dt>
                        <Disclosure.Panel as="dd" className="mt-2 pr-12">
                          <p className="text-base leading-7 text-gray-600">{faq.answer}</p>
                        </Disclosure.Panel>
                      </>
                    )}
                  </Disclosure>
                ))}
              </dl>
            </motion.div>
          ))}
        </div>

        {/* Contact Section */}
        <motion.div
          className="mx-auto max-w-4xl mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h2 className="text-2xl font-bold leading-10 tracking-tight text-gray-900">
            Vous n'avez pas trouvé la réponse à votre question ?
          </h2>
          <p className="mt-6 text-base leading-7 text-gray-600">
            Notre équipe est là pour vous aider. N'hésitez pas à nous contacter directement.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="/contact"
              className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Contactez-nous
            </a>
            <a href="/blog" className="text-sm font-semibold leading-6 text-gray-900">
              Consulter notre blog <span aria-hidden="true">→</span>
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}