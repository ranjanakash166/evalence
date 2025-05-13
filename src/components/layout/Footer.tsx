
import Link from 'next/link'
import { 
  Linkedin, 
  Twitter, 
  Github 
} from 'lucide-react'

const footerLinks = {
  Product: [
    { href: '#features', label: 'Features' },
    { href: '#pricing', label: 'Pricing' },
    { href: '#integrations', label: 'Integrations' }
  ],
  Company: [
    { href: '#about', label: 'About' },
    { href: '#careers', label: 'Careers' },
    { href: '#contact', label: 'Contact' }
  ],
  Resources: [
    { href: '#blog', label: 'Blog' },
    { href: '#docs', label: 'Documentation' },
    { href: '#support', label: 'Support' }
  ]
}

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="section-container py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Logo and Tagline */}
          <div>
            <h2 className="text-2xl font-bold mb-4 text-white">Evalence</h2>
            <p className="text-gray-400 mb-6">
              Reimagine performance reviews with AI-powered insights 
              that drive growth and understanding.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              <Link 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={24} />
              </Link>
              <Link 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={24} />
              </Link>
              <Link 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="GitHub"
              >
                <Github size={24} />
              </Link>
            </div>
          </div>

          {/* Footer Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="font-semibold mb-4 text-white">{category}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link 
                      href={link.href} 
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} Evalence. All rights reserved.
          </p>
          <div className="flex space-x-4">
            <Link 
              href="/privacy" 
              className="text-gray-400 hover:text-white text-sm transition-colors"
            >
              Privacy Policy
            </Link>
            <Link 
              href="/terms" 
              className="text-gray-400 hover:text-white text-sm transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}