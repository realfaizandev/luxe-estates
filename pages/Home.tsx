import { PageTransition } from "@/components/PageTransition";
import { SearchBar } from "@/components/SearchBar";
import { PropertyCard } from "@/components/PropertyCard";
import { CTASection } from "@/components/CTASection";
import { properties, testimonials } from "@/data/dummy";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, ShieldCheck, Globe, Key, Star, Quote } from "lucide-react";

export default function Home() {
  const featuredProperties = properties.filter(p => p.featured).slice(0, 3);

  return (
    <PageTransition>
      {/* Hero Section */}
      <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-background/90 z-10" />
          <motion.img 
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 10, ease: "easeOut" }}
            src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=2400&q=80" 
            alt="Luxury modern home" 
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="container mx-auto px-4 relative z-20 pt-20">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl md:text-7xl lg:text-8xl font-serif text-white mb-6 leading-[1.1] drop-shadow-lg"
            >
              Curating the world's finest real estate.
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-2xl text-white/90 font-light mb-12 drop-shadow-md max-w-2xl mx-auto"
            >
              Exclusive properties, uncompromising discretion, and global expertise for the discerning buyer.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <SearchBar />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Properties */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16">
            <div className="max-w-2xl">
              <h2 className="text-sm font-semibold uppercase tracking-widest text-accent mb-3">Exclusive Collection</h2>
              <h3 className="text-4xl md:text-5xl font-serif text-foreground">Featured Properties</h3>
            </div>
            <Link 
              href="/properties" 
              className="mt-6 md:mt-0 flex items-center gap-2 text-sm font-medium uppercase tracking-wider text-foreground hover:text-accent transition-colors group"
            >
              View all listings 
              <ArrowRight size={16} className="transform group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProperties.map((property, index) => (
              <PropertyCard key={property.id} property={property} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-24 bg-secondary text-secondary-foreground relative overflow-hidden">
        <div className="absolute top-0 left-0 w-1/3 h-full bg-primary/10 -skew-x-12 transform origin-top-left" />
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-sm font-semibold uppercase tracking-widest text-accent mb-3">Our Expertise</h2>
            <h3 className="text-4xl md:text-5xl font-serif mb-6">The Luxe Standard</h3>
            <p className="text-secondary-foreground/70 text-lg">
              We provide a comprehensive suite of services tailored to the unique requirements of ultra-high-net-worth individuals and families.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                icon: <ShieldCheck size={40} className="text-accent mb-6" />,
                title: "Private Brokerage",
                description: "Discreet representation for buyers and sellers of significant properties. Off-market access and absolute confidentiality."
              },
              {
                icon: <Globe size={40} className="text-accent mb-6" />,
                title: "Global Reach",
                description: "An international network connecting premier properties with qualified buyers across key global wealth centers."
              },
              {
                icon: <Key size={40} className="text-accent mb-6" />,
                title: "Bespoke Advisory",
                description: "Strategic portfolio consulting, acquisition guidance, and comprehensive market intelligence for investors."
              }
            ].map((service, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                className="text-center"
              >
                <div className="flex justify-center">{service.icon}</div>
                <h4 className="text-2xl font-serif mb-4">{service.title}</h4>
                <p className="text-secondary-foreground/70 leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 md:py-32 bg-primary text-primary-foreground relative overflow-hidden">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 25% 20%, hsl(var(--accent)) 0, transparent 40%), radial-gradient(circle at 75% 80%, hsl(var(--accent)) 0, transparent 40%)",
          }}
        />
        <div className="container mx-auto px-4 md:px-6 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-2xl mx-auto mb-16"
          >
            <span className="text-accent uppercase tracking-[0.3em] text-xs font-medium">
              Client Stories
            </span>
            <h2 className="text-4xl md:text-5xl font-serif mt-4 mb-4">
              Words From Our Clientele
            </h2>
            <p className="text-primary-foreground/70 leading-relaxed">
              Trusted by tastemakers, executives, and global investors who expect nothing less than exceptional.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {testimonials.map((t, index) => (
              <motion.div
                key={t.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.6 }}
                className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-accent/40 hover:bg-white/[0.07] transition-all duration-300"
              >
                <Quote className="absolute -top-4 left-6 w-10 h-10 text-accent bg-primary p-2 rounded-full" />

                <div className="flex gap-1 mb-5 mt-2">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                  ))}
                </div>

                <p className="text-primary-foreground/90 leading-relaxed mb-8 italic">
                  &ldquo;{t.content}&rdquo;
                </p>

                <div className="flex items-center gap-3 pt-5 border-t border-white/10">
                  <div className="w-11 h-11 rounded-full bg-accent/20 text-accent flex items-center justify-center font-serif text-lg font-semibold">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-medium text-primary-foreground">{t.name}</p>
                    <p className="text-xs uppercase tracking-wider text-primary-foreground/60">
                      {t.role}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTASection 
        title="Ready to elevate your portfolio?" 
        buttonText="Connect with an Advisor"
        buttonLink="/contact"
      />
    </PageTransition>
  );
}
