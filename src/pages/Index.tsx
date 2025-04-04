
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import CategoryGrid from "@/components/CategoryGrid";
import DealSection from "@/components/DealSection";
import FeatureHighlights from "@/components/FeatureHighlights";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Hero />
        <CategoryGrid />
        <DealSection />
        <FeatureHighlights />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
