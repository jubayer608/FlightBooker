"use client";

import { Card } from "@/components/ui/card";
import { Search, CreditCard, Plane, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

/**
 * HowItWorks section
 * Explains the full booking flow in simple steps
 */
export default function HowItWorks() {
  // Step data used to render each card
  const steps = [
    {
      icon: Search,
      title: "Search Flights",
      description:
        "Enter your departure and destination cities, select dates and number of passengers.",
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: CheckCircle,
      title: "Compare & Select",
      description:
        "Browse through hundreds of flight options and choose the one that fits your budget and schedule.",
      color: "from-purple-500 to-purple-600",
    },
    {
      icon: CreditCard,
      title: "Secure Payment",
      description:
        "Complete your booking with our secure payment gateway. Multiple payment options available.",
      color: "from-green-500 to-green-600",
    },
    {
      icon: Plane,
      title: "Travel Easy",
      description:
        "Receive instant confirmation and e-ticket. Get ready for your journey with peace of mind.",
      color: "from-orange-500 to-orange-600",
    },
  ];

  return (
    <section className="py-20 bg-linear-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
            How It Works?
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Book your flight in 4 simple steps. Its fast, easy, and secure!
          </p>
        </motion.div>

        {/* Steps grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          <div className="hidden lg:block absolute top-1/4 left-0 right-0 h-1 bg-linear-to-r from-blue-300 via-purple-300 to-orange-300 dark:from-blue-800 dark:via-purple-800 dark:to-orange-800 z-0" />

          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative"
            >
              <Card className="p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-white dark:bg-gray-800 border-2 border-transparent hover:border-blue-200 dark:hover:border-blue-800 relative z-10">
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-linear-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg">
                  {index + 1}
                </div>

                <div
                  className={`w-20 h-20 mx-auto mb-6 bg-linear-to-br ${step.color} rounded-2xl flex items-center justify-center shadow-lg transform hover:rotate-12 transition-transform`}
                >
                  <step.icon className="h-10 w-10 text-white" />
                </div>

                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 text-center">
                  {step.title}
                </h3>

                <p className="text-gray-600 dark:text-gray-400 text-center leading-relaxed">
                  {step.description}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <a
            href="#search"
            className="inline-flex items-center gap-2 bg-linear-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-xl hover:shadow-2xl transition-all"
          >
            <Search className="h-5 w-5" />
            Start Booking Now
          </a>
        </motion.div>
      </div>
    </section>
  );
}
