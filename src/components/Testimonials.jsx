"use client";

import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Travel Blogger",
      avatar: "https://i.pravatar.cc/150?img=1",
      rating: 5,
      text: "FlightBooker made my travel planning so much easier! Found the best deals for my Europe trip.",
      location: "New York, USA",
      trip: "New York → Paris",
    },
    {
      name: "Ahmed Rahman",
      role: "Business Consultant",
      avatar: "https://i.pravatar.cc/150?img=12",
      rating: 5,
      text: "I travel frequently for work and FlightBooker has become my go-to platform.",
      location: "Dhaka, Bangladesh",
      trip: "Dhaka → Singapore",
    },
    {
      name: "Maria Garcia",
      role: "Photographer",
      avatar: "https://i.pravatar.cc/150?img=5",
      rating: 5,
      text: "Booked my honeymoon flights through FlightBooker and got an amazing deal!",
      location: "Madrid, Spain",
      trip: "Madrid → Maldives",
    },
    {
      name: "David Lee",
      role: "Software Engineer",
      avatar: "https://i.pravatar.cc/150?img=8",
      rating: 5,
      text: "Clean interface, fast search results, and great prices.",
      location: "San Francisco, USA",
      trip: "San Francisco → Tokyo",
    },
    {
      name: "Priya Sharma",
      role: "Student",
      avatar: "https://i.pravatar.cc/150?img=9",
      rating: 5,
      text: "Found the cheapest flight for my study abroad program!",
      location: "Mumbai, India",
      trip: "Mumbai → London",
    },
    {
      name: "Michael Chen",
      role: "Entrepreneur",
      avatar: "https://i.pravatar.cc/150?img=13",
      rating: 5,
      text: "Impressed with the variety of airlines and routes available.",
      location: "Hong Kong",
      trip: "Hong Kong → Sydney",
    },
  ];

  // Auto slide
  useEffect(() => {
    if (!autoPlay) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [autoPlay, testimonials.length]);

 
  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
  }, []);

  const next = () =>
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);

  const prev = () =>
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );

  return (
    <section id="testimonials" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
            What Our Travelers Say
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Join thousands of happy travelers who book with us
          </p>
        </div>

        {/* Desktop */}
        <div className="hidden lg:grid grid-cols-3 gap-8 mb-12 min-h-105">
          {[0, 1, 2].map((offset) => {
            const item =
              testimonials[(currentIndex + offset) % testimonials.length];

            return (
              <motion.div
                key={`${currentIndex}-${offset}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35 }}
              >
                <TestimonialCard testimonial={item} />
              </motion.div>
            );
          })}
        </div>

        {/* Mobile*/}
        <div className="lg:hidden relative min-h-105 mb-12">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0"
            >
              <TestimonialCard testimonial={testimonials[currentIndex]} />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation*/}
        <div className="flex items-center justify-center gap-6">
          <Button
            onClick={prev}
            onMouseEnter={() => setAutoPlay(false)}
            onMouseLeave={() => setAutoPlay(true)}
            variant="outline"
            size="icon"
            className="rounded-full h-12 w-12"
          >
            <ChevronLeft />
          </Button>

          {/* Pagination*/}
          <div className="flex gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrentIndex(index);
                  setAutoPlay(false);
                }}
                className={`h-3 rounded-full transition-all ${
                  index === currentIndex
                    ? "w-8 bg-blue-600"
                    : "w-3 bg-gray-300 dark:bg-gray-600"
                }`}
              />
            ))}
          </div>

          <Button
            onClick={next}
            onMouseEnter={() => setAutoPlay(false)}
            onMouseLeave={() => setAutoPlay(true)}
            variant="outline"
            size="icon"
            className="rounded-full h-12 w-12"
          >
            <ChevronRight />
          </Button>
        </div>
      </div>
    </section>
  );
}

/* Card */
function TestimonialCard({ testimonial }) {
  return (
    <Card className="p-8 h-full bg-linear-to-br from-white to-blue-50 dark:from-gray-800 dark:to-gray-900 flex flex-col">
      <Quote className="h-10 w-10 text-blue-600 opacity-50 mb-4" />

      <div className="flex gap-1 mb-4">
        {[...Array(testimonial.rating)].map((_, i) => (
          <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
        ))}
      </div>

      <p className="text-gray-700 dark:text-gray-300 mb-6 grow">
        {testimonial.text}
      </p>

      <div className="mb-4 p-3 bg-blue-100 dark:bg-gray-700 rounded-lg text-sm font-semibold">
        ✈️ {testimonial.trip}
      </div>

      <div className="flex items-center gap-4 pt-4 border-t">
        <img
          src={testimonial.avatar}
          alt={testimonial.name}
          className="w-14 h-14 rounded-full"
        />
        <div>
          <div className="font-bold">{testimonial.name}</div>
          <div className="text-sm text-gray-500">{testimonial.role}</div>
          <div className="text-xs text-gray-400">{testimonial.location}</div>
        </div>
      </div>
    </Card>
  );
}
