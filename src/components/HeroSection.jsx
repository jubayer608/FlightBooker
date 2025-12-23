'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { motion, AnimatePresence } from 'framer-motion'
import { Plane, TrendingUp, Shield, Award } from 'lucide-react'

/**
 * HeroSection
 * Main landing hero with background slider, headline and CTA
 */
export default function HeroSection() {

  // Keeps track of the currently active slide
  const [currentSlide, setCurrentSlide] = useState(0)

  // Hero slider content
  const slides = [
    {
      image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1920&q=80',
      title: 'Explore the World',
      subtitle: 'Book flights to your dream destinations with confidence',
    },
    {
      image: 'https://images.unsplash.com/photo-1464037866556-6812c9d1c72e?w=1920&q=80',
      title: 'Best Flight Deals',
      subtitle: 'Compare routes and save more on every journey',
    },
    {
      image: 'https://images.unsplash.com/photo-1488085061387-422e29b40080?w=1920&q=80',
      title: 'Travel Smarter',
      subtitle: 'Fast booking, trusted airlines, instant support',
    },
  ]

  // Store slide length
  const slidesLength = slides.length

  // Auto change slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slidesLength)
    }, 6000)

    return () => clearInterval(interval)
  }, [slidesLength])

  // search
  const scrollToSearch = () => {
    document.getElementById('search')?.scrollIntoView({ behavior: 'smooth' })
  }

  // statistics
  const stats = [
    { icon: Plane, value: '500+', label: 'Airlines', color: 'from-blue-500 to-blue-600' },
    { icon: TrendingUp, value: '1000+', label: 'Destinations', color: 'from-purple-500 to-purple-600' },
    { icon: Shield, value: '100%', label: 'Secure Booking', color: 'from-green-500 to-green-600' },
    { icon: Award, value: '1M+', label: 'Happy Travelers', color: 'from-orange-500 to-orange-600' },
  ]

  return (
    <section id="home" className="relative min-h-screen overflow-hidden">

      {/* Background image slider */}
      {/* Background image slider */}
<div className="absolute inset-0">
  <AnimatePresence>
    {slides.map(
      (slide, index) =>
        index === currentSlide && (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="absolute inset-0"
          >
            {/* Image */}
            <div
              className="w-full h-full bg-cover bg-center brightness-110 contrast-105"
              style={{ backgroundImage: `url(${slide.image})` }}
            />

            <div className="absolute inset-0 bg-linear-to-b from-black/50 via-black/40 to-black/60" />
          </motion.div>
        )
    )}
  </AnimatePresence>
</div>


      {/* Hero content */}
      <div className="relative z-10 flex items-center min-h-screen">
        <div className="max-w-7xl mx-auto px-4 w-full py-20">

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >

            {/* Trust badge */}
            <div className="inline-block mb-6">
              <div className="px-6 mt-2 py-3 rounded-full bg-white/20 backdrop-blur-md border-2 border-white/40 text-white font-bold">
                Trusted Flight Booking Platform 2025
              </div>
            </div>

            {/* Hero title */}
            <motion.h1
              key={currentSlide}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6"
            >
              {slides[currentSlide].title}
            </motion.h1>

            {/* Hero subtitle */}
            <p className="text-xl text-white/95 max-w-3xl mx-auto mb-10">
              {slides[currentSlide].subtitle}
            </p>

            {/* Primary CTA */}
            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-14">
              <Button
                size="lg"
                onClick={scrollToSearch}
                className="bg-linear-to-r from-blue-600 to-purple-600 text-white px-10 py-7 rounded-full font-bold"
              >
                <Plane className="mr-2 h-5 w-5" />
                Search Flights Now
              </Button>
            </div>

            {/* Platform stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {stats.map((stat, i) => (
                <div
                  key={i}
                  className="bg-white/15 backdrop-blur-md border border-white/30 rounded-2xl p-6 text-center"
                >
                  <div
                    className={`w-14 h-14 mx-auto mb-3 bg-linear-to-br ${stat.color} rounded-xl flex items-center justify-center`}
                  >
                    <stat.icon className="h-7 w-7 text-white" />
                  </div>

                  <div className="text-3xl font-bold text-white">
                    {stat.value}
                  </div>

                  <div className="text-sm text-white/90">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  )
}
