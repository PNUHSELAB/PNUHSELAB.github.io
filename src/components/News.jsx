import { useMemo, useState } from 'react';
import newsAward2025Encouragement from '../assets/news-award-2025-encouragement.png';
import newsAward2022BestPaper from '../assets/news-award-2022-best-paper.png';
import newsAward2021Excellence from '../assets/news-award-2021-excellence.png';
import newsAward2020BestPaper from '../assets/news-award-2020-best-paper.png';
import newsAward2020Encouragement from '../assets/news-award-2020-encouragement.png';
import newsAward2018Kososs from '../assets/news-award-2018-kososs.png';
import newsAward2019SpringExcellence from '../assets/news-award-2019-spring-excellence.png';
import newsAward2019FallEncouragement from '../assets/news-award-2019-fall-encouragement.png';
import newsAward2018SpringBestPaper from '../assets/news-award-2018-spring-best-paper.png';
import newsPhoto2019SpringGroup from '../assets/news-photo-2019-spring-group.png';
import newsPhoto2019FallGroup from '../assets/news-photo-2019-fall-group.png';
import newsPhotoMembershipBbq from '../assets/news-photo-membership-bbq.png';
import newsPhotoMembershipGroup from '../assets/news-photo-membership-group.png';
import newsPhotoMembershipPool from '../assets/news-photo-membership-pool.png';
import newsPhoto2018SpringStage from '../assets/news-photo-2018-spring-stage.png';
import newsPhotoFutureScientistAward from '../assets/news-photo-future-scientist-award.png';
import newsPhotoGraduationAwardGroup from '../assets/news-photo-graduation-award-group.png';
import newsPhotoGraduationAwardCertificate from '../assets/news-photo-graduation-award-certificate.png';

