import { motion } from 'framer-motion';
import { Shield, Lock, Key, Fingerprint, Server, Globe } from 'lucide-react';
import React, { useState } from 'react';

export default function ProductPage() {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-20"
    >
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-gray-900 to-black text-white py-24">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <img 
            src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80"
            alt="Technology Background"
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="relative container mx-auto px-6">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 2 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6" style={{ fontFamily: 'Cairo' }}>Nevermind</h1>
            <p className="text-xl text-gray-300 mb-8" style={{ fontFamily: 'Open Sans' }}>
              La solution de sécurité documentaire post-quantique qui repousse 
              les limites de la cybersécurité
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-green-600 rounded-full font-semibold hover:bg-green-700 transition-colors"
              onClick={openModal} // Ouvre la modale
            >
              Demander une démonstration
            </motion.button>
          </motion.div>
        </div>
      </div>

      {/* Modal Section */}
      {isModalOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-lg overflow-hidden max-w-3xl w-full"
          >
            <div className="relative pb-[56.25%]">
              <iframe
                src="https://www.youtube.com/embed/zqgWETlXux0"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 w-full h-full"
              ></iframe>
            </div>
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-800 transition-colors"
            >
              ✕
            </button>
          </motion.div>
        </motion.div>
      )}

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 2 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-4" style={{ fontFamily: 'Cairo' }}>Technologies Clés</h2>
            <p className="text-gray-600 max-w-2xl mx-auto" style={{ fontFamily: 'Open Sans' }}>
              Une protection multicouche utilisant les dernières avancées 
              en cryptographie post-quantique
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: "Chiffrement Multivarié Hybride",
                description: "Système avancé de cryptographie post-quantique pour la sécurité des données"
              },
              {
                icon: Lock,
                title: "Triple Chiffrement",
                description: "Protection en trois couches avec AES1024, jeton d'accès et ID secrète"
              },
              {
                icon: Fingerprint,
                title: "Authentification Biométrique",
                description: "Reconnaissance faciale et contrôle d'accès avancé"
              },
              {
                icon: Key,
                title: "Gestion des Accès",
                description: "Contrôle granulaire des permissions et traçabilité complète"
              },
              {
                icon: Server,
                title: "Infrastructure Sécurisée",
                description: "Hébergement haute disponibilité avec redondance géographique"
              },
              {
                icon: Globe,
                title: "Conformité Mondiale",
                description: "Respect des normes internationales de sécurité"
              }
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 2, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-lg shadow-lg"
              >
                <feature.icon className="w-12 h-12 text-green-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2" style={{ fontFamily: 'Cairo' }}>{feature.title}</h3>
                <p className="text-gray-600" style={{ fontFamily: 'Open Sans' }}>{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 2 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-3xl font-bold mb-6" style={{ fontFamily: 'Cairo' }}>
              Prêt à sécuriser votre avenir numérique ?
            </h2>
            <p className="text-gray-600 mb-8" style={{ fontFamily: 'Open Sans' }}>
              Contactez-nous pour découvrir comment Nevermind peut protéger 
              vos documents sensibles contre les menaces actuelles et futures.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-green-600 text-white rounded-full font-semibold hover:bg-green-700 transition-colors"
            >
             <a href="https://mailchi.mp/40154de7a900/nevermind-whitelist"> Demande de Démontration</a>
            </motion.button>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
}
