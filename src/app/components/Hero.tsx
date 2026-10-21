import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Download, Mail, Github, Linkedin } from 'lucide-react';
import ParticleBackground from './ParticleBackground';
const fotoPerfil = new URL('../../assets/foto_perfil.jpg', import.meta.url).href;

export default function Hero() {
  const [displayText, setDisplayText] = useState('');
  const fullText = 'Desenvolvedor Web Full-Stack';
  const [currentIndex, setCurrentIndex] = useState(0);

  // Typewriter effect
  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + fullText[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, 100);
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setDisplayText('');
        setCurrentIndex(0);
      }, 3000); // Wait for 3 seconds before restarting
      return () => clearTimeout(timeout);
    }
  }, [currentIndex]);

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <ParticleBackground />

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          {/* Profile Image */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-cyan-400 shadow-lg shadow-cyan-500/50">
              <img
                src={fotoPerfil}
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          {/* Greeting */}
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-cyan-400 mb-4"
          >
            Olá, meu nome é
          </motion.p>

          {/* Name */}
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="text-4xl md:text-6xl lg:text-7xl mb-4 bg-gradient-to-r from-white via-cyan-200 to-purple-300 bg-clip-text text-transparent"
          >
            Evandro Passaia
          </motion.h1>

          {/* Typewriter Title */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.5 }}
            className="text-xl md:text-3xl text-gray-300 mb-6 h-12 md:h-16 flex items-center"
          >
            <span className="inline-block min-w-[300px] md:min-w-[400px]">
              {displayText}
              <span className="inline-block w-0.5 h-6 md:h-8 bg-cyan-400 ml-1 animate-pulse"></span>
            </span>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.5 }}
            className="text-gray-400 max-w-2xl mb-8 text-sm md:text-base leading-relaxed"
          >
            Especializado em criar experiências web modernas e responsivas com React, Node.js e tecnologias de ponta.
            Transformo ideias em produtos digitais de alta qualidade.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.1, duration: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 mb-12"
          >
            <a 
              href="https://drive.google.com/file/d/18Wc6mlhve-A9L56SUg22CyJ8u1hV5D6j/view?usp=drive_link"
              download='Evandro_Passaia_CV.pdf'
              target="_blank"
              rel="noopener noreferrer"
              className="group px-8 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2" >
              <Download size={20} />
              <span>Download CV</span>
            </a>
            <button
              onClick={scrollToContact}
              className="px-8 py-3 bg-transparent border-2 border-cyan-400 text-cyan-400 rounded-lg hover:bg-cyan-400/10 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2 cursor-pointer"
            >
              <Mail size={20} />
              <span>Entre em Contato</span>
            </button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.3, duration: 0.5 }}
            className="flex gap-10"
          >
            <a
              href="https://github.com/EvandroBaraka"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-cyan-400 transition-colors hover:scale-110 transform duration-200"
            >
              <Github size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/evandro-passaia-62b9a5269/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-cyan-400 transition-colors hover:scale-110 transform duration-200"
            >
              <Linkedin size={24} />
            </a>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-cyan-400 rounded-full flex justify-center">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2"
          ></motion.div>
        </div>
      </motion.div>
    </section>
  );
}
