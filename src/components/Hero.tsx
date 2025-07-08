import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Heart } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: `url(${heroImage})`,
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white mb-6 animate-gentle-bounce">
            <Sparkles className="h-4 w-4 mr-2" />
            <span className="text-sm font-medium">Artisanat marocain authentique</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 animate-fade-in">
            Co-créez votre{" "}
            <span className="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
              tenue unique
            </span>
            {" "}avec une Maalma
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed animate-fade-in">
            Découvrez l'art traditionnel marocain. Créez ensemble un caftan, une tkshita ou une djellaba personnalisée avec notre artisane experte.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in">
            <Button variant="hero" size="lg" className="text-lg px-8 py-4">
              <Heart className="h-5 w-5 mr-2" />
              Créer ma tenue
              <ArrowRight className="h-5 w-5 ml-2" />
            </Button>
            
            <Button variant="outline" size="lg" className="text-lg px-8 py-4 bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20">
              Découvrir le processus
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-8 text-white/80">
            <div className="flex items-center">
              <span className="font-semibold text-2xl text-white">150+</span>
              <span className="ml-2">Créations réalisées</span>
            </div>
            <div className="hidden sm:block w-px h-6 bg-white/30"></div>
            <div className="flex items-center">
              <span className="font-semibold text-2xl text-white">98%</span>
              <span className="ml-2">Clientes satisfaites</span>
            </div>
            <div className="hidden sm:block w-px h-6 bg-white/30"></div>
            <div className="flex items-center">
              <span className="font-semibold text-2xl text-white">20+ ans</span>
              <span className="ml-2">D'expérience</span>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}