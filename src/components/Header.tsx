import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X, Palette, User } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="border-b bg-card/80 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Palette className="h-8 w-8 text-primary" />
            <span className="font-bold text-xl text-foreground">Maalma Connect</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-foreground hover:text-primary transition-colors">
              Fonctionnalités
            </a>
            <a href="#how-it-works" className="text-foreground hover:text-primary transition-colors">
              Comment ça marche
            </a>
            <a href="#about" className="text-foreground hover:text-primary transition-colors">
              À propos
            </a>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost">
              <User className="h-4 w-4 mr-2" />
              Se connecter
            </Button>
            <Button variant="hero">
              Commencer
            </Button>
          </div>

          {/* Mobile menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <nav className="flex flex-col space-y-4 mt-6">
                <a 
                  href="#features" 
                  className="text-foreground hover:text-primary transition-colors py-2"
                  onClick={() => setIsOpen(false)}
                >
                  Fonctionnalités
                </a>
                <a 
                  href="#how-it-works" 
                  className="text-foreground hover:text-primary transition-colors py-2"
                  onClick={() => setIsOpen(false)}
                >
                  Comment ça marche
                </a>
                <a 
                  href="#about" 
                  className="text-foreground hover:text-primary transition-colors py-2"
                  onClick={() => setIsOpen(false)}
                >
                  À propos
                </a>
                <div className="pt-4 space-y-2">
                  <Button variant="ghost" className="w-full justify-start">
                    <User className="h-4 w-4 mr-2" />
                    Se connecter
                  </Button>
                  <Button variant="hero" className="w-full">
                    Commencer
                  </Button>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}