import { motion } from 'framer-motion';
import Hero from '../components/Hero';
import About from '../components/About';
import Features from '../components/Features';
import Testimonials from '../components/Testimonials';
import React from 'react';
import PostQuantum from '../components/PostQuantum';

export default function HomePage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Hero />
      <PostQuantum />
      <About />
      <Features />
    </motion.div>
  );
}