const newsItems = [
  {
    id: 12,
    title: '2025 추계 대한인간공학회 논문경진대회 장려상 수상',
    author: 'Hanbo Zou 외',
    date: '2025.11.07',
    image: null,
    summary: '',
    award: '장려상',
    authors: 'Hanbo Zou, 이계정, 정인아, 진상은',
    affiliation: '부산대학교',
    paperTitle: '항만 운영의 확률적 사고 경로 분석',
    images: [newsAward2025Encouragement],
  },
  {
    id: 11,
    title: '2022 추계 대한인간공학회 논문경진대회 최우수 논문상 수상',
    author: '김하영 외',
    date: '2022.10.07',
    image: null,
    summary: '',
    award: '최우수 논문상',
    authors: '김하영, 진상은',
    affiliation: '부산대학교',
    paperTitle: '작업 조건에 따른 택배 배송 작업가능시간에 관한 연구',
    images: [newsAward2022BestPaper],
  },
  {
    id: 10,
    title: '2021 춘계 대한인간공학회 논문경진대회 우수상 수상',
    author: '최지원',
    date: '2021.06.18',
    image: null,
    summary: '',
    award: '우수상',
    authors: '최지원, 강상현, 진상은',
    affiliation: '부산대학교',
    paperTitle: '스탠딩데스크 사용 시 생체역학적 부하 최소화를 위한 인간공학적 중재',
    images: [newsAward2021Excellence],
  },
  {
    id: 9,
    title: '2020 추계 대한인간공학회 논문경진대회 최우수 논문상 수상',
    author: '강상현 외',
    date: '2020.10.30',
    image: null,
    summary: '',
    award: '최우수 논문상',
    authors: '강상현, 최지원, 추한박, 진상은',
    affiliation: '부산대학교',
    paperTitle: '입식-좌식 작업대의 육체적 및 인지적 작업부하에 대한 비용-편익 분석 - 통증 유발자를 중심으로',
    images: [newsAward2020BestPaper],
  },
  {
    id: 8,
    title: '2020 추계 대한인간공학회 논문경진대회 장려상 수상',
    author: '김슬기 외',
    date: '2020.10.30',
    image: null,
    summary: '',
    award: '장려상',
    authors: '김슬기, 추한박, 진상은',
    affiliation: '부산대학교',
    paperTitle: '장시간 입식-좌식 작업대 사용 전략에 따른 생체역학적 변화 분석',
    images: [newsAward2020Encouragement],
  },
  {
    id: 7,
    title: '2018 춘계 한국안전학회 우수논문상 수상',
    author: '이일석',
    date: '2018.11.08',
    image: null,
    summary: '',
    award: '우수논문상',
    authors: '이일석, 심상현, 진상은',
    affiliation: '',
    paperTitle: '햄스트링 스트레칭 운동이 착좌자세의 생체역학적 변화에 미치는 영향',
    images: [newsAward2018Kososs],
  },
  {
    id: 6,
    title: '2019 춘계 대한인간공학회 논문경진대회 우수상 수상',
    author: '김슬기 외',
    date: '2019.05.16',
    image: null,
    summary: '',
    award: '우수상',
    authors: '김슬기, 진상은, 이일석, 강상현',
    affiliation: '부산대학교',
    paperTitle: '장시간 착좌 시 착좌 전략에 따른 상체의 생체역학적 변화',
    images: [newsAward2019SpringExcellence, newsPhoto2019SpringGroup],
  },
  {
    id: 5,
    title: '2019 추계 대한인간공학회 논문경진대회 장려상 수상',
    author: '이일석 외',
    date: '2019.10.17',
    image: null,
    summary: '',
    award: '장려상',
    authors: '이일석, 고평향, 남명경, 진상은',
    affiliation: '부산대학교',
    paperTitle: '스탠딩 데스크의 인간공학적 가이드라인 개발',
    images: [newsAward2019FallEncouragement],
  },
  {
    id: 4,
    title: '전반기 Lab Membership training in 청도',
    author: '이일석',
    date: '2018.09.27',
    image: null,
    summary: '',
    award: '',
    authors: '',
    affiliation: '',
    paperTitle: '',
    images: [newsPhotoMembershipGroup, newsPhotoMembershipPool],
  },
  {
    id: 3,
    title: '2018 춘계 대한인간공학회 논문경진대회 최우수 논문상 수상',
    author: '김슬기 외',
    date: '2018.05.17',
    image: null,
    summary: '',
    award: '최우수 논문상',
    authors: 'Seulgi Kim, Ilseok Lee, Sangeun Jin',
    affiliation: 'Pusan National University',
    paperTitle: 'The effect of lower extremity postures on trunk kinematics while sitting',
    images: [newsPhoto2018SpringStage],
  },
  {
    id: 2,
    title: '제 13회 부산 미래 과학자상 대학생 공학부문 우수상 수상',
    author: '이일석',
    date: '2018.01.11',
    image: null,
    summary: '',
    award: '',
    authors: '',
    affiliation: '',
    paperTitle: '',
    images: [newsPhotoFutureScientistAward],
  },
  {
    id: 1,
    title: '2017 하반기 졸업과제 최우수상 수상',
    author: '이일석',
    date: '2018.01.11',
    image: null,
    summary: '',
    award: '',
    authors: '',
    affiliation: '',
    paperTitle: '',
    images: [newsPhotoGraduationAwardGroup, newsPhotoGraduationAwardCertificate],
  },
];

const ITEMS_PER_PAGE = 4;

