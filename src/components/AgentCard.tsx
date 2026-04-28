import { motion } from "framer-motion";
import { Agent } from "@/data/dummy";
import { Star, Mail, Phone } from "lucide-react";
import { fadeUp } from "@/animations/variants";

interface AgentCardProps {
  agent: Agent;
  index?: number;
}

export function AgentCard({ agent, index = 0 }: AgentCardProps) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay: index * 0.1 }}
      className="group bg-card rounded-xl overflow-hidden border border-border shadow-sm hover:shadow-xl transition-all duration-500"
    >
      <div className="relative aspect-[3/4] overflow-hidden">
        <img
          src={agent.image || "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=800&q=80"}
          alt={agent.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80" />
        <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
          <h3 className="text-2xl font-serif font-medium mb-1">{agent.name}</h3>
          <p className="text-white/80 text-sm mb-4">{agent.title}</p>
          
          <div className="flex items-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
            <a href={`mailto:${agent.email}`} className="p-2 bg-white/20 hover:bg-accent rounded-full backdrop-blur-sm transition-colors text-white">
              <Mail size={16} />
            </a>
            <a href={`tel:${agent.phone}`} className="p-2 bg-white/20 hover:bg-accent rounded-full backdrop-blur-sm transition-colors text-white">
              <Phone size={16} />
            </a>
          </div>
        </div>
      </div>
      
      <div className="p-6">
        <div className="flex items-center gap-1 mb-3">
          <Star size={16} className="fill-accent text-accent" />
          <span className="font-medium text-foreground">{agent.rating}</span>
          <span className="text-muted-foreground text-sm">({agent.reviews} reviews)</span>
        </div>
        <p className="text-muted-foreground text-sm line-clamp-3 leading-relaxed">
          {agent.bio}
        </p>
      </div>
    </motion.div>
  );
}
