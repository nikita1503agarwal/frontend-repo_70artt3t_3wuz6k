import React from 'react'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import StatBar from './components/StatBar'
import Featured from './components/Featured'
import Trusted from './components/Trusted'
import Signature from './components/Signature'
import Testimonials from './components/Testimonials'
import Booking from './components/Booking'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-[#EBEFEE]">
      <Hero />
      <About />
      <Services />
      <StatBar />
      <Featured />
      <Trusted />
      <Signature />
      <Testimonials />
      <Booking />
      <Footer />
    </div>
  )
}

export default App