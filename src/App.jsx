import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import ResearchAreas from './components/ResearchAreas';
import Members from './components/Members';
import Footer from './components/Footer';

// New route placeholders
import Professor from './components/Professor';
import Publication from './components/Publication';
import News from './components/News';
import Photo from './components/Photo';

function Home() {
  return (
    <main>
      <Hero />
    </main>
  );
}

function App() {
  return (
    <Router>
      <div className="min-h-screen font-sans selection:bg-hse-blue selection:text-white overflow-x-hidden">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<main><About /></main>} />
          <Route path="/research" element={<main><ResearchAreas /></main>} />
          <Route path="/professor" element={<main><Professor /></main>} />
          <Route path="/people" element={<main><Members /></main>} />
          <Route path="/publication" element={<main><Publication /></main>} />
          <Route path="/news" element={<main><News /></main>} />
          <Route path="/photo" element={<main><Photo /></main>} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
