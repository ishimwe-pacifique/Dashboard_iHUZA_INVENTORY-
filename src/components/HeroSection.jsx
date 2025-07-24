
import Button from "./Button"

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative h-screen w-full flex items-center justify-center bg-cover bg-center bg-[url('https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600&h=900&fit=crop')]"
    >
      <div className="absolute inset-0 bg-black/55"></div>
      <div className="relative z-10 text-center px-4 max-w-3xl">
        <h1 className="text-white text-2xl md:text-3xl lg:text-4xl font-semibold mb-4">The Best WorkSpace in Kigali</h1>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight text-white mb-6">
          <span className="text-teal-500">Professional</span>, <span className="text-white">Creative</span>,<br />
          <span className="text-white">Flexible</span>, <span className="text-white">Scalable</span>,
          <span className="text-teal-500">Workspace</span>
        </h2>
        <p className="text-gray-200 text-base md:text-lg mb-8">
          Discover your ideal workspace with us. Work smart, not hard in our fully-equipped office spaces. Elevate your
          business with flexible solutions tailored to your needs. Find your perfect office today!
        </p>
        <Button className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-4 text-lg font-semibold rounded-md">
          Explore
        </Button>
      </div>
    </section>
  )
}

export default HeroSection
