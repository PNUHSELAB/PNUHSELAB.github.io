import React from 'react';
import { ArrowRight, Settings } from 'lucide-react';
import InteractiveBrain from './InteractiveBrain';

const Hero = () => {
  return (
    <section id="home" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden min-h-[90vh] flex items-center">
      {/* Background with gradient and grid pattern for engineering feel */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-blue-50/30 z-0"></div>
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] z-0"></div>
      
      {/* Decorative Blur Circles */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-hse-green/10 rounded-full blur-3xl opacity-50 z-0 mix-blend-multiply flex-shrink-0"></div>
      <div className="absolute top-60 left-10 w-72 h-72 bg-hse-blue/10 rounded-full blur-3xl opacity-50 z-0 mix-blend-multiply flex-shrink-0"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          
          {/* Left Content Area */}
          <div className="lg:w-1/2">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 text-hse-blue font-medium text-sm mb-6 animate-fade-in-up">
              <Settings size={16} className="animate-spin-slow" />
              Innovating for Human Safety
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-gray-900 mb-6 leading-tight">
              Advanced Research in <br className="hidden lg:block"/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-hse-blue to-hse-green">Human & Safety Engineering</span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-10 max-w-2xl leading-relaxed">
              HSE Lab is dedicated to pioneering engineering solutions that enhance human capabilities, ensure safety, and build resilient systems for the future.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#research" className="inline-flex justify-center items-center gap-2 px-8 py-4 rounded-lg bg-hse-blue hover:bg-blue-700 text-white font-semibold transition-all shadow-lg shadow-blue-500/30 hover:shadow-blue-500/40">
                Explore Our Research
                <ArrowRight size={20} />
              </a>
              <a href="#about" className="inline-flex justify-center items-center gap-2 px-8 py-4 rounded-lg bg-white border border-gray-200 hover:border-gray-300 hover:bg-gray-50 text-gray-700 font-semibold transition-all shadow-sm">
                Learn More About Us
              </a>
            </div>
          </div>

          {/* Right 3D Interactive Area */}
          <div className="lg:w-1/2 w-full relative">
            <div className="absolute inset-0 bg-blue-400/5 rounded-full blur-3xl"></div>
            <InteractiveBrain />
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
