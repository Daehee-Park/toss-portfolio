import { useState, useEffect } from 'react'
import './App.css'

// Components
import ProgressBar from './components/layout/ProgressBar'
import Hero from './components/sections/Hero'
import About from './components/sections/About'
import Projects from './components/sections/Projects'

function App() {
  const [scrollProgress, setScrollProgress] = useState(0)
  const [selectedProject, setSelectedProject] = useState(null)

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight
      const currentProgress = (window.scrollY / totalScroll) * 100
      setScrollProgress(currentProgress)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <main className="bg-neutral-950 text-neutral-200 min-h-screen">
      <ProgressBar progress={scrollProgress} />
      <Hero />
      <About />
      <Projects 
        selectedProject={selectedProject}
        onProjectSelect={setSelectedProject}
      />
    </main>
  )
}

export default App