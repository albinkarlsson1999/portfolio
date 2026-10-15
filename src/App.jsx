import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import {useState} from 'react'
import Footer from "./components/Footer.jsx";

function App() {
    const [lang, setLang] = useState('sv');
  return (
      <>
        <Navbar lang={lang} setLang={setLang} />
        <main>
          <Hero lang={lang}/>
          <About lang={lang}/>
          <Projects lang={lang}/>
          <Contact lang={lang}/>
            <Footer lang={lang}/>
        </main>
      </>
  )
}

export default App