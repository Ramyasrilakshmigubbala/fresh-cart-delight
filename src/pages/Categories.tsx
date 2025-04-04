
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronRight } from "lucide-react";
import { useLocation } from "react-router-dom";
import { toast } from "sonner";

interface LocationState {
  selectedCategory: string;
}

const Categories = () => {
  const location = useLocation();
  const locationState = location.state as LocationState | null;
  const [expandedCategory, setExpandedCategory] = useState<string | null>("vegetables");
  const [cartItems, setCartItems] = useState<number>(0);

  useEffect(() => {
    // If we have a category from navigation state, expand that category
    if (locationState && locationState.selectedCategory) {
      const categoryMap: Record<number, string> = {
        1: "vegetables",
        2: "dairy",
        3: "bakery",
        4: "meat",
        5: "household",
        6: "beverages"
      };
      
      const category = categoryMap[locationState.selectedCategory as unknown as number];
      if (category) {
        setExpandedCategory(category);
      }
    }
  }, [locationState]);

  const categories = [
    {
      id: "vegetables",
      name: "Vegetables & Fruits",
      icon: "🥦",
      subcategories: [
        { id: "fresh-vegetables", name: "Fresh Vegetables" },
        { id: "fresh-fruits", name: "Fresh Fruits" },
        { id: "herbs", name: "Herbs & Seasonings" },
        { id: "organic", name: "Organic Produce" },
      ],
    },
    {
      id: "dairy",
      name: "Dairy & Eggs",
      icon: "🥛",
      subcategories: [
        { id: "milk-yogurt", name: "Milk & Yogurt" },
        { id: "cheese-butter", name: "Cheese & Butter" },
        { id: "eggs", name: "Eggs & Substitutes" },
      ],
    },
    {
      id: "bakery",
      name: "Bakery & Snacks",
      icon: "🍞",
      subcategories: [
        { id: "bread", name: "Bread & Buns" },
        { id: "cakes", name: "Cakes & Pastries" },
        { id: "cookies", name: "Cookies & Crackers" },
        { id: "snacks", name: "Savory Snacks" },
      ],
    },
    {
      id: "meat",
      name: "Meat & Seafood",
      icon: "🍗",
      subcategories: [
        { id: "chicken", name: "Chicken & Poultry" },
        { id: "beef", name: "Beef & Mutton" },
        { id: "fish", name: "Fish & Seafood" },
        { id: "processed", name: "Processed Meats" },
      ],
    },
    {
      id: "household",
      name: "Household Essentials",
      icon: "🛒",
      subcategories: [
        { id: "cleaning", name: "Cleaning Supplies" },
        { id: "laundry", name: "Laundry Products" },
        { id: "bathroom", name: "Bathroom Essentials" },
        { id: "kitchen", name: "Kitchen Supplies" },
      ],
    },
    {
      id: "beverages",
      name: "Beverages & Packaged Food",
      icon: "🍫",
      subcategories: [
        { id: "tea-coffee", name: "Tea & Coffee" },
        { id: "juices", name: "Juices & Soft Drinks" },
        { id: "packaged-food", name: "Packaged Foods" },
        { id: "health-drinks", name: "Health Drinks" },
      ],
    },
  ];

  const toggleCategory = (categoryId: string) => {
    setExpandedCategory(expandedCategory === categoryId ? null : categoryId);
  };

  const handleAddToCart = (product: any) => {
    setCartItems(prev => prev + 1);
    toast(`${product.name} added to cart!`, {
      description: `$${product.price} - ${product.weight}`,
      action: {
        label: "View Cart",
        onClick: () => console.log("Viewing cart")
      },
    });
  };

  // Sample product data for all categories
  const productsByCategory: Record<string, any[]> = {
    vegetables: [
      { id: 1, name: "Organic Broccoli", price: 2.99, weight: "500g", image: "https://images.unsplash.com/photo-1584270354949-c26b0d5b4a0c" },
      { id: 2, name: "Red Tomatoes", price: 1.99, weight: "1kg", image: "https://images.unsplash.com/photo-1592841200221-a6898f307baa" },
      { id: 3, name: "Baby Spinach", price: 3.49, weight: "250g", image: "https://images.unsplash.com/photo-1576045057995-568f588f82fb" },
      { id: 4, name: "Avocado", price: 2.49, weight: "each", image: "https://images.unsplash.com/photo-1523049673857-eb18f1d7b578" },
      { id: 5, name: "Red Apples", price: 4.99, weight: "1kg", image: "https://images.unsplash.com/photo-1579613832125-5d34a13ffe2a" },
      { id: 6, name: "Bananas", price: 1.79, weight: "bunch", image: "https://images.unsplash.com/photo-1603833665858-e61d17a86224" },
    ],
    dairy: [
      { id: 7, name: "Whole Milk", price: 3.29, weight: "1L", image: "https://images.unsplash.com/photo-1563636619-e9143da7973b" },
      { id: 8, name: "Greek Yogurt", price: 4.99, weight: "500g", image: "https://images.unsplash.com/photo-1584278858536-52732d3a34ea" },
      { id: 9, name: "Cheddar Cheese", price: 5.99, weight: "200g", image: "https://images.unsplash.com/photo-1552767059-ce182ead6c1b" },
      { id: 10, name: "Butter", price: 3.99, weight: "250g", image: "https://images.unsplash.com/photo-1589985270826-4b7bb135bc9d" },
      { id: 11, name: "Organic Eggs", price: 5.49, weight: "12 pcs", image: "https://images.unsplash.com/photo-1506976785307-8732e854ad03" },
    ],
    bakery: [
      { id: 12, name: "Whole Wheat Bread", price: 3.99, weight: "500g", image: "https://images.unsplash.com/photo-1598373182133-52452f7691ef" },
      { id: 13, name: "Croissants", price: 5.99, weight: "4 pcs", image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a" },
      { id: 14, name: "Chocolate Cookies", price: 4.49, weight: "300g", image: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e" },
      { id: 15, name: "Sourdough Bread", price: 6.99, weight: "700g", image: "https://images.unsplash.com/photo-1585478259715-1c401da62500" },
      { id: 16, name: "Vanilla Cupcakes", price: 7.99, weight: "6 pcs", image: "https://images.unsplash.com/photo-1627834377411-8da5f4f09de8" },
    ],
    meat: [
      { id: 17, name: "Chicken Breast", price: 8.99, weight: "1kg", image: "https://images.unsplash.com/photo-1604503468506-a8da13d82791" },
      { id: 18, name: "Ground Beef", price: 9.99, weight: "500g", image: "https://images.unsplash.com/photo-1578333222994-8549a10d1c4b" },
      { id: 19, name: "Salmon Fillet", price: 12.99, weight: "400g", image: "https://images.unsplash.com/photo-1599084993063-bc24d318eba1" },
      { id: 20, name: "Pork Chops", price: 7.99, weight: "600g", image: "https://images.unsplash.com/photo-1560781290-7dc94c0f8f4f" },
      { id: 21, name: "Shrimp", price: 14.99, weight: "300g", image: "https://images.unsplash.com/photo-1565680018160-64b74dd0fd1f" },
    ],
    household: [
      { id: 22, name: "Laundry Detergent", price: 11.99, weight: "2L", image: "https://images.unsplash.com/photo-1610557892470-55d9e80c0bce" },
      { id: 23, name: "Dish Soap", price: 3.99, weight: "750ml", image: "https://images.unsplash.com/photo-1622460506041-4a2af8be501f" },
      { id: 24, name: "Paper Towels", price: 5.49, weight: "6 rolls", image: "https://images.unsplash.com/photo-1600857544200-b2f666a9a2ec" },
      { id: 25, name: "Bathroom Cleaner", price: 4.29, weight: "500ml", image: "https://images.unsplash.com/photo-1563453392212-326f5e854473" },
      { id: 26, name: "Trash Bags", price: 6.99, weight: "30 bags", image: "https://images.unsplash.com/photo-1610557892108-22f30d20bb15" },
    ],
    beverages: [
      { id: 27, name: "Coffee Beans", price: 14.99, weight: "500g", image: "https://images.unsplash.com/photo-1447933601403-0c6688de566e" },
      { id: 28, name: "Green Tea", price: 4.99, weight: "50 bags", image: "https://images.unsplash.com/photo-1627435601361-ec25f5b1d0e5" },
      { id: 29, name: "Orange Juice", price: 3.49, weight: "1L", image: "https://images.unsplash.com/photo-1600271886742-f049cd451bba" },
      { id: 30, name: "Sparkling Water", price: 1.99, weight: "750ml", image: "https://images.unsplash.com/photo-1603569283847-aa295f0d016a" },
      { id: 31, name: "Protein Shake", price: 2.99, weight: "330ml", image: "https://images.unsplash.com/photo-1578608288647-d7f8273e0b7a" },
    ],
  };

  // Get products for the expanded category or default to empty array
  const products = expandedCategory ? (productsByCategory[expandedCategory] || []) : [];

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Product Categories</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Categories Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow p-4">
              <h2 className="text-xl font-semibold mb-4">Browse Categories</h2>
              <ul className="space-y-2">
                {categories.map((category) => (
                  <li key={category.id} className="border-b border-gray-100 last:border-0">
                    <button
                      onClick={() => toggleCategory(category.id)}
                      className="flex items-center justify-between w-full py-3 px-2 hover:bg-gray-50 rounded transition-colors"
                    >
                      <span className="flex items-center">
                        <span className="mr-2">{category.icon}</span>
                        {category.name}
                      </span>
                      {expandedCategory === category.id ? (
                        <ChevronDown className="h-4 w-4" />
                      ) : (
                        <ChevronRight className="h-4 w-4" />
                      )}
                    </button>
                    
                    {expandedCategory === category.id && (
                      <ul className="ml-6 mt-1 mb-2 space-y-1">
                        {category.subcategories.map((subcategory) => (
                          <li key={subcategory.id}>
                            <a 
                              href={`#${subcategory.id}`}
                              className="block py-2 px-2 text-sm text-gray-600 hover:text-grocery-primary hover:bg-gray-50 rounded transition-colors"
                            >
                              {subcategory.name}
                            </a>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          {/* Products Grid */}
          <div className="lg:col-span-3">
            {expandedCategory && (
              <>
                <h2 className="text-2xl font-semibold mb-6">
                  {categories.find(cat => cat.id === expandedCategory)?.name}
                </h2>
                
                {products.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {products.map((product) => (
                      <div key={product.id} className="bg-white rounded-lg shadow overflow-hidden hover:shadow-md transition-shadow">
                        <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden bg-gray-200">
                          <img 
                            src={`${product.image}?w=300&h=300&fit=crop&q=80`}
                            alt={product.name}
                            className="w-full h-48 object-cover"
                          />
                        </div>
                        <div className="p-4">
                          <h3 className="font-medium text-gray-900">{product.name}</h3>
                          <div className="mt-1 flex justify-between items-center">
                            <div>
                              <span className="text-lg font-bold text-grocery-primary">${product.price}</span>
                              <span className="text-sm text-gray-500 ml-2">/ {product.weight}</span>
                            </div>
                            <Button 
                              className="bg-grocery-primary hover:bg-grocery-primary-dark"
                              onClick={() => handleAddToCart(product)}
                            >
                              Add to Cart
                            </Button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="bg-white rounded-lg shadow p-8 text-center">
                    <p className="text-gray-500">No products available in this category yet.</p>
                  </div>
                )}
              </>
            )}
            
            {!expandedCategory && (
              <div className="bg-white rounded-lg shadow p-8 text-center">
                <p className="text-gray-500">Please select a category from the sidebar to view products.</p>
              </div>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Categories;
