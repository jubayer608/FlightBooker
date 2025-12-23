'use client'

import { Card } from '@/components/ui/card'
import { DollarSign, Headphones, Plane, Lock, Zap, Globe } from 'lucide-react'
import { motion } from 'framer-motion'

/**
 * Features
 * Shows the main advantages of using the flight booking platform
 */
export default function Features() {

  // List of feature items shown in the grid
  const features = [
    {
      icon: DollarSign,
      title: "Best Price Guarantee",
      description:
        "We guarantee you'll get the best price on your flight booking. Find it cheaper elsewhere? We'll refund the difference!",
      color: "from-green-400 to-green-600",
    },
    {
      icon: Headphones,
      title: "24/7 Customer Support",
      description:
        "Our dedicated support team is available round the clock to assist you with any queries or concerns.",
      color: "from-blue-400 to-blue-600",
    },
    {
      icon: Plane,
      title: "Easy Booking Process",
      description:
        "Book your flights in just a few clicks. Our streamlined process makes travel planning effortless.",
      color: "from-purple-400 to-purple-600",
    },
    {
      icon: Lock,
      title: "Secure Payment",
      description:
        "Your payment information is protected with bank-level security. Book with confidence and peace of mind.",
      color: "from-red-400 to-red-600",
    },
    {
      icon: Zap,
      title: "Instant Confirmation",
      description:
        "Receive your e-ticket instantly via email after booking. No waiting, no hassle, just smooth travel.",
      color: "from-yellow-400 to-yellow-600",
    },
    {
      icon: Globe,
      title: "Worldwide Coverage",
      description:
        "Access to 1000+ destinations across the globe. Book flights to anywhere you want to explore.",
      color: "from-indigo-400 to-indigo-600",
    },
  ]

  return (
    <section id="features" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4">

        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
            Why Choose Us?
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            We make flight booking simple, secure, and affordable for everyone
          </p>
        </motion.div>

        {/* Feature cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="p-8 h-full bg-white dark:bg-gray-800 border-2 border-transparent hover:border-blue-100 dark:hover:border-blue-800 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
                
                
                <div
                  className={`w-16 h-16 mx-auto mb-6 bg-linear-to-br ${feature.color} rounded-2xl flex items-center justify-center shadow-lg`}
                >
                  <feature.icon className="h-8 w-8 text-white" />
                </div>

                {/* Feature title */}
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 text-center">
                  {feature.title}
                </h3>

                {/* Feature description */}
                <p className="text-gray-600 dark:text-gray-400 text-center leading-relaxed">
                  {feature.description}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
