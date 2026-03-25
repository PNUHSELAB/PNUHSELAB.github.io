import { Activity, CarFront, Target, Truck } from 'lucide-react';
import biomechanicsOne from '../assets/research-biomechanics-1.png';
import biomechanicsTwo from '../assets/research-biomechanics-2.png';
import lastmileOne from '../assets/research-lastmile-1.png';
import lastmileTwo from '../assets/research-lastmile-2.png';
import vehicleOne from '../assets/research-vehicle-1.png';
import vehicleTwo from '../assets/research-vehicle-2.png';

const researchInterests = [
  {
    number: '01',
    icon: <Activity className="w-6 h-6 text-hse-blue" />,
    title: 'Biomechanics-Driven Ergonomic Design',
    description:
      'Investigating ergonomic design solutions with a particular focus on biomechanics in products, tasks, and work environments.',
    tags: ['Biomechanics', 'Design Evaluation'],
    images: [
      { src: biomechanicsOne, alt: 'Biomechanics motion capture experiment' },
      { src: biomechanicsTwo, alt: 'Biomechanics posture and measurement setup' },
    ],
  },
  {
    number: '02',
    icon: <Truck className="w-6 h-6 text-hse-green" />,
    title: 'Worker Response in Last-Mile Services',
    description:
      'Testing physiological responses of workers in last-mile service environments to better understand workload, safety, and field performance.',
    tags: ['Field Safety', 'Workload', 'Physiological Response'],
    images: [
      { src: lastmileOne, alt: 'Last-mile delivery loading task' },
      { src: lastmileTwo, alt: 'Last-mile delivery cart handling task' },
    ],
  },
  {
    number: '03',
    icon: <CarFront className="w-6 h-6 text-hse-blue" />,
    title: 'Vehicle Ergonomics and ADAS',
    description:
      'Studying vehicle ergonomics for advanced driver assistance systems and next-generation human-machine interaction.',
    tags: ['Vehicle Ergonomics', 'ADAS', 'HMI'],
    images: [
      { src: vehicleOne, alt: 'Driving simulator hardware setup' },
      { src: vehicleTwo, alt: 'Driving simulator user experiment' },
    ],
  },
];

const ResearchAreas = () => {
  return (
    <section id="research" className="pt-52 pb-24 bg-gray-50 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-hse-green">Research Areas</p>
          <h2 className="mt-3 text-3xl font-bold text-gray-900 md:text-4xl">Current Focus & Lab Mission</h2>
          <p className="mt-5 text-base leading-relaxed text-gray-600 md:text-lg">
            Explore the mission and current research directions of the Human &amp; Safety Engineering Lab through the
            same core framework presented in the lab overview.
          </p>
        </div>

        <div className="mx-auto mt-14 max-w-4xl">
          <div className="rounded-[32px] border border-slate-200 bg-[linear-gradient(135deg,#f8fafc_0%,#ffffff_50%,#f0fdf4_100%)] px-8 py-10 md:px-12 md:py-12 text-center shadow-[0_24px_60px_rgba(15,23,42,0.06)]">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-white shadow-sm">
              <Target className="w-6 h-6 text-hse-blue" />
            </div>
            <p className="mt-5 text-sm font-semibold uppercase tracking-[0.24em] text-hse-green">Lab Mission</p>
            <p className="mx-auto mt-4 max-w-3xl text-lg leading-relaxed text-gray-600 md:text-xl">
              The HSE Lab investigates and understands human capabilities, limitations, and human-system interactions
              to support the design of safer, healthier, and more effective products, tasks, environments, and systems.
            </p>
          </div>
        </div>

        <div id="research-areas" className="mt-20 scroll-mt-36">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-hse-blue">Our Research Interests</p>
            <h3 className="mt-3 text-3xl font-bold text-gray-900 md:text-4xl">Current Directions of HSE Lab</h3>
            <p className="mt-5 text-base leading-relaxed text-gray-600 md:text-lg">
              Our current research efforts focus on ergonomics-centered design, worker safety in real-world
              environments, and vehicle ergonomics for emerging mobility systems.
            </p>
          </div>

          <div className="mt-12 grid gap-8 lg:grid-cols-3">
            {researchInterests.map((item) => (
              <article
                key={item.number}
                className="group relative overflow-hidden rounded-[28px] border border-slate-200 bg-white p-8 shadow-[0_18px_40px_rgba(15,23,42,0.05)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(15,23,42,0.08)]"
              >
                <div className="absolute right-0 top-0 h-28 w-28 rounded-bl-[999px] bg-slate-50 transition-colors duration-300 group-hover:bg-emerald-50/70"></div>
                <div className="relative z-10">
                  <div className="flex items-center justify-between gap-4">
                    <span className="text-sm font-bold tracking-[0.24em] text-slate-300">{item.number}</span>
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-50 shadow-sm">
                      {item.icon}
                    </div>
                  </div>
                  <h4 className="mt-8 text-2xl font-bold leading-snug text-gray-900">{item.title}</h4>
                  <p className="mt-4 text-base leading-relaxed text-gray-600">{item.description}</p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-slate-600"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="mt-8 grid grid-cols-2 gap-3">
                    {item.images.map((image) => (
                      <div
                        key={image.alt}
                        className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-50"
                      >
                        <img
                          src={image.src}
                          alt={image.alt}
                          className="h-52 w-full object-cover object-center transition-transform duration-500 group-hover:scale-[1.02]"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default ResearchAreas;
