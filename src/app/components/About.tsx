import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { Code2, Lightbulb, Users, Zap } from 'lucide-react';

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const highlights = [
    {
      icon: Code2,
      title: 'Código Limpo',
      description: 'Foco em boas práticas, manutenibilidade e tipagem segura com TypeScript.',
    },
    {
      icon: Lightbulb,
      title: 'Criatividade',
      description: 'Soluções inovadoras e eficientes para problemas complexos.',
    },
    {
      icon: Users,
      title: 'Trabalho em Equipe',
      description: 'Colaboração efetiva, comunicação clara e sinergia em projetos.',
    },
    {
      icon: Zap,
      title: 'Aprendizado Rápido',
      description: 'Sempre atualizado com as melhores ferramentas do ecossistema full-stack.',
    },
  ];

  return (
    <section id="about" className="py-20 md:py-32 bg-gray-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-500 rounded-full filter blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Sobre Mim
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Left: Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-gray-300 mb-6 leading-relaxed">
              Sou um desenvolvedor full-stack apaixonado por tecnologia e inovação. Graduando em Análise e Desenvolvimento de Sistemas, transformo ideias em soluções digitais completas, unindo interfaces intuitivas no front-end a arquiteturas robustas e eficientes no back-end.
            </p>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Minha trajetória é movida pela curiosidade e pelo aprendizado contínuo. Gosto de enfrentar desafios técnicos complexos, escrevendo código limpo e escalável com tecnologias modernas da stack web. Seja estruturando APIs ou criando experiências fluidas para o usuário, meu foco é entregar produtos digitais que realmente fazem a diferença.
            </p>
          </motion.div>

          {/* Right: Highlights Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-2 gap-4"
          >
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700 hover:border-cyan-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10 group"
              >
                <div className="mb-4 text-cyan-400 group-hover:scale-110 transition-transform duration-300 inline-block">
                  <item.icon size={32} />
                </div>
                <h3 className="text-white mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
