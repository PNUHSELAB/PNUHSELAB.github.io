import { useEffect, useMemo } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/연구실_로고_흰색-removebg-preview.png';
import pnuLogo from '../assets/signature04.png';
import StaggeredMenu from './StaggeredMenu';
import './HeaderNav.css';

const navLinks = [
  { name: 'About', href: '/about' },
  { name: 'Research', href: '/research' },
  { name: 'Professor', href: '/professor' },
  { name: 'People', href: '/people' },
  { name: 'Publication', href: '/publication' },
  { name: 'News', href: '/news' },
  { name: 'Photo', href: '/photo' },
];

const researchSubLinks = [
  { name: 'Research Areas', href: '/research' },
  { name: 'Projects', href: '/research/projects' },
  { name: 'Patents', href: '/research/patents' },
  { name: 'Research Facilities', href: '/research/facilities' },
];

const peopleSubLinks = [
  { name: 'Research Professor', href: '/people#research-professor' },
  { name: 'Administrative Staff', href: '/people#administrative-staff' },
  { name: 'Ph.D. Candidates', href: '/people#phd-candidates-and-students' },
  { name: 'M.S. Students', href: '/people#ms-students' },
  { name: 'Researcher', href: '/people#research-staff' },
  { name: 'Undergraduate Students', href: '/people#undergraduate-students' },
  { name: 'Alumni', href: '/people#alumni' },
];

const publicationSubLinks = [
  { name: 'International Journals', href: '/publication' },
  { name: 'International Conferences', href: '/publication/international-conferences' },
  { name: 'Domestic Journals', href: '/publication/domestic-journals' },
  { name: 'Domestic Conferences', href: '/publication/domestic-conferences' },
  { name: 'Books', href: '/publication/books' },
];

