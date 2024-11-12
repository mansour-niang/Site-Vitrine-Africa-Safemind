import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Award, Shield, Users } from 'lucide-react';
import React from 'react';

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 2,
      },
    },
  };

  return (
    <section className="py-20 bg-gray-50" id="about">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="max-w-4xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4" style={{ color: '#3D3D3D', fontFamily: 'Cairo, sans-serif' }}>
              Sécuriser l'avenir numérique des entreprises africaines
            </h2>
            <p className="text-xl" style={{ color: '#3D3D3D', fontFamily: 'Open Sans, sans-serif' }}>
              Avec 7 ans d'expérience, nous offrons les meilleures solutions de sécurité documentaire,
              garantissant un service fiable et de haute qualité à nos clients.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-12">
            <motion.div
              variants={itemVariants}
              className="text-center"
            >
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6" style={{ backgroundColor: '#00A675' }}>
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3" style={{ fontFamily: 'Cairo, sans-serif', color: '#3D3D3D' }}>Excellence</h3>
              <p style={{ color: '#3D3D3D', fontFamily: 'Open Sans, sans-serif' }}>
                Solutions technologiques de pointe sélectionnées avec rigueur
              </p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="text-center"
            >
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6" style={{ backgroundColor: '#00A675' }}>
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3" style={{ fontFamily: 'Cairo, sans-serif', color: '#3D3D3D' }}>Sécurité</h3>
              <p style={{ color: '#3D3D3D', fontFamily: 'Open Sans, sans-serif' }}>
                Protection avancée contre les menaces actuelles et futures
              </p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="text-center"
            >
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6" style={{ backgroundColor: '#00A675' }}>
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3" style={{ fontFamily: 'Cairo, sans-serif', color: '#3D3D3D' }}>Accompagnement</h3>
              <p className='text-[#3D3D3D]' style={{ color: '#3D3D3D', fontFamily: 'Open Sans, sans-serif' }}>
                Support personnalisé pour votre croissance en toute sérénité
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
