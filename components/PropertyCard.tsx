import { Link } from "wouter";
import { motion } from "framer-motion";
import { MapPin, BedDouble, Bath, Square, Heart } from "lucide-react";
import { Property } from "@/data/dummy";
import { useWishlist } from "@/hooks/use-wishlist";
import { hoverScale, imageZoom } from "@/animations/variants";

interface PropertyCardProps {
  property: Property;
  index?: number;
}

export function PropertyCard({ property, index = 0 }: PropertyCardProps) {
  const { toggleWishlist, isInWishlist } = useWishlist();
  const isWishlisted = isInWishlist(property.id);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative bg-card rounded-xl overflow-hidden border border-border shadow-sm hover:shadow-xl transition-all duration-500"
    >
      <div className="absolute top-4 right-4 z-10">
        <button
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            toggleWishlist(property.id);
          }}
          className={`p-2.5 rounded-full backdrop-blur-md transition-all duration-300 ${
            isWishlisted 
              ? "bg-accent/90 text-primary" 
              : "bg-black/20 text-white hover:bg-accent/90 hover:text-primary"
          }`}
          aria-label={isWishlisted ? "Remove from wishlist" : "Add to wishlist"}
        >
          <Heart size={18} className={isWishlisted ? "fill-current" : ""} />
        </button>
      </div>

      <div className="absolute top-4 left-4 z-10">
        <span className="px-3 py-1 bg-black/40 backdrop-blur-md text-white text-xs font-semibold uppercase tracking-wider rounded-sm">
          {property.type}
        </span>
      </div>

      <Link href={`/properties/${property.id}`} className="block overflow-hidden relative aspect-[4/3]">
        <motion.img
          variants={imageZoom}
          initial="rest"
          whileHover="hover"
          src={property.images[0] || "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"}
          alt={property.title}
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </Link>

      <div className="p-6">
        <div className="mb-4">
          <p className="text-accent font-serif text-xl font-medium mb-1">
            ${property.price.toLocaleString()}
          </p>
          <Link href={`/properties/${property.id}`}>
            <h3 className="text-lg font-semibold text-foreground leading-tight mb-2 group-hover:text-accent transition-colors line-clamp-1">
              {property.title}
            </h3>
          </Link>
          <div className="flex items-center text-muted-foreground text-sm gap-1.5">
            <MapPin size={14} />
            <span className="line-clamp-1">{property.location}</span>
          </div>
        </div>

        <div className="flex items-center justify-between pt-4 border-t border-border/50 text-sm text-foreground/80">
          <div className="flex items-center gap-1.5" title="Bedrooms">
            <BedDouble size={16} className="text-muted-foreground" />
            <span>{property.bedrooms} Beds</span>
          </div>
          <div className="flex items-center gap-1.5" title="Bathrooms">
            <Bath size={16} className="text-muted-foreground" />
            <span>{property.bathrooms} Baths</span>
          </div>
          <div className="flex items-center gap-1.5" title="Square Footage">
            <Square size={16} className="text-muted-foreground" />
            <span>{property.sqft.toLocaleString()} sqft</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
