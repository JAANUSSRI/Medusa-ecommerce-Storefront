import { Github } from "@medusajs/icons";
import { Button, Heading } from "@medusajs/ui";
import '../../../../styles/hero-background.css';

const Hero = () => {
  return (
    <div className="h-[88vh] w-full border-b border-ui-border-base relative overflow-hidden">
      <div className="absolute inset-0 z-0 bg-slide"></div>
      <div className="absolute inset-0 z-10 flex flex-col justify-center items-center text-center px-8 py-16 gap-6 md:px-16 md:py-24 lg:px-32 lg:py-32">
        <span>
          <Heading
            level="h1"
            className="text-4xl md:text-5xl lg:text-6xl leading-tight font-semibold"
          >
            Welcome to Trendzz!
            {/* Ecommerce Starter Template */}
          </Heading>
          <Heading
            level="h2"
            className="text-2xl md:text-3xl lg:text-4xl leading-relaxed mt-4"
          >
            Get Amazing Collections here...
            {/* Powered by Medusa and Next.js */}
          </Heading>
        </span>
        <a
          // href="https://github.com/medusajs/nextjs-starter-medusa"
          href="/store"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button 
            variant="secondary" 
            className="bg-blue-600 text-white hover:bg-blue-900 transition duration-200 w-60 h-10 text-xl"
          >
            Explore Products
            {/* View on GitHub */}
            {/* <Github className="ml-2" /> */}
          </Button>
        </a>
      </div>
    </div>
  );
};

export default Hero;
