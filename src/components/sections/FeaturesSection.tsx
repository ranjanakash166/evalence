'use client'


import { 
    Database, 
    Zap, 
    Users, 
    Clock, 
    BookOpen, 
    MessageCircle 
  } from 'lucide-react'
  import { motion } from 'framer-motion'
  import { MotionProps } from 'framer-motion'
  import Image from 'next/image'
  
  const features = [
    {
      icon: <Database className="text-blue-600" size={40} />,
      title: 'Performance Synthesis',
      description: 'Combines data and manager feedback using customizable models to generate comprehensive performance profiles.'
    },
    {
      icon: <Zap className="text-yellow-500" size={40} />,
      title: 'AI-Powered Feedback',
      description: 'Leverages advanced language models to create personalized, high-quality performance summaries.'
    },
    {
      icon: <Clock className="text-green-500" size={40} />,
      title: 'Leave Management',
      description: 'Empower employees to apply, track, and manage time off directly within the platform.'
    },
    {
      icon: <Users className="text-purple-600" size={40} />,
      title: 'Employee Profiles',
      description: 'Maintain rich, centralized employee profiles including roles, goals, skills, and history.'
    },
    {
      icon: <BookOpen className="text-red-500" size={40} />,
      title: 'Onboarding Agent',
      description: 'Automate and personalize the onboarding journey with smart checklists and role-based introductions.'
    },
    {
      icon: <MessageCircle className="text-indigo-500" size={40} />,
      title: 'Unified Query Hub',
      description: 'A one-stop solution for employees to ask questions, find resources, and get AI-powered help.'
    }
  ]
  
  export default function FeaturesSection({ id }: { id?: string }) {
    return (
      <motion.section id={id} className="section-container bg-gray-50">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What is Evalence?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A smart, end-to-end performance review ecosystem designed for modern teams. 
            It integrates with your work tools, pulls objective performance data, 
            captures manager input, and uses AI to generate clear, actionable feedback.
          </p>
        </div>
  
        <div className="grid md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all group"
            >
              <div className="mb-4 flex items-center justify-center rounded-full p-3 bg-gray-100 group-hover:bg-blue-100 transition-colors">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3 text-center">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-center">
                {feature.description}
              </p>
            </motion.div>
            ))}
          </div>
    
          {/* AI Signal Extraction Details */}
          <div className="mt-16 grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                AI Signal Extraction
              </h3>
              <p className="text-gray-600 mb-6">
                Evalence seamlessly connects to your existing work tools like Jira, GitHub, 
                Slack, and Confluence to automatically surface real work activity and 
                contribution signals.
              </p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-center">
                  <Zap className="mr-3 text-blue-500" size={20} />
                  Automatic data collection from multiple sources
                </li>
                <li className="flex items-center">
                  <Database className="mr-3 text-green-500" size={20} />
                  Comprehensive performance insights
                </li>
                <li className="flex items-center">
                  <Users className="mr-3 text-purple-500" size={20} />
                  Objective team performance tracking
                </li>
              </ul>
            </div>
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-gray-100 rounded-xl p-6"
            >
              <Image 
                src="/images/pexels-thisisengineering-3861969.jpg" 
                alt="AI Signal Extraction Dashboard" 
                width={600} 
                height={400} 
                className="rounded-lg shadow-lg"
              />
            </motion.div>
          </div>
        </motion.section>
      )
    }