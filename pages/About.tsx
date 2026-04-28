import { PageTransition } from "@/components/PageTransition";
import { StatCounter } from "@/components/StatCounter";
import { CTASection } from "@/components/CTASection";
import { motion } from "framer-motion";

export default function About() {
  return (
    <PageTransition className="pt-24 pb-12 bg-background">
      {/* Hero */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden mb-24">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-primary/60 mix-blend-multiply z-10" />
          <img 
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=2400&q=80" 
            alt="Luxury office" 
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="container mx-auto px-4 relative z-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto"
          >
            <h1 className="text-sm font-semibold uppercase tracking-widest text-accent mb-4">Our Story</h1>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-serif text-white mb-6 leading-tight">
              A Legacy of Excellence
            </h2>
          </motion.div>
        </div>
      </section>

      {/* Story */}
      <section className="container mx-auto px-4 md:px-6 mb-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-serif mb-6 text-foreground">Redefining the Luxury Real Estate Experience.</h2>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                Founded in 2005, Luxe Estates emerged from a simple premise: the world's most extraordinary properties require representation that is equally exceptional.
              </p>
              <p>
                We are not a traditional brokerage. We are a private advisory firm serving a discerning global clientele. Our approach combines the analytical rigor of an investment bank with the personalized service of a multi-family office.
              </p>
              <p>
                By limiting the number of properties we represent, we ensure that every client receives our undivided attention and the full force of our global network. Discretion, integrity, and unparalleled market intelligence form the bedrock of every transaction we undertake.
              </p>
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-xl overflow-hidden relative">
              <img 
                src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&q=80" 
                alt="Founder" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-0 left-0 p-8 text-white">
                <p className="font-serif text-2xl italic mb-2">"True luxury is found in the meticulous attention to detail."</p>
                <p className="text-sm text-white/80 uppercase tracking-widest">— The Founder</p>
              </div>
            </div>
            <div className="absolute -bottom-8 -left-8 w-48 h-48 bg-accent/10 rounded-full blur-3xl -z-10" />
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-secondary text-secondary-foreground py-24 mb-32 relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
            <StatCounter value={2} prefix="$" suffix="B+" label="Volume Sold" />
            <StatCounter value={18} label="Global Offices" />
            <StatCounter value={450} suffix="+" label="Elite Properties" />
            <StatCounter value={98} suffix="%" label="Client Retention" />
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="container mx-auto px-4 md:px-6 mb-32">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-serif mb-4 text-foreground">Our Core Principles</h2>
          <p className="text-muted-foreground text-lg">The values that guide every interaction and transaction.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {[
            {
              title: "Absolute Discretion",
              desc: "We operate with the highest level of confidentiality, protecting our clients' privacy above all else."
            },
            {
              title: "Curated Excellence",
              desc: "We accept only properties of significant architectural merit, historic importance, or exceptional potential."
            },
            {
              title: "Fiduciary Duty",
              desc: "We advise our clients with complete objectivity, placing their long-term interests ahead of any single transaction."
            }
          ].map((value, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="bg-card p-8 rounded-xl border border-border text-center hover:border-accent/50 transition-colors"
            >
              <h3 className="text-xl font-serif text-foreground mb-4">{value.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{value.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <CTASection 
        title="Experience the Luxe Difference" 
        buttonText="View Our Services"
        buttonLink="/services"
      />
    </PageTransition>
  );
}
