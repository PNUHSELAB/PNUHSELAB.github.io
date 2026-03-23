import React from 'react';
import { User, Mail } from 'lucide-react';

const Members = () => {
  const memberGroups = [
    {
      title: "Research Professor",
      members: [] // Placeholder
    },
    {
      title: "Ph.D. Candidates and Students",
      members: [
        {
          role: "Ph.D. Candidate",
          name: "Jane Smith",
          email: "jane@hselab.ac.kr",
          img: "https://ui-avatars.com/api/?name=Jane+Smith&background=3182ce&color=fff&size=128"
        }
      ]
    },
    {
      title: "M.S. Students",
      members: [
        {
          role: "M.S. Student",
          name: "Alex Johnson",
          email: "alex@hselab.ac.kr",
          img: "https://ui-avatars.com/api/?name=Alex+Johnson&background=2d3748&color=fff&size=128"
        }
      ]
    },
    {
      title: "Undergraduate Students",
      members: [
        {
          role: "Undergraduate Researcher",
          name: "Sam Lee",
          email: "sam@hselab.ac.kr",
          img: "https://ui-avatars.com/api/?name=Sam+Lee&background=cbd5e0&color=2d3748&size=128"
        }
      ]
    },
    {
      title: "Alumni",
      members: [] // Placeholder
    }
  ];

  return (
    <div className="pt-32 pb-24 min-h-screen bg-gray-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-hse-green tracking-widest uppercase mb-3">HSE Lab People</h2>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight">Our Members</h1>
          <div className="w-24 h-1.5 bg-hse-blue mx-auto mt-6 rounded-full"></div>
        </div>

        <div className="space-y-20">
          {memberGroups.map((group, groupIdx) => (
            <div key={groupIdx} className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 lg:p-10 relative overflow-hidden">
              {/* Category Header */}
              <div className="flex items-center gap-4 mb-10 border-b border-gray-100 pb-6 relative z-10">
                <div className="w-12 h-12 rounded-xl bg-hse-blue/10 flex items-center justify-center text-hse-blue flex-shrink-0">
                  <User size={24} strokeWidth={2} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">{group.title}</h3>
              </div>

              {/* Members Grid */}
              {group.members.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 relative z-10">
                  {group.members.map((member, idx) => (
                    <div key={idx} className="bg-gray-50/80 rounded-2xl overflow-hidden hover:shadow-lg hover:bg-white border border-gray-100 transition-all duration-300 group/card">
                      <div className="aspect-w-1 aspect-h-1 bg-gray-200 relative overflow-hidden">
                        <div className="absolute inset-0 bg-hse-blue/10 group-hover/card:bg-transparent transition-colors duration-500 z-10"></div>
                        <img src={member.img} alt={member.name} className="w-full h-56 object-cover group-hover/card:scale-105 transition-transform duration-500" />
                      </div>
                      <div className="p-6 text-center">
                        <h4 className="text-xl font-bold text-gray-900 mb-1 group-hover/card:text-hse-blue transition-colors">{member.name}</h4>
                        <p className="text-sm font-semibold text-hse-green mb-4">{member.role}</p>
                        <a href={`mailto:${member.email}`} className="inline-flex items-center justify-center gap-2 w-full py-2.5 rounded-lg bg-white border border-gray-200 text-gray-600 hover:text-hse-blue hover:border-blue-200 hover:bg-blue-50 text-sm font-medium transition-all shadow-sm">
                          <Mail size={16} />
                          {member.email}
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="py-12 text-center relative z-10 bg-gray-50/50 rounded-xl border border-dashed border-gray-200">
                  <p className="text-gray-400 font-medium">No members listed currently in this category.</p>
                </div>
              )}
              
              {/* Decorative background shape */}
              <div className="absolute -top-24 -right-24 w-64 h-64 bg-gray-50 rounded-full opacity-50 z-0"></div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Members;
