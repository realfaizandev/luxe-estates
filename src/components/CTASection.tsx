import { Link } from "wouter";
import { ArrowRight } from "lucide-react";

interface CTASectionProps {
  title: string;
  subtitle?: string;
  buttonText: string;
  buttonLink: string;
  image?: string;
}

export function CTASection({ 
  title, 
  subtitle = "Contact our advisory team to begin your journey.", 
  buttonText, 
  buttonLink,
  image = "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=2000&q=80"
}: CTASectionProps) {
  return (
    <section className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-primary/90 mix-blend-multiply z-10" />
        <img 
          src={image} 
          alt="Luxury background" 
          className="w-full h-full object-cover object-center"
        />
      </div>
      
      <div className="container mx-auto px-4 relative z-20 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-serif text-white mb-6 leading-tight">
            {title}
          </h2>
          <p className="text-xl text-white/80 mb-10 font-light">
            {subtitle}
          </p>
          <Link 
            href={buttonLink}
            className="inline-flex items-center justify-center px-8 py-4 bg-accent text-accent-foreground font-medium uppercase tracking-wider text-sm rounded-none hover:bg-white hover:text-primary transition-colors duration-300 group"
          >
            {buttonText}
            <ArrowRight size={18} className="ml-2 transform group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}
