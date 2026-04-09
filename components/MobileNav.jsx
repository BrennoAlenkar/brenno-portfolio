"use client";

import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { CiMenuFries } from 'react-icons/ci';

const links = [
  { name: "início", path: "/" },
  { name: "serviços", path: "/servicos" },
  { name: "sobre mim", path: "/sobre" },
  { name: "projetos", path: "/projetos" },
  { name: "contato", path: "/contato" },
];

const MobileNav = () => {
  const pathname = usePathname();
  return (
    <Sheet>
      <SheetTrigger className="flex justify-center items-center">
        <CiMenuFries className='text-[32px] text-accent' />
      </SheetTrigger>
      <SheetContent className="flex flex-col">
        {/* logo */}
        <div className="mt-32 mb-8 text-center text-2xl">
          <Link href="/">
            <h1 className="text-4xl font-semibold text-white">
              Brenno<span className='text-accent'>.</span>
            </h1>
          </Link>
        </div>
        {/* nav */}
        <nav className="flex flex-col justify-center items-center gap-8">
          {links.map((link, index) => (
            <Link
              href={link.path}
              key={index}
              className={`${
                link.path === pathname
                  ? "text-accent border-b-2 border-accent"
                  : "text-white"
              } text-xl capitalize hover:text-accent transition-all`}
            >
              {link.name}
            </Link>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;