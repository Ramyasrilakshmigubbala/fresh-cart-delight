
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock, MessageSquare } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you would send this data to your backend
    console.log("Form submitted:", formData);
    toast.success("Your message has been sent! We'll get back to you soon.");
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: ""
    });
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        {/* Hero Banner */}
        <section className="relative bg-grocery-primary py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Contact Us</h1>
            <p className="text-white text-opacity-90 max-w-2xl mx-auto">
              Have questions or feedback? We'd love to hear from you. Our team is always here to help!
            </p>
          </div>
        </section>
        
        {/* Contact Info Cards */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow flex flex-col items-center text-center">
                <div className="bg-grocery-primary bg-opacity-10 p-3 rounded-full mb-4">
                  <MapPin className="text-grocery-primary h-6 w-6" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Visit Us</h3>
                <p className="text-gray-600">
                  123 Grocery Street<br />
                  Fresh City, FC 98765<br />
                  United States
                </p>
                <Button variant="link" className="text-grocery-primary mt-2">
                  Get Directions
                </Button>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow flex flex-col items-center text-center">
                <div className="bg-grocery-primary bg-opacity-10 p-3 rounded-full mb-4">
                  <Phone className="text-grocery-primary h-6 w-6" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Call Us</h3>
                <p className="text-gray-600">
                  Customer Support:<br />
                  +1 (123) 456-7890<br />
                  Toll-Free: 1-800-FRESH
                </p>
                <Button variant="link" className="text-grocery-primary mt-2">
                  Call Now
                </Button>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow flex flex-col items-center text-center">
                <div className="bg-grocery-primary bg-opacity-10 p-3 rounded-full mb-4">
                  <Mail className="text-grocery-primary h-6 w-6" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Email Us</h3>
                <p className="text-gray-600">
                  Customer Support:<br />
                  support@freshcart.com<br />
                  Business: info@freshcart.com
                </p>
                <Button variant="link" className="text-grocery-primary mt-2">
                  Send Email
                </Button>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow flex flex-col items-center text-center">
                <div className="bg-grocery-primary bg-opacity-10 p-3 rounded-full mb-4">
                  <Clock className="text-grocery-primary h-6 w-6" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Working Hours</h3>
                <p className="text-gray-600">
                  Mon-Fri: 8:00 AM - 10:00 PM<br />
                  Saturday: 9:00 AM - 8:00 PM<br />
                  Sunday: 10:00 AM - 6:00 PM
                </p>
                <Button variant="link" className="text-grocery-primary mt-2">
                  View Holiday Hours
                </Button>
              </div>
            </div>
          </div>
        </section>
        
        {/* Contact Form & Map */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Contact Form */}
              <div className="bg-white p-6 md:p-8 rounded-lg shadow-sm">
                <div className="mb-6">
                  <h2 className="text-2xl font-semibold mb-2">Send Us a Message</h2>
                  <p className="text-gray-600">
                    Fill out the form below, and we'll get back to you as soon as possible.
                  </p>
                </div>
                
                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        Your Name
                      </label>
                      <Input 
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe" 
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email Address
                      </label>
                      <Input 
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com" 
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                      Subject
                    </label>
                    <Input 
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="How can we help you?" 
                      required
                    />
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Your Message
                    </label>
                    <Textarea 
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Please provide as much detail as possible..." 
                      rows={5}
                      required
                    />
                  </div>
                  
                  <Button type="submit" className="w-full bg-grocery-primary hover:bg-grocery-primary-dark">
                    <MessageSquare className="h-4 w-4 mr-2" /> Send Message
                  </Button>
                </form>
              </div>
              
              {/* Map */}
              <div className="bg-white p-6 md:p-8 rounded-lg shadow-sm">
                <div className="mb-6">
                  <h2 className="text-2xl font-semibold mb-2">Find Us</h2>
                  <p className="text-gray-600">
                    Visit our store or warehouse at the address below.
                  </p>
                </div>
                
                <div className="overflow-hidden rounded-lg h-80 mb-6">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387193.30596698663!2d-74.25987368715496!3d40.69767006766623!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1651293200040!5m2!1sen!2s" 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    title="FreshCart Location"
                  ></iframe>
                </div>
                
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold mb-2 flex items-center">
                    <MapPin className="h-5 w-5 mr-2 text-grocery-primary" /> 
                    Our Main Store
                  </h3>
                  <p className="text-gray-600 mb-2">
                    123 Grocery Street, Fresh City, FC 98765, United States
                  </p>
                  <p className="text-sm text-gray-500">
                    Free parking available for customers. Bus routes #12, #34, and #56 stop nearby.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* FAQ Section */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-semibold">Frequently Asked Questions</h2>
              <p className="text-gray-600 mt-2">Find quick answers to common questions</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-semibold text-lg mb-2">What are your delivery hours?</h3>
                <p className="text-gray-600">
                  We deliver from 9:00 AM to 9:00 PM, seven days a week, including weekends and most holidays.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-semibold text-lg mb-2">How do I track my order?</h3>
                <p className="text-gray-600">
                  You can track your order in real-time through the "Track Order" section in your account dashboard.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-semibold text-lg mb-2">What is your return policy?</h3>
                <p className="text-gray-600">
                  We offer hassle-free returns within 24 hours of delivery for any products that don't meet your expectations.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-semibold text-lg mb-2">Do you offer same-day delivery?</h3>
                <p className="text-gray-600">
                  Yes, we offer same-day delivery for orders placed before 3:00 PM, subject to availability and location.
                </p>
              </div>
            </div>
            
            <div className="text-center mt-8">
              <Button variant="outline" className="border-grocery-primary text-grocery-primary hover:bg-grocery-primary hover:text-white">
                View All FAQs
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
