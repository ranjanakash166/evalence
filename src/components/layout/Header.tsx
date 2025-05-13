'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'

const navItems = [
  { href: '#features', label: 'Features' },
  { href: '#pricing', label: 'Pricing' },
  { href: '#how-it-works', label: 'How It Works' },
  { href: '#about', label: 'About' }
]

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="section-container header-container flex justify-between items-center py-2 md:py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-3 group">
          <Image src="/images/logo.jpeg" alt="Evalence Logo" width={48} height={48} className="w-12 h-12" />
          <div className="flex flex-col leading-tight">
            <span className="text-2xl font-bold text-blue-600">Evalence</span>
            <span className="text-xs text-gray-500 group-hover:text-blue-600 transition-colors">Where Work Meets Insight</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6 items-center h-full">
          {navItems.map((item) => (
            <Link 
              key={item.href} 
              href={item.href} 
              className="flex items-center h-10 text-gray-700 hover:text-blue-600 transition-colors"
            >
              {item.label}
            </Link>
          ))}
          <div className="flex items-center space-x-4 ml-4 h-10">
            <Link 
              href="#login" 
              className="flex items-center h-10 text-gray-700 hover:text-blue-600 transition-colors"
            >
              Login
            </Link>
            <Link 
              href="/contact-us" 
              className="flex items-center h-10 btn-primary bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition-colors"
            >
              Request Demo
            </Link>
          </div>
        </nav>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button 
            onClick={toggleMenu} 
            className="text-gray-700 focus:outline-none"
            aria-label="Toggle mobile menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white shadow-md"
          >
            <div className="section-container py-4">
              <nav className="space-y-4">
                {navItems.map((item) => (
                  <Link 
                    key={item.href} 
                    href={item.href} 
                    className="block text-gray-700 hover:text-blue-600 transition-colors"
                    onClick={toggleMenu}
                  >
                    {item.label}
                  </Link>
                ))}
                <div className="space-y-4 pt-4 border-t">
                  <Link 
                    href="#login" 
                    className="block text-gray-700 hover:text-blue-600 transition-colors"
                    onClick={toggleMenu}
                  >
                    Login
                  </Link>
                  <Link 
                    href="/contact-us" 
                    className="block btn-primary bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition-colors text-center"
                    onClick={toggleMenu}
                  >
                    Request Demo
                  </Link>
                </div>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}