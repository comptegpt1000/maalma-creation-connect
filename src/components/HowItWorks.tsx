import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  PlusCircle, 
  MessageSquare, 
  CheckCircle, 
  Scissors, 
  Package,
  ArrowRight
} from "lucide-react";

const steps = [
  {
    icon: PlusCircle,
    number: "01",
    title: "Créez votre projet",
    description: "Décrivez votre vision, uploadez des photos d'inspiration ou apportez votre propre tissu.",
    color: "bg-primary"
  },
  {
    icon: MessageSquare,
    number: "02", 
    title: "Collaborez avec votre maalma",
    description: "Échangez en temps réel, participez aux choix de design et validez chaque étape.",
    color: "bg-secondary"
  },
  {
    icon: CheckCircle,
    number: "03",
    title: "Finalisez les détails",
    description: "Validez le devis, envoyez vos mesures et effectuez le paiement de l'acompte.",
    color: "bg-accent"
  },
  {
    icon: Scissors,
    number: "04",
    title: "Création artisanale",
    description: "Votre maalma réalise votre pièce unique avec un savoir-faire traditionnel.",
    color: "bg-success"
  },
  {
    icon: Package,
    number: "05",
    title: "Livraison",
    description: "Recevez votre création unique directement chez vous, partout dans le monde.",
    color: "bg-primary"
  }
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Comment ça marche ?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Un processus simple et transparent pour créer votre tenue traditionnelle marocaine sur mesure.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Desktop view */}
          <div className="hidden lg:block">
            <div className="relative">
              {/* Connection line */}
              <div className="absolute top-16 left-0 right-0 h-0.5 bg-gradient-to-r from-primary via-secondary via-accent via-success to-primary"></div>
              
              <div className="grid grid-cols-5 gap-6">
                {steps.map((step, index) => (
                  <div key={index} className="relative">
                    <Card className="text-center hover:shadow-medium transition-all duration-300 hover:-translate-y-2">
                      <CardHeader className="pb-4">
                        <div className={`mx-auto w-16 h-16 ${step.color} rounded-full flex items-center justify-center mb-4 relative z-10`}>
                          <step.icon className="h-8 w-8 text-white" />
                        </div>
                        <div className="text-3xl font-bold text-muted-foreground mb-2">{step.number}</div>
                        <CardTitle className="text-lg">{step.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                          {step.description}
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Mobile view */}
          <div className="lg:hidden space-y-6">
            {steps.map((step, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className={`w-12 h-12 ${step.color} rounded-full flex items-center justify-center flex-shrink-0`}>
                  <step.icon className="h-6 w-6 text-white" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center mb-2">
                    <span className="text-2xl font-bold text-muted-foreground mr-3">{step.number}</span>
                    <h3 className="text-lg font-semibold">{step.title}</h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
                {index < steps.length - 1 && (
                  <div className="absolute left-6 mt-12 w-0.5 h-6 bg-gradient-to-b from-primary to-secondary"></div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <Button variant="hero" size="lg">
            Commencer mon projet
            <ArrowRight className="h-5 w-5 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
}