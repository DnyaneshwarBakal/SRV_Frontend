import { useState } from 'react'
 
import HeroSection from './HeroSection'
import TrustSection from './TrustSection'
import ParticipatingSchools from './ParticipatingSchools'
import SchoolChoice from './SchoolChoice'
import FeaturesSection from './FeaturesSection'
import AppointmentHero from './AppointmentHero'
import Footer from './Footer'

function App() {
   

  return (
    <>
        <HeroSection />
        <TrustSection />
        <ParticipatingSchools />
        <SchoolChoice />
        <AppointmentHero />
        <FeaturesSection />
        <Footer />
    </>
  )
}

export default App
