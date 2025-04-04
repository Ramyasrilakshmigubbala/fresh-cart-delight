
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Clock } from "lucide-react";

const Offers = () => {
  // Sample offer data
  const offers = [
    {
      id: 1,
      title: "Weekend Special: 20% Off Fresh Vegetables",
      description: "Get 20% off on all fresh vegetables this weekend! Stock up your kitchen with nutritious greens at unbeatable prices.",
      validUntil: "2025-04-07T23:59:59",
      image: "https://images.unsplash.com/photo-1566385101042-1a0aa0c1268c?q=80&w=1489",
      discount: "20%",
      category: "Fresh Produce",
      couponCode: "FRESH20",
    },
    {
      id: 2,
      title: "Buy 1 Get 1 Free on Dairy Products",
      description: "Purchase any dairy product and get another one of equal or lesser value absolutely free! Limited time offer.",
      validUntil: "2025-04-10T23:59:59",
      image: "https://images.unsplash.com/photo-1628088062854-d1870b4553da?q=80&w=1170",
      discount: "BOGO",
      category: "Dairy",
      couponCode: "DAIRY2FOR1",
    },
    {
      id: 3,
      title: "30% Off Bakery Items",
      description: "Enjoy freshly baked goods at 30% off. Perfect for breakfast or teatime snacks!",
      validUntil: "2025-04-06T23:59:59",
      image: "https://images.unsplash.com/photo-1608198093002-ad4e005484ec?q=80&w=1332",
      discount: "30%",
      category: "Bakery",
      couponCode: "BAKE30",
    },
    {
      id: 4,
      title: "Bulk Buy Discount: 15% Off on Orders Above $100",
      description: "Stock up your pantry and save big! Get 15% off when you spend $100 or more on groceries.",
      validUntil: "2025-04-15T23:59:59",
      image: "https://images.unsplash.com/photo-1579113800032-c38bd7635818?q=80&w=1287",
      discount: "15%",
      category: "All Products",
      couponCode: "BULK15",
    },
    {
      id: 5,
      title: "First Order Special: $10 Off",
      description: "New to FreshCart? Get $10 off on your first order of $50 or more. Welcome to the family!",
      validUntil: "2025-12-31T23:59:59",
      image: "https://images.unsplash.com/photo-1550989460-0adf9ea622e2?q=80&w=1287",
      discount: "$10",
      category: "All Products",
      couponCode: "WELCOME10",
    },
    {
      id: 6,
      title: "Weekend Flash Sale: 25% Off Selected Items",
      description: "This weekend only! Grab amazing deals on selected premium grocery items with 25% off.",
      validUntil: "2025-04-07T23:59:59",
      image: "https://images.unsplash.com/photo-1604719312566-8912e9667d9f?q=80&w=1374",
      discount: "25%",
      category: "Selected Items",
      couponCode: "FLASH25",
    },
  ];

  // Function to calculate remaining time
  const getTimeRemaining = (endtime: string) => {
    const total = Date.parse(endtime) - Date.now();
    const days = Math.floor(total / (1000 * 60 * 60 * 24));
    const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((total / 1000 / 60) % 60);
    
    return {
      total,
      days,
      hours,
      minutes
    };
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="flex flex-col items-center mb-10">
          <h1 className="text-3xl md:text-4xl font-bold text-center mb-3">
            Current Offers & Discounts
          </h1>
          <p className="text-gray-600 text-center max-w-2xl">
            Take advantage of these exclusive deals and save on your grocery shopping. Don't miss out on limited-time offers!
          </p>
        </div>

        {/* Featured Offer Banner */}
        <div className="relative rounded-lg overflow-hidden bg-grocery-primary mb-12">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1607083206968-13611e3d76db?q=80&w=1515')] bg-cover bg-center opacity-30"></div>
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between p-6 md:p-10 text-white">
            <div className="mb-6 md:mb-0">
              <span className="bg-white text-grocery-primary px-3 py-1 text-sm font-bold rounded-full">Limited Time</span>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mt-4">First 3 Orders Free Delivery</h2>
              <p className="mt-2 mb-6 max-w-lg">Sign up now and get free delivery on your first three orders! No minimum purchase required.</p>
              <Button className="bg-white text-grocery-primary hover:bg-gray-100">Claim Offer</Button>
            </div>
            <div className="bg-white bg-opacity-20 backdrop-blur-lg rounded-lg p-4">
              <div className="text-center">
                <p className="text-sm mb-1">Offer Ends In:</p>
                <div className="flex gap-2 text-xl font-bold">
                  <div className="bg-grocery-accent px-3 py-1 rounded">7</div>
                  <span>:</span>
                  <div className="bg-grocery-accent px-3 py-1 rounded">11</div>
                  <span>:</span>
                  <div className="bg-grocery-accent px-3 py-1 rounded">32</div>
                </div>
                <div className="flex gap-2 text-xs mt-1">
                  <div className="px-3">Days</div>
                  <span></span>
                  <div className="px-3">Hours</div>
                  <span></span>
                  <div className="px-3">Mins</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Offers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {offers.map((offer) => {
            const timeRemaining = getTimeRemaining(offer.validUntil);
            
            return (
              <div key={offer.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative h-48">
                  <img 
                    src={offer.image} 
                    alt={offer.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-0 right-0 bg-grocery-accent text-white font-bold px-4 py-2 rounded-bl-lg">
                    {offer.discount} OFF
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center mb-2">
                    <span className="text-sm font-semibold bg-grocery-primary bg-opacity-10 text-grocery-primary px-2 py-1 rounded">
                      {offer.category}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-2">{offer.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{offer.description}</p>
                  
                  {timeRemaining.total > 0 ? (
                    <div className="flex items-center text-sm text-gray-500 mb-4">
                      <Clock className="h-4 w-4 mr-1" /> 
                      <span>
                        Expires in: {timeRemaining.days > 0 ? `${timeRemaining.days}d ` : ''}
                        {timeRemaining.hours}h {timeRemaining.minutes}m
                      </span>
                    </div>
                  ) : (
                    <div className="text-sm text-red-500 mb-4">This offer has expired</div>
                  )}
                  
                  <div className="flex items-center justify-between">
                    <div className="bg-gray-100 px-3 py-2 rounded border border-gray-200">
                      <span className="text-xs text-gray-500">Code:</span>
                      <span className="font-mono font-bold ml-1">{offer.couponCode}</span>
                    </div>
                    <Button className="bg-grocery-primary hover:bg-grocery-primary-dark">
                      Shop Now
                    </Button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bank Offers Section */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-12">
          <h2 className="text-2xl font-semibold mb-6">Bank & Wallet Offers</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
              <img src="https://i.imgur.com/TLxCiIM.png" alt="Credit Card" className="h-10 mb-3" />
              <h3 className="font-semibold">10% Off with City Bank</h3>
              <p className="text-sm text-gray-600 my-2">Use your City Bank card and get 10% off up to $30 on orders above $200</p>
              <p className="text-xs text-gray-500">Valid till April 30, 2025</p>
            </div>
            <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
              <img src="https://i.imgur.com/5RYV8oR.png" alt="Digital Wallet" className="h-10 mb-3" />
              <h3 className="font-semibold">5% Cashback via PayQuick</h3>
              <p className="text-sm text-gray-600 my-2">Pay using PayQuick wallet and get 5% cashback instantly</p>
              <p className="text-xs text-gray-500">Valid till May 15, 2025</p>
            </div>
            <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
              <img src="https://i.imgur.com/z9iqrNN.png" alt="Bank Logo" className="h-10 mb-3" />
              <h3 className="font-semibold">No-cost EMI on Orders $500+</h3>
              <p className="text-sm text-gray-600 my-2">3 & 6 month no-cost EMI available on Global Bank credit cards</p>
              <p className="text-xs text-gray-500">Limited time offer</p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Offers;
