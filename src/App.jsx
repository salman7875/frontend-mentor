import About from './pages/About/About'
import Home from './pages/Home/Home'
import Navbar from './pages/Navbar/Navbar'

const App = () => {
  return (
    <>
      <header>
        <Navbar />
        <Home />
      </header>
      <main>
        <About />
      </main>
    </>
  )
}

export default App
