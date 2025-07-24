

const MissionSection = () => {
  return (
    <section className="relative py-20 bg-gray-900">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=1200&h=400&fit=crop"
          alt="Modern workspace background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-opacity-70 bg-black/55"></div>
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
  )
}

export default MissionSection
