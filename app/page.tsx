import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import ScrollSection from "@/components/scroll-section";
import Products from "@/components/products";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ScrollSection />
        <Products />
      </main>
      <Footer />
    </>
  );
}
