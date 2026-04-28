import { useState } from "react";
import { useLocation } from "wouter";
import { Search, MapPin, Home } from "lucide-react";
import { Button } from "@/components/ui/button";

export function SearchBar() {
  const [, setLocation] = useLocation();
  const [locationQuery, setLocationQuery] = useState("");
  const [type, setType] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const params = new URLSearchParams();
    if (locationQuery) params.append("location", locationQuery);
    if (type) params.append("type", type);
    
    setLocation(`/properties?${params.toString()}`);
  };

  return (
    <form 
      onSubmit={handleSearch}
      className="bg-background/95 backdrop-blur-md p-2 rounded-2xl shadow-xl flex flex-col md:flex-row items-center gap-2 max-w-4xl mx-auto border border-white/20"
    >
      <div className="flex-1 w-full flex items-center gap-3 px-4 py-3 md:py-2 border-b md:border-b-0 md:border-r border-border">
        <MapPin size={20} className="text-muted-foreground shrink-0" />
        <input 
          type="text" 
          placeholder="Location, Neighborhood, or City" 
          className="w-full bg-transparent border-none focus:outline-none text-foreground placeholder:text-muted-foreground"
          value={locationQuery}
          onChange={(e) => setLocationQuery(e.target.value)}
        />
      </div>
      
      <div className="flex-1 w-full flex items-center gap-3 px-4 py-3 md:py-2 border-b md:border-b-0 border-border">
        <Home size={20} className="text-muted-foreground shrink-0" />
        <select 
          className="w-full bg-transparent border-none focus:outline-none text-foreground appearance-none cursor-pointer"
          value={type}
          onChange={(e) => setType(e.target.value)}
        >
          <option value="">Property Type</option>
          <option value="Penthouse">Penthouse</option>
          <option value="Villa">Villa</option>
          <option value="Estate">Estate</option>
          <option value="Loft">Loft</option>
        </select>
      </div>
      
      <Button 
        type="submit" 
        className="w-full md:w-auto px-8 py-6 md:py-4 h-auto rounded-xl bg-accent hover:bg-accent/90 text-accent-foreground text-lg md:text-base font-medium transition-all"
      >
        <Search size={20} className="mr-2" />
        Search
      </Button>
    </form>
  );
}
