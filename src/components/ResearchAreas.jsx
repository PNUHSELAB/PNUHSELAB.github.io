import React from 'react';
import { Cpu, Activity, Database, Users } from 'lucide-react';

const ResearchAreas = () => {
  const areas = [
    {
      id: 1,
      title: "Ergonomics & Human Factors",
      desc: "Analyzing human physical and cognitive capabilities to prevent musculoskeletal disorders and work-related injuries.",
      icon: <Users className="w-8 h-8 text-hse-green" />
    },
    {
      id: 2,
      title: "Safety Management Systems",
      desc: "Designing comprehensive frameworks to assess risk, ensure compliance, and cultivate safety culture in organizations.",
      icon: <Activity className="w-8 h-8 text-hse-blue" />
    },
    {
      id: 3,
      title: "Smart Sensors & Wearables",
      desc: "Implementing IoT devices to monitor physiological signals and environmental hazards in real-time.",
      icon: <Cpu className="w-8 h-8 text-hse-green" />
    },
    {
      id: 4,
      title: "Data-Driven Safety Analytics",
      desc: "Using machine learning to predict accidents and analyze complex safety datasets for proactive intervention.",
      icon: <Database className="w-8 h-8 text-hse-blue" />
    }
  ];

  return (
    <section id="research" className="py-24 bg-gray-50 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="text-sm font-semibold text-hse-green tracking-wide uppercase mb-2">Research Areas</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900">Key Focus & Specialties</h3>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {areas.map((area) => (
            <div key={area.id} className="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-md border border-gray-100 transition-all duration-300 overflow-hidden relative">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gray-50 rounded-bl-full -mr-10 -mt-10 transition-colors group-hover:bg-blue-50/50 z-0"></div>
              <div className="relative z-10 flex gap-6">
                <div className="flex-shrink-0 w-16 h-16 rounded-xl bg-gray-50 border border-gray-100 flex items-center justify-center group-hover:bg-white group-hover:shadow-sm transition-all">
                  {area.icon}
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-hse-blue transition-colors">{area.title}</h4>
                  <p className="text-gray-600 leading-relaxed text-base">{area.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResearchAreas;
