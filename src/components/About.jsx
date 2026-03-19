import React from 'react';
import { Target, Lightbulb, ShieldCheck } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: <Target className="w-6 h-6 text-hse-blue" />,
      title: "Our Mission",
      description: "To advance the frontier of human safety through innovative engineering and smart technologies."
    },
    {
      icon: <Lightbulb className="w-6 h-6 text-hse-green" />,
      title: "Innovation Focus",
      description: "Creating practical, interdisciplinary solutions that solve real-world industrial challenges."
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-hse-blue" />,
      title: "Reliability & Trust",
      description: "Developing robust systems that prioritize human well-being in complex environments."
    }
  ];

  return (
    <section id="about" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-semibold text-hse-blue tracking-wide uppercase mb-2">About The Lab</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Pioneering Safety Through Engineering</h3>
          <p className="text-lg text-gray-600 leading-relaxed">
            The Human & Safety Engineering (HSE) Lab is a premier research group focused on the intersection of human factors and engineering systems. We strive to create safer, more efficient environments for workers across various industries.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10 mt-12">
          {features.map((feature, idx) => (
            <div key={idx} className="bg-gray-50 rounded-2xl p-8 hover:bg-white hover:shadow-xl hover:shadow-blue-900/5 transition-all duration-300 border border-transparent hover:border-gray-100 group">
              <div className="w-14 h-14 bg-white rounded-xl shadow-sm flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h4>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
