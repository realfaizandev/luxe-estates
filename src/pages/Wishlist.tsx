import { useState } from "react";
import { PageTransition } from "@/components/PageTransition";
import { PropertyCard } from "@/components/PropertyCard";
import { properties } from "@/data/dummy";
import { useWishlist } from "@/hooks/use-wishlist";
import { Heart } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

export default function Wishlist() {
  const { wishlist } = useWishlist();
  
  const wishlistedProperties = properties.filter(p => wishlist.includes(p.id));

  return (
    <PageTransition className="pt-24 pb-12 bg-background min-h-screen">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center gap-3 mb-10">
          <Heart size={28} className="text-accent" />
          <h1 className="text-4xl md:text-5xl font-serif text-foreground">Your Portfolio</h1>
        </div>

        {wishlistedProperties.length === 0 ? (
          <div className="text-center py-24 bg-card border border-border rounded-xl">
            <Heart size={48} className="mx-auto text-muted-foreground mb-4 opacity-50" />
            <h2 className="text-2xl font-serif mb-2">Your portfolio is empty</h2>
            <p className="text-muted-foreground mb-8 max-w-md mx-auto">
              You haven't saved any properties yet. Browse our collection and click the heart icon to save properties you are interested in.
            </p>
            <Button asChild>
              <Link href="/properties">Explore Properties</Link>
            </Button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {wishlistedProperties.map((property, index) => (
              <PropertyCard key={property.id} property={property} index={index} />
            ))}
          </div>
        )}
      </div>
    </PageTransition>
  );
}
