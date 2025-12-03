import { lazy, Suspense } from 'react';
import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav/Nav'
import Header from './components/Header/Header'
import About from './components/About/About'
import Decorations from './components/Decorations/Decorations'
import ScrollMotion from './components/ScrollMotion/ScrollMotion'

// Lazy load heavy components
const Experience = lazy(() => import('./components/Experience/Experience'));
const Portfolio = lazy(() => import('./components/Portfolio/Portfolio'));
const Skills = lazy(() => import('./components/Skills/Skills'));
const Services = lazy(() => import('./components/Services/Services'));
const Achievements = lazy(() => import('./components/Achievemets/Achievemets'));
const Contact = lazy(() => import('./components/Contact/Contact'));

function App() {
  return (
    <div className="App">
      <Decorations />
      <Header />
      <Nav />
      <ScrollMotion animation="fade-up">
        <About />
      </ScrollMotion>
      <Suspense fallback={<div style={{ minHeight: '50vh' }}></div>}>
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
      </Suspense>
    </div>
  );
}

export default App;
