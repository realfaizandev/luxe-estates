import { PageTransition } from "@/components/PageTransition";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function Contact() {
  return (
    <PageTransition className="pt-24 pb-12 bg-background">
      <div className="bg-muted/30 py-16 border-b border-border mb-16">
        <div className="container mx-auto px-4 md:px-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif mb-6">Contact Us</h1>
          <p className="text-muted-foreground max-w-2xl text-lg leading-relaxed">
            Connect with our advisory team to discuss your real estate portfolio, inquire about a specific property, or explore representation.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 mb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Form */}
          <div>
            <h2 className="text-2xl font-serif mb-8 text-foreground">Send an Inquiry</h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">First Name</label>
                  <input type="text" className="w-full bg-background border border-border rounded-md px-4 py-3 focus:outline-none focus:ring-1 focus:ring-accent" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Last Name</label>
                  <input type="text" className="w-full bg-background border border-border rounded-md px-4 py-3 focus:outline-none focus:ring-1 focus:ring-accent" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Email Address</label>
                <input type="email" className="w-full bg-background border border-border rounded-md px-4 py-3 focus:outline-none focus:ring-1 focus:ring-accent" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Phone Number</label>
                <input type="tel" className="w-full bg-background border border-border rounded-md px-4 py-3 focus:outline-none focus:ring-1 focus:ring-accent" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Inquiry Type</label>
                <select className="w-full bg-background border border-border rounded-md px-4 py-3 focus:outline-none focus:ring-1 focus:ring-accent">
                  <option>Buying a Property</option>
                  <option>Selling a Property</option>
                  <option>Investment Advisory</option>
                  <option>General Inquiry</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Message</label>
                <textarea rows={5} className="w-full bg-background border border-border rounded-md px-4 py-3 focus:outline-none focus:ring-1 focus:ring-accent resize-none"></textarea>
              </div>
              <Button className="w-full md:w-auto px-8 h-12 text-base">Submit Inquiry</Button>
            </form>
          </div>

          {/* Contact Info & Map */}
          <div>
            <h2 className="text-2xl font-serif mb-8 text-foreground">Global Headquarters</h2>
            <div className="bg-card border border-border rounded-xl p-8 mb-8 space-y-6 shadow-sm">
              <div className="flex items-start gap-4">
                <MapPin className="text-accent mt-1 shrink-0" size={20} />
                <div>
                  <h4 className="font-medium text-foreground mb-1">New York Office</h4>
                  <p className="text-muted-foreground text-sm">1 Vanderbilt Avenue, 45th Floor<br/>New York, NY 10017<br/>United States</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Phone className="text-accent mt-1 shrink-0" size={20} />
                <div>
                  <h4 className="font-medium text-foreground mb-1">Phone</h4>
                  <p className="text-muted-foreground text-sm">+1 (212) 555-0198</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Mail className="text-accent mt-1 shrink-0" size={20} />
                <div>
                  <h4 className="font-medium text-foreground mb-1">Email</h4>
                  <p className="text-muted-foreground text-sm">advisory@luxeestates.com</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Clock className="text-accent mt-1 shrink-0" size={20} />
                <div>
                  <h4 className="font-medium text-foreground mb-1">Hours</h4>
                  <p className="text-muted-foreground text-sm">Monday - Friday: 9:00 AM - 6:00 PM EST<br/>Private appointments available upon request.</p>
                </div>
              </div>
            </div>

            {/* Static Map Placeholder */}
            <div className="h-64 rounded-xl overflow-hidden bg-muted border border-border relative flex items-center justify-center">
               <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
               <div className="text-center z-10 p-4 bg-background/80 backdrop-blur-sm rounded-lg border border-border">
                  <MapPin size={24} className="text-accent mx-auto mb-2" />
                  <p className="font-medium">1 Vanderbilt Avenue</p>
               </div>
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
