import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav/Nav'
import Header from './components/Header/Header'
import About from './components/About/About'
import Experience from './components/Experience/Experience'
import Portfolio from './components/Portfolio/Portfolio'
import Skills from './components/Skills/Skills'
import Services from './components/Services/Services'
import Achievemets from './components/Achievemets/Achievemets'
import Contact from './components/Contact/Contact'
import Decorations from './components/Decorations/Decorations'

function App() {
  return (
    <div className="App">
        <Decorations />
        <Header />
        <Nav />
        <About />
        <Experience />
        <Portfolio />
        <Skills />
        <Services />
        <Achievemets />
        <Contact />
    </div>
  );
}

export default App;
