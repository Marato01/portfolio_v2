import { ArrowDown } from "lucide-react";

export const HeroSection = () => {
  return (
    <section
      className="relative min-h-[calc(100vh-4rem)] flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-secondary/10 to-transparent"
    >
      <style>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
        }
        .animate-fade-in-delay-1 {
          animation: fade-in 0.8s ease-out 0.2s forwards;
        }
        .animate-fade-in-delay-2 {
          animation: fade-in 0.8s ease-out 0.4s forwards;
        }
        .animate-fade-in-delay-3 {
          animation: fade-in 0.8s ease-out 0.6s forwards;
        }
        .animate-fade-in-delay-4 {
          animation: fade-in 0.8s ease-out 0.8s forwards;
        }
        .animate-fade-in-delay-5 {
          animation: fade-in 0.8s ease-out 1s forwards;
        }
      `}</style>
      <div className="container max-w-6xl mx-auto z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-12 lg:gap-12 items-center">
          <div className="space-y-4 sm:space-y-6 text-center md:text-left sm:mt-18 md:mt-0">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              <span className="opacity-0 animate-fade-in">Hi, I'm</span>
              <span className="text-primary opacity-0 animate-fade-in-delay-1">
                {" "}
                Sam
              </span>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600 ml-2 opacity-0 animate-fade-in-delay-2">
                {" "}
                Sothavy
              </span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto md:mx-0 opacity-0 animate-fade-in-delay-3">
              I create exceptional mobile experiences using modern technologies, specializing in front-end development with Flutter to build interfaces that are both beautiful and highly functional.
            </p>

            <div className="pt-4 opacity-0 animate-fade-in-delay-4">
              <a
                href="#projects"
                className="inline-block px-4 sm:px-6 py-2 sm:py-3 bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition-colors text-sm sm:text-base"
              >
                View My Work
              </a>
            </div>
          </div>
          <div className="flex justify-center md:justify-end mt-6 md:mt-0">
            <img
              src="/profile.jpg"
              alt="Sam Sothavy - Front-end Developer"
              className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-80 lg:h-80 rounded-full border-4 border-primary/20 dark:border-primary/40 shadow-lg opacity-0 animate-fade-in-delay-5 object-cover"
              onError={(e) => {
                e.target.src = "https://via.placeholder.com/400x400?text=Image+Failed";
              }}
            />
          </div>
        </div>
      </div>

      <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-xs sm:text-sm text-muted-foreground mb-2">Scroll</span>
        <ArrowDown className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
      </div>
    </section>
  );
};