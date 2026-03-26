import { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import LabStatusGlobe from './components/LabStatusGlobe';
import Footer from './components/Footer';

const About = lazy(() => import('./components/About'));
const ResearchAreas = lazy(() => import('./components/ResearchAreas'));
const Projects = lazy(() => import('./components/Projects'));
const Patents = lazy(() => import('./components/Patents'));
const ResearchFacilities = lazy(() => import('./components/ResearchFacilities'));
const Members = lazy(() => import('./components/Members'));
const Professor = lazy(() => import('./components/Professor'));
const Publication = lazy(() => import('./components/Publication'));
const InternationalConferences = lazy(() => import('./components/InternationalConferences'));
const DomesticJournals = lazy(() => import('./components/DomesticJournals'));
const DomesticConferences = lazy(() => import('./components/DomesticConferences'));
const Books = lazy(() => import('./components/Books'));
const News = lazy(() => import('./components/News'));
const Photo = lazy(() => import('./components/Photo'));

const pageFallback = (
  <main className="min-h-screen pt-40 px-6 flex items-start justify-center bg-[#FCFCFD]">
    <p className="text-sm font-semibold tracking-[0.2em] uppercase text-slate-400">
      Loading page...
    </p>
  </main>
);

function Home() {
  return (
    <main>
      <Hero />
      <LabStatusGlobe />
    </main>
  );
}

function App() {
  return (
    <Router>
      <div className="min-h-screen font-sans selection:bg-hse-blue selection:text-white overflow-x-hidden">
        <Header />
        <Suspense fallback={pageFallback}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<main><About /></main>} />
            <Route path="/research" element={<main><ResearchAreas /></main>} />
            <Route path="/research/projects" element={<main><Projects /></main>} />
            <Route path="/research/patents" element={<main><Patents /></main>} />
            <Route path="/research/facilities" element={<main><ResearchFacilities /></main>} />
            <Route path="/professor" element={<main><Professor /></main>} />
            <Route path="/people" element={<main><Members /></main>} />
            <Route path="/publication" element={<main><Publication /></main>} />
            <Route path="/publication/international-conferences" element={<main><InternationalConferences /></main>} />
            <Route path="/publication/domestic-journals" element={<main><DomesticJournals /></main>} />
            <Route path="/publication/domestic-conferences" element={<main><DomesticConferences /></main>} />
            <Route path="/publication/books" element={<main><Books /></main>} />
            <Route path="/news" element={<main><News /></main>} />
            <Route path="/photo" element={<main><Photo /></main>} />
          </Routes>
        </Suspense>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
