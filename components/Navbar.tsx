import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, Heart, Moon, Sun } from "lucide-react";
import { useTheme } from "@/hooks/use-theme";
import { useWishlist } from "@/hooks/use-wishlist";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const { wishlist } = useWishlist();
  const [location] = useLocation();

  // Pages that have a dark hero at the top — only these get the
  // transparent / white-text navbar treatment when not scrolled.
  const hasDarkHero = location === "/";
  const isSolid = isScrolled || !hasDarkHero;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Properties", path: "/properties" },
    { name: "Services", path: "/services" },
    { name: "Agents", path: "/agents" },
    { name: "About", path: "/about" },
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact" }
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isSolid
          ? "bg-background/80 backdrop-blur-lg border-b shadow-sm py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 bg-accent rounded flex items-center justify-center text-accent-foreground font-serif font-bold text-xl group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
              L
            </div>
            <span className={`font-serif text-2xl font-semibold tracking-tight ${isSolid ? "text-foreground" : "text-white drop-shadow-md"}`}>
              Luxe Estates
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <div className="flex items-center gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  href={link.path}
                  className={`text-sm font-medium uppercase tracking-wide transition-colors ${
                    location === link.path
                      ? "text-accent"
                      : isSolid
                      ? "text-foreground/80 hover:text-foreground"
                      : "text-white/90 hover:text-white drop-shadow-sm"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            <div className="flex items-center gap-4 border-l border-border/30 pl-4">
              <button
                onClick={toggleTheme}
                className={`p-2 rounded-full transition-colors ${
                  isSolid
                    ? "hover:bg-muted text-foreground"
                    : "hover:bg-white/10 text-white"
                }`}
                aria-label="Toggle theme"
              >
                {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
              </button>

              <Link
                href="/wishlist"
                className={`relative p-2 rounded-full transition-colors ${
                  isSolid
                    ? "hover:bg-muted text-foreground"
                    : "hover:bg-white/10 text-white"
                }`}
                aria-label="Wishlist"
              >
                <Heart size={18} />
                {wishlist.length > 0 && (
                  <span className="absolute top-0 right-0 w-4 h-4 bg-accent text-accent-foreground text-[10px] font-bold rounded-full flex items-center justify-center">
                    {wishlist.length}
                  </span>
                )}
              </Link>
            </div>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex items-center gap-4">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2 ${isSolid ? "text-foreground" : "text-white"}`}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-background border-b shadow-lg py-4 px-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              href={link.path}
              onClick={() => setMobileMenuOpen(false)}
              className={`block py-2 text-lg font-medium ${
                location === link.path ? "text-accent" : "text-foreground/80"
              }`}
            >
              {link.name}
            </Link>
          ))}
          <div className="flex items-center gap-4 pt-4 border-t">
            <Button variant="outline" size="sm" onClick={toggleTheme}>
              {theme === "dark" ? "Light Mode" : "Dark Mode"}
            </Button>
            <Button variant="outline" size="sm" asChild>
              <Link href="/wishlist">Wishlist ({wishlist.length})</Link>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}
