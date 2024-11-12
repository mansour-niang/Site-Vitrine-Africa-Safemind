import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Star } from 'lucide-react';
import React from 'react';

export default function Testimonials() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const testimonials = [
    {
      name: "Jean Dupont",
      role: "Directeur IT, Banque Centrale",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200",
      content: "La solution Nevermind nous a permis de sécuriser nos documents sensibles avec une confiance absolue. L'authentification biométrique est particulièrement impressionnante."
    },
    {
      name: "Marie Koné",
      role: "RSSI, Groupe Industriel",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200",
      content: "Africa Safemind a révolutionné notre approche de la sécurité documentaire. Le support technique est exceptionnel et la solution est vraiment à la pointe de la technologie."
    },
    {
      name: "Ahmed Diallo",
      role: "CEO, Fintech Solutions",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200",
      content: "La conformité réglementaire était notre principal défi. Avec Nevermind, nous sommes non seulement conformes mais aussi préparés pour les futures exigences."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 2 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-[#00A675] mb-4"> {/* Couleur primaire */}
            Ils nous font confiance
          </h2>
          <p className="text-xl text-[#3D3D3D] max-w-2xl mx-auto"> {/* Couleur secondaire */}
            Découvrez ce que nos clients disent de notre solution
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 2, delay: index * 0.1 }}
              className="bg-[#9C9C9C]/10 backdrop-blur-lg rounded-xl p-8 shadow-lg" // Couleur de fond douce
            >
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" /> // Couleur d'étoile
                ))}
              </div>
              <p className="text-[#3D3D3D] mb-6">{testimonial.content}</p> {/* Couleur de texte */}
              <div className="flex items-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4 border-2 border-[#00A675]" // Bordure
                />
                <div>
                  <h4 className="font-semibold text-[#00A675]">{testimonial.name}</h4> {/* Couleur de texte */}
                  <p className="text-[#31896E] text-sm">{testimonial.role}</p> {/* Couleur secondaire */}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 2, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <p className="text-[#3D3D3D] max-w-2xl mx-auto">
            Rejoignez plus de 100 entreprises qui font confiance à Africa Safemind 
            pour leur sécurité documentaire
          </p>
        </motion.div>
      </div>
    </section>
  );
}
