import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import {
  Terminal,
  GraduationCap,
  MapPin,
  CheckCircle2,
  Code2,
  Sparkles,
  Layers,
  Zap,
} from 'lucide-react';

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="about" className="py-24 md:py-32 bg-gray-900/90 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-cyan-500/30 rounded-full filter blur-[120px]"></div>
        <div className="absolute bottom-10 right-0 w-96 h-96 bg-purple-600/30 rounded-full filter blur-[120px]"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/70 border border-cyan-500/30 text-cyan-400 text-xs font-mono mb-4 tracking-wider uppercase">
            <Terminal size={14} />
            <span>// 01. SOBRE MIM</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 tracking-tight">
            Trajetória, Foco &amp;{' '}
            <span className="bg-gradient-to-r from-cyan-400 via-teal-300 to-purple-400 bg-clip-text text-transparent">
              Propósito
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
            Unindo visão de produto, interfaces refinadas e arquitetura resiliente no ecossistema web moderno.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {/* Main Story Card (2 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="md:col-span-2 bg-gray-950/60 backdrop-blur-md rounded-2xl p-7 md:p-9 border border-gray-800 hover:border-cyan-500/40 transition-all duration-300 flex flex-col justify-between group shadow-lg"
          >
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
                  <Code2 size={20} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">Desenvolvedor Web Full-Stack</h3>
                  <p className="text-xs text-gray-400 font-mono">React • Node.js • TypeScript</p>
                </div>
              </div>

              <div className="space-y-4 text-gray-300 text-sm md:text-base leading-relaxed">
                <p>
                  Sou graduando em <strong className="text-white font-medium">Análise e Desenvolvimento de Sistemas</strong> com paixão por transformar requisitos complexos em produtos digitais intuitivos e de alta performance.
                </p>
                <p className="text-gray-400">
                  Minha abordagem une a atenção minuciosa aos detalhes visuais no front-end (responsividade, acessibilidade e micro-interações) à construção de back-ends robustos, com APIs organizadas, bancos modelados de forma consistente e boas práticas de engenharia de software.
                </p>
              </div>
            </div>

            {/* Core commitments */}
            <div className="mt-8 pt-6 border-t border-gray-800/80 grid sm:grid-cols-3 gap-3">
              {[
                { title: 'Tipagem Estrita', desc: 'Segurança e agilidade com TypeScript' },
                { title: 'Código Limpo', desc: 'Manutenibilidade e separação de responsabilidades' },
                { title: 'Foco no Usuário', desc: 'Interfaces acessíveis e de alta conversão' },
              ].map((item) => (
                <div key={item.title} className="flex items-start gap-2">
                  <CheckCircle2 size={16} className="text-cyan-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-xs font-semibold text-white">{item.title}</p>
                    <p className="text-[11px] text-gray-500 leading-tight mt-0.5">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Status & Academics Card (1 col) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-gray-950/60 backdrop-blur-md rounded-2xl p-7 border border-gray-800 hover:border-purple-500/40 transition-all duration-300 flex flex-col justify-between shadow-lg"
          >
            <div>
              {/* Availability Badge */}
              <div className="mb-6 p-3.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center gap-3">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                </span>
                <div className="text-xs">
                  <p className="font-semibold text-emerald-300">Disponível para Projetos</p>
                  <p className="text-emerald-400/80 text-[11px]">Remoto • Presencial • Híbrido</p>
                </div>
              </div>

              {/* Education */}
              <div className="mb-6">
                <div className="flex items-center gap-2.5 text-purple-400 mb-2">
                  <GraduationCap size={20} />
                  <span className="text-xs font-mono uppercase tracking-wider">Formação Acadêmica</span>
                </div>
                <h4 className="text-base font-semibold text-white">Análise e Desenvolvimento de Sistemas</h4>
                <p className="text-xs text-gray-400 mt-1">Graduando • Foco em Engenharia de Software e Arquitetura Web</p>
              </div>

              {/* Location */}
              <div>
                <div className="flex items-center gap-2.5 text-cyan-400 mb-2">
                  <MapPin size={20} />
                  <span className="text-xs font-mono uppercase tracking-wider">Localização</span>
                </div>
                <h4 className="text-base font-semibold text-white">Porto Alegre, RS</h4>
                <p className="text-xs text-gray-400 mt-1">Brasil • Disponibilidade para fusos e viagens</p>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-gray-800/80 flex items-center justify-between text-xs text-gray-500 font-mono">
              <span>Status: Ativo</span>
              <span className="text-cyan-400">2026</span>
            </div>
          </motion.div>

          {/* Full-Stack Delivery Card (1 col) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-gray-950/60 backdrop-blur-md rounded-2xl p-7 border border-gray-800 hover:border-cyan-500/40 transition-all duration-300 shadow-lg"
          >
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-500/20 to-purple-600/20 border border-cyan-500/30 flex items-center justify-center text-cyan-400 mb-4">
              <Layers size={20} />
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">Visão End-to-End</h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              Capacidade de atuar em todas as etapas de um produto: desde o entendimento do problema de negócio até o deployment contínuo.
            </p>
            <div className="space-y-2">
              {[
                'Prototipação ágil de interfaces',
                'APIs RESTful com validação rígida',
                'Modelagem e migrations de banco',
              ].map((item) => (
                <div key={item} className="flex items-center gap-2 text-xs text-gray-300">
                  <Sparkles size={12} className="text-purple-400 flex-shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Engineering Values Card (2 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="md:col-span-2 bg-gray-950/60 backdrop-blur-md rounded-2xl p-7 border border-gray-800 hover:border-purple-500/40 transition-all duration-300 shadow-lg"
          >
            <div className="flex items-center gap-2 text-cyan-400 mb-4">
              <Zap size={18} />
              <h3 className="text-base font-semibold text-white">Diferenciais Técnicos de Entrega</h3>
            </div>
            <div className="grid sm:grid-cols-3 gap-4">
              <div className="p-4 rounded-xl bg-gray-900/60 border border-gray-800/80">
                <p className="text-sm font-semibold text-cyan-300 mb-1">Qualidade &amp; Testes</p>
                <p className="text-xs text-gray-400 leading-relaxed">
                  Automação com Vitest e validação com Zod para garantir que a aplicação seja confiável em produção.
                </p>
              </div>
              <div className="p-4 rounded-xl bg-gray-900/60 border border-gray-800/80">
                <p className="text-sm font-semibold text-purple-300 mb-1">Performance &amp; SEO</p>
                <p className="text-xs text-gray-400 leading-relaxed">
                  Aplicações otimizadas para carregamento instantâneo, renderização híbrida e SEO amigável.
                </p>
              </div>
              <div className="p-4 rounded-xl bg-gray-900/60 border border-gray-800/80">
                <p className="text-sm font-semibold text-emerald-300 mb-1">Comunicação &amp; Sinergia</p>
                <p className="text-xs text-gray-400 leading-relaxed">
                  Postura proativa, comunicação transparente e facilidade em colaborar em equipes multidisciplinares.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
