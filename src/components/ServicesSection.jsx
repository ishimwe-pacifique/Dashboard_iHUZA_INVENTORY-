

const ServicesSection = () => {
  const services = [
    {
      image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=500&h=400&fit=crop",
      title: "Renting Offices",
      description: "Lorem ipsum dolor sit amet consectetur adipiscing elit mollis mauris",
      alt: "Modern office workspace with desk and chair",
    },
    {
      image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=500&h=400&fit=crop",
      title: "Coffee Shop",
      description: "Lorem ipsum dolor sit amet consectetur adipiscing elit mollis mauris",
      alt: "Coffee shop with latte art",
    },
    {
      image: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=500&h=400&fit=crop",
      title: "Private event Space",
      description: "Lorem ipsum dolor sit amet consectetur adipiscing elit mollis mauris",
      alt: "Private outdoor event space with garden",
    },
  ]

  return (
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
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl overflow-hidden border border-gray-200 hover:shadow-lg transition-all duration-300"
            >
              <div className="h-80 overflow-hidden">
                <img
                  src={service.image || "/placeholder.svg"}
                  alt={service.alt}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8 text-center">
                <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-teal-600 mb-2">{service.title}</h3>
                 <div className="mx-auto h-2 w-16 bg-teal-600 rounded"></div>
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                <button className="text-teal-600 font-semibold hover:text-teal-700 transition-colors">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center space-x-3">
          <div className="w-5 h-5 rounded-full border-2 border-teal-600 flex items-center justify-center">
  <div className="w-3 h-3 rounded-full bg-teal-600"></div>
</div>

          <div className="w-4 h-4 rounded-full border-2 border-teal-600 bg-transparent"></div>
        </div>
      </div>
    </section>
  )
}

export default ServicesSection
