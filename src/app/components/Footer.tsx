import { Github, Linkedin, Twitter, Heart } from 'lucide-react';

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
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Left: Logo and description */}
          <div>
            <div className="text-2xl mb-4 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              {'<Dev />'}
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Desenvolvedor Full-Stack apaixonado por criar experiências web incríveis e soluções inovadoras.
            </p>
          </div>

          {/* Middle: Quick Links */}
          <div>
            <h3 className="text-white mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-gray-400 hover:text-cyan-400 transition-colors text-sm"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: Social */}
          <div>
            <h3 className="text-white mb-4">Redes Sociais</h3>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gradient-to-br hover:from-cyan-500 hover:to-purple-600 transition-all duration-300 hover:scale-110 group"
                  aria-label={social.label}
                >
                  <social.icon size={18} className="text-gray-400 group-hover:text-white transition-colors" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom: Copyright */}
        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm text-center md:text-left">
            © 2026 Evandro Passaia. Todos os direitos reservados.
          </p>
          <p className="text-gray-500 text-sm flex items-center gap-2">
            Feito com <Heart size={16} className="text-red-500 fill-current" /> e muito código
          </p>
        </div>
      </div>
    </footer>
  );
}
