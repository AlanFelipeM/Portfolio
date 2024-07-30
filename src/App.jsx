import './styles/globals.sass'
import NavBar from './components/NavBar/NavBar'
import Home from './components/Home/Home'
import About from './components/About/About'
import Skills from './components/Skills/Skills'
import Projects from './components/Projects/Projects'
import Footer from './components/Footer/Footer'

function App() {

  return (
    <>
    <div id="App">
    <NavBar/>
    <div id='Home'>
    <Home/>
    </div>
    <div id='About'>
    <About/>
    </div>
    <div id='Skills'>
    <Skills/>
    </div>
    <div id='Projects'>
    <Projects/>
    </div>
    <div id='Contact'>
    <Footer/>
    </div>
      </div>
    </>
  )
}

export default App
