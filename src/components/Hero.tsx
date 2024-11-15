import { motion } from 'framer-motion';
import { Shield, Lock, FileCheck, Key } from 'lucide-react';
import React from 'react';

export default function Hero() {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-[#00A675] via-[#31896E] to-[#00A675] text-white">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <img 
          src="https://www.lemoci.com/wp-content/uploads/2022/03/Entreprise-africaine-julief514-iStock.jpg"
          alt="Cybersecurity Background"
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="relative container mx-auto px-6 py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 2 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-8" style={{ fontFamily: 'Cairo, sans-serif', textShadow: '2px 4px 6px rgba(0, 0, 0, 0.5)' }}>
            Africa <span style={{ color: '#00A675' }}>Safe</span>mind
          </h1>
         
          <p className="text-xl md:text-2xl mb-8 text-gray-200" style={{ fontFamily: 'Open Sans, sans-serif', textShadow: '1px 2px 4px rgba(0, 0, 0, 0.4)' }}>
            Une Société de distrubuteur officel du produit Nevermind dans plus de 20 pays africains.
            Votre Partenaire en Sécurité Documentaire Post-Quantique
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <a href="https://nvmcifer.com/">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-[#31896E] rounded-full font-semibold hover:bg-[#00A675] transition-colors"
                style={{ fontFamily: 'Cairo, sans-serif' }}
              >
                Découvrir Nevermind
              </motion.button>
            </a>
            <a href="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-transparent border-2 border-white rounded-full font-semibold hover:bg-white hover:text-[#000000] transition-colors"
                style={{ fontFamily: 'Cairo, sans-serif' }}
              >
                Contactez-nous
              </motion.button>
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 2, delay: 0.2 }}
          className="grid md:grid-cols-4 gap-6 max-w-8xl mx-auto mt-16"
        >
          <div className="bg-white/10 backdrop-blur-lg p-4 rounded-xl flex flex-col items-center">
            <div className="flex items-center justify-center w-14 h-14 mb-4 rounded-full">
              <Shield className="w-12 h-12 text-[#00A675]" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-center" style={{ fontFamily: 'Cairo, sans-serif', color: '#ffff' }}>
              Technologie Post-Quantique
            </h3>
            <p className="text-gray-200 text-center" style={{ fontFamily: 'Open Sans, sans-serif' }}>
              Protection innovante contre les attaques quantiques futures.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-lg p-4 rounded-xl flex flex-col items-center">
            <div className="flex items-center justify-center w-14 h-14 mb-4 rounded-full">
              <Key className="w-12 h-12 text-[#00A675]" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-center" style={{ fontFamily: 'Cairo, sans-serif', color: '#ffff' }}>
              Centré sur l'utilisateur
            </h3>
            <p className="text-gray-200 text-center" style={{ fontFamily: 'Open Sans, sans-serif' }}>
              Responsabilité fiduciaire engagée et Notarisation des actes.
            </p>
          </div>
      
          <div className="bg-white/10 backdrop-blur-lg p-4 rounded-xl flex flex-col items-center">
            <div className="flex items-center justify-center w-14 h-14 mb-4 rounded-full">
              <Lock className="w-12 h-12 text-[#00A675]" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-center" style={{ fontFamily: 'Cairo, sans-serif', color: '#ffff' }}>
              Sécurité Renforcée
            </h3>
            <p className="text-gray-200 text-center" style={{ fontFamily: 'Open Sans, sans-serif' }}>
              Authentification vidéo et clés de chiffres auto-généré.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-lg p-4 rounded-xl flex flex-col items-center">
            <div className="flex items-center justify-center w-14 h-14 mb-4 rounded-full">
              <FileCheck className="w-12 h-12 text-[#00A675]" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-center" style={{ fontFamily: 'Cairo, sans-serif', color: '#ffff' }}>
              Conformité Proactive
            </h3>
            <p className="text-gray-200 text-center" style={{ fontFamily: 'Open Sans, sans-serif' }}>
              Anticipation des réglementations de sécurité mondiales.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
