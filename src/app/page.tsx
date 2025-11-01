import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Templates from '@/components/Templates';
import Pricing from '@/components/Pricing';
import Testimonials from '@/components/Testimonials';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <main className="pt-16">
        <Hero />
        <Features />
        <Templates />
        <Pricing />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
