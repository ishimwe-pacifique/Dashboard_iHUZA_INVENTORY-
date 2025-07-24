

const BenefitsSection = () => {
  const benefits = [
    { title: "Creative Space", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
    { title: "24/7 Access", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
    { title: "High Speed Wifi", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
    { title: "Great Location", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
    { title: "Parking Area", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
    { title: "outdoor space", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
  ]

  const BenefitCard = ({ title, desc }) => (
    <div className="bg-teal-50 rounded-2xl p-6 text-center">
      <div className="bg-teal-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
        </svg>
      </div>
      <h3 className="text-lg font-bold mb-2 text-gray-900">{title}</h3>
      <p className="text-sm text-gray-600">{desc}</p>
    </div>
  )

  return (
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
              <BenefitCard title={benefits[0].title} desc={benefits[0].desc} />
              <BenefitCard title={benefits[2].title} desc={benefits[2].desc} />
              <BenefitCard title={benefits[4].title} desc={benefits[4].desc} />
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=600&h=600&fit=crop"
                alt="Modern office workspace with pendant lights"
                className="w-full h-[600px] object-cover rounded-2xl shadow-lg"
              />
            </div>
            <div className="space-y-6">
              <BenefitCard title={benefits[1].title} desc={benefits[1].desc} />
              <BenefitCard title={benefits[3].title} desc={benefits[3].desc} />
              <BenefitCard title={benefits[5].title} desc={benefits[5].desc} />
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
              {benefits.map((benefit, index) => (
                <BenefitCard key={index} title={benefit.title} desc={benefit.desc} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BenefitsSection
