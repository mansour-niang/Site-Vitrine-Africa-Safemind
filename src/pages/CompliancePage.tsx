import { motion } from 'framer-motion';
import { CheckCircle, Shield, FileCheck, Lock } from 'lucide-react';
import React from 'react';

export default function CompliancePage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-20 font-open-sans"
    >
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-[#00A675] to-[#31896E] text-white py-24">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 2 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Conformité et Réglementation
            </h1>
            <p className="text-xl text-gray-300">
              Une approche proactive de la conformité pour anticiper 
              les exigences réglementaires de demain
            </p>
          </motion.div>
        </div>
      </div>

      {/* Standards Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 2 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-6 text-[#3D3D3D]">
                Standards Internationaux
              </h2>
              <p className="text-[#3D3D3D] mb-6">
                Nevermind respecte et dépasse les exigences des principales 
                normes internationales de sécurité, garantissant une protection 
                optimale de vos données sensibles.
              </p>
              <ul className="space-y-4">
                {[
                  "Certification ISO 27001",
                  "Conformité RGPD",
                  "Standards NIS 2",
                  "Directive DORA"
                ].map((item, index) => (
                  <motion.li
                    key={item}
                    initial={{ x: -20, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 2, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-3"
                  >
                    <CheckCircle className="w-6 h-6 text-[#00A675]" />
                    <span className="text-[#3D3D3D]">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 2 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img
                src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80"
                alt="Technology Compliance"
                className="rounded-lg shadow-xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Compliance Features */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 2 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-4 text-[#3D3D3D]">
              Caractéristiques de Conformité
            </h2>
            <p className="text-[#9C9C9C] max-w-2xl mx-auto">
              Des fonctionnalités avancées pour garantir la conformité 
              de vos opérations numériques
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Shield,
                title: "Protection des Données",
                description: "Chiffrement de bout en bout conforme aux normes"
              },
              {
                icon: FileCheck,
                title: "Audit Trail",
                description: "Traçabilité complète des accès et modifications"
              },
              {
                icon: Lock,
                title: "Contrôle d'Accès",
                description: "Gestion granulaire des permissions utilisateurs"
              },
              {
                icon: CheckCircle,
                title: "Rapports de Conformité",
                description: "Génération automatique des rapports réglementaires"
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
                <feature.icon className="w-12 h-12 text-[#00A675] mb-4" />
                <h3 className="text-xl font-semibold mb-2 text-[#3D3D3D]">{feature.title}</h3>
                <p className="text-[#9C9C9C]">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
}
