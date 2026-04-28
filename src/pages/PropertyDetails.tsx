import { useParams } from "wouter";
import { PageTransition } from "@/components/PageTransition";
import { properties, agents } from "@/data/dummy";
import { MapPin, BedDouble, Bath, Square, Heart, Share2, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useWishlist } from "@/hooks/use-wishlist";
import { AgentCard } from "@/components/AgentCard";
import { PropertyCard } from "@/components/PropertyCard";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function PropertyDetails() {
  const { id } = useParams<{ id: string }>();
  const property = properties.find(p => p.id === id);
  const agent = property ? agents.find(a => a.id === property.agentId) : null;
  const { toggleWishlist, isInWishlist } = useWishlist();
  const [activeImage, setActiveImage] = useState(0);

  if (!property) {
    return (
      <PageTransition className="pt-32 pb-24 text-center min-h-[70vh] flex flex-col items-center justify-center">
        <h1 className="text-4xl font-serif mb-4">Property Not Found</h1>
        <p className="text-muted-foreground mb-8">The property you are looking for does not exist or has been removed.</p>
        <Button onClick={() => window.history.back()}>Go Back</Button>
      </PageTransition>
    );
  }

  const isWishlisted = isInWishlist(property.id);
  const similarProperties = properties.filter(p => p.type === property.type && p.id !== property.id).slice(0, 3);

  return (
    <PageTransition className="pt-24 pb-12 bg-background">
      {/* Property Header */}
      <div className="container mx-auto px-4 md:px-6 mb-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-6">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="px-3 py-1 bg-accent/10 text-accent text-xs font-semibold uppercase tracking-wider rounded-sm">
                {property.type}
              </span>
              <div className="flex items-center text-muted-foreground text-sm">
                <MapPin size={14} className="mr-1" />
                {property.location}
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-foreground leading-tight">
              {property.title}
            </h1>
          </div>
          
          <div className="flex flex-col items-start md:items-end gap-4">
            <div className="text-3xl md:text-4xl font-serif text-accent">
              ${property.price.toLocaleString()}
            </div>
            <div className="flex items-center gap-3">
              <Button 
                variant="outline" 
                size="icon" 
                onClick={() => toggleWishlist(property.id)}
                className={isWishlisted ? "text-accent border-accent" : ""}
              >
                <Heart size={18} className={isWishlisted ? "fill-current" : ""} />
              </Button>
              <Button variant="outline" size="icon">
                <Share2 size={18} />
              </Button>
              <Button>Schedule Viewing</Button>
            </div>
          </div>
        </div>
      </div>

      {/* Image Gallery */}
      <div className="container mx-auto px-4 md:px-6 mb-16">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 h-[60vh] min-h-[500px]">
          <div className="lg:col-span-3 h-full relative group rounded-xl overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.img
                key={activeImage}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                src={property.images[activeImage]}
                alt={`${property.title} - Image ${activeImage + 1}`}
                className="w-full h-full object-cover"
              />
            </AnimatePresence>
          </div>
          <div className="hidden lg:grid grid-rows-3 gap-4 h-full">
            {property.images.slice(0, 3).map((img, idx) => (
              <div 
                key={idx} 
                className={`relative rounded-xl overflow-hidden cursor-pointer ${activeImage === idx ? 'ring-2 ring-accent' : 'opacity-70 hover:opacity-100'}`}
                onClick={() => setActiveImage(idx)}
              >
                <img src={img} alt={`Thumbnail ${idx + 1}`} className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
        </div>
        {/* Mobile Gallery Thumbnails */}
        <div className="flex lg:hidden gap-2 mt-4 overflow-x-auto pb-2">
          {property.images.map((img, idx) => (
            <div 
              key={idx} 
              className={`flex-shrink-0 w-24 h-24 rounded-lg overflow-hidden cursor-pointer ${activeImage === idx ? 'ring-2 ring-accent' : 'opacity-70'}`}
              onClick={() => setActiveImage(idx)}
            >
              <img src={img} alt={`Thumbnail ${idx + 1}`} className="w-full h-full object-cover" />
            </div>
          ))}
        </div>
      </div>

      {/* Property Details Content */}
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          <div className="lg:col-span-2">
            <div className="flex flex-wrap items-center gap-8 py-6 border-y border-border mb-10 text-foreground/80">
              <div className="flex items-center gap-3">
                <BedDouble size={24} className="text-accent" />
                <span className="text-lg">{property.bedrooms} Bedrooms</span>
              </div>
              <div className="flex items-center gap-3">
                <Bath size={24} className="text-accent" />
                <span className="text-lg">{property.bathrooms} Bathrooms</span>
              </div>
              <div className="flex items-center gap-3">
                <Square size={24} className="text-accent" />
                <span className="text-lg">{property.sqft.toLocaleString()} Sq Ft</span>
              </div>
            </div>

            <div className="mb-12">
              <h2 className="text-2xl font-serif mb-6">About the Property</h2>
              <div className="prose prose-lg dark:prose-invert max-w-none text-muted-foreground leading-relaxed">
                <p>{property.description}</p>
                <p>Additional luxurious details would go here, describing the high-end finishes, custom millwork, smart home integration, and the lifestyle this property affords its residents. The architecture speaks for itself through expansive windows and meticulous attention to proportion and scale.</p>
              </div>
            </div>

            <div className="mb-12">
              <h2 className="text-2xl font-serif mb-6">Amenities & Features</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-y-4 gap-x-8 text-muted-foreground">
                <div className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-accent" /> Private Elevator</div>
                <div className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-accent" /> Smart Home System</div>
                <div className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-accent" /> Wine Cellar</div>
                <div className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-accent" /> Custom Kitchen</div>
                <div className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-accent" /> Motor Court</div>
                <div className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-accent" /> Home Theater</div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="mb-12">
              <h2 className="text-2xl font-serif mb-6">Location</h2>
              <div className="w-full h-[400px] bg-muted rounded-xl border border-border flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
                <div className="text-center z-10 p-6 bg-background/80 backdrop-blur-sm rounded-lg border border-border shadow-sm">
                  <MapPin size={32} className="text-accent mx-auto mb-3" />
                  <p className="font-medium text-lg">{property.location}</p>
                  <p className="text-muted-foreground text-sm">Map View Restricted for Privacy</p>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar / Agent Info */}
          <div className="lg:col-span-1">
            <div className="sticky top-32">
              <div className="bg-card border border-border rounded-xl p-8 shadow-sm mb-8">
                <h3 className="text-xl font-serif mb-6">Listing Agent</h3>
                {agent ? (
                  <>
                    <div className="flex items-center gap-4 mb-6 pb-6 border-b border-border">
                      <img 
                        src={agent.image} 
                        alt={agent.name} 
                        className="w-16 h-16 rounded-full object-cover border-2 border-border"
                      />
                      <div>
                        <h4 className="font-medium text-lg">{agent.name}</h4>
                        <p className="text-sm text-muted-foreground">{agent.title}</p>
                      </div>
                    </div>
                    <div className="space-y-4 mb-8">
                      <a href={`tel:${agent.phone}`} className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors">
                        <Phone size={18} className="text-accent" />
                        <span>{agent.phone}</span>
                      </a>
                      <a href={`mailto:${agent.email}`} className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors">
                        <Mail size={18} className="text-accent" />
                        <span>{agent.email}</span>
                      </a>
                    </div>
                  </>
                ) : (
                  <p className="text-muted-foreground mb-6">Contact our advisory team for information on this property.</p>
                )}

                <form className="space-y-4">
                  <h4 className="font-medium mb-2">Request Information</h4>
                  <input 
                    type="text" 
                    placeholder="Your Name" 
                    className="w-full bg-background border border-border rounded-md px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-accent"
                  />
                  <input 
                    type="email" 
                    placeholder="Your Email" 
                    className="w-full bg-background border border-border rounded-md px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-accent"
                  />
                  <input 
                    type="tel" 
                    placeholder="Your Phone" 
                    className="w-full bg-background border border-border rounded-md px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-accent"
                  />
                  <textarea 
                    placeholder="I am interested in this property..." 
                    rows={4}
                    className="w-full bg-background border border-border rounded-md px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-accent resize-none"
                  ></textarea>
                  <Button className="w-full h-12 text-base">Send Inquiry</Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Similar Properties */}
      {similarProperties.length > 0 && (
        <div className="bg-muted/30 py-24 border-t border-border mt-12">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-serif mb-10">Similar Properties</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {similarProperties.map((p, idx) => (
                <PropertyCard key={p.id} property={p} index={idx} />
              ))}
            </div>
          </div>
        </div>
      )}
    </PageTransition>
  );
}
