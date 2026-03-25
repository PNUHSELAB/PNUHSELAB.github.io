const books = [
  {
    year: '2009',
    title:
      'Driver Cognitive Abilities and Driving Performance: The Role of Driver Cognitive Abilities and Distractions in Situation Awareness and Performance under Hazard Conditions',
    citation:
      'Sangeun Jin (2009). Driver Cognitive Abilities and Driving Performance: The Role of Driver Cognitive Abilities and Distractions in Situation Awareness and Performance under Hazard Conditions. VDM Verlag',
    link: 'https://www.hugendubel.info/detail/ISBN-9783639139501/Jin-Sangeun/Driver-Cognitive-Abilities-and-Driving--Performance',
    image:
      'https://his.pusan.ac.kr/sites/hse/images/temp_1614243629037100.png',
  },
];

const Books = () => {
  return (
    <section className="border-t border-gray-100 bg-white pt-48 pb-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-7 lg:px-10">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-hse-blue">Publication</p>
          <h2 className="mt-3 text-4xl font-bold tracking-tight text-gray-900 md:text-5xl">Books</h2>
          <div className="mt-6 h-1 w-28 rounded-full bg-gradient-to-r from-hse-blue via-slate-500 to-slate-300" />
          <p className="mt-8 max-w-3xl text-base leading-relaxed text-gray-600 md:text-lg">
            Authored books and scholarly monographs from the Human &amp; Safety Engineering Lab.
          </p>
        </div>

        <div className="mt-16 rounded-[30px] border border-slate-200 bg-[linear-gradient(180deg,#ffffff_0%,#fbfdff_100%)] px-6 py-8 shadow-[0_20px_55px_rgba(15,23,42,0.05)] md:px-10 md:py-10">
          <div className="space-y-10">
            {books.map((book) => (
              <section key={book.title}>
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-3.5 w-3.5 shrink-0 rounded-full border-2 border-[#c18b24] bg-[#fff7df]" />
                  <h3 className="text-2xl font-bold tracking-tight text-gray-900 md:text-[2rem]">{book.year}</h3>
                </div>

                <article className="mt-5 rounded-[26px] border border-slate-200 bg-white/90 p-5 shadow-[0_12px_30px_rgba(15,23,42,0.04)] md:p-8">
                  <div className="grid gap-8 md:grid-cols-[minmax(220px,280px)_1fr] md:items-start">
                    <a href={book.link} target="_blank" rel="noreferrer" className="group block">
                      <img
                        src={book.image}
                        alt={book.title}
                        className="w-full rounded-[22px] border border-slate-200 object-cover shadow-[0_18px_45px_rgba(15,23,42,0.10)] transition-transform duration-300 group-hover:-translate-y-1"
                      />
                    </a>

                    <div>
                      <a href={book.link} target="_blank" rel="noreferrer" className="group block">
                        <h4 className="text-xl font-extrabold leading-[1.4] tracking-[-0.02em] text-gray-950 transition-colors duration-200 group-hover:text-hse-blue md:text-[2rem]">
                          {book.title}
                        </h4>
                        <p className="mt-4 text-base leading-8 text-gray-700 md:text-[1.06rem]">{book.citation}</p>
                        <p className="mt-5 inline-flex text-sm font-semibold uppercase tracking-[0.16em] text-slate-400 transition-colors duration-200 group-hover:text-hse-green">
                          Open Book Record
                        </p>
                      </a>
                    </div>
                  </div>
                </article>
              </section>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Books;
