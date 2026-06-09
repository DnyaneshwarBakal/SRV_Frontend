import { useState } from 'react'
 
import HeroSection from './components/organisms/HeroSection/HeroSection'
import TrustSection from './components/organisms/TrustSection/TrustSection'
import ParticipatingSchools from './components/organisms/ParticipatingSchools/ParticipatingSchools'
import SchoolChoice from './components/organisms/SchoolChoice/SchoolChoice'
import FeaturesSection from './components/organisms/FeaturesSection/FeaturesSection'
import AppointmentHero from './components/organisms/AppointmentHero/AppointmentHero'
import Footer from './components/organisms/Footer/Footer'

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
