
import { MapPin, Mail, Phone } from "lucide-react"
import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react"
import { useState } from "react"
import Button from "./Button"
import Input from "./Input"

const BusinessCafeLanding = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
  }

  return (
    <div className="min-h-screen bg-white">
      <header className="bg-white shadow-sm fixed top-0 left-0 right-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <div className="text-2xl font-bold text-gray-900"><span className="text-gray-900">Business</span>  <span className="text-teal-500">Cafe</span></div>
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
          </div>
        </div>
      </header>

    <section
  id="home"
  className="relative h-screen w-full flex items-center justify-center bg-cover bg-center bg-[url('https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600&h=900&fit=crop')]"

>

  <div className="absolute inset-0 bg-black/55 "></div>
  <div className="relative z-10 text-center px-4 max-w-3xl">
    <h1 className="text-white text-2xl md:text-3xl lg:text-4xl font-semibold mb-4">
      The Best WorkSpace in Kigali
    </h1>
    <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight text-white mb-6">
      <span className="text-teal-500">Professional</span>, <span className="text-white">Creative</span>,<br />
      <span className="text-white">Flexible</span>, <span className="text-white">Scalable</span>,<span className="text-teal-500">Workspace</span>
    </h2>
    <p className="text-gray-200 text-base md:text-lg mb-8">
      Discover your ideal workspace with us. Work smart, not hard in our fully-equipped office
      spaces. Elevate your business with flexible solutions tailored to your needs. Find your perfect office today!
    </p>
    <Button className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-4 text-lg font-semibold rounded-md">
      Explore
    </Button>
  </div>
</section>



     <section id="space" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            We Offer creative working
            <br />
            environments
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Find your perfect workspace. Choose from versatile options tailored to your needs.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white rounded-2xl overflow-hidden border border-gray-200 hover:shadow-lg transition-all duration-300">
            <div className="h-80 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=500&h=400&fit=crop"
                alt="Modern office workspace with desk and chair"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-8 text-center">
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Renting Offices</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Lorem ipsum dolor sit amet consectetur adipiscing elit mollis mauris
              </p>
              <button className="text-teal-600 font-semibold hover:text-teal-700 transition-colors">Learn More</button>
            </div>
          </div>
          <div className="bg-white rounded-2xl overflow-hidden border border-gray-200 hover:shadow-lg transition-all duration-300">
            <div className="h-80 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=500&h=400&fit=crop"
                alt="Coffee shop with latte art"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-8 text-center">
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Coffee Shop</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Lorem ipsum dolor sit amet consectetur adipiscing elit mollis mauris
              </p>
              <button className="text-teal-600 font-semibold hover:text-teal-700 transition-colors">Learn More</button>
            </div>
          </div>
          <div className="bg-white rounded-2xl overflow-hidden border border-gray-200 hover:shadow-lg transition-all duration-300">
            <div className="h-80 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1511578314322-379afb476865?w=500&h=400&fit=crop"
                alt="Private outdoor event space with garden"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-8 text-center">
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Private event Space</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Lorem ipsum dolor sit amet consectetur adipiscing elit mollis mauris
              </p>
              <button className="text-teal-600 font-semibold hover:text-teal-700 transition-colors">Learn More</button>
            </div>
          </div>
        </div>
        <div className="flex justify-center space-x-3">
          <div className="w-3 h-3 rounded-full bg-teal-600"></div>
          <div className="w-3 h-3 rounded-full border-2 border-teal-600 bg-transparent"></div>
        </div>
      </div>
    </section>

       <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div className="space-y-8">
            <div className="space-y-6">
              <h2 className="text-2xl font-semibold text-teal-600">About Us</h2>
              <h3 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                We offer creative working environments that suit your business
              </h3>
            </div>
          </div>
          <div className="relative">
            <div className="absolute left-0 top-0 w-px h-32 bg-gray-300 lg:block hidden"></div>
            <div className="lg:pl-16 space-y-8">
              <p className="text-lg text-gray-600 leading-relaxed">
                Lorem ipsum dolor sit amet consectetur adipiscing elit torquent, conubia leo rutrum praesent dui turpis
                lobortis, vulputate pellentesque tristique primis cum tincidunt placerat maecenas, velit metus fermentum
                eget
              </p>
              <button className="text-teal-600 font-semibold hover:text-teal-700 transition-colors text-lg">
                More About Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>

     <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="space-y-4 mb-8">
            <h3 className="text-lg font-semibold text-teal-600 uppercase tracking-wide">Your Benefits</h3>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">Why Choose Us</h2>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Unleash your productivity with our premium workspace solutions. Elevate your work game and join the winning
            team today.
          </p>
        </div>
        <div className="relative">
          <div className="hidden lg:grid lg:grid-cols-3 gap-8 items-center">
            <div className="space-y-6">
              <div className="bg-teal-50 rounded-2xl p-6 text-center">
                <div className="bg-teal-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2L2 7v10c0 5.55 3.84 9.74 9 11 5.16-1.26 9-5.45 9-11V7l-10-5z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold mb-2 text-gray-900">Creative Space</h3>
                <p className="text-sm text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
              <div className="bg-teal-50 rounded-2xl p-6 text-center">
                <div className="bg-teal-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold mb-2 text-gray-900">High Speed Wifi</h3>
                <p className="text-sm text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
              <div className="bg-teal-50 rounded-2xl p-6 text-center">
                <div className="bg-teal-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold mb-2 text-gray-900">Parking Area</h3>
                <p className="text-sm text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=600&h=600&fit=crop"
                alt="Modern office workspace with pendant lights"
                className="w-full h-[600px] object-cover rounded-2xl shadow-lg"
              />
            </div>
            <div className="space-y-6">
              <div className="bg-teal-50 rounded-2xl p-6 text-center">
                <div className="bg-teal-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold mb-2 text-gray-900">24/7 Access</h3>
                <p className="text-sm text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
              <div className="bg-teal-50 rounded-2xl p-6 text-center">
                <div className="bg-teal-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold mb-2 text-gray-900">Great Location</h3>
                <p className="text-sm text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
              <div className="bg-teal-50 rounded-2xl p-6 text-center">
                <div className="bg-teal-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold mb-2 text-gray-900">outdoor space</h3>
                <p className="text-sm text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
            </div>
          </div>
          <div className="lg:hidden">
            <div className="mb-8">
              <img
                src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=600&h=400&fit=crop"
                alt="Modern office workspace"
                className="w-full h-64 object-cover rounded-2xl shadow-lg"
              />
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { title: "Creative Space", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
                { title: "24/7 Access", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
                { title: "High Speed Wifi", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
                { title: "Great Location", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
                { title: "Parking Area", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
                { title: "outdoor space", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
              ].map((benefit, index) => (
                <div key={index} className="bg-teal-50 rounded-2xl p-6 text-center">
                  <div className="bg-teal-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-gray-900">{benefit.title}</h3>
                  <p className="text-sm text-gray-600">{benefit.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>


    <section className="relative py-20 bg-gray-900">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=1200&h=400&fit=crop"
          alt="Modern workspace background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0  bg-opacity-70  bg-black/55"></div>
      </div>
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8">
          <h2 className="text-4xl lg:text-5xl font-bold">
            <span className="text-teal-400">Our</span> <span className="text-white">Mission</span>
          </h2>
          <p className="text-lg lg:text-xl text-gray-200 leading-relaxed max-w-3xl mx-auto">
            Lorem ipsum dolor sit amet consectetur adipiscing elit, mattis blandit odio felis aliquet montes turpis
            consequat, est sociosqu vitae id nec rutrum. Ornare dictumst et eget fames cursus vel penatibus quis
            posuere, ultrices fermentum libero pretium convallis pharetra
          </p>
          <div className="flex justify-center items-center space-x-2 pt-8">
            <div className="w-16 h-1 bg-teal-400 rounded-full"></div>
            <div className="w-16 h-1 bg-white bg-opacity-30 rounded-full"></div>
          </div>
        </div>
      </div>
    </section>

    
<section id= "contact" className="py-20 bg-gray-50 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <img
          src="https://th.bing.com/th/id/OSK.HEROU-8cLZ1wjJJLIu7Y8LLIR0TsYJyraJi9w7B9Wdv9xC4?r=0&o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3"
          alt="World Map Background"
          className="w-full h-full object-cover object-center"
        />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16">
          <div className="space-y-8">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-teal-600">Contact Us</h3>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">Say Hello</h2>
            </div>
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="bg-teal-600 w-14 h-14 rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-1">Address</h4>
                  <p className="text-gray-600">Location KG 9 Ave, Kigali</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="bg-teal-600 w-14 h-14 rounded-full flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-1">Email</h4>
                  <p className="text-gray-600">businesscafe@info.com</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="bg-teal-600 w-14 h-14 rounded-full flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-1">Phone</h4>
                  <p className="text-gray-600">+250788183628</p>
                </div>
              </div>
            </div>
          </div>
          <div className="space-y-8">
            <div className="space-y-4 mb-8">
              <h3 className="text-lg font-semibold text-teal-600">Have Question ?</h3>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">Send a Message</h2>
            </div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none transition-colors bg-white h-12"
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none transition-colors bg-white h-12"
                />
              </div>
              <div>
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none transition-colors bg-white h-12"
                />
              </div>
              <div>
                <textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={6}
                  required
                  className="w-full px-4 py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none transition-colors resize-none bg-white"
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-teal-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-teal-700 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
       <footer className="bg-white py-16 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="bg-teal-600 w-8 h-8 rounded flex items-center justify-center">
                <div className="w-4 h-4 bg-white rounded-sm"></div>
              </div>
              <h3 className="text-xl font-bold text-gray-900">
                Business <span className="text-teal-600">Cafe</span>
              </h3>
            </div>
            <p className="text-gray-600 leading-relaxed">
              Discover your ideal workspace with us. Work smart, not hard in our fully-equipped office spaces.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 bg-teal-50 rounded-full flex items-center justify-center text-teal-600 hover:bg-teal-100 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-teal-50 rounded-full flex items-center justify-center text-teal-600 hover:bg-teal-100 transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-teal-50 rounded-full flex items-center justify-center text-teal-600 hover:bg-teal-100 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-teal-50 rounded-full flex items-center justify-center text-teal-600 hover:bg-teal-100 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-6 text-gray-900">Quick Links</h4>
            <ul className="space-y-4">
              <li>
                <a href="#home" className="text-gray-600 hover:text-teal-600 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#space" className="text-gray-600 hover:text-teal-600 transition-colors">
                  Space
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-600 hover:text-teal-600 transition-colors">
                  about
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-600 hover:text-teal-600 transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-6 text-gray-900">Contact Info</h4>
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
              <a href="#" className="text-teal-600 hover:text-teal-700 transition-colors inline-block mt-2">
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
    </div>
  )
}

export default BusinessCafeLanding
