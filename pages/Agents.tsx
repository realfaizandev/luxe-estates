import { PageTransition } from "@/components/PageTransition";
import { AgentCard } from "@/components/AgentCard";
import { CTASection } from "@/components/CTASection";
import { agents } from "@/data/dummy";

export default function Agents() {
  return (
    <PageTransition className="pt-24 pb-12 bg-background">
      <div className="bg-muted/30 py-16 border-b border-border mb-16">
        <div className="container mx-auto px-4 md:px-6 text-center max-w-4xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif mb-6">Our Advisors</h1>
          <p className="text-muted-foreground text-lg md:text-xl leading-relaxed">
            The Luxe Estates team consists of the industry's most seasoned professionals. Selected for their discretion, market knowledge, and extensive global networks.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 mb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {agents.map((agent, index) => (
            <AgentCard key={agent.id} agent={agent} index={index} />
          ))}
        </div>
      </div>

      <CTASection 
        title="Join Our Elite Roster" 
        subtitle="We are always looking for exceptional talent to join our advisory team."
        buttonText="Careers at Luxe"
        buttonLink="/contact"
        image="https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=2000&q=80"
      />
    </PageTransition>
  );
}
