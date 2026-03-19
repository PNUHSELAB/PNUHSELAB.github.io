import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import ResearchAreas from './components/ResearchAreas';
import Members from './components/Members';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen font-sans selection:bg-hse-blue selection:text-white overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        <About />
        <ResearchAreas />
        <Members />
      </main>
      <Footer />
    </div>
  );
}

export default App;
