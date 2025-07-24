import AboutSection from "./components/AboutSection"
import BenefitsSection from "./components/BenefitsSection"
// import BusinessCafeLanding from "./components/BusinessCafeLanding"
import ContactSection from "./components/ContactSection"
import Footer from "./components/Footer"
import Header from "./components/Header"
import HeroSection from "./components/HeroSection"
import MissionSection from "./components/MissionSection"
import ServicesSection from "./components/ServicesSection"

function App() {
  return (
    <div className="App">
      {/* <BusinessCafeLanding /> */}

            <Header/>
      <HeroSection />
      <ServicesSection />
      <AboutSection/>
      <BenefitsSection />
      <MissionSection />
      <ContactSection />
      <Footer />
    </div>
  )
}

export default App
