import { useState } from "react"
import { Menu, X, Grid2X2 } from "lucide-react"

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <header className="bg-white shadow-sm fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <div className="text-2xl font-bold text-gray-900 flex items-center space-x-2">
              <Grid2X2 className="w-8 h-8 text-teal-500" />
              <span>
                <span className="text-gray-900">Business</span> <span className="text-teal-500">Cafe</span>
              </span>
            </div>
          </div>
          
         
          <nav className="hidden md:flex space-x-8">
            <a href="#home" className="text-teal-500 hover:text-teal-500 font-medium transition-colors">
              Home
            </a>
            <a href="#space" className="text-gray-900 hover:text-gray-500 font-medium transition-colors">
              Space
            </a>
            <a href="#about" className="text-gray-900 hover:text-gray-500 font-medium transition-colors">
              About
            </a>
            <a href="#contact" className="text-gray-900 hover:text-gray-500 font-medium transition-colors">
              Contact
            </a>
          </nav>

      
          <button
            onClick={toggleMobileMenu}
            className="md:hidden p-2 rounded-md text-gray-900 hover:text-teal-500 hover:bg-gray-100 transition-colors"
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

       
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-gray-200">
            <nav className="py-4 space-y-2">
              <a 
                href="#home" 
                className="block px-4 py-2 text-teal-500 hover:text-teal-600 hover:bg-gray-50 font-medium transition-colors rounded-md"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </a>
              <a 
                href="#space" 
                className="block px-4 py-2 text-gray-900 hover:text-gray-600 hover:bg-gray-50 font-medium transition-colors rounded-md"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Space
              </a>
              <a 
                href="#about" 
                className="block px-4 py-2 text-gray-900 hover:text-gray-600 hover:bg-gray-50 font-medium transition-colors rounded-md"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About
              </a>
              <a 
                href="#contact" 
                className="block px-4 py-2 text-gray-900 hover:text-gray-600 hover:bg-gray-50 font-medium transition-colors rounded-md"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header