
import { Link } from "react-router-dom";
import { Facebook, Instagram, Linkedin, Twitter, MapPin, Phone, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-semibold mb-4">FreshCart</h3>
            <p className="text-gray-400 mb-4">
              Your trusted neighborhood grocery store, bringing fresh produce and quality products straight to your doorstep.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-grocery-accent transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-grocery-accent transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-grocery-accent transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-grocery-accent transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-gray-400 hover:text-grocery-accent transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/privacy-policy" className="text-gray-400 hover:text-grocery-accent transition-colors">Privacy Policy</Link>
              </li>
              <li>
                <Link to="/refund-policy" className="text-gray-400 hover:text-grocery-accent transition-colors">Refund Policy</Link>
              </li>
              <li>
                <Link to="/faq" className="text-gray-400 hover:text-grocery-accent transition-colors">FAQs</Link>
              </li>
              <li>
                <Link to="/terms" className="text-gray-400 hover:text-grocery-accent transition-colors">Terms & Conditions</Link>
              </li>
            </ul>
          </div>
          
          {/* Customer Area */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Customer Area</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/account" className="text-gray-400 hover:text-grocery-accent transition-colors">My Account</Link>
              </li>
              <li>
                <Link to="/orders" className="text-gray-400 hover:text-grocery-accent transition-colors">Track Orders</Link>
              </li>
              <li>
                <Link to="/wishlist" className="text-gray-400 hover:text-grocery-accent transition-colors">Wishlist</Link>
              </li>
              <li>
                <Link to="/cart" className="text-gray-400 hover:text-grocery-accent transition-colors">Shopping Cart</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-grocery-accent transition-colors">Contact Us</Link>
              </li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Information</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={20} className="mr-2 text-grocery-accent flex-shrink-0 mt-1" />
                <span className="text-gray-400">123 Grocery Street, Fresh City, FC 98765</span>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="mr-2 text-grocery-accent flex-shrink-0" />
                <a href="tel:+11234567890" className="text-gray-400 hover:text-grocery-accent">+1 (123) 456-7890</a>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="mr-2 text-grocery-accent flex-shrink-0" />
                <a href="mailto:info@freshcart.com" className="text-gray-400 hover:text-grocery-accent">info@freshcart.com</a>
              </li>
            </ul>
          </div>
        </div>
        
        <hr className="border-gray-800 mb-6" />
        
        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} FreshCart. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0">
            <img 
              src="https://i.imgur.com/ZofSBVV.png" 
              alt="Payment Methods" 
              className="h-8"
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
