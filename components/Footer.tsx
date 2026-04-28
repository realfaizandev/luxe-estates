import { Link } from "wouter";
import { Instagram, Twitter, Linkedin, Facebook } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground pt-20 pb-10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-6 group">
              <div className="w-8 h-8 bg-accent rounded flex items-center justify-center text-accent-foreground font-serif font-bold text-xl group-hover:bg-white group-hover:text-primary transition-colors duration-300">
                L
              </div>
              <span className="font-serif text-2xl font-semibold tracking-tight">
                Luxe Estates
              </span>
            </Link>
            <p className="text-primary-foreground/70 mb-6 leading-relaxed">
              Curating the world's most exceptional properties for a discerning clientele. Unparalleled discretion, global reach, local expertise.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-accent hover:text-accent-foreground transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-accent hover:text-accent-foreground transition-colors">
                <Twitter size={18} />
              </a>
              <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-accent hover:text-accent-foreground transition-colors">
                <Linkedin size={18} />
              </a>
              <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-accent hover:text-accent-foreground transition-colors">
                <Facebook size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-serif font-medium mb-6 text-white">Properties</h4>
            <ul className="space-y-3 text-primary-foreground/70">
              <li><Link href="/properties?type=Penthouse" className="hover:text-accent transition-colors">Penthouses</Link></li>
              <li><Link href="/properties?type=Villa" className="hover:text-accent transition-colors">Villas & Estates</Link></li>
              <li><Link href="/properties?type=Loft" className="hover:text-accent transition-colors">Architectural Lofts</Link></li>
              <li><Link href="/properties?location=Manhattan" className="hover:text-accent transition-colors">New York</Link></li>
              <li><Link href="/properties?location=Malibu" className="hover:text-accent transition-colors">California</Link></li>
              <li><Link href="/properties?location=Europe" className="hover:text-accent transition-colors">Europe</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-serif font-medium mb-6 text-white">Company</h4>
            <ul className="space-y-3 text-primary-foreground/70">
              <li><Link href="/about" className="hover:text-accent transition-colors">About Us</Link></li>
              <li><Link href="/agents" className="hover:text-accent transition-colors">Our Agents</Link></li>
              <li><Link href="/services" className="hover:text-accent transition-colors">Services</Link></li>
              <li><Link href="/blog" className="hover:text-accent transition-colors">Journal</Link></li>
              <li><Link href="/contact" className="hover:text-accent transition-colors">Contact</Link></li>
              <li><Link href="/dashboard" className="hover:text-accent transition-colors">Admin</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-serif font-medium mb-6 text-white">Global Offices</h4>
            <ul className="space-y-4 text-primary-foreground/70">
              <li>
                <strong className="block text-white font-medium text-sm mb-1">New York</strong>
                <span className="text-sm">1 Vanderbilt Avenue, 45th Floor<br />New York, NY 10017</span>
              </li>
              <li>
                <strong className="block text-white font-medium text-sm mb-1">Los Angeles</strong>
                <span className="text-sm">9000 Sunset Blvd, Suite 200<br />West Hollywood, CA 90069</span>
              </li>
              <li>
                <strong className="block text-white font-medium text-sm mb-1">London</strong>
                <span className="text-sm">15 Berkeley Square<br />Mayfair, London W1J 6BD</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between text-sm text-primary-foreground/50">
          <p>&copy; {new Date().getFullYear()} Luxe Estates International. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
