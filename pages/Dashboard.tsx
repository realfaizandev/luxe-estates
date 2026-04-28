import { useState } from "react";
import { PageTransition } from "@/components/PageTransition";
import { properties as initialProperties } from "@/data/dummy";
import { Button } from "@/components/ui/button";
import { Pencil, Trash2, Plus } from "lucide-react";

export default function Dashboard() {
  const [properties, setProperties] = useState(initialProperties);

  const handleDelete = (id: string) => {
    if (confirm("Are you sure you want to remove this property?")) {
      setProperties(properties.filter(p => p.id !== id));
    }
  };

  return (
    <PageTransition className="pt-24 pb-12 bg-background min-h-screen">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-serif text-foreground mb-2">Admin Dashboard</h1>
            <p className="text-muted-foreground">Manage your property listings.</p>
          </div>
          <Button className="flex items-center gap-2">
            <Plus size={16} /> Add Property
          </Button>
        </div>

        <div className="bg-card border border-border rounded-xl overflow-hidden shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-muted/50 border-b border-border">
                  <th className="p-4 font-medium text-sm text-muted-foreground uppercase tracking-wider">Property</th>
                  <th className="p-4 font-medium text-sm text-muted-foreground uppercase tracking-wider">Location</th>
                  <th className="p-4 font-medium text-sm text-muted-foreground uppercase tracking-wider">Price</th>
                  <th className="p-4 font-medium text-sm text-muted-foreground uppercase tracking-wider">Type</th>
                  <th className="p-4 font-medium text-sm text-muted-foreground uppercase tracking-wider text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {properties.map((property) => (
                  <tr key={property.id} className="hover:bg-muted/20 transition-colors">
                    <td className="p-4">
                      <div className="flex items-center gap-4">
                        <img src={property.images[0]} alt={property.title} loading="lazy" className="w-12 h-12 rounded object-cover" />
                        <span className="font-medium">{property.title}</span>
                      </div>
                    </td>
                    <td className="p-4 text-muted-foreground">{property.location}</td>
                    <td className="p-4 font-medium">${property.price.toLocaleString()}</td>
                    <td className="p-4"><span className="px-2 py-1 bg-accent/10 text-accent text-xs rounded">{property.type}</span></td>
                    <td className="p-4 text-right">
                      <div className="flex items-center justify-end gap-2">
                        <Button variant="outline" size="icon" className="h-8 w-8">
                          <Pencil size={14} />
                        </Button>
                        <Button variant="outline" size="icon" className="h-8 w-8 text-destructive border-destructive/30 hover:bg-destructive hover:text-destructive-foreground" onClick={() => handleDelete(property.id)}>
                          <Trash2 size={14} />
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))}
                {properties.length === 0 && (
                  <tr>
                    <td colSpan={5} className="p-8 text-center text-muted-foreground">
                      No properties found.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
