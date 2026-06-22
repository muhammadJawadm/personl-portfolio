import './index.css'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Education from './components/Education'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div style={{ position: 'relative', minHeight: '100vh' }}>
      {/* Global background grid */}
      <div className="bg-grid" />
      {/* Global glow orbs */}
      <div className="glow-orb" style={{ width: 600, height: 600, background: 'rgba(0,212,255,0.06)', top: -200, right: -200 }} />
      <div className="glow-orb" style={{ width: 500, height: 500, background: 'rgba(124,58,237,0.05)', top: 800, left: -200 }} />
      <div className="glow-orb" style={{ width: 400, height: 400, background: 'rgba(14,165,233,0.05)', top: 2000, right: -100 }} />

      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Experience />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
