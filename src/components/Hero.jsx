import { useRef } from 'react';
import { Link } from 'react-router-dom';
import Aurora from './Aurora';
import HeroCharacter from './HeroCharacter';
import VariableProximity from './VariableProximity';

const focusAreas = ['Safety Engineering', 'Cognitive Engineering', 'Biomechanics', 'HMI'];

const Hero = () => {
  const heroRef = useRef(null);

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative h-[90vh] md:h-screen w-full flex items-center justify-center overflow-hidden bg-black"
    >
      <div className="absolute inset-0 z-0 opacity-90">
        <Aurora
          colorStops={['#6cff7f', '#34d399', '#1d4ed8']}
          blend={0.7}
          amplitude={1.15}
          speed={2.05}
        />
      </div>

      <div className="absolute inset-0 z-[1] bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.14),transparent_35%),radial-gradient(circle_at_50%_55%,rgba(34,197,94,0.16),transparent_32%),linear-gradient(180deg,rgba(0,0,0,0.2),rgba(0,0,0,0.7)_55%,rgba(0,0,0,0.94))]" />

      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none z-[2] mt-16 lg:mt-0">
        <Link
          to="/about"
          aria-label="Go to About page"
          className="pointer-events-auto inline-flex items-center justify-center cursor-pointer"
        >
          <VariableProximity
            label="HSE LAB"
            className="text-[18vw] font-black text-white/8 tracking-tighter whitespace-nowrap leading-none transition-all duration-1000"
            fromFontVariationSettings="'wght' 700, 'opsz' 12"
            toFontVariationSettings="'wght' 1000, 'opsz' 40"
            containerRef={heroRef}
            radius={180}
            falloff="linear"
            letterSpacingMap={{ '1-0': '0.09em' }}
          />
        </Link>
      </div>

      <div className="pointer-events-auto absolute bottom-4 right-2 z-[25] h-[240px] w-[190px] sm:bottom-6 sm:right-4 sm:h-[300px] sm:w-[230px] md:bottom-8 md:right-8 md:h-[360px] md:w-[280px] lg:bottom-10 lg:right-10 lg:h-[430px] lg:w-[330px]">
        <HeroCharacter />
      </div>

      <div className="absolute inset-0 z-20 pointer-events-none p-6 pb-12 md:p-12 lg:p-16 flex flex-col justify-between">
        <div className="w-full h-24 md:h-28 shrink-0"></div>

        <div className="w-full flex flex-col items-stretch justify-end gap-6 pointer-events-auto pb-4 md:pb-0">
          <div className="max-w-2xl w-full text-left mt-auto">
            <div className="mt-5 max-w-2xl rounded-[28px] border border-white/10 bg-black/20 p-5 md:p-7 backdrop-blur-xl shadow-[0_22px_60px_rgba(0,0,0,0.24)]">
              <p className="text-base md:text-xl text-white font-semibold leading-snug">
                Ergonomics Research for Human-Centered Design
              </p>
              <p className="mt-3 max-w-xl text-sm md:text-base text-white/72 leading-relaxed">
                We explore ergonomics methods and modeling approaches, including digital human modeling, biomechanics, and ICT-based techniques, to better understand human capabilities, limitations, and interactions within systems.
              </p>
              <div className="mt-5 flex flex-wrap gap-2.5">
                {focusAreas.map((area) => (
                  <span
                    key={area}
                    className="rounded-full border border-white/12 bg-white/8 px-4 py-2 text-xs md:text-sm font-medium text-white/88 backdrop-blur-lg"
                  >
                    {area}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
