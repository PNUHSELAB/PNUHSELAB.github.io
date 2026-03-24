import { Target, Lightbulb, ShieldCheck } from 'lucide-react';
import logo from '../assets/logo.png';

const About = () => {
  const features = [
    {
      icon: <Target className="w-6 h-6 text-hse-blue" />,
      title: "Lab Mission",
      description: "The HSE Lab investigates and understands the capabilities and limitations of human beings in the design of workplaces and consumer products."
    },
    {
      icon: <Lightbulb className="w-6 h-6 text-hse-green" />,
      title: "Human-Centered Design",
      description: "We approach engineering from the perspective of the people who use, operate, and live with systems in everyday environments."
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-hse-blue" />,
      title: "Safety Engineering",
      description: "Our research connects ergonomics, biomechanics, and safety management to improve health, performance, and reliability."
    }
  ];

  return (
    <section id="about" className="pt-52 pb-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex justify-center mb-8">
            <img
              src={logo}
              alt="HSE Lab Logo"
              className="w-full max-w-[420px] md:max-w-[520px] h-auto object-contain"
            />
          </div>
          <h2 className="text-sm font-semibold text-hse-blue tracking-wide uppercase mb-2">About The Lab</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Welcome to The Human &amp; Safety Engineering Lab</h3>
          <p className="text-lg text-gray-600 leading-relaxed">
            The Human &amp; Safety Engineering Lab at Pusan National University studies human capabilities and limitations so that workplaces, products, and systems can be designed to be safer, healthier, and more effective.
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
