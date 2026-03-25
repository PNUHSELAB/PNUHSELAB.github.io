const scholarLink = (query) => `https://scholar.google.com/scholar?q=${encodeURIComponent(query)}`;

const conferenceGroups = [
  {
    year: '2025',
    items: [
      {
        title: 'How Display Types of Non-Driving Related Tasks Affect Driver Performance and Situation Awareness in Conditionally Automated Driving?',
        citation:
          'Jeong, I., Kim, S., Zou, H., Lee, S., Jin, S. (2025). How Display Types of Non-Driving Related Tasks Affect Driver Performance and Situation Awareness in Conditionally Automated Driving?. HCI International 2025 Posters. Gothenburg, Sweden',
        link: scholarLink('How Display Types of Non-Driving Related Tasks Affect Driver Performance and Situation Awareness in Conditionally Automated Driving'),
      },
    ],
  },
  {
    year: '2024',
    items: [
      {
        title: 'An Investigation of Driver’s Response and Workload After Take-over Request According to the Task Characteristics in Conditionally Automated Driving',
        citation:
          'I Jeong, S Kim, S Jin*., (2024). An Investigation of Driver’s Response and Workload After Take-over Request According to the Task Characteristics in Conditionally Automated Driving. International Applied Human Factors and Ergonomics Conference, Nice, France',
        link: scholarLink('An Investigation of Driver’s Response and Workload After Take-over Request According to the Task Characteristics in Conditionally Automated Driving'),
      },
      {
        title: 'How Does the Exoskeleton Reduce Stress on the Passive Tissues of the Lower Back?',
        citation:
          'H Zou, S Jin*., (2024). How Does the Exoskeleton Reduce Stress on the Passive Tissues of the Lower Back?, International Ergonomics Association (IEA), Jeju, Korea',
        link: scholarLink('How Does the Exoskeleton Reduce Stress on the Passive Tissues of the Lower Back'),
      },
    ],
  },
  {
    year: '2022',
    items: [
      {
        title: 'Comparison of various non-driving related task conditions on the take-over performance in the conditionally automated driving',
        citation:
          'J Jeong, S Kim, D Kim, S Jin*., (2022). Comparison of various non-driving related task conditions on the take-over performance in the conditionally automated driving. 9th International Ergonomics Conference. Zagreb, Croatia',
        link: scholarLink('Comparison of various non-driving related task conditions on the take-over performance in the conditionally automated driving'),
      },
    ],
  },
  {
    year: '2018',
    items: [
      {
        title: 'The Effect of the Lower Extremity Posture on Trunk While Sitting',
        citation:
          'S Kim, SR Chang, S Jin*., (2018). The Effect of the Lower Extremity Posture on Trunk While Sitting. Congress of the International Ergonomics Association, 179-186.',
        link: scholarLink('The Effect of the Lower Extremity Posture on Trunk While Sitting'),
      },
    ],
  },
  {
    year: '2009',
    items: [
      {
        title: 'The Effects of Aging and Cognitive Stress Disposition on Driver Situation Awareness and Performance under Hazardous Conditions',
        citation:
          'S Jin, M Garner, P Mosaly, D Kaber.* (2009). The Effects of Aging and Cognitive Stress Disposition on Driver Situation Awareness and Performance under Hazardous Conditions',
        link: scholarLink('The Effects of Aging and Cognitive Stress Disposition on Driver Situation Awareness and Performance under Hazardous Conditions'),
      },
      {
        title: 'The role of driver cognitive abilities and distractions in situation awareness and performance under hazard conditions',
        citation:
          'S Jin, DB Kaber.* (2009). The role of driver cognitive abilities and distractions in situation awareness and performance under hazard conditions. Proceedings of the IEA 2009 17th World Congress on Ergonomics, Beijing, China',
        link: scholarLink('The role of driver cognitive abilities and distractions in situation awareness and performance under hazard conditions'),
      },
    ],
  },
];

const InternationalConferences = () => {
  return (
    <section className="border-t border-gray-100 bg-white pt-48 pb-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-7 lg:px-10">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-hse-green">Publication</p>
          <h2 className="mt-3 text-4xl font-bold tracking-tight text-gray-900 md:text-5xl">International Conferences</h2>
          <div className="mt-6 h-1 w-28 rounded-full bg-gradient-to-r from-hse-green via-slate-500 to-slate-300" />
          <p className="mt-8 max-w-3xl text-base leading-relaxed text-gray-600 md:text-lg">
            International conference papers, posters, and proceedings presented by the Human &amp; Safety Engineering
            Lab.
          </p>
        </div>

        <div className="mt-16 rounded-[30px] border border-slate-200 bg-[linear-gradient(180deg,#ffffff_0%,#fbfdfb_100%)] px-6 py-8 shadow-[0_20px_55px_rgba(15,23,42,0.05)] md:px-10 md:py-10">
          <div className="space-y-10">
            {conferenceGroups.map((group) => (
              <section key={group.year}>
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-3.5 w-3.5 shrink-0 rounded-full border-2 border-[#c18b24] bg-[#fff7df]" />
                  <h3 className="text-2xl font-bold tracking-tight text-gray-900 md:text-[2rem]">{group.year}</h3>
                </div>

                <div className="mt-5 space-y-4 pl-2 md:pl-5">
                  {group.items.map((item) => (
                    <article
                      key={`${group.year}-${item.title}`}
                      className="rounded-[24px] border border-transparent px-4 py-4 transition-all duration-300 hover:border-slate-200 hover:bg-slate-50/70"
                    >
                      <a href={item.link} target="_blank" rel="noreferrer" className="group block">
                        <h4 className="text-lg font-extrabold leading-[1.55] tracking-[-0.02em] text-gray-950 transition-colors duration-200 group-hover:text-hse-blue md:text-[1.45rem]">
                          {item.title}
                        </h4>
                        <p className="mt-2 text-base leading-8 text-gray-700 md:text-[1.06rem]">{item.citation}</p>
                        <p className="mt-3 inline-flex text-sm font-semibold uppercase tracking-[0.16em] text-slate-400 transition-colors duration-200 group-hover:text-hse-green">
                          Open Record
                        </p>
                      </a>
                    </article>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default InternationalConferences;
