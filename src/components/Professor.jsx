import React from 'react';
import { User, Phone, Printer, Mail, MapPin, Briefcase, GraduationCap, Award, CheckCircle } from 'lucide-react';

const Professor = () => {
  const experiences = [
    {
      period: '2017 ~ Present',
      title: 'Pusan National University',
      description: 'Dept. of Industrial Engineering, the Human & Safety Engineering Lab.',
      icon: <Briefcase className="w-5 h-5 text-current" />
    },
    {
      period: '~ 2016',
      title: 'Hyundai Motors R&D Division',
      description: 'Total UX Development Team (UX Design Division) / Ergonomics Engineering Team (Interior Engineering Design Division)',
      icon: <Briefcase className="w-5 h-5 text-current" />
    },
    {
      period: '~ 2011',
      title: 'Ph.D at Iowa State University',
      description: 'Dept. of Industrial Engineering, Applied Ergonomics Lab.',
      icon: <GraduationCap className="w-5 h-5 text-current" />
    }
  ];

  const researchInterests = [
    'Biomechanics and Measurement of Workload',
    'Ergonomic Product Design and Evaluation',
    'Industrial Safety Engineering & Management'
  ];

  const activities = [
    { org: '수산자원공단', role: '시민참여단 자문 위원', period: '24.12~' },
    { org: '안전보건공단', role: '조선업 원하청 안전보건 상생협력 수준평가 위원', period: '24.10~24.12' },
    { org: '한국석유공사', role: '안전경영위원회 위원', period: '24.09~' },
    { org: '산업안전보건공단 산업안전보건연구원', role: '교과과정심의위원회 위원', period: '24.06~26.05' },
    { org: '고용노동부', role: '중대재해처벌법 경영책임자 교육과정 위원 및 자문위원', period: '24.06~' },
    { org: '고용노동부', role: '고용노동부 명령진단 위원 - 한화오션', period: '24.06~' },
    { org: '고용노동부', role: '산업안전보건표준제정위원회 위원', period: '24.05~27.05' },
    { org: '대우조선해양', role: '안전경영 자문위원회의 자문위원', period: '22.02~22.08' },
    { org: '한화오션', role: '안전경영위원회 위원', period: '22.03~' },
    { org: '기획재정부', role: '공공기관 안전등급제', period: '22.02~22.08' },
    { org: '고용노동부', role: '공공기관 안전활동 수준평가', period: '21.12~22.04' },
    { org: '안전보건공단', role: '조선업 원하청 안전보건 수준평가', period: '21.12' },
    { org: '안전보건공단', role: '포스코 포항제철소 - 고용노동부 명령진단', period: '21.05' },
    { org: '안전보건공단', role: '포스코 광양제철소 - 고용노동부 명령진단', period: '21.03' },
    { org: '안전보건공단', role: '현대중공업 - 고용노동부 명령진단', period: '20.12' },
    { org: '안전보건공단', role: '조선업 원하청 안전보건 수준평가', period: '19.12' },
    { org: '기획재정부', role: '공공기관 경영평가', period: '19.03~19.07' },
    { org: '부산광역시', role: '부산광역시 안전관리위원회', period: '18.12~' },
    { org: '부산광역시', role: '부산광역시 산업단지계획심의위원회', period: '18.11~' },
    { org: '대한인간공학회', role: '학술이사', period: '18.01~' },
    { org: '한국안전학회', role: '편집이사, 편집위원', period: '18.01~' }
  ];

  return (
    <div className="pt-52 pb-20 min-h-screen bg-gray-50/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Profile Card */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden mb-12 flex flex-col md:flex-row transition-all hover:shadow-md">
          {/* Photo Placeholder */}
          <div className="w-full md:w-1/3 bg-gray-100/80 min-h-[400px] flex items-center justify-center border-b md:border-b-0 md:border-r border-gray-100 relative group overflow-hidden">
            <div className="absolute inset-0 bg-hse-blue/5 group-hover:bg-hse-blue/10 transition-colors"></div>
            <div className="text-gray-400 flex flex-col items-center relative z-10 transition-transform group-hover:scale-110 duration-300">
              <User size={64} className="mb-4 text-gray-300" strokeWidth={1.5} />
              <span className="font-medium text-sm tracking-wide">프로필 사진 (업데이트 예정)</span>
            </div>
          </div>
          
          {/* Info & Contact */}
          <div className="w-full md:w-2/3 p-8 lg:p-12 flex flex-col justify-center relative">
            <div className="absolute top-0 right-0 w-32 h-32 bg-hse-green/5 rounded-bl-[100px] -z-10"></div>
            
            <div className="mb-8">
              <h1 className="text-4xl font-bold text-gray-900 mb-2 flex items-baseline">
                진상은 <span className="text-xl font-medium text-gray-500 ml-3 tracking-wide">Jin, Sangeun</span>
              </h1>
              <h2 className="text-lg font-medium text-hse-blue tracking-wide">Professor / Director</h2>
            </div>
            
            <blockquote className="border-l-4 border-hse-green pl-5 italic text-gray-600 mb-10 leading-relaxed text-sm lg:text-base relative bg-gradient-to-r from-green-50/50 to-transparent py-4 rounded-r-lg">
              "부산대학교 인간공학연구실은 기계가 아닌 사람의 눈높이를 기준으로 합니다. 사람의 몸과 마음, 그리고 생각의 크기와 깊이를 짐작하여, 일상 속에 사람이 접근하게 되는 모든 것에 기계의 냄새를 지우고 사람의 냄새를 입히는 일을 할 것입니다. '사람을 배려하는 따뜻한 마음'이 담긴 제품과 작업장의 설계기술 진보에 힘을 더하는 인간공학연구실이 되겠습니다."
            </blockquote>
            
            {/* Contact Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-center gap-3 text-gray-600 bg-gray-50/80 p-3 rounded-lg border border-gray-100">
                <Phone className="w-5 h-5 text-hse-blue flex-shrink-0" />
                <span className="text-sm">+82. 51. 510. 2420</span>
              </div>
              <div className="flex items-center gap-3 text-gray-600 bg-gray-50/80 p-3 rounded-lg border border-gray-100">
                <Printer className="w-5 h-5 text-hse-blue flex-shrink-0" />
                <span className="text-sm">+82. 51. 512. 7603</span>
              </div>
              <div className="flex items-center gap-3 text-gray-600 bg-gray-50/80 p-3 rounded-lg border border-gray-100">
                <Mail className="w-5 h-5 text-hse-blue flex-shrink-0" />
                <a href="mailto:sangeunjin@pusan.ac.kr" className="text-sm hover:text-hse-blue transition-colors">sangeunjin@pusan.ac.kr</a>
              </div>
              <div className="flex items-center gap-3 text-gray-600 bg-gray-50/80 p-3 rounded-lg border border-gray-100">
                <MapPin className="w-5 h-5 text-hse-blue flex-shrink-0" />
                <span className="text-sm">10공학관 521호</span>
              </div>
            </div>
          </div>
        </div>

        {/* Education & Research Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          
          {/* Education & Experience */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 h-full">
            <h3 className="text-2xl font-bold text-gray-900 mb-10 flex items-center gap-3">
              <Briefcase className="w-6 h-6 text-hse-blue" />
              Education & Experience
            </h3>
            <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-gray-300 before:to-transparent">
              {experiences.map((exp, index) => (
                <div key={index} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                  {/* Icon */}
                  <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-gray-100 text-gray-500 group-hover:bg-hse-blue group-hover:text-white transition-colors duration-300 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 mx-auto md:mx-0 ml-0 md:ml-auto">
                    {exp.icon}
                  </div>
                  {/* Card */}
                  <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-5 rounded-xl border border-gray-100 bg-white shadow-sm hover:shadow-md transition-shadow">
                    <div className="text-xs text-hse-blue font-bold mb-2 uppercase tracking-wide bg-blue-50 w-fit px-2 py-1 rounded inline-block">{exp.period}</div>
                    <div className="font-bold text-gray-900 text-base mb-2">{exp.title}</div>
                    <div className="text-gray-500 text-sm leading-relaxed">{exp.description}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Research Interests */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 h-full flex flex-col">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-3">
              <GraduationCap className="w-6 h-6 text-hse-blue" />
              Research Interests
            </h3>
            <div className="flex-1 flex flex-col gap-5">
              {researchInterests.map((interest, index) => (
                <div key={index} className="flex items-start gap-4 p-5 rounded-xl bg-gray-50/80 border border-gray-100 hover:border-hse-blue/30 hover:bg-white transition-all group shadow-sm hover:shadow-md">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-hse-green/10 text-hse-green mt-0 shrink-0 group-hover:scale-110 group-hover:bg-hse-green group-hover:text-white transition-all shadow-sm">
                    <CheckCircle className="w-5 h-5" />
                  </div>
                  <p className="text-gray-800 font-semibold leading-relaxed mt-2">{interest}</p>
                </div>
              ))}
            </div>
          </div>
          
        </div>

        {/* Professional Activities */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 lg:p-12 mb-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8 pb-6 border-b border-gray-100 gap-4">
            <h3 className="text-2xl font-bold text-gray-900 flex items-center gap-3">
              <Award className="w-6 h-6 text-hse-blue" />
              Professional Experience and Activities
            </h3>
            <span className="bg-hse-blue/10 text-hse-blue px-4 py-1.5 rounded-full text-sm font-bold tracking-wide whitespace-nowrap">
              {activities.length} Activities
            </span>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
            {activities.map((activity, index) => (
              <div key={index} className="flex items-start gap-4 p-4 hover:bg-gray-50 rounded-xl transition-all border border-transparent hover:border-gray-100 group">
                <div className="uppercase tracking-wider font-bold text-xs text-hse-blue bg-blue-50 group-hover:bg-nse-blue group-hover:text-white px-2 py-1.5 rounded w-[100px] shrink-0 text-center flex flex-col justify-center border border-blue-100/50 shadow-sm transition-colors">
                  {activity.period}
                </div>
                <div className="pt-0.5">
                  <div className="text-sm font-bold text-gray-900 mb-1 leading-tight group-hover:text-hse-blue transition-colors">[{activity.org}]</div>
                  <div className="text-sm text-gray-600 leading-snug">{activity.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default Professor;
