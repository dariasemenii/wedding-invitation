import { useState } from 'react'
import './App.css'
import Hero from './components/Hero'
import EventDetails from './components/EventDetails'
import MapSection from './components/MapSection'
import SplashScreen from './components/SplashScreen'

function App() {
  const [showSplash, setShowSplash] = useState(true)

  return (
    <>
      {showSplash && <SplashScreen onDismiss={() => setShowSplash(false)} />}
      <Hero />
      <EventDetails />
      <MapSection />
    </>
  )
}

export default App
