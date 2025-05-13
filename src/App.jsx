import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Projects from './pages/Projects'
import About from './pages/About'
import Contact from './pages/Contact'

function App() {
  return (
    <>
      <Navbar />
      <main className="mt-16 space-y-24">
        <Home />
        <Projects />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
