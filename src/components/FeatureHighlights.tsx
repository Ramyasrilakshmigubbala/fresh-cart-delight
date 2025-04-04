
import { Truck, DollarSign, Leaf, RotateCcw, Package } from "lucide-react";

const features = [
  {
    icon: Truck,
    title: "Same-Day Delivery",
    description: "Order before 2 PM for delivery today"
  },
  {
    icon: DollarSign,
    title: "Best Prices & Discounts",
    description: "We match competitors' prices"
  },
  {
    icon: Leaf,
    title: "Organic & Fresh Products",
    description: "From farm to table, always fresh"
  },
  {
    icon: RotateCcw,
    title: "Easy Returns & Refunds",
    description: "Hassle-free 14-day return policy"
  },
  {
    icon: Package,
    title: "Bulk Purchase Discounts",
    description: "Save more when you buy more"
  }
];

const FeatureHighlights = () => {
  return (
    <section className="section-padding bg-gradient-to-b from-white to-grocery-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Why Shop With Us?</h2>
          <p className="text-grocery-text-light max-w-2xl mx-auto">
            We provide the best shopping experience with quality products and excellent service
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover-lift flex flex-col items-center text-center"
            >
              <div className="bg-grocery-primary bg-opacity-10 p-4 rounded-full mb-4">
                <feature.icon className="w-6 h-6 text-grocery-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
              <p className="text-grocery-text-light text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureHighlights;
