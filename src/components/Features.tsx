import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Shield, Lock, Key, Fingerprint } from 'lucide-react';
import React from 'react';

export default function Features() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const features = [
    {
      icon: Shield,
      title: "Cryptographie Post-Quantique",
      description: "Protection avancée contre les menaces quantiques futures"
    },
    {
      icon: Lock,
      title: "Triple Chiffrement",
      description: "Sécurité maximale avec AES1024 et authentification multiniveau"
    },
    {
      icon: Key,
      title: "Gestion des Accès",
      description: "Contrôle granulaire des permissions et traçabilité complète"
    },
    {
      icon: Fingerprint,
      title: "Authentification Biométrique",
      description: "Reconnaissance faciale et contrôle d'accès avancé"
    }
  ];

  return (
    <section className="py-20 bg-white" id="features">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 2 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4" style={{ color: '#3D3D3D', fontFamily: 'Cairo, sans-serif' }}>
            Technologies de Pointe
          </h2>
          <p className="text-xl max-w-2xl mx-auto" style={{ color: '#3D3D3D', fontFamily: 'Open Sans, sans-serif' }}>
            Des solutions innovantes pour une sécurité documentaire sans compromis
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 2, delay: index * 0.1 }}
              className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow"
            >
              <div className="w-14 h-14 rounded-lg flex items-center justify-center mb-6 bg-[#00A675]">
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3" style={{ fontFamily: 'Cairo, sans-serif', color: '#3D3D3D' }}>
                {feature.title}
              </h3>
              <p style={{ color: '#3D3D3D', fontFamily: 'Open Sans, sans-serif' }}>{feature.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 2, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 text-white rounded-full font-semibold transition-colors"
            style={{ backgroundColor: '#00A675', fontFamily: 'Cairo, sans-serif' }}
          >
          <a href="/product">En savoir plus</a> 
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
