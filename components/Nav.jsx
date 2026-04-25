"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { name: "início", path: "/" },
  { name: "serviços", path: "/servicos" },
  { name: "sobre", path: "/sobre" },
  { name: "projetos", path: "/projetos" },
  { name: "contato", path: "/contato" },
];

const Nav = () => {
  const pathname = usePathname();

  return (
    <nav className="flex gap-6">
      {links.map((link, index) => {
        const isActive = pathname === link.path;

        return (
          <Link
            key={index}
            href={link.path}
            className={`text-sm transition-all capitalize ${
              isActive
                ? "text-accent border-b-2 border-accent"
                : "hover:text-accent"
            }`}
          >
            {link.name}
          </Link>
        );
      })}
    </nav>
  );
};

export default Nav;