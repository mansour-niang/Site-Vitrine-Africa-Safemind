import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // Fait défiler la page jusqu'au sommet
  }, [pathname]); // Exécute cet effet à chaque changement de route

  return null; // Ce composant n'affiche rien
}