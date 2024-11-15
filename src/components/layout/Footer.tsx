import { Facebook, Twitter, Linkedin, Mail } from 'lucide-react';
import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-[#66e0bb] text-white">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4" style={{ fontFamily: 'Cairo, sans-serif' }}>
             <img src="https://res.cloudinary.com/dctwo7qtv/image/upload/v1731684457/africasafe-removebg-preview_wlkmtt.png" alt="" className='w-48 h-19'/>
            </h3>
            <p className="text-[#3D3D3D]" style={{ fontFamily: 'Open Sans, sans-serif' }}>
              Votre partenaire en sécurité documentaire post-quantique en Afrique.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4" style={{ fontFamily: 'Cairo, sans-serif' }}>Solutions</h4>
            <ul className="space-y-2">
              <li><a href="/product" className="text-[#3D3D3D] hover:text-[#00A675] transition-colors" style={{ fontFamily: 'Open Sans, sans-serif' }}>Nevermind</a></li>
              <li><a href="/compliance" className="text-[#3D3D3D] hover:text-[#00A675] transition-colors" style={{ fontFamily: 'Open Sans, sans-serif' }}>Conformité</a></li>
              <li><a href="/about" className="text-[#3D3D3D] hover:text-[#00A675] transition-colors" style={{ fontFamily: 'Open Sans, sans-serif' }}>À propos</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4" style={{ fontFamily: 'Cairo, sans-serif' }}>Contact</h4>
            <ul className="space-y-2">
              <li className="text-[#3D3D3D]" style={{ fontFamily: 'Open Sans, sans-serif' }}>contact@africasafemind.com</li>
             {/* <li className="text-[#3D3D3D]" style={{ fontFamily: 'Open Sans, sans-serif' }}>+123 456 789</li>*/}
              <li className="text-[#3D3D3D]" style={{ fontFamily: 'Open Sans, sans-serif' }}>Dakar, Sénégal</li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4" style={{ fontFamily: 'Cairo, sans-serif' }}>Suivez-nous</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-[#3D3D3D] hover:text-[#00A675] transition-colors">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" className="text-[#3D3D3D] hover:text-[#00A675] transition-colors">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="#" className="text-[#3D3D3D] hover:text-[#00A675] transition-colors">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="#" className="text-[#3D3D3D] hover:text-[#00A675] transition-colors">
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-[#3D3D3D] mt-8 pt-8 text-center text-[#3D3D3D]" style={{ fontFamily: 'Open Sans, sans-serif' }}>
          <p>&copy; {new Date().getFullYear()} Africa Safemind. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}
