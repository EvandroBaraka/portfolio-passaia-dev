import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import {
  Terminal,
  Layout,
  Cpu,
  Database,
  Workflow,
  Sparkles,
  Layers,
  Code2,
} from 'lucide-react';

interface TechItem {
  name: string;
  badge?: string;
  highlight?: boolean;
}

interface SkillCategory {
  title: string;
  category: string;
  icon: typeof Layout;
  color: string;
  borderColor: string;
  description: string;
  techs: TechItem[];
  colSpan: string;
}

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const categories: SkillCategory[] = [
    {
      title: 'Frontend & UI Engineering',
      category: 'CLIENT-SIDE',
      icon: Layout,
      color: 'from-cyan-500/20 to-blue-600/20',
      borderColor: 'group-hover:border-cyan-400/50',
      description:
        'Construção de interfaces interativas, responsivas e de alta fidelidade visual com foco em performance, acessibilidade e arquitetura modular de componentes.',
      colSpan: 'lg:col-span-2',
      techs: [
        { name: 'React', badge: 'Core', highlight: true },
        { name: 'Next.js', badge: 'SSR/SSG', highlight: true },
        { name: 'TypeScript', badge: 'Tipagem', highlight: true },
        { name: 'Tailwind CSS', highlight: true },
        { name: 'Tanstack Query', badge: 'Data Fetching' },
        { name: 'Tanstack Router' },
        { name: 'Motion / Framer Motion' },
        { name: 'HTML5 & CSS3 Semântico' },
        { name: 'Design Systems / Radix' },
      ],
    },
    {
      title: 'Backend & APIs',
      category: 'SERVER-SIDE',
      icon: Cpu,
      color: 'from-emerald-500/20 to-teal-600/20',
      borderColor: 'group-hover:border-emerald-400/50',
      description:
        'Desenvolvimento de APIs RESTful estruturadas, seguras e prontas para integrar sistemas e processar regras de negócio com agilidade.',
      colSpan: 'lg:col-span-1',
      techs: [
        { name: 'Node.js', highlight: true },
        { name: 'Express', highlight: true },
        { name: 'Python' },
        { name: 'APIs RESTful', highlight: true },
        { name: 'Autenticação & JWT' },
        { name: 'Middlewares & Validação' },
      ],
    },
    {
      title: 'Dados & Persistência',
      category: 'DATABASE & CLOUD',
      icon: Database,
      color: 'from-purple-500/20 to-indigo-600/20',
      borderColor: 'group-hover:border-purple-400/50',
      description:
        'Modelagem relacional consistente, migrations seguras e persistência em nuvem com ferramentas modernas para integridade de dados.',
      colSpan: 'lg:col-span-1',
      techs: [
        { name: 'PostgreSQL', highlight: true },
        { name: 'Prisma ORM', highlight: true },
        { name: 'Supabase', highlight: true },
        { name: 'Firebase' },
        { name: 'Modelagem SQL & NoSQL' },
      ],
    },
    {
      title: 'DevOps, Qualidade & Ferramentas',
      category: 'TOOLING & WORKFLOW',
      icon: Workflow,
      color: 'from-orange-500/20 to-pink-600/20',
      borderColor: 'group-hover:border-pink-400/50',
      description:
        'Padronização de ambiente, testes automatizados e esteira de desenvolvimento para garantir código limpo e entregas sem regressões.',
      colSpan: 'lg:col-span-2',
      techs: [
        { name: 'Docker', badge: 'Containers', highlight: true },
        { name: 'Git & GitHub', badge: 'Versionamento', highlight: true },
        { name: 'Vitest & Jest', badge: 'Testes', highlight: true },
        { name: 'Zod', badge: 'Schema Validation', highlight: true },
        { name: 'React-Hook-Form' },
        { name: 'Vite' },
        { name: 'Figma (UI/UX Prototipação)' },
      ],
    },
  ];

  return (
    <section id="skills" className="py-24 md:py-32 bg-gray-950 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute top-1/3 -right-20 w-96 h-96 bg-cyan-500/20 rounded-full filter blur-[140px]"></div>
        <div className="absolute bottom-1/4 -left-20 w-96 h-96 bg-purple-600/20 rounded-full filter blur-[140px]"></div>
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
            <span>// 02. STACK &amp; HABILIDADES</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 tracking-tight">
            Tecnologias, Ferramentas &amp;{' '}
            <span className="bg-gradient-to-r from-cyan-400 via-teal-300 to-purple-400 bg-clip-text text-transparent">
              Ecossistema
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
            Organização por domínios de atuação para construir soluções completas, escaláveis e resilientes.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {categories.map((cat, index) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className={`${cat.colSpan} group`}
            >
              <div
                className={`bg-gray-900/60 backdrop-blur-md rounded-2xl p-7 md:p-8 border border-gray-800 ${cat.borderColor} transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/5 flex flex-col justify-between h-full relative overflow-hidden`}
              >
                {/* Subtle top ambient glow */}
                <div
                  className={`absolute top-0 right-0 w-48 h-48 bg-gradient-to-br ${cat.color} rounded-full filter blur-3xl opacity-30 group-hover:opacity-60 transition-opacity pointer-events-none`}
                ></div>

                <div>
                  {/* Category Header */}
                  <div className="flex items-center justify-between gap-4 mb-4">
                    <span className="text-[11px] font-mono tracking-wider uppercase text-cyan-400 bg-cyan-950/50 border border-cyan-500/20 px-2.5 py-1 rounded-md">
                      {cat.category}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-gray-800/80 border border-gray-700/80 flex items-center justify-center text-white group-hover:scale-110 group-hover:text-cyan-400 transition-all duration-300">
                      <cat.icon size={20} />
                    </div>
                  </div>

                  <h3 className="text-xl font-semibold text-white mb-2.5 group-hover:text-cyan-300 transition-colors">
                    {cat.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-6">
                    {cat.description}
                  </p>
                </div>

                {/* Tech Pills */}
                <div className="pt-4 border-t border-gray-800/80 flex flex-wrap gap-2">
                  {cat.techs.map((tech) => (
                    <span
                      key={tech.name}
                      className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono transition-all duration-200 ${
                        tech.highlight
                          ? 'bg-gray-800/90 text-white border border-gray-700 hover:border-cyan-400/60 hover:bg-gray-800'
                          : 'bg-gray-900/80 text-gray-400 border border-gray-800/80 hover:text-gray-200 hover:border-gray-700'
                      }`}
                    >
                      <span>{tech.name}</span>
                      {tech.badge && (
                        <span className="text-[10px] px-1.5 py-0.2 rounded bg-cyan-500/10 text-cyan-400 font-sans border border-cyan-500/20">
                          {tech.badge}
                        </span>
                      )}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Fast Info Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-12 text-center"
        >
          <div className="inline-flex flex-wrap items-center justify-center gap-6 px-6 py-3 rounded-full bg-gray-900/70 border border-gray-800 text-xs text-gray-400 font-mono">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
              TypeScript em 100% dos projetos
            </span>
            <span className="hidden sm:inline text-gray-700">•</span>
            <span className="flex items-center gap-2">
              <Sparkles size={14} className="text-purple-400" />
              Arquitetura Limpa &amp; Componentizada
            </span>
            <span className="hidden sm:inline text-gray-700">•</span>
            <span className="flex items-center gap-2">
              <Layers size={14} className="text-emerald-400" />
              Foco em Performance &amp; Core Web Vitals
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
