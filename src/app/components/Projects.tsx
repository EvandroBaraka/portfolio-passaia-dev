import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { ExternalLink, Github } from "lucide-react";
import RadarDeImpostos from "../../assets/Radar-de-Impostos-thumb.png";
import SyntaxWear from "../../assets/Syntaxwear-thumb.png"
import StudioAura from "../../assets/Studio-Aura-thumb.png"

export default function Projects() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.2 });

    const projects = [
        {
            title: "Landing Page - Studio Aura",
            description:
                "Landing page para uma empresa de design de interiores, com animações e interações modernas.",
            image: StudioAura,
            tags: ["JavaScript", "Tailwind CSS", "GSAP"],
            github: "https://github.com/EvandroBaraka/studio-aura",
            demo: "https://evandrobaraka.github.io/studio-aura/",
            color: "from-blue-500 to-cyan-500",
        },
        {
            title: "Radar de Impostos",
            description:
                "Plataforma para o gerenciamento e visualização de impostos pagos em compras do dia a dia através da leitura de QR Codes de NFC-e.",
            image: RadarDeImpostos,
            tags: ["React", "Supabase", "Node.js", "Recharts"],
            github: "https://github.com/EvandroBaraka/radar-de-impostos",
            demo: "https://radar-de-impostos-app.vercel.app/",
            color: "from-purple-500 to-pink-500",
        },
        {
            title: "E-commerce Syntax Wear",
            description:
                "Loja virtual completa com carrinho de compras, checkout seguro, painel administrativo e integração com gateways de pagamento.",
            image: SyntaxWear,
            tags: ["React", "TypeScript", "PostgreSQL", "Stripe"],
            github: "https://github.com/EvandroBaraka/syntax-wear-app",
            demo: "https://syntaxwear.vercel.app/",
            color: "from-green-500 to-emerald-500",
        },
    ];

    return (
        <section
            id="projects"
            className="py-20 md:py-32 bg-gray-900 relative overflow-hidden"
        >
            {/* Background decoration */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-1/3 right-10 w-96 h-96 bg-cyan-500 rounded-full filter blur-3xl"></div>
                <div className="absolute bottom-1/3 left-10 w-96 h-96 bg-purple-500 rounded-full filter blur-3xl"></div>
            </div>

            <div
                className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
                ref={ref}
            >
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl lg:text-5xl mb-4">
                        <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                            Projetos
                        </span>
                    </h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto mb-4"></div>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Alguns dos projetos que desenvolvi recentemente
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.title}
                            initial={{ opacity: 0, y: 50 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            className="group h-full"
                        >
                            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-700/80 hover:border-cyan-400/50 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/10 hover:-translate-y-1.5 flex flex-col h-full">
                                {/* Image */}
                                <div className="relative h-48 md:h-56 overflow-hidden bg-gray-950">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent opacity-80"></div>

                                    {/* Desktop quick actions on hover */}
                                    <div className="hidden sm:flex absolute inset-0 bg-gray-950/75 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 items-center justify-center gap-4">
                                        <a
                                            href={project.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="p-3 bg-gray-800/90 text-white rounded-full hover:bg-cyan-400 hover:text-gray-950 transition-all duration-200 transform hover:scale-110 shadow-lg"
                                            onClick={(e) => e.stopPropagation()}
                                            aria-label={`Ver código no GitHub de ${project.title}`}
                                        >
                                            <Github size={20} />
                                        </a>
                                        <a
                                            href={project.demo}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="p-3 bg-gray-800/90 text-white rounded-full hover:bg-cyan-400 hover:text-gray-950 transition-all duration-200 transform hover:scale-110 shadow-lg"
                                            onClick={(e) => e.stopPropagation()}
                                            aria-label={`Acessar demo ao vivo de ${project.title}`}
                                        >
                                            <ExternalLink size={20} />
                                        </a>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-6 flex flex-col flex-1">
                                    <h3 className="text-xl font-semibold text-white mb-2.5 group-hover:text-cyan-400 transition-colors">
                                        {project.title}
                                    </h3>
                                    <p className="text-gray-400 mb-5 text-sm leading-relaxed flex-1">
                                        {project.description}
                                    </p>

                                    {/* Tags */}
                                    <div className="flex flex-wrap gap-2 mb-6">
                                        {project.tags.map((tag) => (
                                            <span
                                                key={tag}
                                                className="px-3 py-1 bg-gray-900/80 text-gray-300 rounded-full text-xs font-mono border border-gray-700"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Mobile & Desktop Action Bar (always visible) */}
                                    <div className="pt-4 border-t border-gray-700/60 flex items-center gap-3 mt-auto">
                                        <a
                                            href={project.demo}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex-1 min-h-[44px] inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg bg-gradient-to-r from-cyan-500/20 to-purple-600/20 border border-cyan-400/40 text-cyan-300 hover:from-cyan-500 hover:to-purple-600 hover:text-white hover:border-transparent transition-all duration-200 text-sm font-medium"
                                        >
                                            <ExternalLink size={16} />
                                            <span>Demo Online</span>
                                        </a>
                                        <a
                                            href={project.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="min-h-[44px] inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg bg-gray-800/80 border border-gray-700 text-gray-300 hover:text-white hover:bg-gray-700 hover:border-gray-600 transition-all duration-200 text-sm font-medium"
                                            aria-label={`Ver repositório no GitHub de ${project.title}`}
                                        >
                                            <Github size={16} />
                                            <span>GitHub</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* View More */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    className="text-center mt-12"
                >
                    <a
                        href="https://github.com/EvandroBaraka"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-8 py-3 bg-transparent border-2 border-cyan-400 text-cyan-400 rounded-lg hover:bg-cyan-400/10 transition-all duration-300 hover:scale-105"
                    >
                        <Github size={20} />
                        <span>Ver Mais no GitHub</span>
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
