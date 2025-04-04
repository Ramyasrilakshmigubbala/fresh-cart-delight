
import { useState } from "react";
import { Link } from "react-router-dom";
import { ShoppingCart, User, Menu, X, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator
} from "@/components/ui/dropdown-menu";
import { toast } from "sonner";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleAccountClick = () => {
    toast("Account functionality coming soon!", {
      description: "Sign in/sign up features will be available shortly.",
    });
  };

  const handleCartClick = () => {
    toast("Shopping cart coming soon!", {
      description: "Your shopping cart will be available shortly.",
    });
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <div className="text-grocery-primary font-poppins font-bold text-2xl">
              Fresh<span className="text-grocery-accent">Cart</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link to="/" className="font-medium hover:text-grocery-primary transition-colors">Home</Link>
            <Link to="/categories" className="font-medium hover:text-grocery-primary transition-colors">Categories</Link>
            <Link to="/offers" className="font-medium hover:text-grocery-primary transition-colors">Offers</Link>
            <Link to="/best-sellers" className="font-medium hover:text-grocery-primary transition-colors">Best Sellers</Link>
            <Link to="/contact" className="font-medium hover:text-grocery-primary transition-colors">Contact Us</Link>
          </nav>

          {/* Search Bar - Desktop */}
          <div className="hidden lg:flex relative flex-grow max-w-md mx-8">
            <Input 
              type="text" 
              placeholder="Search for groceries..." 
              className="pl-10 pr-4 py-2 rounded-full border-grocery-primary border-opacity-30 focus:border-grocery-primary"
            />
            <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
          </div>

          {/* User Actions */}
          <div className="flex items-center space-x-4">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="hidden md:flex items-center space-x-2 hover:bg-grocery-primary hover:bg-opacity-10">
                  <User size={20} />
                  <span className="hidden lg:inline">Account</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                <DropdownMenuItem onClick={handleAccountClick}>Sign In</DropdownMenuItem>
                <DropdownMenuItem onClick={handleAccountClick}>Create Account</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={handleAccountClick}>My Profile</DropdownMenuItem>
                <DropdownMenuItem onClick={handleAccountClick}>My Orders</DropdownMenuItem>
                <DropdownMenuItem onClick={handleAccountClick}>My Wishlist</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            
            <Button 
              variant="ghost" 
              className="relative flex items-center space-x-2 hover:bg-grocery-primary hover:bg-opacity-10"
              onClick={handleCartClick}
            >
              <ShoppingCart size={20} />
              <span className="hidden lg:inline">Cart</span>
              <span className="absolute -top-2 -right-2 bg-grocery-accent text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">2</span>
            </Button>
            
            <Button 
              variant="ghost" 
              className="lg:hidden"
              onClick={toggleMenu}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>

        {/* Mobile Search */}
        <div className="mt-4 lg:hidden relative">
          <Input 
            type="text" 
            placeholder="Search for groceries..." 
            className="pl-10 pr-4 py-2 rounded-full border-grocery-primary border-opacity-30 focus:border-grocery-primary"
          />
          <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <nav className="lg:hidden mt-4 bg-white py-2">
            <ul className="space-y-2">
              <li><Link to="/" className="block p-2 hover:bg-grocery-primary hover:bg-opacity-10 rounded">Home</Link></li>
              <li><Link to="/categories" className="block p-2 hover:bg-grocery-primary hover:bg-opacity-10 rounded">Categories</Link></li>
              <li><Link to="/offers" className="block p-2 hover:bg-grocery-primary hover:bg-opacity-10 rounded">Offers</Link></li>
              <li><Link to="/best-sellers" className="block p-2 hover:bg-grocery-primary hover:bg-opacity-10 rounded">Best Sellers</Link></li>
              <li><Link to="/contact" className="block p-2 hover:bg-grocery-primary hover:bg-opacity-10 rounded">Contact Us</Link></li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
