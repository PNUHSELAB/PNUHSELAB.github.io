const patentGroups = [
  {
    category: 'International Patents',
    items: [
      {
        title: 'Apparatus and method for controlling of user interface equipped touch screen',
        status: 'Active',
        number: 'US9235284B2',
        year: '2016',
        link: 'https://patentimages.storage.googleapis.com/a6/3b/65/83de83deb374b1/US9235284.pdf',
      },
    ],
  },
  {
    category: 'Domestic Patents',
    items: [
      {
        title: '건강이상 판단을 위한 압력 측정장치 애플리케이션 작동방법',
        number: '10-2019-0043436',
        year: '2019',
        link: 'https://doi.org/10.8080/1020190043436',
      },
      {
        title: '손가락별로 측정되는 압력 측정장치',
        number: '10-2019-0043438',
        year: '2019',
        link: 'https://doi.org/10.8080/1020190043438',
      },
      {
        title: '터치스크린을 구비한 운전 인터페이스 제어 장치 및 방법',
        number: '10-2015-0005296',
        year: '2016',
        link: 'https://doi.org/10.8080/1020130079071',
      },
      {
        title: '사용자 선호도 기반 안마기세 제공기능이 구비된 안마의자',
        number: '10-2021-0007549',
        year: '2021',
        link: 'https://doi.org/10.8080/1020210007549',
      },
      {
        title: '입식 자세 지지 장치 및 이를 구비하는 스탠딩 책상',
        number: '10-2021-0057052',
        year: '2021',
        link: 'https://doi.org/10.8080/1020210057052',
      },
    ],
  },
];

const Patents = () => {
  return (
    <section id="patents" className="border-t border-gray-100 bg-white pt-48 pb-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-7 lg:px-10">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-hse-green">Research</p>
          <h2 className="mt-3 text-4xl font-bold tracking-tight text-gray-900 md:text-5xl">Patents</h2>
          <div className="mt-6 h-1 w-28 rounded-full bg-gradient-to-r from-hse-green via-slate-500 to-slate-300" />
          <p className="mt-8 max-w-3xl text-base leading-relaxed text-gray-600 md:text-lg">
            Intellectual property outcomes spanning interface control, pressure-based sensing, and ergonomic product
            development.
          </p>
        </div>

        <div className="mt-16 space-y-12">
          {patentGroups.map((group) => (
            <section
              key={group.category}
              className="rounded-[30px] border border-slate-200 bg-[linear-gradient(180deg,#ffffff_0%,#fbfdfb_100%)] px-6 py-8 shadow-[0_20px_55px_rgba(15,23,42,0.05)] md:px-10 md:py-10"
            >
              <div className="flex items-center gap-3">
                <span className="inline-flex h-4 w-4 rounded-[4px] border-2 border-[#d79b13] bg-[#fff7df]" />
                <h3 className="text-2xl font-bold tracking-tight text-gray-900 md:text-[2rem]">{group.category}</h3>
              </div>

              <div className="mt-10 space-y-6">
                {group.items.map((item) => (
                  <article
                    key={`${item.title}-${item.number}`}
                    className="rounded-[26px] border border-slate-200 bg-white/90 px-5 py-5 shadow-[0_12px_30px_rgba(15,23,42,0.04)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_18px_38px_rgba(15,23,42,0.07)] md:px-6"
                  >
                    <div className="flex items-start gap-4">
                      <span className="mt-3 inline-flex h-3.5 w-3.5 shrink-0 rounded-full border-2 border-[#c18b24] bg-[#fff7df]" />
                      <div className="min-w-0">
                        <div className="flex flex-wrap items-center gap-2">
                          <h4 className="text-lg font-extrabold leading-[1.5] tracking-[-0.02em] text-gray-950 md:text-[1.5rem]">
                            {item.title}
                          </h4>
                          {item.status && (
                            <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-bold uppercase tracking-[0.14em] text-emerald-700">
                              {item.status}
                            </span>
                          )}
                        </div>
                        <p className="mt-3 text-sm font-medium text-slate-500 md:text-base">
                          {item.number}, {item.year}
                        </p>
                        <a
                          href={item.link}
                          target="_blank"
                          rel="noreferrer"
                          className="mt-3 inline-flex break-all text-sm leading-relaxed text-hse-blue underline decoration-slate-300 underline-offset-4 transition-colors duration-200 hover:text-hse-green md:text-base"
                        >
                          {item.link}
                        </a>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Patents;
