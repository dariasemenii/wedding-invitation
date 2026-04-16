import { useState } from 'react'
import './App.css'
import Hero from './components/Hero'
import WeddingDate from './components/WeddingDate'
import EventDetails from './components/EventDetails'
import Timeline from './components/Timeline'
import DressCode from './components/DressCode'
import Wishes from './components/Wishes'
import RSVP from './components/RSVP'
import Countdown from './components/Countdown'
import Footer from './components/Footer'
import SplashScreen from './components/SplashScreen'

function App() {
  const [showSplash, setShowSplash] = useState(true)

  return (
    <>
      {showSplash && <SplashScreen onDismiss={() => setShowSplash(false)} />}
      <Hero />
      <WeddingDate />
      <EventDetails />
      <Timeline />
      <DressCode />
      <Wishes />
      <RSVP />
      <Countdown />
      <Footer />
    </>
  )
}

export default App
