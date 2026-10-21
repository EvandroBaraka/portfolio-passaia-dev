import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { Code, Database, Palette, Zap, Globe, Server, GitBranch, Atom } from 'lucide-react';

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const skills = [
    {
      icon: Code,
      name: 'HTML & CSS',
      color: 'from-orange-500 to-pink-500',
      description: 'Estrutura e estilização',
    },
    {
      icon: Zap,
      name: 'JavaScript',
      color: 'from-yellow-400 to-orange-500',
      description: 'ES6+ & TypeScript',
    },
    {
      icon: Atom,
      name: 'React',
      color: 'from-cyan-400 to-blue-500',
      description: 'Hooks & Context',
    },
    {
      icon: Server,
      name: 'Node.js',
      color: 'from-green-400 to-emerald-600',
      description: 'Express & APIs',
    },
    {
      icon: Database,
      name: 'Database',
      color: 'from-blue-500 to-purple-600',
      description: 'SQL & NoSQL',
    },
    {
      icon: Palette,
      name: 'UI/UX',
      color: 'from-pink-500 to-purple-600',
      description: 'Design responsivo',
    },
    {
      icon: Globe,
      name: 'Typescript',
      color: 'from-indigo-500 to-purple-600',
      description: 'Tipagem estática',
    },
    {
      icon: GitBranch,
      name: 'Git',
      color: 'from-orange-600 to-red-600',
      description: 'Versionamento',
    },
  ];

  return (
    <section id="skills" className="py-20 md:py-32 bg-gray-950 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500 rounded-full filter blur-3xl"></div>
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
              Habilidades
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto mb-4"></div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Tecnologias e ferramentas que domino para criar soluções completas
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="relative bg-gray-900/50 backdrop-blur-sm p-6 rounded-2xl border border-gray-800 hover:border-transparent transition-all duration-300 cursor-pointer overflow-hidden">
                {/* Hover gradient border effect */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl`}
                ></div>
                <div className="absolute inset-[2px] bg-gray-900 rounded-2xl"></div>

                {/* Content */}
                <div className="relative z-10 flex flex-col items-center text-center">
                  <div
                    className={`w-16 h-16 md:w-20 md:h-20 mb-4 rounded-xl bg-gradient-to-br ${skill.color} flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg`}
                  >
                    <skill.icon className="text-white" size={32} />
                  </div>
                  <h3 className="text-white mb-2 group-hover:text-cyan-400 transition-colors">
                    {skill.name}
                  </h3>
                  <p className="text-gray-500 text-xs md:text-sm group-hover:text-gray-400 transition-colors">
                    {skill.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Tech Stack */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <p className="text-gray-500 mb-4">Também trabalho com:</p>
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {[
              'Python',
              'Next.js',
              'Tailwind CSS',
              'React-Hook-Form',
              'Zod',
              'Tanstack Query',
              'Tanstack Router',
              'Prisma',
              'PostgreSQL',
              'Docker',
              'Firebase',
              'Jest',
              'Vitest'
            ].map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 bg-gray-800/50 text-gray-400 rounded-full text-sm hover:bg-cyan-400/10 hover:text-cyan-400 transition-all duration-300 border border-gray-700 hover:border-cyan-400/50"
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
