import { useState } from 'react'
import ThemeToggle from './components/ThemeToggle'
import Navbar from './components/Navbar'
import HeroSection from './components/Hero'
import FeatureSection1 from './components/Feature'
import AboutUs from './components/About'
import Testimonials from './components/Testimonials'
import PricingSection from './components/Pricing'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {

  return (
    <>
      <Navbar />
      <HeroSection />
      <FeatureSection1 />
      <AboutUs />
      <Testimonials />
      <PricingSection />
      <Contact />
      <Footer />
    </>
  )
}

export default App
