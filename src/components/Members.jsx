import React from 'react';
import { User } from 'lucide-react';
import sejungLeePhoto from '../assets/sejung-lee.jpg';
import seulgiKimPhoto from '../assets/seulgi-kim.jpg';
import inaJeongPhoto from '../assets/ina-jeong.jpg';
import hanboZouPhoto from '../assets/hanbo-zou.jpg';
import seonaJeongPhoto from '../assets/seona-jeong.jpg';
import hyunjinLeePhoto from '../assets/hyunjin-lee.jpg';
import siyoonParkPhoto from '../assets/siyoon-park.jpg';
import joonsikYoonPhoto from '../assets/joonsik-yoon.jpg';
import minseoKimPhoto from '../assets/minseo-kim.jpg';

const Members = () => {
  const memberGroups = [
    {
      title: "Research Professor",
      members: [
        {
          name: "김슬기 (Seulgi Kim)",
          interest: "생체역학 및 인터페이스",
          img: seulgiKimPhoto
        },
        {
          name: "이세정 (Sejung Lee)",
          interest: "산업안전",
          img: sejungLeePhoto
        }
      ]
    },
    {
      title: "Ph.D. Candidates and Students",
      members: [
        {
          name: "정인아 (Ina Jeong)",
          interest: "자동차 인간공학, 인지공학",
          img: inaJeongPhoto
        },
        {
          name: "Hanbo Zou",
          interest: "인체역학, 제품설계",
          img: hanboZouPhoto
        }
      ]
    },
    {
      title: "M.S. Students",
      members: [
        {
          name: "정선아 (Seona Jeong)",
          interest: "LLM, Ontology",
          img: seonaJeongPhoto
        }
      ]
    },
    {
      title: "Undergraduate Students",
      members: [
        {
          name: "김민서 (Minseo Kim)",
          interest: "인간공학",
          img: minseoKimPhoto
        },
        {
          name: "이현진 (Hyunjin Lee)",
          interest: "인간공학",
          img: hyunjinLeePhoto
        },
        {
          name: "박시윤 (Siyoon Park)",
          interest: "인간공학",
          img: siyoonParkPhoto
        },
        {
          name: "윤준식 (Joonsik Yoon)",
          interest: "인간공학",
          img: joonsikYoonPhoto
        }
      ]
    },
    {
      title: "Alumni",
      members: [
        {
          name: "이*석 (*seok Lee)",
          degree: "석사과정 졸업",
          field: "산업디자인, 재활 및 인체공학",
          email: "ilseoklee@pusan.ac.kr"
        },
        {
          name: "강*현 (*Hyeon Kang)",
          degree: "석사과정 졸업",
          field: "Physical ergonomics, Cognitive-Physical Interaction",
          email: "shkang@iastate.edu"
        },
        {
          name: "남*경 (*kyung Nam)",
          degree: "석사과정 졸업",
          field: "안전보건관리, 감성공학",
          email: "yknam@naver.com"
        },
        {
          name: "최*원 (*won Choi)",
          degree: "석사과정 졸업",
          field: "Biomechanics, Ergonomic Design and Evaluation",
          email: "jiwonchoi@vt.edu"
        },
        {
          name: "김*영 (*young Kim)",
          degree: "석사과정 졸업",
          field: "안전보건관리",
          email: "khy6444@pusan.ac.kr"
        },
        {
          name: "김*환 (*Hwan Kim)",
          degree: "석사과정 졸업",
          field: "안전보건관리",
          email: "skumcyd@pusan.ac.kr"
        },
        {
          name: "이*민 (*min Lee)",
          degree: "석사과정 졸업",
          field: "인체역학, 인지공학, 제품설계",
          email: "jeongmin1ee@pusan.ac.kr"
        },
        {
          name: "*na Gyagri",
          degree: "석사과정 졸업",
          field: "인체공학, 산업안전, 경영",
          email: "minagyagri@gmail.com"
        },
        {
          name: "최*민 (*min Choi)",
          degree: "석사과정 졸업",
          field: "인체공학, 제품설계",
          email: "cscsm91@naver.com"
        },
        {
          name: "이*나 (*na Lee)",
          degree: "석사과정 졸업",
          field: "인간공학, 산업안전 및 보건 분야",
          email: ""
        },
        {
          name: "김*기 (*gi Kim)",
          degree: "석박통합과정 졸업",
          field: "생체역학 및 인터페이스",
          email: "seulgikim@pusan.ac.kr"
        }
      ]
    }
  ];

  return (
    <div className="pt-52 pb-24 min-h-screen bg-gray-50/50">
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
                group.title === "Alumni" ? (
                  <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 relative z-10">
                    {group.members.map((member, idx) => (
                      <article key={idx} className="rounded-[24px] border border-gray-100 bg-gray-50/70 p-6 md:p-7 transition-all duration-300 hover:border-slate-200 hover:bg-white hover:shadow-md">
                        <h4 className="text-2xl font-bold text-gray-900">{member.name}</h4>
                        <div className="mt-5 grid grid-cols-1 gap-3 text-sm leading-relaxed text-gray-700">
                          <p><span className="font-semibold text-gray-900">졸업 학위 :</span> {member.degree}</p>
                          <p><span className="font-semibold text-gray-900">연구분야 :</span> {member.field}</p>
                          <p><span className="font-semibold text-gray-900">이메일 :</span> {member.email || "-"}</p>
                        </div>
                      </article>
                    ))}
                  </div>
                ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 relative z-10">
                  {group.members.map((member, idx) => (
                    <article key={idx} className="overflow-hidden rounded-[28px] border border-gray-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl group/card">
                      <div className="relative flex h-[24rem] items-end justify-center overflow-hidden bg-white">
                        <div className="absolute inset-0 z-10 bg-gradient-to-t from-slate-900/8 to-transparent opacity-70 transition-opacity duration-500 group-hover/card:opacity-30"></div>
                        <img
                          src={member.img}
                          alt={member.name}
                          className="h-full w-full object-contain object-center px-4 pt-6 transition-transform duration-700 group-hover/card:scale-[1.02]"
                        />
                      </div>
                      <div className="p-6 md:p-7">
                        <h4 className={`font-bold text-gray-900 transition-colors group-hover/card:text-hse-blue ${group.title === "Undergraduate Students" ? "text-xl" : "text-2xl"}`}>
                          {member.name}
                        </h4>
                        {member.interest && (
                          <p className="mt-3 text-sm leading-relaxed text-gray-600">{member.interest}</p>
                        )}
                      </div>
                    </article>
                  ))}
                </div>
                )
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
