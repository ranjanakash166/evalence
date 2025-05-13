import HeroSection from '@/components/sections/HeroSection'
import FeaturesSection from '@/components/sections/FeaturesSection'
import WhyEvalenceSection from '@/components/sections/WhyEvalenceSection'
import MarketValidationSection from '@/components/sections/MarketValidationSection'
import ComparisonSection from '@/components/sections/ComparisonSection'

export default function Home() {
  return (
    <div>
      <HeroSection id="features" />
      <FeaturesSection id="features" />
      <WhyEvalenceSection id="about" />
      <MarketValidationSection id="how-it-works" />
      <ComparisonSection id="pricing" />
      
      {/* Final CTA Section */}
      <section className="section-container bg-gradient text-white text-center mb-16">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Let&apos;s Build Better Reviews
          </h2>
          <p className="text-xl mb-8">
            Bring performance management into the modern age with Evalence
          </p>
          <div className="flex justify-center space-x-4">
            <a 
              href="#request-demo" 
              className="btn-primary bg-white text-blue-600 px-6 py-3 rounded-full font-semibold"
            >
              Request Demo
            </a>
            <a 
              href="#contact-sales" 
              className="btn-primary bg-transparent border-2 border-white px-6 py-3 rounded-full font-semibold"
            >
              Contact Sales
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}