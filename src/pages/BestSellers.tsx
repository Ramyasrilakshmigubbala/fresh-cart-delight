
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Star, ShoppingCart, Heart } from "lucide-react";

const BestSellers = () => {
  // Sample best-selling products data
  const bestSellingProducts = [
    {
      id: 1,
      name: "Organic Avocado",
      price: 2.49,
      originalPrice: 2.99,
      rating: 4.8,
      reviews: 234,
      image: "https://images.unsplash.com/photo-1601039641847-7857b994d704?q=80&w=1170",
      category: "Fresh Produce",
      badge: "Best Seller",
      sold: "1.2k sold this week",
    },
    {
      id: 2,
      name: "Free-Range Eggs (12 pack)",
      price: 4.99,
      originalPrice: 5.99,
      rating: 4.9,
      reviews: 189,
      image: "https://images.unsplash.com/photo-1598965675045-45c5e72c7d05?q=80&w=1287",
      category: "Dairy & Eggs",
      badge: "Organic",
      sold: "950 sold this week",
    },
   
   
    {
      id: 5,
      name: "Organic Baby Spinach (500g)",
      price: 3.49,
      originalPrice: 3.99,
      rating: 4.6,
      reviews: 124,
      image: "https://images.unsplash.com/photo-1576045057995-568f588f82fb?q=80&w=1480",
      category: "Fresh Produce",
      badge: "Fresh Pick",
      sold: "720 sold this week",
    },
    
    {
      id: 7,
      name: "Cold-Pressed Olive Oil (500ml)",
      price: 12.99,
      originalPrice: 14.99,
      rating: 4.9,
      reviews: 106,
      image: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?q=80&w=1286",
      category: "Oils & Vinegars",
      badge: "Premium",
      sold: "580 sold this week",
    },
    {
      id: 8,
      name: "Organic Quinoa (1kg)",
      price: 6.99,
      originalPrice: 8.49,
      rating: 4.8,
      reviews: 98,
      image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?q=80&w=1470",
      category: "Grains & Pasta",
      badge: "Superfood",
      sold: "540 sold this week",
    },
    {
      id: 9,
      name: "Fresh Atlantic Salmon Fillet",
      price: 15.99,
      originalPrice: 17.99,
      rating: 4.8,
      reviews: 87,
      image: "https://images.unsplash.com/photo-1599084993091-1cb5c0721cc6?q=80&w=1287",
      category: "Meat & Seafood",
      badge: "Sustainable",
      sold: "490 sold this week",
    },
    
    {
      id: 11,
      name: "Premium Ground Coffee (500g)",
      price: 11.99,
      originalPrice: 13.99,
      rating: 4.7,
      reviews: 76,
      image: "https://images.unsplash.com/photo-1611854779393-1b2da9d400fe?q=80&w=1287",
      category: "Beverages",
      badge: "Freshly Ground",
      sold: "420 sold this week",
    },
    
  ];

  // Group by categories for filtering
  const categories = [...new Set(bestSellingProducts.map(product => product.category))];

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="mb-8 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-3">Our Best Sellers</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our most popular items loved by thousands of customers. Quality products at great prices!
          </p>
        </div>
        
        {/* Top 3 Featured Products */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Top 3 Most Popular Items</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {bestSellingProducts.slice(0, 3).map((product) => (
              <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow relative">
                <div className="absolute top-0 right-0 bg-grocery-accent text-white px-3 py-1 rounded-bl-lg font-semibold z-10">
                  {product.badge}
                </div>
                
                <div className="relative h-60 overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                  <button className="absolute top-2 left-2 bg-white p-2 rounded-full hover:bg-gray-100 transition-colors">
                    <Heart className="h-5 w-5 text-gray-500 hover:text-red-500" />
                  </button>
                </div>
                
                <div className="p-4">
                  <span className="text-sm text-gray-500">{product.category}</span>
                  <h3 className="font-semibold text-lg mt-1 mb-2">{product.name}</h3>
                  
                  <div className="flex items-center mb-2">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          className={`h-4 w-4 ${i < Math.floor(product.rating) ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`}
                        />
                      ))}
                    </div>
                    <span className="text-sm text-gray-500 ml-2">
                      {product.rating} ({product.reviews})
                    </span>
                  </div>
                  
                  <div className="mb-3 text-sm text-grocery-accent font-medium">
                    {product.sold}
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-lg font-bold text-grocery-primary">${product.price}</span>
                      {product.originalPrice > product.price && (
                        <span className="text-sm text-gray-400 line-through ml-2">
                          ${product.originalPrice}
                        </span>
                      )}
                    </div>
                    <Button className="bg-grocery-primary hover:bg-grocery-primary-dark">
                      <ShoppingCart className="h-4 w-4 mr-1" /> Add
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Category Filter */}
        <section className="mb-8">
          <div className="flex flex-wrap gap-3 justify-center">
            <Button variant="outline" className="rounded-full px-5 bg-grocery-primary text-white">
              All Products
            </Button>
            {categories.map((category) => (
              <Button key={category} variant="outline" className="rounded-full px-5">
                {category}
              </Button>
            ))}
          </div>
        </section>
        
        {/* All Best Sellers */}
        <section>
          <h2 className="text-2xl font-semibold mb-6">All Best Selling Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {bestSellingProducts.slice(3).map((product) => (
              <div key={product.id} className="bg-white rounded-lg shadow hover:shadow-md transition-shadow">
                <div className="relative h-48 overflow-hidden rounded-t-lg">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-0 right-0 bg-grocery-accent text-white px-2 py-1 text-xs rounded-bl-lg font-semibold">
                    {product.badge}
                  </div>
                  <button className="absolute top-2 left-2 bg-white p-1.5 rounded-full hover:bg-gray-100 transition-colors">
                    <Heart className="h-4 w-4 text-gray-500 hover:text-red-500" />
                  </button>
                </div>
                
                <div className="p-3">
                  <span className="text-xs text-gray-500">{product.category}</span>
                  <h3 className="font-medium text-base mt-1 mb-1">{product.name}</h3>
                  
                  <div className="flex items-center mb-1">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          className={`h-3 w-3 ${i < Math.floor(product.rating) ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`}
                        />
                      ))}
                    </div>
                    <span className="text-xs text-gray-500 ml-1">
                      {product.rating}
                    </span>
                  </div>
                  
                  <div className="text-xs text-grocery-accent mb-2">
                    {product.sold}
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-base font-bold text-grocery-primary">${product.price}</span>
                      {product.originalPrice > product.price && (
                        <span className="text-xs text-gray-400 line-through ml-1">
                          ${product.originalPrice}
                        </span>
                      )}
                    </div>
                    <Button size="sm" className="bg-grocery-primary hover:bg-grocery-primary-dark h-8 px-3">
                      <ShoppingCart className="h-3 w-3" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default BestSellers;
