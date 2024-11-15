import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import React, { useState } from 'react';

export default function ContactPage() {
  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'sent'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('sending');
    // Simulate form submission
    setTimeout(() => {
      setFormStatus('sent');
    }, 2000);
  };

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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Contactez-nous</h1>
            <p className="text-xl text-gray-300">
              Notre équipe est à votre disposition pour répondre à toutes vos questions
            </p>
          </motion.div>
        </div>
      </div>

      {/* Contact Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 2 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-8">Nos Coordonnées</h2>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-green-100 p-3 rounded-full">
                    <Mail className="w-6 h-6 text-[#00A675]" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Email</h3>
                    <p className="text-[#3D3D3D]">contact@africasafemind.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-green-100 p-3 rounded-full">
                    <Phone className="w-6 h-6 text-[#00A675]" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Téléphone</h3>
                    {/*<p className="text-[#3D3D3D]">+123 456 789</p>*/}
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-green-100 p-3 rounded-full">
                    <MapPin className="w-6 h-6 text-[#00A675]" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Adresse</h3>
                    <p className="text-[#3D3D3D]">
                      123 Rue de la Sécurité<br />
                      Dakar, Sénégal
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 2 }}
              viewport={{ once: true }}
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-[#9C9C9C] mb-1">
                    Nom complet
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    className="w-full px-4 py-2 border border-[#9C9C9C] rounded-lg focus:ring-2 focus:ring-[#00A675] focus:border-transparent"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-[#9C9C9C] mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    className="w-full px-4 py-2 border border-[#9C9C9C] rounded-lg focus:ring-2 focus:ring-[#00A675] focus:border-transparent"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-[#9C9C9C] mb-1">
                    Sujet
                  </label>
                  <input
                    type="text"
                    id="subject"
                    required
                    className="w-full px-4 py-2 border border-[#9C9C9C] rounded-lg focus:ring-2 focus:ring-[#00A675] focus:border-transparent"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-[#9C9C9C] mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    required
                    className="w-full px-4 py-2 border border-[#9C9C9C] rounded-lg focus:ring-2 focus:ring-[#00A675] focus:border-transparent"
                  ></textarea>
                </div>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  type="submit"
                  disabled={formStatus !== 'idle'}
                  className="w-full px-6 py-3 bg-[#00A675] text-white rounded-lg font-semibold hover:bg-[#31896E] transition-colors flex items-center justify-center space-x-2"
                >
                  {formStatus === 'idle' && (
                    <>
                      <span>Envoyer le message</span>
                      <Send className="w-5 h-5" />
                    </>
                  )}
                  {formStatus === 'sending' && <span>Envoi en cours...</span>}
                  {formStatus === 'sent' && <span>Message envoyé !</span>}
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </motion.div>
  );
}
