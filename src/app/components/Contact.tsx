import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef, useState } from "react";
import { Mail, MapPin, Phone, Send, Github, Linkedin } from "lucide-react";

export default function Contact() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.3 });

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const [errors, setErrors] = useState({
        name: "",
        email: "",
        message: "",
    });

    const [submitted, setSubmitted] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitError, setSubmitError] = useState("");

    const validateEmail = (email: string) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    };

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
        // Clear error when user starts typing
        if (errors[name as keyof typeof errors]) {
            setErrors((prev) => ({ ...prev, [name]: "" }));
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitted(false);
        setSubmitError("");

        // Validation
        const newErrors = {
            name: "",
            email: "",
            message: "",
        };

        if (!formData.name.trim()) {
            newErrors.name = "Nome é obrigatório";
        }

        if (!formData.email.trim()) {
            newErrors.email = "Email é obrigatório";
        } else if (!validateEmail(formData.email)) {
            newErrors.email = "Email inválido";
        }

        if (!formData.message.trim()) {
            newErrors.message = "Mensagem é obrigatória";
        }

        if (newErrors.name || newErrors.email || newErrors.message) {
            setErrors(newErrors);
            return;
        }

        setIsSubmitting(true);

        try {
            const response = await fetch(
                "https://formsubmit.co/ajax/evandropassaia@gmail.com",
                {
                    method: "POST",
                    headers: {
                        Accept: "application/json",
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        name: formData.name,
                        email: formData.email,
                        message: formData.message,
                        _subject: "Nova mensagem pelo portfólio",
                        _captcha: "false",
                    }),
                },
            );

            if (!response.ok) {
                throw new Error("Não foi possível enviar a mensagem.");
            }

            setSubmitted(true);
            setFormData({ name: "", email: "", message: "" });
        } catch {
            setSubmitError(
                "Não foi possível enviar a mensagem agora. Tente novamente em instantes.",
            );
        } finally {
            setIsSubmitting(false);
        }
    };

    const contactInfo = [
        {
            icon: Mail,
            label: "Email",
            value: "evandropassaia@gmail.com",
            href: "mailto:evandropassaia@gmail.com",
        },
        {
            icon: Phone,
            label: "Telefone",
            value: "+55 51 98491-3647",
            href: "tel:+5551984913647",
        },
        {
            icon: MapPin,
            label: "Localização",
            value: "Porto Alegre, Rio Grande do Sul - Brasil",
            href: "https://maps.app.goo.gl/xNjMyhUfqR4v8r6y9",
        },
    ];

    const socialLinks = [
        {
            icon: Github,
            href: "https://github.com/EvandroBaraka",
            label: "GitHub",
        },
        {
            icon: Linkedin,
            href: "https://www.linkedin.com/in/evandro-passaia-62b9a5269/",
            label: "LinkedIn",
        },
    ];

    return (
        <section
            id="contact"
            className="py-20 md:py-32 bg-gray-950 relative overflow-hidden"
        >
            {/* Background decoration */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-20 left-20 w-96 h-96 bg-purple-500 rounded-full filter blur-3xl"></div>
                <div className="absolute bottom-20 right-20 w-96 h-96 bg-cyan-500 rounded-full filter blur-3xl"></div>
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
                            Entre em Contato
                        </span>
                    </h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto mb-4"></div>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Tem algum projeto em mente? Vamos conversar!
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
                    {/* Left: Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <h3 className="text-2xl text-white mb-6">
                            Informações de Contato
                        </h3>
                        <p className="text-gray-400 mb-8 leading-relaxed">
                            Estou sempre aberto a discutir novos projetos,
                            ideias criativas ou oportunidades para fazer parte
                            de suas visões.
                        </p>

                        <div className="space-y-6 mb-8">
                            {contactInfo.map((item) => (
                                <div
                                    key={item.label}
                                    className="flex items-start gap-4"
                                >
                                    <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                                        <item.icon
                                            size={20}
                                            className="text-white"
                                        />
                                    </div>
                                    <div>
                                        <p className="text-gray-500 text-sm mb-1">
                                            {item.label}
                                        </p>
                                        {item.href ? (
                                            <a
                                                href={item.href}
                                                className="text-white hover:text-cyan-400 transition-colors"
                                            >
                                                {item.value}
                                            </a>
                                        ) : (
                                            <p className="text-white">
                                                {item.value}
                                            </p>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Social Links */}
                        <div>
                            <p className="text-gray-500 mb-4">Redes Sociais</p>
                            <div className="flex gap-4">
                                {socialLinks.map((social) => (
                                    <a
                                        key={social.label}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gradient-to-br hover:from-cyan-500 hover:to-purple-600 transition-all duration-300 hover:scale-110 group"
                                        aria-label={social.label}
                                    >
                                        <social.icon
                                            size={20}
                                            className="text-gray-400 group-hover:text-white transition-colors"
                                        />
                                    </a>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* Right: Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        <form onSubmit={handleSubmit} className="space-y-6">
                            {/* Name */}
                            <div>
                                <label
                                    htmlFor="name"
                                    className="block text-gray-300 mb-2"
                                >
                                    Nome
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    aria-invalid={Boolean(errors.name)}
                                    aria-describedby={
                                        errors.name ? "name-error" : undefined
                                    }
                                    className={`w-full px-4 py-3 bg-gray-800/50 border ${
                                        errors.name
                                            ? "border-red-500"
                                            : "border-gray-700"
                                    } rounded-lg text-white focus:outline-none focus:border-cyan-400 transition-colors`}
                                    placeholder="Seu nome"
                                />
                                {errors.name && (
                                    <p
                                        id="name-error"
                                        className="text-red-500 text-sm mt-1"
                                    >
                                        {errors.name}
                                    </p>
                                )}
                            </div>

                            {/* Email */}
                            <div>
                                <label
                                    htmlFor="email"
                                    className="block text-gray-300 mb-2"
                                >
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    aria-invalid={Boolean(errors.email)}
                                    aria-describedby={
                                        errors.email ? "email-error" : undefined
                                    }
                                    className={`w-full px-4 py-3 bg-gray-800/50 border ${
                                        errors.email
                                            ? "border-red-500"
                                            : "border-gray-700"
                                    } rounded-lg text-white focus:outline-none focus:border-cyan-400 transition-colors`}
                                    placeholder="seu@email.com"
                                />
                                {errors.email && (
                                    <p
                                        id="email-error"
                                        className="text-red-500 text-sm mt-1"
                                    >
                                        {errors.email}
                                    </p>
                                )}
                            </div>

                            {/* Message */}
                            <div>
                                <label
                                    htmlFor="message"
                                    className="block text-gray-300 mb-2"
                                >
                                    Mensagem
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    aria-invalid={Boolean(errors.message)}
                                    aria-describedby={
                                        errors.message
                                            ? "message-error"
                                            : undefined
                                    }
                                    rows={5}
                                    className={`w-full px-4 py-3 bg-gray-800/50 border ${
                                        errors.message
                                            ? "border-red-500"
                                            : "border-gray-700"
                                    } rounded-lg text-white focus:outline-none focus:border-cyan-400 transition-colors resize-none`}
                                    placeholder="Sua mensagem..."
                                ></textarea>
                                {errors.message && (
                                    <p
                                        id="message-error"
                                        className="text-red-500 text-sm mt-1"
                                    >
                                        {errors.message}
                                    </p>
                                )}
                            </div>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full px-8 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2 text-white"
                            >
                                <Send size={20} />
                                <span>
                                    {isSubmitting
                                        ? "Enviando..."
                                        : "Enviar Mensagem"}
                                </span>
                            </button>

                            {submitError && (
                                <p
                                    role="alert"
                                    className="text-red-400 text-center"
                                >
                                    {submitError}
                                </p>
                            )}

                            {/* Success Message */}
                            {submitted && (
                                <motion.div
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="p-4 bg-green-500/20 border border-green-500 rounded-lg text-green-400 text-center"
                                >
                                    Mensagem enviada com sucesso! Entrarei em
                                    contato em breve.
                                </motion.div>
                            )}
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
