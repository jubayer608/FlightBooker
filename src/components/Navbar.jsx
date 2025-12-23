'use client'

import { useState, useEffect } from 'react'
import { Menu, X, Plane } from 'lucide-react'
import { Button } from '@/components/ui/button'
import ThemeToggle from './ThemeToggle'
import { motion, AnimatePresence } from 'framer-motion'

/**
 * Main navigation bar
 * Handles scroll behavior, desktop links and mobile menu
 */
export default function Navbar() {
  // Controls mobile menu open/close
  const [isOpen, setIsOpen] = useState(false)

  // Tracks whether page is scrolled or not
  const [scrolled, setScrolled] = useState(false)

  /**
   * Listen to window scroll
   * Used to change navbar background and shadow on scroll
   */
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)

    // Cleanup listener on unmount
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Navigation links used in both desktop and mobile menus
  const navLinks = [
    { href: '#home', label: 'Home' },
    { href: '#search', label: 'Search' },
    { href: '#features', label: 'Features' },
    { href: '#offers', label: 'Offers' },
    { href: '#testimonials', label: 'Reviews' },
  ]

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 dark:bg-card/95 backdrop-blur-xl shadow-lg border-b border-border'
          : 'bg-white/90 dark:bg-card/90 backdrop-blur-md shadow-md border-b border-border/50'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">

          {/* Logo section */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-3 cursor-pointer group"
          >
            <div className="bg-linear-to-br from-blue-600 to-purple-600 p-2.5 rounded-xl shadow-lg group-hover:shadow-xl transition-shadow">
              <Plane className="h-6 w-6 text-white" />
            </div>

            <span className="text-2xl font-bold bg-linear-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
              FlightBooker
            </span>
          </motion.div>

          {/* Desktop navigation links */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link, index) => (
              <motion.a
                key={link.href}
                href={link.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-gray-900 dark:text-foreground hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-semibold relative group"
              >
                {link.label}

                {/* Underline animation */}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 dark:bg-blue-400 transition-all group-hover:w-full"></span>
              </motion.a>
            ))}

            {/* Theme toggle button */}
            <ThemeToggle />

            {/* Sign in button */}
            <Button className="bg-linear-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold shadow-lg hover:shadow-xl transition-all">
              Sign In
            </Button>
          </div>

          {/* Mobile menu toggle */}
          <div className="lg:hidden flex items-center gap-4">
            <ThemeToggle />

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-900 dark:text-foreground hover:text-blue-600 dark:hover:text-blue-400 transition-colors p-2 rounded-lg hover:bg-accent"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu dropdown */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="lg:hidden overflow-hidden"
            >
              <div className="flex flex-col space-y-3 py-6 border-t border-border">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="text-gray-900 dark:text-foreground hover:text-blue-600 dark:hover:text-blue-400 hover:bg-accent transition-all py-3 px-4 rounded-lg font-semibold"
                  >
                    {link.label}
                  </a>
                ))}

                {/* Mobile sign in button */}
                <Button className="bg-linear-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold w-full shadow-lg">
                  Sign In
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  )
}
