import { motion } from 'framer-motion';
import { Shield, Award, Users, Building } from 'lucide-react';
import React from 'react';

export default function AboutPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-20"
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Notre Histoire</h1>
            <p className="text-xl text-gray-300">
              Depuis 7 ans, nous façonnons l'avenir de la sécurité documentaire en Afrique
            </p>
          </motion.div>
        </div>
      </div>

      {/* Mission Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 2 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-6">Notre Mission</h2>
              <p className="text-3D3D3D mb-6">
                Africa Safemind s'engage à fournir des solutions de sécurité documentaire 
                de pointe, permettant aux entreprises africaines de prospérer dans un 
                environnement numérique sécurisé.
              </p>
              <p className="text-3D3D3D">
                Notre expertise unique en cryptographie post-quantique nous permet 
                d'anticiper et de protéger contre les menaces futures.
              </p>
            </motion.div>
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 2 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-6"
            >
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <Shield className="w-12 h-12 text-green-600 mb-4" />
                <h3 className="font-semibold mb-2">Protection</h3>
                <p className="text-3D3D3D">Sécurité de niveau militaire</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <Award className="w-12 h-12 text-green-600 mb-4" />
                <h3 className="font-semibold mb-2">Excellence</h3>
                <p className="text-3D3D3D">Standards internationaux</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <Users className="w-12 h-12 text-green-600 mb-4" />
                <h3 className="font-semibold mb-2">Support</h3>
                <p className="text-3D3D3D">Accompagnement dédié</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <Building className="w-12 h-12 text-green-600 mb-4" />
                <h3 className="font-semibold mb-2">Expertise</h3>
                <p className="text-3D3D3D">7 ans d'expérience</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 2 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-4">Notre Équipe</h2>
            <p className="text-[3D3D3D] max-w-2xl mx-auto">
              Une équipe d'experts passionnés par la sécurité numérique et dédiés 
              à la protection de vos données.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Diallo",
                role: "Directrice Générale",
                image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=400"
              },
              {
                name: "Marc Kouassi",
                role: "Directeur Technique",
                image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400"
              },
              {
                name: "Aminata Sy",
                role: "Responsable Conformité",
                image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=400"
              }
            ].map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 2, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg overflow-hidden shadow-lg"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                  <p className="text-3D3D3D">{member.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
}
