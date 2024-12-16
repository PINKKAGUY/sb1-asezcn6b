import OracleCard from '../components/home/OracleCard';
import Features from '../components/home/Features';
import SpiritualJourney from '../components/home/SpiritualJourney';
import Testimonials from '../components/home/Testimonials';
import FAQ from '../components/home/FAQ';
import ImageGallery from '../components/home/ImageGallery';
import StatsBanner from '../components/home/StatsBanner';
import ScrollRevealSection from '../components/home/ScrollRevealSection';
import HeroVideo from '../components/home/HeroVideo';
import ParallaxSection from '../components/home/ParallaxSection';
import AnimatedCards from '../components/home/AnimatedCards';

export default function Home() {
  return (
    <div className="bg-white">
      <HeroVideo />
      <OracleCard />
      <ParallaxSection />
      <StatsBanner />
      <Features />
      <AnimatedCards />
      <ScrollRevealSection />
      <ImageGallery />
      <SpiritualJourney />
      <Testimonials />
      <FAQ />
    </div>
  );
}