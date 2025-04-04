
import { Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";
import { toast } from "sonner";

// Sample data for deals
const deals = [
  {
    id: 1,
    name: "Organic Avocados",
    image: "https://images.unsplash.com/photo-1519162808019-7de1683fa2ad?q=80&w=1915",
    originalPrice: 5.99,
    salePrice: 3.99,
    unit: "each",
    discount: 33,
    timeLeft: "23:45:10",
  },
  {
    id: 2,
    name: "Farm Fresh Eggs",
    image: "https://images.unsplash.com/photo-1498654077810-12c21d4d6dc3?q=80&w=1780",
    originalPrice: 4.49,
    salePrice: 2.99,
    unit: "dozen",
    discount: 33,
    timeLeft: "10:15:22",
  },
  {
    id: 3,
    name: "Red Bell Peppers",
    image: "https://images.unsplash.com/photo-1607872155422-478cd4d89ec2?q=80&w=1780",
    originalPrice: 3.99,
    salePrice: 2.49,
    unit: "lb",
    discount: 38,
    timeLeft: "08:30:55",
  },
  {
    id: 4,
    name: "Whole Grain Bread",
    image: "https://images.unsplash.com/photo-1598373182133-52452f7691ef?q=80&w=1780",
    originalPrice: 4.99,
    salePrice: 3.49,
    unit: "loaf",
    discount: 30,
    timeLeft: "15:20:30",
  },
];

const DealSection = () => {
  const [cartCount, setCartCount] = useState<number>(0);

  const handleAddToCart = (item: typeof deals[0]) => {
    setCartCount(prev => prev + 1);
    toast(`${item.name} added to cart!`, {
      description: `${item.salePrice} per ${item.unit}`,
      action: {
        label: "View Cart",
        onClick: () => console.log("Viewing cart")
      },
    });
  };

  return (
    <section className="section-padding bg-grocery-background">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12">
          <div>
            <h2 className="text-3xl font-bold mb-2">Deals of the Day</h2>
            <p className="text-grocery-text-light">Special offers with limited-time discounts</p>
          </div>
          <Button variant="link" className="text-grocery-primary mt-4 md:mt-0">
            View All Deals →
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {deals.map((deal) => (
            <div key={deal.id} className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 hover-lift">
              <div className="relative">
                <img 
                  src={deal.image} 
                  alt={deal.name}
                  className="w-full h-48 object-cover"
                />
                <Badge className="absolute top-3 right-3 bg-grocery-accent">
                  {deal.discount}% OFF
                </Badge>
              </div>
              
              <div className="p-5">
                <h3 className="font-semibold text-lg mb-2">{deal.name}</h3>
                
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <span className="text-grocery-primary font-bold text-lg">${deal.salePrice}</span>
                    <span className="text-gray-400 line-through ml-2">${deal.originalPrice}</span>
                    <span className="text-sm text-gray-500 ml-1">/{deal.unit}</span>
                  </div>
                </div>
                
                <div className="flex items-center text-grocery-text-light text-sm mb-4">
                  <Clock className="w-4 h-4 mr-1" />
                  <span>Ends in: {deal.timeLeft}</span>
                </div>
                
                <Button 
                  className="w-full bg-grocery-primary hover:bg-grocery-primary-dark"
                  onClick={() => handleAddToCart(deal)}
                >
                  Add to Cart
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DealSection;
