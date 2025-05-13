'use client'


import Image from 'next/image'
import { Play, ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'

export default function HeroSection({ id }: { id?: string }) {
  return (
    <section id={id} className="section-container relative overflow-x-hidden">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        {/* Left Content */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
            Reimagine Performance Reviews with AI
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Automates and enhances employee performance reviews with real work signals, 
            AI-generated feedback, and human context—so you can focus on growth, not paperwork.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <a 
              href="/contact-us" 
              className="btn-primary flex items-center justify-center bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors"
            >
              Request a Demo
              <ArrowRight className="ml-2" size={20} />
            </a>
            <a 
              href="#how-it-works" 
              className="btn-primary flex items-center justify-center border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-blue-50 transition-colors"
            >
              <Play className="mr-2" size={20} />
              See How It Works
            </a>
          </div>
        </motion.div>

        {/* Right Visual */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="relative w-full"
        >
          <div className="bg-blue-100/50 rounded-2xl p-4 lg:p-8 w-full max-w-full">
            <Image 
              src="/images/pexels-goumbik-577210.jpg" 
              alt="Evalence Performance Review Dashboard" 
              width={800} 
              height={600} 
              className="rounded-xl shadow-2xl w-full h-auto max-w-full"
              sizes="(max-width: 768px) 100vw, 800px"
            />
          </div>
          
          {/* Floating Metrics */}
          <div className="absolute -bottom-10 -left-10 bg-white shadow-xl rounded-2xl p-4 flex items-center space-x-4 hidden sm:flex">
            <div className="bg-green-100 p-3 rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-green-600">
                <path d="M12 20v-6M6 20v-6M18 20v-6M4 10h16M2 14h20M4 6h16a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2Z" />
              </svg>
            </div>
            <div>
              <p className="text-sm text-gray-600">Performance Insights</p>
              <p className="text-lg font-bold text-gray-900">+45% Efficiency</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}