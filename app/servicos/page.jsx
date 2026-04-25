"use client";

import Link from "next/link";
import { BsArrowDownRight } from "react-icons/bs";
import { motion } from "framer-motion";

const services = [
  {
    num: "01",
    title: "Desenvolvimento Web",
    description:
      "Criação de sites modernos, responsivos e otimizados para oferecer a melhor experiência ao usuário.",
    href: "#",
    techs: ["React", "Next.js", "Tailwind CSS", "Node.js"],
  },
  {
    num: "02",
    title: "Design UI/UX",
    description:
      "Interfaces intuitivas e atraentes, focadas na usabilidade e na experiência do usuário.",
    href: "#",
    techs: ["Figma", "Adobe XD", "Framer"],
  },
  {
    num: "03",
    title: "Design de Logo",
    description:
      "Criação de identidades visuais marcantes e profissionais para fortalecer sua marca.",
    href: "#",
    techs: ["Illustrator", "Photoshop", "Figma"],
  },
  {
    num: "04",
    title: "SEO",
    description:
      "Otimização para mecanismos de busca, aumentando sua visibilidade e atraindo mais clientes.",
    href: "#",
    techs: ["Google Analytics", "Search Console", "Semrush"],
  },
];

const Servicos = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="w-full max-w-[1280px] mx-auto px-4 sm:px-6 xl:px-16">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: 1,
            duration: 0.4,
            ease: "easeIn",
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[40px]"
        >
          {services.map((service, index) => (
            <div
              key={index}
              className="flex flex-col justify-center gap-4 group"
            >
              {/* Top */}
              <div className="w-full flex justify-between items-center">
                <div className="text-3xl xl:text-4xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">
                  {service.num}
                </div>

                <Link
                  href={service.href}
                  className="w-[55px] h-[55px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45"
                >
                  <BsArrowDownRight className="text-primary text-2xl" />
                </Link>
              </div>

              {/* Title */}
              <h2 className="text-2xl xl:text-3xl font-bold leading-none text-white group-hover:text-accent transition-all duration-500">
                {service.title}
              </h2>

              {/* Description */}
              <p className="text-sm xl:text-base text-white/60 leading-relaxed">
                {service.description}
              </p>

               <div className="flex flex-wrap gap-2">
                {service.techs.map((tech, i) => (
                  <span
                    key={i}
                    className="text-xs px-3 py-1 rounded-full border border-accent/40 text-accent/80 group-hover:border-accent group-hover:text-accent transition-all duration-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Border */}
              <div className="border-b border-white/20 w-full pt-2"></div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Servicos;