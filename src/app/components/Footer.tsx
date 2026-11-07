import { Github, Linkedin, Heart } from 'lucide-react';

export default function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const quickLinks = [
    { label: 'Início', id: 'hero' },
    { label: 'Sobre', id: 'about' },
    { label: 'Skills', id: 'skills' },
    { label: 'Projetos', id: 'projects' },
    { label: 'Contato', id: 'contact' },
  ];

  const socialLinks = [
    { icon: Github, href: 'https://github.com/EvandroBaraka', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/evandro-passaia-62b9a5269/', label: 'LinkedIn' },
  ];

  return (
    <footer className="bg-gray-950 border-t border-gray-800/80">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-20 md:pb-16">
        <div className="grid md:grid-cols-3 gap-10 mb-10">
          {/* Left: Logo and description */}
          <div>
            <div className="text-xl font-bold font-mono tracking-tight flex items-center gap-1 mb-4">
              <span className="text-cyan-400">&lt;</span>
              <span className="text-white">evandro</span>
              <span className="text-cyan-400 font-semibold">.dev</span>
              <span className="text-purple-400">/&gt;</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
              Desenvolvedor Full-Stack focado em transformar ideias em produtos digitais de alta qualidade, performance e usabilidade.
            </p>
          </div>

          {/* Middle: Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider font-mono text-gray-200">
              Navegação
            </h3>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-gray-400 hover:text-cyan-400 transition-colors text-sm cursor-pointer"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: Social & Availability */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider font-mono text-gray-200">
              Redes &amp; Conexões
            </h3>
            <div className="flex gap-3 mb-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-900 border border-gray-800 rounded-lg flex items-center justify-center hover:border-cyan-400/50 hover:bg-gray-800 transition-all duration-200 hover:scale-105 group"
                  aria-label={social.label}
                >
                  <social.icon size={18} className="text-gray-400 group-hover:text-cyan-400 transition-colors" />
                </a>
              ))}
            </div>
            <p className="text-xs text-gray-500 font-mono">
              Porto Alegre, RS • Disponível para trabalho remoto
            </p>
          </div>
        </div>

        {/* Bottom: Copyright */}
        <div className="pt-8 border-t border-gray-800/80 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500 md:pr-20">
          <p>© {new Date().getFullYear()} Evandro Passaia. Todos os direitos reservados.</p>
          <p className="flex items-center gap-1.5 text-center md:text-right">
            Construído com <Heart size={14} className="text-rose-500 fill-current" /> em React, TypeScript &amp; Tailwind
          </p>
        </div>
      </div>
    </footer>
  );
}
