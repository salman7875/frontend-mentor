import Navbar from './pages/Navbar/Navbar'
import Home from './pages/Home/Home'
import About from './pages/About/About'
import Productive from './pages/Productive/Productive'

const App = () => {
  return (
    <>
      <header>
        <Navbar />
        <Home />
      </header>
      <main>
        <About />
        <Productive />
      </main>
    </>
  )
}

export default App
