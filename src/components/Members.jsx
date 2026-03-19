import React from 'react';
import { User, Mail } from 'lucide-react';

const Members = () => {
  const members = [
    {
      role: "Principal Investigator",
      name: "Prof. John Doe",
      email: "professor@hselab.ac.kr",
      img: "https://ui-avatars.com/api/?name=John+Doe&background=38a169&color=fff&size=128"
    },
    {
      role: "Ph.D. Candidate",
      name: "Jane Smith",
      email: "jane@hselab.ac.kr",
      img: "https://ui-avatars.com/api/?name=Jane+Smith&background=3182ce&color=fff&size=128"
    },
    {
      role: "Master's Student",
      name: "Alex Johnson",
      email: "alex@hselab.ac.kr",
      img: "https://ui-avatars.com/api/?name=Alex+Johnson&background=2d3748&color=fff&size=128"
    },
    {
      role: "Undergraduate Researcher",
      name: "Sam Lee",
      email: "sam@hselab.ac.kr",
      img: "https://ui-avatars.com/api/?name=Sam+Lee&background=cbd5e0&color=2d3748&size=128"
    }
  ];

  return (
    <section id="members" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-sm font-semibold text-hse-blue tracking-wide uppercase mb-2">Our Team</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900">Meet the Lab Members</h3>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {members.map((member, idx) => (
            <div key={idx} className="bg-gray-50 rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300 group">
              <div className="aspect-w-1 aspect-h-1 bg-gray-200 relative">
                <img src={member.img} alt={member.name} className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-6 text-center">
                <p className="text-sm font-medium text-hse-green mb-1">{member.role}</p>
                <h4 className="text-xl font-bold text-gray-900 mb-3">{member.name}</h4>
                <a href={`mailto:${member.email}`} className="inline-flex items-center gap-2 text-gray-500 hover:text-hse-blue text-sm transition-colors">
                  <Mail size={16} />
                  {member.email}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Members;
