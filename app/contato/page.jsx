"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FiPhone, FiMail, FiMapPin } from "react-icons/fi";

const info = [
  {
    icon: <FiPhone />,
    label: "Telefone",
    value: "(+55) 62 99200-2421",
  },
  {
    icon: <FiMail />,
    label: "Email",
    value: "brennoalencar79@gmail.com",
  },
  {
    icon: <FiMapPin />,
    label: "Localização",
    value: "Goiânia, Goiás — Brasil",
  },
];

const services = [
  "Desenvolvimento Web",
  "Aplicação Full Stack",
  "Landing Page",
  "UI/UX Design",
  "Consultoria Frontend",
];

const Contato = () => {
  const [form, setForm] = useState({
    nome: "",
    sobrenome: "",
    email: "",
    telefone: "",
    servico: "",
    mensagem: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {   
    e.preventDefault();
    console.log(form);
  };

  return (
    <section className="flex flex-col justify-center py-8 xl:py-6">
      <div className="w-full max-w-[1280px] mx-auto px-4 sm:px-6 xl:px-16">
        <div className="flex flex-col xl:flex-row gap-8 xl:gap-12">

          {/* formulário */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="flex-1 bg-[#1c1c22] rounded-2xl p-6 xl:p-8 flex flex-col gap-4 border border-white/5"
          >
            <div className="flex flex-col gap-1">
              <h2 className="text-2xl xl:text-3xl font-bold text-accent leading-tight">
                Vamos trabalhar juntos
              </h2>
              <p className="text-white/60 text-sm leading-relaxed max-w-[420px]">
                Tem um projeto em mente? Preencha o formulário e entro em contato o quanto antes.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <input
                name="nome"
                value={form.nome}
                onChange={handleChange}
                placeholder="Nome"
                className="bg-[#232329] text-white text-sm placeholder:text-white/30 rounded-lg px-4 py-2.5 border border-white/5 focus:border-accent/50 focus:outline-none transition-colors duration-300"
              />
              <input
                name="sobrenome"
                value={form.sobrenome}
                onChange={handleChange}
                placeholder="Sobrenome"
                className="bg-[#232329] text-white text-sm placeholder:text-white/30 rounded-lg px-4 py-2.5 border border-white/5 focus:border-accent/50 focus:outline-none transition-colors duration-300"
              />
              <input
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Email"
                type="email"
                className="bg-[#232329] text-white text-sm placeholder:text-white/30 rounded-lg px-4 py-2.5 border border-white/5 focus:border-accent/50 focus:outline-none transition-colors duration-300"
              />
              <input
                name="telefone"
                value={form.telefone}
                onChange={handleChange}
                placeholder="Telefone"
                type="tel"
                className="bg-[#232329] text-white text-sm placeholder:text-white/30 rounded-lg px-4 py-2.5 border border-white/5 focus:border-accent/50 focus:outline-none transition-colors duration-300"
              />
            </div>

            {/* select */}
            <div className="relative">
              <select
                name="servico"
                value={form.servico}
                onChange={handleChange}
                className="w-full bg-[#232329] text-white/60 text-sm rounded-lg px-4 py-2.5 border border-white/5 focus:border-accent/50 focus:outline-none appearance-none transition-colors duration-300 cursor-pointer"
              >
                <option value="" disabled>
                  Selecione um serviço
                </option>
                {services.map((s, i) => (
                  <option key={i} value={s} className="text-white bg-[#232329]">
                    {s}
                  </option>
                ))}
              </select>
              <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-white/30 text-xs">
                ▾
              </span>
            </div>

            {/* textarea */}
            <textarea
              name="mensagem"
              value={form.mensagem}
              onChange={handleChange}
              placeholder="Digite sua mensagem aqui."
              rows={4}
              className="bg-[#232329] text-white text-sm placeholder:text-white/30 rounded-lg px-4 py-2.5 border border-white/5 focus:border-accent/50 focus:outline-none resize-none transition-colors duration-300"
            />

            <button
              onClick={handleSubmit}
              className="w-fit bg-accent text-primary font-semibold text-sm px-8 py-2.5 rounded-full hover:bg-accent/90 active:scale-95 transition-all duration-300 cursor-pointer"
            >
              Enviar mensagem
            </button>
          </motion.div>

          {/* info lateral */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.15 }}
            className="flex flex-col gap-3 xl:w-[300px] shrink-0 justify-center"
          >
            {info.map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-4 bg-[#232329] rounded-xl px-5 py-4 border border-white/5 hover:border-accent/30 transition-all duration-300 group"
              >
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center text-accent text-lg shrink-0 group-hover:bg-accent/20 transition-colors duration-300">
                  {item.icon}
                </div>
                <div className="flex flex-col gap-0.5">
                  <span className="text-white/40 text-xs uppercase tracking-widest">
                    {item.label}
                  </span>
                  <span className="text-white font-medium text-sm leading-snug">
                    {item.value}
                  </span>
                </div>
              </div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contato;
