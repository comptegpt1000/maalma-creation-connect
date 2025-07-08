import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Award, Users, Globe, Heart } from "lucide-react";
import maalmaPortrait from "@/assets/maalma-portrait.jpg";

export function About() {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="relative">
              <div className="relative overflow-hidden rounded-2xl shadow-strong">
                <img 
                  src={maalmaPortrait}
                  alt="Maalma artisan at work"
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              </div>
              
              {/* Floating card */}
              <Card className="absolute -bottom-6 -right-6 p-6 shadow-strong bg-card border-border/50">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-1">20+</div>
                  <div className="text-sm text-muted-foreground">Années d'expérience</div>
                </div>
              </Card>
            </div>

            {/* Content */}
            <div className="space-y-6">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                  Rencontrez votre Maalma
                </h2>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Fatima est une maître artisane marocaine avec plus de 20 ans d'expérience dans la création de vêtements traditionnels. Elle perpétue un savoir-faire ancestral transmis de génération en génération.
                </p>
              </div>

              <div className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  Spécialisée dans la confection de caftans, tkshitas et djellabas, elle maîtrise l'art de la broderie traditionnelle, du travail de la sfifa et de l'assemblage de tissus nobles.
                </p>
                
                <p className="text-muted-foreground leading-relaxed">
                  Son atelier, situé au cœur de Fès, combine techniques ancestrales et outils modernes pour créer des pièces uniques qui célèbrent l'élégance marocaine.
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-6 py-6">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                    <Award className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">Maître artisane</div>
                    <div className="text-sm text-muted-foreground">Certifiée CMA</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-secondary/10 rounded-full flex items-center justify-center">
                    <Users className="h-5 w-5 text-secondary" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">150+ clientes</div>
                    <div className="text-sm text-muted-foreground">Satisfaites</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center">
                    <Globe className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">Livraison mondiale</div>
                    <div className="text-sm text-muted-foreground">30+ pays</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-success/10 rounded-full flex items-center justify-center">
                    <Heart className="h-5 w-5 text-success" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">Passion</div>
                    <div className="text-sm text-muted-foreground">Artisanat authentique</div>
                  </div>
                </div>
              </div>

              <Button variant="accent" size="lg">
                Découvrir ses créations
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}