const News = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedNews, setSelectedNews] = useState(newsItems[0]);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const totalPages = Math.ceil(newsItems.length / ITEMS_PER_PAGE);

  const visibleItems = useMemo(() => {
    const start = (currentPage - 1) * ITEMS_PER_PAGE;
    return newsItems.slice(start, start + ITEMS_PER_PAGE);
  }, [currentPage]);

  const galleryImages = selectedNews.images?.length ? selectedNews.images : [];

  const handleSelectNews = (item) => {
    setSelectedNews(item);
    setActiveImageIndex(0);
  };

  const getCardImage = (item) => (item.images?.length ? item.images[0] : null);

  return (
    <section className="border-t border-gray-100 bg-white pt-48 pb-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-7 lg:px-10">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-hse-blue">Lab Updates</p>
          <h2 className="mt-3 text-4xl font-bold tracking-tight text-gray-900 md:text-5xl">News</h2>
          <div className="mt-6 h-1 w-28 rounded-full bg-gradient-to-r from-hse-blue via-slate-500 to-slate-300" />
          <p className="mt-8 max-w-3xl text-base leading-relaxed text-gray-600 md:text-lg">
            Awards, milestones, and lab activities from HSE Lab. Browse a few highlights at a time and open each card
            to see it in more detail.
          </p>
        </div>

        <div className="mt-16 grid gap-8 xl:grid-cols-[1.2fr_0.8fr]">
          <div className="rounded-[32px] border border-slate-200 bg-[linear-gradient(180deg,#ffffff_0%,#fbfdff_100%)] p-5 shadow-[0_24px_55px_rgba(15,23,42,0.06)] md:p-7">
            <div className="grid gap-5 md:grid-cols-2">
              {visibleItems.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => handleSelectNews(item)}
                  className={`group overflow-hidden rounded-[28px] border text-left transition-all duration-300 ${
                    selectedNews.id === item.id
                      ? 'border-hse-blue bg-slate-950 shadow-[0_24px_60px_rgba(15,23,42,0.16)]'
                      : 'border-slate-200 bg-white hover:-translate-y-1 hover:border-slate-300 hover:shadow-[0_18px_45px_rgba(15,23,42,0.08)]'
                  }`}
                >
                  <div className="relative h-[250px] overflow-hidden md:h-[280px]">
                    {getCardImage(item) ? (
                      <>
                        <img
                          src={getCardImage(item)}
                          alt={item.title}
                          className={`h-full w-full object-cover transition-transform duration-500 ${
                            selectedNews.id === item.id ? 'scale-105' : 'group-hover:scale-105'
                          }`}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/78 via-black/28 to-transparent" />
                      </>
                    ) : (
                      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(135deg,#f8fafc_0%,#eef2f7_52%,#dde6f0_100%)]">
                        <span className="rounded-full border border-slate-300 bg-white/80 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-slate-500">
                          No Image
                        </span>
                      </div>
                    )}
                    <div className="absolute left-4 top-4 rounded-full bg-white/92 px-3 py-1 text-xs font-bold uppercase tracking-[0.16em] text-slate-900">
                      #{item.id}
                    </div>
                  </div>

                  <div className="p-5 md:p-6">
                    <div className="flex items-center justify-between gap-3 text-xs font-semibold uppercase tracking-[0.14em]">
                      <span className={selectedNews.id === item.id ? 'text-emerald-200' : 'text-slate-400'}>
                        {item.date}
                      </span>
                      <span className={selectedNews.id === item.id ? 'text-white/70' : 'text-slate-500'}>
                        {item.author}
                      </span>
                    </div>
                    <h3
                      className={`mt-4 text-xl font-extrabold leading-[1.42] tracking-[-0.02em] ${
                        selectedNews.id === item.id ? 'text-white' : 'text-gray-950'
                      }`}
                    >
                      {item.title}
                    </h3>
                    {item.paperTitle && (
                      <p
                        className={`mt-3 line-clamp-3 text-sm leading-6 ${
                          selectedNews.id === item.id ? 'text-white/72' : 'text-slate-500'
                        }`}
                      >
                        {item.paperTitle}
                      </p>
                    )}
                  </div>
                </button>
              ))}
            </div>

            <div className="mt-8 flex items-center justify-center gap-2">
              {Array.from({ length: totalPages }, (_, index) => index + 1).map((page) => (
                <button
                  key={page}
                  type="button"
                  onClick={() => {
                    setCurrentPage(page);
                    handleSelectNews(newsItems[(page - 1) * ITEMS_PER_PAGE]);
                  }}
                  className={`inline-flex h-11 min-w-11 items-center justify-center rounded-full px-4 text-sm font-bold transition-colors ${
                    currentPage === page
                      ? 'bg-slate-950 text-white'
                      : 'border border-slate-200 bg-white text-slate-600 hover:border-slate-300 hover:text-slate-950'
                  }`}
                >
                  {page}
                </button>
              ))}
            </div>
          </div>

          <aside className="rounded-[32px] border border-slate-200 bg-slate-950 p-5 text-white shadow-[0_24px_55px_rgba(15,23,42,0.12)] md:p-7">
            <div className="overflow-hidden rounded-[26px] border border-white/10">
              {galleryImages.length > 0 ? (
                <img
                  src={galleryImages[activeImageIndex]}
                  alt={selectedNews.title}
                  className="h-[260px] w-full object-cover md:h-[320px]"
                />
              ) : (
                <div className="flex h-[260px] w-full items-center justify-center bg-[linear-gradient(135deg,#0f172a_0%,#18283a_50%,#1e293b_100%)] md:h-[320px]">
                  <span className="rounded-full border border-white/15 bg-white/8 px-5 py-2 text-xs font-bold uppercase tracking-[0.18em] text-white/55">
                    Image Coming Soon
                  </span>
                </div>
              )}
            </div>

            {galleryImages.length > 1 && (
              <div className="mt-4 grid grid-cols-4 gap-3">
                {galleryImages.map((image, index) => (
                  <button
                    key={`${selectedNews.id}-thumb-${index}`}
                    type="button"
                    onClick={() => setActiveImageIndex(index)}
                    className={`overflow-hidden rounded-2xl border transition-all ${
                      activeImageIndex === index
                        ? 'border-emerald-300 shadow-[0_0_0_1px_rgba(110,231,183,0.35)]'
                        : 'border-white/10 opacity-80 hover:opacity-100'
                    }`}
                  >
                    <img src={image} alt={`${selectedNews.title} ${index + 1}`} className="h-20 w-full object-cover" />
                  </button>
                ))}
              </div>
            )}

            <div className="mt-6 flex items-center justify-between gap-4">
              <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-bold uppercase tracking-[0.16em] text-emerald-200">
                {selectedNews.award || 'Highlight'}
              </span>
              <span className="text-sm font-medium text-white/60">{selectedNews.date}</span>
            </div>

            <h3 className="mt-5 text-2xl font-extrabold leading-[1.35] tracking-[-0.03em]">{selectedNews.title}</h3>
            <p className="mt-4 text-sm font-semibold uppercase tracking-[0.14em] text-white/55">
              Posted by {selectedNews.author}
            </p>
            <div className="mt-6 space-y-4 rounded-[24px] border border-white/10 bg-white/5 p-5">
              {selectedNews.paperTitle && (
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-white/40">Paper</p>
                  <p className="mt-2 text-base leading-7 text-white/88">{selectedNews.paperTitle}</p>
                </div>
              )}
              {selectedNews.authors && (
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-white/40">Authors</p>
                  <p className="mt-2 text-base leading-7 text-white/78">{selectedNews.authors}</p>
                </div>
              )}
              {selectedNews.affiliation && (
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-white/40">Affiliation</p>
                  <p className="mt-2 text-base leading-7 text-white/78">{selectedNews.affiliation}</p>
                </div>
              )}
            </div>

            <button
              type="button"
              onClick={() => setCurrentPage(Math.ceil(selectedNews.id / ITEMS_PER_PAGE))}
              className="mt-8 inline-flex rounded-full border border-white/15 bg-white/8 px-5 py-3 text-sm font-semibold uppercase tracking-[0.12em] text-white transition-colors hover:bg-white/14"
            >
              Browse This Page
            </button>
          </aside>
        </div>
      </div>
    </section>
  );
};

export default News;
