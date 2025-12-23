'use client'

import { Button } from '@/components/ui/button'
import {
  Plane,
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
  Heart,
  ArrowUp,
  Link as LinkIcon,
  LifeBuoy,
  FileText
} from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const quickLinks = [
    { name: 'About Us' },
    { name: 'How It Works' },
    { name: 'Careers' },
    { name: 'Press' },
    { name: 'Blog' },
  ]

  const support = [
    { name: 'Help Center' },
    { name: 'Contact Us' },
    { name: 'FAQs' },
    { name: 'Cancellation Policy' },
    { name: 'Refund Policy' },
  ]

  const legal = [
    { name: 'Terms & Conditions' },
    { name: 'Privacy Policy' },
    { name: 'Cookie Policy' },
    { name: 'Disclaimer'},
    { name: 'Sitemap' },
  ]

  const popularDestinations = [
    'Dhaka', 'Dubai', 'Bangkok', 'Singapore',
    'Kathmandu', 'Kolkata', 'Delhi', 'Mumbai'
  ]

  const socialLinks = [
    { icon: Facebook,  color: 'hover:bg-blue-600' },
    { icon: Twitter,  color: 'hover:bg-sky-500' },
    { icon: Instagram,  color: 'hover:bg-pink-600' },
    { icon: Linkedin,  color: 'hover:bg-blue-700' },
    { icon: Youtube,  color: 'hover:bg-red-600' },
  ]

  return (
    <footer className="bg-linear-to-br from-gray-900 via-blue-900 to-purple-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-16">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">

          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-linear-to-br from-blue-500 to-purple-500 p-3 rounded-2xl">
                <Plane className="h-8 w-8 text-white" />
              </div>
              <span className="text-3xl font-bold">FlightBooker</span>
            </div>

            <p className="text-white/70 mb-6">
              Your trusted partner for booking the best flight deals worldwide.
            </p>

            <div className="space-y-3 text-white/70">
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-blue-400" />
                support@flightbooker.com
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-green-400" />
                +880 1234-567890
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-red-400" />
                Dhaka, Bangladesh
              </div>
            </div>

            <div className="flex gap-3 mt-6">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className={`w-12 h-12 bg-white/10 rounded-full flex items-center justify-center ${social.color} transition-all hover:scale-110`}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Footer Lists */}
          <FooterList title="Quick Links" links={quickLinks} icon={LinkIcon} />
          <FooterList title="Support" links={support} icon={LifeBuoy} />
          <FooterList title="Legal" links={legal} icon={FileText} />
        </div>

        <div className="border-t border-white/10 pt-8 mb-8">
          <h4 className="text-xl font-bold mb-4">Popular Destinations</h4>
          <div className="flex flex-wrap gap-3">
            {popularDestinations.map((dest, index) => (
              <a
                key={index}
                className="px-4 py-2 bg-white/10 hover:bg-white/20 rounded-full text-sm transition-all hover:scale-105"
              >
                {dest}
              </a>
            ))}
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/70">
            © {currentYear} FlightBooker. Made with{' '}
            <Heart className="inline h-4 w-4 text-red-500 fill-red-500" /> in Bangladesh
          </p>

          <Button
            onClick={scrollToTop}
            variant="outline"
            size="icon"
            className="rounded-full bg-white/10 border-white/20 hover:bg-white/20"
          >
            <ArrowUp className="h-5 w-5" />
          </Button>
        </div>

      </div>
    </footer>
  )
}

/* Reusable footer list */
function FooterList({ title, links, icon: Icon }) {
  return (
    <div>
      <h4 className="text-xl font-bold mb-6">{title}</h4>
      <ul className="space-y-3">
        {links.map((link, index) => (
          <li key={index}>
            <a
              href={link.href}
              className="flex items-center gap-2 text-white/70 hover:text-white transition"
            >
              
              {link.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}
