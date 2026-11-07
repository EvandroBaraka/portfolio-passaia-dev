import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Download, Mail, Github, Linkedin } from 'lucide-react';
import ParticleBackground from './ParticleBackground';
const fotoPerfil = new URL('../../assets/foto_perfil.jpg', import.meta.url).href;

export default function Hero() {
  const titles = [
    'Desenvolvedor Web Full-Stack',
    'Especialista React & TypeScript',
    'Node.js & Arquitetura de APIs',
    'Interfaces Modernas & UI/UX',
  ];
  const [titleIndex, setTitleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  // Typewriter effect com ciclo contínuo
  useEffect(() => {
    const currentFull = titles[titleIndex];
    let timer: ReturnType<typeof setTimeout>;

    if (!isDeleting) {
      if (displayText.length < currentFull.length) {
        timer = setTimeout(() => {
          setDisplayText(currentFull.slice(0, displayText.length + 1));
        }, 75);
      } else {
        timer = setTimeout(() => {
          setIsDeleting(true);
        }, 2200);
      }
    } else {
      if (displayText.length > 0) {
        timer = setTimeout(() => {
          setDisplayText(currentFull.slice(0, displayText.length - 1));
        }, 35);
      } else {
        setIsDeleting(false);
        setTitleIndex((prev) => (prev + 1) % titles.length);
      }
    }

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, titleIndex]);

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-10 pb-20 md:pt-17 md:pb-24">
      <ParticleBackground />

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          {/* Profile Image with Availability Badge */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-8 relative"
          >
            <div className="relative p-1 rounded-full bg-gradient-to-tr from-cyan-400 via-teal-300 to-purple-500 shadow-xl shadow-cyan-500/20">
              <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-2 border-gray-950 bg-gray-900">
                <img
                  src={fotoPerfil}
                  alt="Foto de perfil de Evandro Passaia"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            {/* Live badge */}
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 whitespace-nowrap px-3 py-1 rounded-full bg-gray-950/90 border border-emerald-500/40 text-emerald-300 text-xs font-mono flex items-center gap-2 shadow-lg shadow-black/50">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>Disponível para projetos</span>
            </div>
          </motion.div>

          {/* Greeting */}
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-cyan-400 mb-3 font-mono text-xs md:text-sm tracking-wider uppercase inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30"
          >
            <span>👋 Olá, meu nome é</span>
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
            className="text-xl md:text-3xl text-gray-300 mb-6 min-h-[3.5rem] md:min-h-[4rem] flex items-center justify-center"
            aria-live="polite"
          >
            <span className="inline-flex items-center text-center">
              <span>{displayText}</span>
              <span className="inline-block w-0.5 h-6 md:h-8 bg-cyan-400 ml-1.5 animate-pulse" aria-hidden="true"></span>
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
              href="https://drive.google.com/uc?export=download&id=18Wc6mlhve-A9L56SUg22CyJ8u1hV5D6j"
              target="_blank"
              rel="noopener noreferrer"
              className="group px-8 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2 text-white font-medium cursor-pointer"
            >
              <Download size={20} className="group-hover:-translate-y-0.5 transition-transform" />
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
        className="absolute bottom-24 left-1/2 transform -translate-x-1/2"
      >
        <button
          onClick={() => {
            const element = document.getElementById('about');
            if (element) {
              element.scrollIntoView({ behavior: 'smooth' });
            }
          }}
          className="w-6 h-10 border-2 border-cyan-400/80 hover:border-cyan-400 rounded-full flex justify-center cursor-pointer transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-400 group"
          aria-label="Rolar para a seção Sobre Mim"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2 group-hover:bg-cyan-300"
          ></motion.div>
        </button>
      </motion.div>
    </section>
  );
}
