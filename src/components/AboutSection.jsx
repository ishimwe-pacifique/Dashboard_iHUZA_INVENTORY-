
const AboutSection = () => {
  return (
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
            <div className="absolute left-0 top-0 w-px h-46 bg-gray-900 lg:block hidden"></div>
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
  )
}

export default AboutSection
