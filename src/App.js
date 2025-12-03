import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav/Nav'
import Header from './components/Header/Header'
import About from './components/About/About'
import Experience from './components/Experience/Experience'
import Portfolio from './components/Portfolio/Portfolio'
import Skills from './components/Skills/Skills'
import Services from './components/Services/Services'
import Achievements from './components/Achievemets/Achievemets'
import Contact from './components/Contact/Contact'
import Decorations from './components/Decorations/Decorations'
import ScrollMotion from './components/ScrollMotion/ScrollMotion'

function App() {
  return (
    <div className="App">
        <Decorations />
        <Header />
        <Nav />
        <ScrollMotion animation="fade-up">
          <About />
        </ScrollMotion>
        <ScrollMotion animation="fade-up" delay={0.2}>
          <Experience />
        </ScrollMotion>
        <ScrollMotion animation="fade-up" delay={0.4}>
          <Portfolio />
        </ScrollMotion>
        <ScrollMotion animation="fade-up" delay={0.6}>
          <Skills />
        </ScrollMotion>
        <ScrollMotion animation="fade-up" delay={0.8}>
          <Services />
        </ScrollMotion>
        <ScrollMotion animation="fade-up" delay={1}>
          <Achievements />
        </ScrollMotion>
        <ScrollMotion animation="fade-up" delay={1.2}>
          <Contact />
        </ScrollMotion>
    </div>
  );
}

export default App;
