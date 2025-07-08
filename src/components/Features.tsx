import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  MessageCircle, 
  Video, 
  Palette, 
  Ruler, 
  CreditCard, 
  Truck,
  CheckCircle,
  Camera
} from "lucide-react";

const features = [
  {
    icon: MessageCircle,
    title: "Communication en temps réel",
    description: "Échangez par messages, audios et photos avec votre maalma tout au long du processus de création.",
    color: "text-primary"
  },
  {
    icon: Video,
    title: "Appels vidéo personnalisés",
    description: "Planifiez des sessions vidéo pour discuter de vos idées et voir les détails de votre création.",
    color: "text-secondary"
  },
  {
    icon: Palette,
    title: "Galerie d'inspiration",
    description: "Explorez notre collection de modèles, tissus et motifs traditionnels pour inspirer votre création.",
    color: "text-accent"
  },
  {
    icon: Ruler,
    title: "Prise de mesures guidée",
    description: "Suivez nos guides visuels pour prendre vos mesures avec précision depuis chez vous.",
    color: "text-primary"
  },
  {
    icon: CheckCircle,
    title: "Validation d'étapes",
    description: "Validez chaque étape de votre projet pour garantir que votre vision se concrétise parfaitement.",
    color: "text-success"
  },
  {
    icon: CreditCard,
    title: "Paiement sécurisé",
    description: "Système de paiement par étapes avec acompte initial et solde à la livraison.",
    color: "text-secondary"
  },
  {
    icon: Camera,
    title: "Suivi photo",
    description: "Recevez des photos de l'avancement de votre création et participez au processus.",
    color: "text-accent"
  },
  {
    icon: Truck,
    title: "Livraison mondiale",
    description: "Livraison sécurisée partout dans le monde avec suivi de votre commande.",
    color: "text-primary"
  }
];

export function Features() {
  return (
    <section id="features" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Une expérience de création unique
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Découvrez toutes les fonctionnalités qui font de Maalma Connect une plateforme exceptionnelle pour créer votre tenue sur mesure.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-medium transition-all duration-300 hover:-translate-y-1 border-border/50"
            >
              <CardHeader className="text-center pb-4">
                <div className="mx-auto w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className={`h-6 w-6 text-white`} />
                </div>
                <CardTitle className="text-lg">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}