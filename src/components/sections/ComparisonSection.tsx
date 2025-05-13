'use client'

import { CheckCircle2, XCircle } from 'lucide-react'
import { motion } from 'framer-motion'

const comparisonData = [
  {
    feature: 'AI Feedback Generation',
    Evalence: true,
    TraditionalTools: false,
    ModernPlatforms: 'Partial'
  },
  {
    feature: 'Hard Skill Signal Capture',
    Evalence: true,
    TraditionalTools: false,
    ModernPlatforms: 'Some'
  },
  {
    feature: 'Custom Review Models',
    Evalence: true,
    TraditionalTools: 'Limited',
    ModernPlatforms: true
  },
  {
    feature: 'Manager & Data Fusion',
    Evalence: true,
    TraditionalTools: false,
    ModernPlatforms: 'Partial'
  }
]

export default function ComparisonSection({ id }: { id?: string }) {
  const renderFeatureCell = (value: boolean | string, isEvalence?: boolean) => {
    if (value === true) {
      return (
        <div className="flex items-center justify-center text-green-600">
          <CheckCircle2 size={24} className="mr-2" />
          Yes
        </div>
      )
    }
    if (value === false) {
      return (
        <div className="flex items-center justify-center text-red-600">
          <XCircle size={24} className="mr-2" />
          No
        </div>
      )
    }
    return (
      <div className={`text-center ${isEvalence ? 'font-bold text-blue-600' : 'text-gray-700'}`}>
        {value}
      </div>
    )
  }

  return (
    <section id={id} className="section-container bg-white">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          How We Compare
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Evalence stands out with its comprehensive, AI-powered approach to performance management.
        </p>
      </div>

      {/* Comparison Table */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="overflow-x-auto"
      >
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-100">
              <th className="p-4 text-left border-b">Feature</th>
              <th className="p-4 text-center border-b">Evalence</th>
              <th className="p-4 text-center border-b">Traditional Tools</th>
              <th className="p-4 text-center border-b">Other Modern Platforms</th>
            </tr>
          </thead>
          <tbody>
            {comparisonData.map((row) => (
              <tr key={row.feature} className="border-b hover:bg-gray-50 transition-colors">
                <td className="p-4 font-medium text-gray-900">{row.feature}</td>
                <td className="p-4 text-center">
                  {renderFeatureCell(row.Evalence, true)}
                </td>
                <td className="p-4 text-center">
                  {renderFeatureCell(row.TraditionalTools)}
                </td>
                <td className="p-4 text-center">
                  {renderFeatureCell(row.ModernPlatforms)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </motion.div>
    </section>
  )
}