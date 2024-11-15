import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Globe, ShieldCheck, Lock } from 'lucide-react';
import React from 'react';

export default function PostQuantum() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const items = [
    {
      icon: Globe,
      title: "Qu'est-ce que le Post-Quantique ?",
      description:
        "Le post-quantique désigne des solutions cryptographiques capables de résister aux puissantes attaques des ordinateurs quantiques, anticipant ainsi les menaces futures.",
    },
    {
      icon: ShieldCheck,
      title: "Protection des Données Sensibles",
      description:
        "Garantir la sécurité des transactions financières, des systèmes critiques et des informations confidentielles dans un monde interconnecté.",
    },
    {
      icon: Lock,
      title: "Préparer l'Avenir",
      description:
        "Anticiper les cyberattaques à venir en développant des solutions résistantes aux menaces des ordinateurs quantiques.",
    },
  ];

  return (
    <section className="py-20 bg-gray-50" id="post-quantum">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 2 }}
          className="text-center mb-16"
        >
          <h2
            className="text-4xl font-bold mb-4"
            style={{ color: '#3D3D3D', fontFamily: 'Cairo, sans-serif' }}
          >
            Le Post-Quantique et ses Enjeux
          </h2>
          <p
            className="text-xl max-w-2xl mx-auto"
            style={{ color: '#3D3D3D', fontFamily: 'Open Sans, sans-serif' }}
          >
            Découvrez pourquoi le post-quantique est essentiel pour sécuriser
            l'avenir numérique.
          </p>
        </motion.div>

        {/* Items Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 2, delay: index * 0.1 }}
              className="bg-white rounded-xl p-8 hover:shadow-lg transition-shadow"
            >
              <div className="w-14 h-14 flex items-center justify-center mb-6 bg-[#00A675] mx-auto rounded-full">
                <item.icon className="w-8 h-8 text-white" />
              </div>
              <h3
                className="text-xl font-semibold mb-3 text-center"
                style={{ fontFamily: 'Cairo, sans-serif', color: '#3D3D3D' }}
              >
                {item.title}
              </h3>
              <p
                style={{ color: '#3D3D3D', fontFamily: 'Open Sans, sans-serif' }}
              >
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
