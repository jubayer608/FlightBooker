import Navbar from '@/components/Navbar'
import HeroSection from '@/components/HeroSection'
import FlightSearch from '@/components/FlightSearch'
import HowItWorks from '@/components/HowItWorks'
import Features from '@/components/Features'
import Offers from '@/components/Offers'
import Testimonials from '@/components/Testimonials'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <FlightSearch />
      <HowItWorks />
      <Features />
      <Offers />
      <Testimonials />
      <Footer />
    </main>
  )
}