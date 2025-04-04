
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative h-[70vh] min-h-[500px] bg-gradient-to-r from-green-900 to-green-700 overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=1974')] bg-cover bg-center opacity-60"></div>
      
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      
      <div className="container mx-auto px-4 h-full flex items-center relative z-10">
        <div className="max-w-3xl animate-fade-in">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            Fresh Groceries,<br />
            <span className="text-grocery-accent">Delivered to Your Doorstep</span>
          </h1>
          <p className="text-white text-lg md:text-xl mb-8 max-w-2xl">
            Farm-fresh produce, organic options, and all your grocery essentials delivered right to your home.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button 
              className="bg-grocery-primary hover:bg-grocery-primary-dark text-white px-8 py-6 text-lg rounded-md"
              asChild
            >
              <Link to="/categories">Shop Now</Link>
            </Button>
            <Button 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-grocery-primary-dark px-8 py-6 text-lg rounded-md"
              asChild
            >
              <Link to="/offers">View Offers</Link>
            </Button>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black to-transparent opacity-30"></div>
    </section>
  );
};

export default Hero;
