import logo from '../assets/logo.png';

const About = () => {
  return (
    <section id="about" className="pt-28 md:pt-36 pb-20 md:pb-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto -mt-2 md:-mt-6 mb-8">
          <div className="flex justify-center mb-4 md:mb-5">
            <img
              src={logo}
              alt="HSE Lab Logo"
              className="w-full max-w-[280px] sm:max-w-[360px] md:max-w-[520px] h-auto object-contain"
            />
          </div>
          <h2 className="text-sm font-semibold text-hse-blue tracking-wide uppercase mb-2">About The Lab</h2>
          <h3 className="mx-auto max-w-5xl text-[1.5rem] sm:text-[1.8rem] md:text-[2.2rem] font-bold text-gray-900 mb-4 leading-[1.2] md:whitespace-nowrap">
            Welcome to The Human &amp; Safety Engineering Lab
          </h3>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed">
            The Human &amp; Safety Engineering Lab at Pusan National University studies human capabilities and
            limitations so that workplaces, products, and systems can be designed to be safer, healthier, and more
            effective.
          </p>
          <p className="mt-3 text-sm sm:text-base md:text-lg text-gray-500 leading-relaxed">
            인간공학 연구실은 사용자 중심의 편리하고 안전한 제품 및
            <br />
            작업장 설계를 위한 솔루션을 제공하기 위해 연구를 수행합니다.
            <br />
            <br />
            인간의 능력과 한계, 그리고 작업 환경과 시스템 요소 간의
            <br />
            상호작용을 이해하고, 이를 바탕으로 보다 안전하고 건강하며
            <br />
            효율적인 제품, 과업, 환경, 시스템 설계에 기여하는 것을 목표로 합니다.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
