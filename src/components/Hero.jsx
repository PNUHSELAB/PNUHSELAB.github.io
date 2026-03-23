import React from 'react';
import { ArrowRight } from 'lucide-react';
import InteractiveBrain from './InteractiveBrain';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section id="home" className="relative h-[90vh] md:h-screen w-full flex items-center justify-center bg-transparent overflow-hidden">
      
      {/* 1. Giant Background Text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none z-0 mt-16 lg:mt-0">
        <h1 className="text-[18vw] font-black text-slate-900/5 tracking-tighter whitespace-nowrap font-primary leading-none transition-all duration-1000">
          HSE LAB.
        </h1>
      </div>

      {/* 2. 3D Model Area (Centered) */}
      <div className="absolute inset-0 flex items-center justify-center z-10 pt-16 lg:pt-0">
        <div className="w-full h-full max-w-7xl max-h-[800px] flex items-center justify-center scale-110 lg:scale-110">
            {/* The 3D model placeholder (currently the brain) */}
            <InteractiveBrain />
        </div>
      </div>

      {/* 3. Overlay UI Content */}
      <div className="absolute inset-0 z-20 pointer-events-none p-6 pb-12 md:p-12 lg:p-16 flex flex-col justify-between">
        
        {/* Top Spacer for the existing Header */}
        <div className="w-full h-24 md:h-28 shrink-0"></div>
        
        <div className="flex-1 w-full relative">
           {/* Top Left small info */}
           <div className="absolute top-0 left-0 hidden md:flex items-center gap-2 px-4 py-2 rounded-full border border-gray-200 text-gray-500 font-medium text-xs tracking-widest uppercase pointer-events-auto bg-white/40 backdrop-blur-md">
             <span className="w-1.5 h-1.5 rounded-full bg-hse-green animate-pulse"></span>
             v.0.1 ALPHA / STAGE 01
           </div>

           {/* Top Right small info */}
           <div className="absolute top-0 right-0 hidden md:block text-xs font-semibold tracking-wider text-gray-400 uppercase pointer-events-auto pt-2">
             40+ Interactive Nodes Active
           </div>
        </div>

        {/* Bottom Elements */}
        <div className="w-full flex flex-col lg:flex-row items-center lg:items-end justify-between gap-8 pointer-events-auto pb-4 md:pb-0">
          
          {/* Bottom Left: Lab Description */}
          <div className="max-w-md w-full lg:w-auto text-center lg:text-left mt-auto">
            <p className="text-sm md:text-base text-slate-800 leading-relaxed font-medium bg-white/40 lg:bg-transparent backdrop-blur-md lg:backdrop-blur-none p-4 lg:p-0 rounded-2xl lg:rounded-none border border-white/50 lg:border-none shadow-sm lg:shadow-none">
              Experience the tactile harmony of real-time physics. <span className="text-slate-900 font-bold">HSE Lab</span> merges high-fidelity systems with minimalist aesthetics to create visceral digital experiences that respond to your presence.
            </p>
          </div>

          {/* Bottom Right: Black Pill Button (Launch Lab) */}
          <div className="shrink-0 flex items-center justify-center lg:justify-end w-full lg:w-auto pointer-events-auto">
             <Link to="/about" className="group flex items-center justify-center gap-4 pl-6 pr-2 py-2 rounded-full bg-slate-900 hover:bg-black text-white transition-all shadow-xl hover:shadow-2xl active:scale-95 duration-300 w-full md:w-auto">
               <span className="text-sm font-bold tracking-wide font-primary">Launch Lab</span>
               <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-slate-900 group-hover:-rotate-45 transition-transform duration-300 shadow-sm">
                  <ArrowRight size={16} strokeWidth={3} />
               </div>
             </Link>
          </div>
          
        </div>

      </div>
    </section>
  );
};

export default Hero;
