import { Palette, Mail, Phone, MapPin, Instagram, Facebook } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Palette className="h-8 w-8 text-primary" />
              <span className="font-bold text-xl">Maalma Connect</span>
            </div>
            <p className="text-background/80 leading-relaxed">
              Connectez-vous avec l'art traditionnel marocain. Créez votre tenue unique avec notre maître artisane.
            </p>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Services</h3>
            <ul className="space-y-2 text-background/80">
              <li>Caftans sur mesure</li>
              <li>Tkshitas traditionnelles</li>
              <li>Djellabas authentiques</li>
              <li>Broderie personnalisée</li>
            </ul>
          </div>

          {/* Liens utiles */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Liens utiles</h3>
            <ul className="space-y-2 text-background/80">
              <li><a href="#" className="hover:text-primary transition-colors">Guide des mesures</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Types de tissus</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Galerie</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">FAQ</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Contact</h3>
            <div className="space-y-3 text-background/80">
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-primary flex-shrink-0" />
                <span className="text-sm">Fès, Maroc</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-primary flex-shrink-0" />
                <span className="text-sm">+212 6XX XXX XXX</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-primary flex-shrink-0" />
                <span className="text-sm">contact@maalmaconnect.ma</span>
              </div>
            </div>

            {/* Social */}
            <div className="flex space-x-4 pt-2">
              <a href="#" className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center hover:bg-primary/30 transition-colors">
                <Instagram className="h-4 w-4" />
              </a>
              <a href="#" className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center hover:bg-primary/30 transition-colors">
                <Facebook className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-background/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-background/60 text-sm">
            © 2024 Maalma Connect. Tous droits réservés.
          </p>
          <div className="flex space-x-6 text-sm text-background/60">
            <a href="#" className="hover:text-background transition-colors">Politique de confidentialité</a>
            <a href="#" className="hover:text-background transition-colors">Conditions d'utilisation</a>
          </div>
        </div>
      </div>
    </footer>
  );
}