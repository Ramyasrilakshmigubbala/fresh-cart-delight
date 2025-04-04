
import { Leaf, Milk, Cookie, Beef, Home, Coffee } from "lucide-react";
import { Link } from "react-router-dom";

const categories = [
  {
    id: 1,
    name: "Vegetables & Fruits",
    icon: Leaf,
    color: "bg-green-100 text-green-700",
    link: "/categories"
  },
  {
    id: 2,
    name: "Dairy & Eggs",
    icon: Milk,
    color: "bg-blue-100 text-blue-700",
    link: "/categories"
  },
  {
    id: 3,
    name: "Bakery & Snacks",
    icon: Cookie,
    color: "bg-amber-100 text-amber-700",
    link: "/categories"
  },
  {
    id: 4,
    name: "Meat & Seafood",
    icon: Beef,
    color: "bg-red-100 text-red-700",
    link: "/categories"
  },
  {
    id: 5,
    name: "Household Essentials",
    icon: Home,
    color: "bg-purple-100 text-purple-700",
    link: "/categories"
  },
  {
    id: 6,
    name: "Beverages & Packaged Food",
    icon: Coffee,
    color: "bg-orange-100 text-orange-700",
    link: "/categories"
  },
];

const CategoryGrid = () => {
  return (
    <section className="section-padding bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Featured Categories</h2>
          <p className="text-grocery-text-light max-w-2xl mx-auto">
            Explore our wide range of fresh, quality products across various categories
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
          {categories.map((category) => (
            <Link
              key={category.id}
              to={category.link}
              state={{ selectedCategory: category.id }}
              className="group hover-lift rounded-xl overflow-hidden"
            >
              <div className="flex flex-col items-center p-6 h-full bg-white border border-gray-100 rounded-xl shadow-sm">
                <div className={`${category.color} p-4 rounded-full mb-4 group-hover:scale-110 transition-transform`}>
                  <category.icon size={32} />
                </div>
                <h3 className="font-medium text-center text-grocery-text">
                  {category.name}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryGrid;
