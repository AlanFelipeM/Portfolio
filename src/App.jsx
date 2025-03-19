import React, { useState } from 'react';
import './styles/globals.sass';
import NavBar from './components/NavBar/NavBar';
import Home from './components/Home/Home';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import Footer from './components/Footer/Footer';
import { useTranslation } from 'react-i18next';

function App() {
  const { t, i18n } = useTranslation();
  const [currentLanguage, setCurrentLanguage] = useState(i18n.language);

  const handleChangeLanguage = () => {
    const newLanguage = currentLanguage === 'en' ? 'pt' : 'en';
    i18n.changeLanguage(newLanguage);
    setCurrentLanguage(newLanguage);
  };

  return (
    <>
      <div id="App">
        <NavBar handleChangeLanguage={handleChangeLanguage} currentLanguage={currentLanguage} />
        <div id='Home'>
          <Home />
        </div>
        <div id='About'>
          <About />
        </div>
        <div id='Skills'>
          <Skills />
        </div>
        <div id='Projects'>
          <Projects />
        </div>
        <div id='Contact'>
        <Footer />
        </div>
      </div>
    </>
  );
}

export default App;