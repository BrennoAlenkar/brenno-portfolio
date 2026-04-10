import Link from "next/link"
import { Button } from "./ui/button"

// componentes
import MobileNav from "./MobileNav"
import Nav from "./Nav"

const Header = () => {
  return (
    <header className="py-8 xl:py-12 text-white">
      <div className="container mx-auto flex items-center justify-between">
        
        {/* logo */}
        <Link href="/">
          <h1 className="text-xl font-semibold">
            Brenno<span className="text-accent">.</span>
          </h1>
        </Link>

        {/* desktop nav */}
        <div className="hidden xl:flex items-center gap-8">
          <Nav />

          <Link href="/contato">
            <Button>
              Contrate-me
            </Button>
          </Link>
        </div>

        {/* mobile */}
        <div className="xl:hidden">
          <MobileNav />
        </div>

      </div>
    </header>
  )
}

export default Header