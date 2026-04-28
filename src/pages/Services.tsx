import { PageTransition } from "@/components/PageTransition";
import { CTASection } from "@/components/CTASection";
import { motion } from "framer-motion";
import { Key, Briefcase, BarChart, Gem, Globe, ShieldCheck } from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: <Key size={32} />,
      title: "Acquisition Advisory",
      description: "Strategic guidance for acquiring ultra-luxury residential properties. We leverage our network to source off-market opportunities and negotiate complex transactions with favorable terms."
    },
    {
      icon: <Gem size={32} />,
      title: "Sales Representation",
      description: "Bespoke marketing campaigns for exceptional properties. Our discrete, targeted approach reaches the world's most qualified buyers without over-exposing the asset to the public."
    },
    {
      icon: <BarChart size={32} />,
      title: "Investment Strategy",
      description: "Portfolio analysis and diversification strategies for real estate holdings. We identify emerging prime markets and assets with strong appreciation potential."
    },
    {
      icon: <Briefcase size={32} />,
      title: "Estate Management",
      description: "Comprehensive oversight of primary and secondary residences. From staffing and maintenance to security and administration, ensuring seamless ownership."
    },
    {
      icon: <Globe size={32} />,
      title: "Global Relocation",
      description: "End-to-end concierge services for cross-border moves. We coordinate everything from property sourcing to legal, tax, and logistical advisory through our network."
    },
    {
      icon: <ShieldCheck size={32} />,
      title: "Private Office",
      description: "Dedicated real estate support integrated seamlessly with your family office or wealth managers, providing a singular point of contact for all real estate matters."
    }
  ];

  return (
    <PageTransition className="pt-24 pb-12 bg-background">
      <div className="bg-muted/30 py-16 border-b border-border mb-16">
        <div className="container mx-auto px-4 md:px-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif mb-6">Our Services</h1>
          <p className="text-muted-foreground max-w-3xl text-lg md:text-xl leading-relaxed">
            Luxe Estates provides a comprehensive suite of advisory services tailored to the unique requirements of individuals acquiring or managing significant real estate assets.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 mb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-card p-10 rounded-xl border border-border hover:border-accent/50 hover:shadow-xl transition-all duration-500 flex flex-col"
            >
              <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center text-accent mb-8 group-hover:bg-accent group-hover:text-accent-foreground transition-colors duration-500">
                {service.icon}
              </div>
              <h3 className="text-2xl font-serif text-foreground mb-4 group-hover:text-accent transition-colors">{service.title}</h3>
              <p className="text-muted-foreground leading-relaxed flex-grow">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 mb-24">
        <div className="bg-primary text-primary-foreground rounded-2xl p-8 md:p-16 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />
          <div className="relative z-10 max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-serif mb-6">The Private Desk</h2>
            <p className="text-lg text-primary-foreground/80 mb-8 leading-relaxed">
              For clients requiring the utmost discretion, our Private Desk handles off-market transactions that never appear in public listings. We maintain a secure registry of pocket listings and qualified buyers globally.
            </p>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                <span>Zero public footprint marketing</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                <span>NDA-protected property previews</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                <span>Direct principal-to-principal introductions</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <CTASection 
        title="Require specialized advisory?" 
        buttonText="Contact Our Team"
        buttonLink="/contact"
        image="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=2000&q=80"
      />
    </PageTransition>
  );
}
