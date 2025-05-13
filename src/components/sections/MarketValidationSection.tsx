'use client'


import { 
    TrendingUp, 
    Globe, 
    BarChart 
  } from 'lucide-react'
  import { motion } from 'framer-motion'
  
  const marketStats = [
    {
      icon: <Globe className="text-blue-600" size={40} />,
      value: '$13.5B',
      label: 'Global Performance Management Market'
    },
    {
      icon: <TrendingUp className="text-green-600" size={40} />,
      value: '70%',
      label: 'Companies Shifting to Continuous Performance Models'
    },
    {
      icon: <BarChart className="text-purple-600" size={40} />,
      value: '64%',
      label: 'HR Leaders Planning AI-Powered Review Tools'
    }
  ]
  
  export default function MarketValidationSection({ id }: { id?: string }) {
    return (
      <section id={id} className="section-container bg-gray-50">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Backed by Real Data
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            The performance management landscape is rapidly evolving, 
            and Evalence is at the forefront of this transformation.
          </p>
        </div>
  
        {/* Market Statistics */}
        <div className="grid md:grid-cols-3 gap-6">
          {marketStats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white p-6 rounded-xl shadow-md text-center"
            >
              <div className="mb-4 flex items-center justify-center rounded-full p-3 bg-gray-100 mx-auto w-16 h-16">
                {stat.icon}
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">
                {stat.value}
              </h3>
              <p className="text-gray-600">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>

      </section>
    )
  }