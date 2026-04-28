import { useState, useEffect } from "react";
import { useLocation } from "wouter";
import { motion } from "framer-motion";
import { PageTransition } from "@/components/PageTransition";
import { PropertyCard } from "@/components/PropertyCard";
import { properties } from "@/data/dummy";
import { CTASection } from "@/components/CTASection";
import { SlidersHorizontal, Search, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Properties() {
  const [location] = useLocation();
  const searchParams = new URLSearchParams(window.location.search);
  
  const [filters, setFilters] = useState({
    location: searchParams.get("location") || "",
    type: searchParams.get("type") || "",
    minPrice: "",
    maxPrice: "",
    bedrooms: ""
  });
  
  const [showFilters, setShowFilters] = useState(false);
  const [sortBy, setSortBy] = useState("featured");

  const handleFilterChange = (key: string, value: string) => {
    setFilters(prev => ({ ...prev, [key]: value }));
  };

  const clearFilters = () => {
    setFilters({
      location: "",
      type: "",
      minPrice: "",
      maxPrice: "",
      bedrooms: ""
    });
  };

  const filteredProperties = properties.filter(p => {
    if (filters.location && !p.location.toLowerCase().includes(filters.location.toLowerCase())) return false;
    if (filters.type && p.type !== filters.type) return false;
    if (filters.bedrooms && p.bedrooms < parseInt(filters.bedrooms)) return false;
    if (filters.minPrice && p.price < parseInt(filters.minPrice)) return false;
    if (filters.maxPrice && p.price > parseInt(filters.maxPrice)) return false;
    return true;
  }).sort((a, b) => {
    if (sortBy === "price-asc") return a.price - b.price;
    if (sortBy === "price-desc") return b.price - a.price;
    return 0; // featured is default
  });

  return (
    <PageTransition className="pt-24 pb-12">
      <div className="bg-muted/30 py-12 border-b border-border">
        <div className="container mx-auto px-4 md:px-6">
          <h1 className="text-4xl md:text-5xl font-serif mb-4">Exclusive Collection</h1>
          <p className="text-muted-foreground max-w-2xl text-lg">
            Explore our curated portfolio of the world's most exceptional properties.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 mb-8">
          <div className="flex items-center gap-4 w-full lg:w-auto">
            <Button 
              variant="outline" 
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center gap-2"
            >
              <SlidersHorizontal size={16} />
              {showFilters ? "Hide Filters" : "Show Filters"}
            </Button>
            
            <div className="relative flex-grow lg:flex-grow-0 lg:w-64">
              <Search size={16} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
              <input 
                type="text" 
                placeholder="Search location..." 
                value={filters.location}
                onChange={(e) => handleFilterChange("location", e.target.value)}
                className="w-full pl-9 pr-4 py-2 bg-background border border-border rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-accent"
              />
            </div>
          </div>

          <div className="flex items-center gap-3 w-full lg:w-auto">
            <span className="text-sm text-muted-foreground whitespace-nowrap">Sort by:</span>
            <select 
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="bg-background border border-border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-accent min-w-[150px]"
            >
              <option value="featured">Featured</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="price-asc">Price: Low to High</option>
            </select>
          </div>
        </div>

        {/* Filter Panel */}
        <motion.div 
          initial={false}
          animate={{ height: showFilters ? "auto" : 0, opacity: showFilters ? 1 : 0 }}
          className="overflow-hidden mb-8"
        >
          <div className="bg-card border border-border rounded-xl p-6 mb-8">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-medium">Filter Properties</h3>
              <button onClick={clearFilters} className="text-sm text-muted-foreground hover:text-foreground flex items-center gap-1">
                <X size={14} /> Clear all
              </button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div>
                <label className="block text-xs font-medium uppercase tracking-wider text-muted-foreground mb-2">Property Type</label>
                <select 
                  value={filters.type}
                  onChange={(e) => handleFilterChange("type", e.target.value)}
                  className="w-full bg-background border border-border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-accent"
                >
                  <option value="">All Types</option>
                  <option value="Penthouse">Penthouse</option>
                  <option value="Villa">Villa</option>
                  <option value="Estate">Estate</option>
                  <option value="Loft">Loft</option>
                </select>
              </div>
              
              <div>
                <label className="block text-xs font-medium uppercase tracking-wider text-muted-foreground mb-2">Bedrooms</label>
                <select 
                  value={filters.bedrooms}
                  onChange={(e) => handleFilterChange("bedrooms", e.target.value)}
                  className="w-full bg-background border border-border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-accent"
                >
                  <option value="">Any</option>
                  <option value="3">3+ Beds</option>
                  <option value="4">4+ Beds</option>
                  <option value="5">5+ Beds</option>
                  <option value="6">6+ Beds</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-medium uppercase tracking-wider text-muted-foreground mb-2">Min Price ($)</label>
                <input 
                  type="number"
                  placeholder="e.g. 5000000"
                  value={filters.minPrice}
                  onChange={(e) => handleFilterChange("minPrice", e.target.value)}
                  className="w-full bg-background border border-border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-accent"
                />
              </div>

              <div>
                <label className="block text-xs font-medium uppercase tracking-wider text-muted-foreground mb-2">Max Price ($)</label>
                <input 
                  type="number"
                  placeholder="e.g. 50000000"
                  value={filters.maxPrice}
                  onChange={(e) => handleFilterChange("maxPrice", e.target.value)}
                  className="w-full bg-background border border-border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-accent"
                />
              </div>
            </div>
          </div>
        </motion.div>

        {filteredProperties.length === 0 ? (
          <div className="text-center py-24 bg-card border border-border rounded-xl">
            <h3 className="text-2xl font-serif mb-2">No properties found</h3>
            <p className="text-muted-foreground mb-6">Try adjusting your filters to see more results.</p>
            <Button onClick={clearFilters}>Clear Filters</Button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProperties.map((property, index) => (
              <PropertyCard key={property.id} property={property} index={index} />
            ))}
          </div>
        )}
      </div>

      <CTASection 
        title="Can't find what you're looking for?" 
        subtitle="Many of our properties are sold off-market. Contact an advisor for our private portfolio."
        buttonText="Contact an Advisor"
        buttonLink="/contact"
      />
    </PageTransition>
  );
}
