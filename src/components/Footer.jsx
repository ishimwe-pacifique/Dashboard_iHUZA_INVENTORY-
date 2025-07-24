
import { Facebook, Twitter, Linkedin, Instagram, Grid2X2 } from "lucide-react"

const Footer = () => {
  const socialLinks = [
    { icon: Facebook, label: "Facebook" },
    { icon: Twitter, label: "Twitter" },
    { icon: Linkedin, label: "LinkedIn" },
    { icon: Instagram, label: "Instagram" },
  ]

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "Space", href: "#space" },
    { name: "about", href: "#about" },
    { name: "Contact", href: "#contact" },
  ]

  return (
    <footer className="bg-white py-16 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className=" flex items-center justify-center">
                <div className=""></div>
              </div>
              <Grid2X2 className="w-8 h-8 text-teal-500" />
              <h3 className="text-xl font-bold text-gray-900">
                Business <span className="text-teal-600">Cafe</span>
              </h3>
            </div>
            <p className="text-gray-600 leading-relaxed">
              Discover your ideal workspace with us. Work smart, not hard in our fully-equipped office spaces.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon
                return (
                  <a
                    key={index}
                    href="#"
                    className="w-10 h-10 border-2 bg-teal-50 rounded-full flex items-center justify-center text-teal-600 hover:bg-teal-100 transition-colors"
                    aria-label={social.label}
                  >
                    <IconComponent className="w-5 h-5" />
                  </a>
                )
              })}
            </div>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-6 text-gray-900 underline">Quick Links</h4>
            <ul className="space-y-4">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-gray-600 hover:text-teal-600 transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-6 text-gray-900 underline">Contact Info</h4>
            <div className="space-y-4 text-gray-600">
              <p>
                <span className="font-medium">Location:</span> Kigali, Rwanda
              </p>
              <p>
                <span className="font-medium">Email:</span> businesscafe@info.com
              </p>
              <p>
                <span className="font-medium">Phone:</span> +250783787817
              </p>
              <a href="#" className="text-teal-600 hover:text-teal-700 transition-colors inline-block mt-2  underline">
                View Location on GoogleMap
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-200 pt-8 text-center">
          <p className="text-gray-600">Copyright © 2023 Business Coffee All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