const Header = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  const useDarkHeader = !isHomePage;

  const handleLogoClick = () => {
    if (!isHomePage) {
      return;
    }

    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const menuItems = useMemo(
    () =>
      navLinks.map((link) => {
        const children =
          link.name === 'Research'
            ? researchSubLinks
            : link.name === 'People'
              ? peopleSubLinks
              : link.name === 'Publication'
                ? publicationSubLinks
                : undefined;

        return {
          label: link.name,
          ariaLabel: `Go to ${link.name.toLowerCase()} page`,
          link: link.href,
          children: children?.map((childLink) => ({
            label: childLink.name,
            ariaLabel:
              link.name === 'People'
                ? `Go to ${childLink.name.toLowerCase()} section`
                : `Go to ${childLink.name.toLowerCase()} page`,
            link: childLink.href,
          })),
        };
      }),
    []
  );

  useEffect(() => {
    if (isHomePage) {
      return undefined;
    }

    const handleScroll = () => {
      // Keep the effect attached so non-home pages can respond consistently if needed later.
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isHomePage]);

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${useDarkHeader ? 'bg-white/92 backdrop-blur-xl shadow-[0_10px_40px_rgba(15,23,42,0.08)] py-2.5 md:py-3 border-b border-slate-200/80' : 'bg-transparent py-3 md:py-5'}`}>
      <div className="w-full max-w-[1680px] mx-auto px-3 sm:px-6 lg:px-8 2xl:px-12">
        <div className="flex items-center justify-between gap-3 md:gap-6 xl:gap-10">
          <div className="flex items-center shrink-0">
            <Link
              to="/"
              onClick={handleLogoClick}
              className="flex items-center gap-2.5 sm:gap-4 md:gap-8 max-w-full"
            >
              <img
                src={pnuLogo}
                alt="PNU Logo"
                className={`h-7 sm:h-9 md:h-[3.25rem] xl:h-[3.75rem] w-auto object-contain transition-all duration-300 ${useDarkHeader ? 'brightness-100 contrast-100' : 'brightness-0 invert contrast-125 drop-shadow-[0_0_18px_rgba(255,255,255,0.16)]'}`}
              />
              <div className={`h-10 w-px hidden lg:block ${useDarkHeader ? 'bg-slate-300/80' : 'bg-white/20'}`}></div>
              <img
                src={logo}
                alt="HSE Lab Logo"
                className={`h-[3.75rem] sm:h-[4.8rem] md:h-[7.5rem] xl:h-[8.5rem] 2xl:h-[9.5rem] w-auto object-contain transition-all duration-300 ${useDarkHeader ? 'brightness-0 contrast-125 opacity-95' : 'drop-shadow-[0_0_22px_rgba(255,255,255,0.12)]'}`}
              />
            </Link>
          </div>

          <div className="hidden xl:flex flex-1 min-w-0 items-center justify-end">
            <nav
              className={`header-nav-shell flex items-center rounded-full border p-1.5 shadow-[0_16px_34px_rgba(15,23,42,0.08)] backdrop-blur-xl ${
                useDarkHeader
                  ? 'border-slate-200/90 bg-white/90'
                  : 'border-white/15 bg-white/10 shadow-[0_18px_34px_rgba(0,0,0,0.12)]'
              }`}
              aria-label="Primary"
              style={{
                '--header-nav-base': useDarkHeader ? '#0f172a' : '#ffffff',
                '--header-nav-hover-bg': useDarkHeader ? '#0f172a' : '#ffffff',
                '--header-nav-hover-text': useDarkHeader ? '#ffffff' : '#0b1120',
              }}
            >
              {navLinks.map((link) => {
                const isResearch = link.name === 'Research';
                const isPeople = link.name === 'People';
                const isPublication = link.name === 'Publication';
                const subLinks = isResearch
                  ? researchSubLinks
                  : isPeople
                    ? peopleSubLinks
                    : isPublication
                      ? publicationSubLinks
                      : null;
                const isActive = isResearch
                  ? location.pathname === '/research' || location.pathname.startsWith('/research/')
                  : isPeople
                    ? location.pathname === '/people'
                    : isPublication
                      ? location.pathname === '/publication' || location.pathname.startsWith('/publication/')
                    : location.pathname === link.href;
                const itemClasses = `header-nav-item relative inline-flex items-center justify-center rounded-full px-4 py-3 text-[0.82rem] font-semibold uppercase tracking-[0.08em] transition-all duration-200 ${
                  useDarkHeader
                    ? isActive
                      ? 'bg-slate-900 text-white'
                      : 'text-slate-900 hover:bg-slate-100 hover:text-hse-blue'
                    : isActive
                      ? 'bg-white text-slate-900'
                      : 'text-slate-50 hover:bg-white/12 hover:text-white'
                }`;

                if (subLinks) {
                  return (
                    <div key={link.href} className="group relative">
                      <Link to={link.href} className={itemClasses}>
                        {!isActive && <span className="header-nav-hover-circle" aria-hidden="true" />}
                        <span className="header-nav-label-stack">
                          <span className="header-nav-label">{link.name}</span>
                          {!isActive && (
                            <span className="header-nav-label-hover" aria-hidden="true">
                              {link.name}
                            </span>
                          )}
                        </span>
                      </Link>
                      <div className="pointer-events-none absolute left-1/2 top-full z-50 w-64 -translate-x-1/2 pt-3 opacity-0 transition-all duration-200 group-hover:pointer-events-auto group-hover:opacity-100">
                        <div
                          className={`rounded-[24px] border p-2 shadow-[0_24px_50px_rgba(15,23,42,0.14)] backdrop-blur-xl ${
                            useDarkHeader
                              ? 'border-slate-200 bg-white/96'
                              : 'border-white/15 bg-slate-950/78'
                          }`}
                        >
                          {subLinks.map((subLink) => (
                            <Link
                              key={subLink.href}
                              to={subLink.href}
                              className={`flex items-center justify-between rounded-2xl px-4 py-3 text-sm font-semibold transition-colors ${
                                useDarkHeader
                                  ? 'text-slate-700 hover:bg-slate-100 hover:text-hse-blue'
                                  : 'text-slate-100 hover:bg-white/10 hover:text-white'
                              }`}
                            >
                              <span>{subLink.name}</span>
                              <span className="text-xs opacity-60">+</span>
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  );
                }

                return (
                  <Link key={link.href} to={link.href} className={itemClasses}>
                    {!isActive && <span className="header-nav-hover-circle" aria-hidden="true" />}
                    <span className="header-nav-label-stack">
                      <span className="header-nav-label">{link.name}</span>
                      {!isActive && (
                        <span className="header-nav-label-hover" aria-hidden="true">
                          {link.name}
                        </span>
                      )}
                    </span>
                  </Link>
                );
              })}
            </nav>
          </div>

          <div className="xl:hidden flex items-center shrink-0">
            <StaggeredMenu
              key={useDarkHeader ? 'mobile-menu-dark' : 'mobile-menu-light'}
              position="right"
              items={menuItems}
              socialItems={[]}
              displaySocials={false}
              displayItemNumbering
              menuButtonColor={useDarkHeader ? '#0f172a' : '#ffffff'}
              openMenuButtonColor={useDarkHeader ? '#0f172a' : '#ffffff'}
              changeMenuColorOnOpen
              colors={useDarkHeader ? ['#e2e8f0', '#cbd5e1'] : ['#d9fff0', '#dbeafe']}
              accentColor="#6cff7f"
              isFixed
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
