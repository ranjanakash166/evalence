'use client'

import { 
    Zap, 
    Shield, 
    Target, 
    Link2 
  } from 'lucide-react'
import { motion } from 'framer-motion'
import Image from 'next/image'

const whyEvalenceFeatures = [
  {
    icon: <Zap className="text-blue-600" size={40} />,
    title: 'Smart + Scalable',
    description: 'Automates what used to take weeks, dramatically reducing administrative overhead.'
  },
  {
    icon: <Shield className="text-green-600" size={40} />,
    title: 'Fair + Objective',
    description: 'Balances hard data with human insight to create truly comprehensive reviews.'
  },
  {
    icon: <Target className="text-purple-600" size={40} />,
    title: 'Clear + Actionable',
    description: 'Generate feedback that employees can actually use to drive personal and professional growth.'
  },
  {
    icon: <Link2 className="text-orange-600" size={40} />,
    title: 'Integrates Easily',
    description: 'Seamlessly works with your existing tool stack without disrupting workflows.'
  }
]

export default function WhyEvalenceSection({ id }: { id?: string }) {
  return (
    <section id={id} className="section-container bg-white">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Why Evalence?
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          We&apos;re reimagining performance management with intelligent, 
          human-centric technology that empowers both employees and managers.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {whyEvalenceFeatures.map((feature, index) => (
          <motion.div
            key={feature.title}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="bg-gray-50 p-6 rounded-xl text-center hover:shadow-xl transition-all group"
          >
            <div className="mb-4 flex items-center justify-center rounded-full p-3 bg-white mx-auto w-16 h-16 group-hover:bg-blue-50 transition-colors">
              {feature.icon}
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              {feature.title}
            </h3>
            <p className="text-gray-600">
              {feature.description}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Detailed Comparison */}
      <div className="mt-16 grid md:grid-cols-2 gap-8 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-blue-50 rounded-xl p-8"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Comprehensive Performance Management
          </h3>
          <p className="text-gray-700 mb-6">
            Evalence goes beyond traditional review tools by providing a holistic, 
            AI-enhanced approach to understanding and developing talent.
          </p>
          <ul className="space-y-3 text-gray-600">
            <li className="flex items-center">
              <Zap className="mr-3 text-blue-500" size={20} />
              Real-time performance insights
            </li>
            <li className="flex items-center">
              <Shield className="mr-3 text-green-500" size={20} />
              Objective and fair evaluation
            </li>
            <li className="flex items-center">
              <Target className="mr-3 text-purple-500" size={20} />
              Personalized growth recommendations
            </li>
          </ul>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Image 
            src="/images/pexels-pavel-danilyuk-8438979.jpg" 
            alt="Evalence Performance Management" 
            width={600} 
            height={200} 
            className="rounded-xl shadow-lg"
          />
        </motion.div>
      </div>
    </section>
  )
}