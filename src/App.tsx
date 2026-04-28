import { Switch, Route } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

// Pages
import Home from "@/pages/Home";
import Properties from "@/pages/Properties";
import PropertyDetails from "@/pages/PropertyDetails";
import About from "@/pages/About";
import Services from "@/pages/Services";
import Agents from "@/pages/Agents";
import Blog from "@/pages/Blog";
import BlogDetails from "@/pages/BlogDetails";
import Contact from "@/pages/Contact";
import Dashboard from "@/pages/Dashboard";
import Wishlist from "@/pages/Wishlist";
import NotFound from "@/pages/not-found";

const queryClient = new QueryClient();

function AppRouter() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <Navbar />
      <main className="flex-grow">
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/properties" component={Properties} />
          <Route path="/properties/:id" component={PropertyDetails} />
          <Route path="/about" component={About} />
          <Route path="/services" component={Services} />
          <Route path="/agents" component={Agents} />
          <Route path="/blog" component={Blog} />
          <Route path="/blog/:slug" component={BlogDetails} />
          <Route path="/contact" component={Contact} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/wishlist" component={Wishlist} />
          <Route component={NotFound} />
        </Switch>
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <AppRouter />
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
