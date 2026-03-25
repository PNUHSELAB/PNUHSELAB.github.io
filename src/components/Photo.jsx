import groupPhoto2026 from '../assets/photo-group-2026.jpg';

const photoGroups = [
  {
    year: '2026',
    title: 'HSE Lab Group Photo',
    description:
      'Outdoor group portrait of the Human & Safety Engineering Lab members.',
    image: groupPhoto2026,
  },
];

const Photo = () => {
  return (
    <section className="border-t border-gray-100 bg-white pt-48 pb-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-7 lg:px-10">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-hse-blue">Gallery</p>
          <h2 className="mt-3 text-4xl font-bold tracking-tight text-gray-900 md:text-5xl">Photo</h2>
          <div className="mt-6 h-1 w-28 rounded-full bg-gradient-to-r from-hse-blue via-slate-500 to-slate-300" />
          <p className="mt-8 max-w-3xl text-base leading-relaxed text-gray-600 md:text-lg">
            Group photos, lab moments, and visual records from HSE Lab activities.
          </p>
        </div>

        <div className="mt-16 space-y-10">
          {photoGroups.map((photo) => (
            <article
              key={`${photo.year}-${photo.title}`}
              className="overflow-hidden rounded-[32px] border border-slate-200 bg-[linear-gradient(180deg,#ffffff_0%,#fbfdff_100%)] shadow-[0_24px_55px_rgba(15,23,42,0.06)]"
            >
              <div className="relative">
                <img
                  src={photo.image}
                  alt={photo.title}
                  className="h-[320px] w-full object-cover md:h-[460px]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
                <div className="absolute left-6 top-6 rounded-full bg-white/92 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-slate-900">
                  {photo.year}
                </div>
              </div>

              <div className="px-6 py-6 md:px-8 md:py-8">
                <h3 className="text-2xl font-extrabold tracking-[-0.03em] text-gray-950 md:text-[2rem]">
                  {photo.title}
                </h3>
                <p className="mt-3 text-base leading-8 text-gray-600 md:text-[1.05rem]">{photo.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Photo;
