"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, Clock, TrendingDown, Star, Users } from "lucide-react";
import { motion } from "framer-motion";

/**
 * Offers section
 * Displays popular travel deals with discounts and details
 */

export default function Offers() {
  
  // Static deals data
   
   
  const deals = [
    {
      destination: "Cox's Bazar",
      country: "Bangladesh",
      price: "৳5,999",
      originalPrice: "৳8,500",
      discount: "30",
      image:
        "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&q=80",
      description:
        "Longest natural sea beach in the world with stunning sunsets",
      duration: "3-5 Days",
      rating: 4.8,
      reviews: 1250,
      popular: true,
      category: "Beach",
    },
    {
      destination: "Sylhet",
      country: "Bangladesh",
      price: "৳4,500",
      originalPrice: "৳6,000",
      discount: "25",
      image:
        "https://images.unsplash.com/photo-1464207687429-7505649dae38?w=800&q=80",
      description: "Tea gardens, waterfalls and natural beauty of northeast",
      duration: "2-4 Days",
      rating: 4.7,
      reviews: 890,
      popular: false,
      category: "Nature",
    },
    {
      destination: "Dubai",
      country: "UAE",
      price: "৳35,999",
      originalPrice: "৳45,000",
      discount: "20",
      image:
        "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&q=80",
      description:
        "Luxury shopping, modern architecture, and desert adventures",
      duration: "5-7 Days",
      rating: 4.9,
      reviews: 3200,
      popular: true,
      category: "City",
    },
    {
      destination: "Bangkok",
      country: "Thailand",
      price: "৳28,500",
      originalPrice: "৳35,000",
      discount: "18",
      image:
        "https://images.unsplash.com/photo-1508009603885-50cf7c579365?w=800&q=80",
      description:
        "Street food paradise, golden temples, and vibrant nightlife",
      duration: "4-6 Days",
      rating: 4.8,
      reviews: 2100,
      popular: true,
      category: "City",
    },
    {
      destination: "Kathmandu",
      country: "Nepal",
      price: "৳18,999",
      originalPrice: "৳24,000",
      discount: "22",
      image:
        "https://images.unsplash.com/photo-1505832018823-50331d70d237?w=800&q=80",
      description:
        "Himalayan peaks, ancient temples, and spiritual experiences",
      duration: "3-5 Days",
      rating: 4.6,
      reviews: 780,
      popular: false,
      category: "Mountain",
    },
    {
      destination: "Singapore",
      country: "Singapore",
      price: "৳42,000",
      originalPrice: "৳55,000",
      discount: "24",
      image:
        "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=800&q=80",
      description:
        "Garden city with futuristic attractions and diverse culture",
      duration: "5-7 Days",
      rating: 4.9,
      reviews: 2800,
      popular: true,
      category: "City",
    },
  ];

  return (
    <section
      id="offers"
      className="py-20 bg-linear-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 relative overflow-hidden"
    >
      {/* Background*/}
      <div className="absolute top-0 left-0 w-64 h-64 bg-blue-400/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            className="inline-block mb-4"
          >
            
            <Badge className="bg-linear-to-r from-orange-500 to-red-500 text-white px-6 py-2 text-base font-bold">
              Limited Time Offers
            </Badge>
          </motion.div>
          <h2 className="text-4xl md:text-6xl font-bold gradient-text mb-4">
            Hot Deals & Special Offers
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Grab these amazing deals before they're gone! Save up to 30% on
            popular destinations
          </p>
        </motion.div>

        {/* Deals Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {deals.map((deal, index) => (
            
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="group"
            >
              <Card className="overflow-hidden bg-white dark:bg-gray-800 border-2 border-gray-100 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-700 transition-all duration-300 shadow-lg hover:shadow-2xl h-full flex flex-col">
                {/* Image section */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={deal.image}
                    alt={deal.destination}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-transparent"></div>

                  {/* Top Badges */}
                  <div className="absolute top-4 left-4 right-4 flex justify-between items-start">
                    <Badge className="bg-linear-to-r from-red-500 to-orange-500 text-white font-bold text-lg px-4 py-2 shadow-xl">
                      {deal.discount}% OFF
                    </Badge>
                    {deal.popular && (
                      <Badge className="bg-linear-to-r from-yellow-400 to-yellow-600 text-white font-bold px-4 py-2 shadow-xl animate-pulse">
                         HOT
                      </Badge>
                    )}
                  </div>

                  {/* Bottom Info */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center gap-2 text-white/90 text-sm mb-2">
                      <MapPin className="h-4 w-4" />
                      <span>{deal.country}</span>
                    </div>
                    <h3 className="text-3xl font-bold text-white">
                      {deal.destination}
                    </h3>
                  </div>

                  {/* Category Badge */}
                  <Badge className="absolute bottom-4 right-4 bg-white/20 backdrop-blur-md text-white border-white/30">
                    {deal.category}
                  </Badge>
                </div>

                {/* Content */}
                <div className="p-6 grow flex flex-col">
                  {/*Reviews */}
                  <div className="flex items-center gap-4 mb-4">
                    <div className="flex items-center gap-1">
                      <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                      <span className="font-bold text-gray-900 dark:text-white">
                        {deal.rating}
                      </span>
                    </div>
                    <div className="flex items-center gap-1 text-sm text-gray-500 dark:text-gray-400">
                      <Users className="h-4 w-4" />
                      <span>{deal.reviews.toLocaleString()} reviews</span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed grow">
                    {deal.description}
                  </p>

                  {/* Duration */}
                  <div className="flex items-center gap-2 mb-4 p-3 bg-blue-50 dark:bg-gray-700 rounded-lg">
                    <Clock className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                    <span className="font-semibold text-blue-900 dark:text-blue-300">
                      {deal.duration}
                    </span>
                  </div>

                  {/* Price Section */}
                  <div className="border-t border-gray-200 dark:border-gray-700 pt-4 mb-4">
                    <div className="flex items-center justify-between mb-3">
                      <div>
                        <div className="text-sm text-gray-500 dark:text-gray-400 mb-1">
                          Starting from
                        </div>
                        <div className="flex items-baseline gap-3">
                          <span className="text-4xl font-bold gradient-text">
                            {deal.price}
                          </span>
                          <span className="text-xl text-gray-400 line-through">
                            {deal.originalPrice}
                          </span>
                        </div>
                        <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                          per person
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="flex items-center gap-1 text-green-600 dark:text-green-400 font-bold">
                          <TrendingDown className="h-5 w-5" />
                          Save ৳
                          {parseInt(deal.originalPrice.replace(/[^0-9]/g, "")) -
                            parseInt(deal.price.replace(/[^0-9]/g, ""))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Book Button */}
                  <Button className="w-full h-14 bg-linear-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold text-lg rounded-xl shadow-lg hover:shadow-xl transition-all group-hover:scale-105">
                    Book Now
                  </Button>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
