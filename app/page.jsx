import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";

const Home = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          {/* texto */}
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl">Software Developer</span>
            <h1 className="h1 mb-6">
              Olá, eu sou<br /><span className="text-accent">Brenno Alencar</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi officia accusantiu
              numquam sapiente id officia voluptate laborum.
            </p>
            {/* btn and socials */}
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Button
                variant="outline"
                size="lg"
                className="uppercase flex items-center gap-2 border border-accent text-accent
               hover:bg-accent hover:text-black rounded-full px-6 py-3 transition-all
                duration-300"
              >
                <span>Download CV</span>
                <FiDownload className="text-xl" />
              </Button>
              <div className="mb-8 xl:mb-0">socials</div>
            </div>
          </div>

          {/* photo */}
          <div>photo</div>
        </div>
      </div>
    </section>
  );
};

export default Home;