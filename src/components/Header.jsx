import { useEffect, useMemo } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/연구실_로고_흰색-removebg-preview.png';
import pnuLogo from '../assets/signature04.png';
import PillNav from './PillNav';
import StaggeredMenu from './StaggeredMenu';

const navLinks = [
  { name: 'About', href: '/about' },
  { name: 'Research', href: '/research' },
  { name: 'Professor', href: '/professor' },
  { name: 'People', href: '/people' },
  { name: 'Publication', href: '/publication' },
  { name: 'News', href: '/news' },
  { name: 'Photo', href: '/photo' },
];

const Header = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  const useDarkHeader = !isHomePage;

  const menuItems = useMemo(
    () =>
      navLinks.map((link) => ({
        label: link.name,
        ariaLabel: `Go to ${link.name.toLowerCase()} page`,
        link: link.href,
      })),
    []
  );

  const desktopItems = useMemo(
    () => navLinks.map((link) => ({ label: link.name, href: link.href })),
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
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${useDarkHeader ? 'bg-white/92 backdrop-blur-xl shadow-[0_10px_40px_rgba(15,23,42,0.08)] py-3 border-b border-slate-200/80' : 'bg-transparent py-5'}`}>
      <div className="w-full max-w-[1680px] mx-auto px-4 sm:px-6 lg:px-8 2xl:px-12">
        <div className="flex items-center justify-between gap-6 xl:gap-10">
          <div className="flex items-center shrink-0">
            <Link to="/" className="flex items-center gap-4 md:gap-8 max-w-full">
              <img
                src={pnuLogo}
                alt="PNU Logo"
                className={`h-16 md:h-20 w-auto object-contain transition-all duration-300 ${useDarkHeader ? 'brightness-100 contrast-100' : 'brightness-0 invert contrast-125 drop-shadow-[0_0_18px_rgba(255,255,255,0.16)]'}`}
              />
              <div className={`h-12 w-px hidden md:block ${useDarkHeader ? 'bg-slate-300/80' : 'bg-white/20'}`}></div>
              <img
                src={logo}
                alt="HSE Lab Logo"
                className={`h-[6.5rem] md:h-[7.5rem] xl:h-[8.5rem] 2xl:h-[9.5rem] w-auto object-contain transition-all duration-300 ${useDarkHeader ? 'brightness-0 contrast-125 opacity-95' : 'drop-shadow-[0_0_22px_rgba(255,255,255,0.12)]'}`}
              />
            </Link>
          </div>

          <div className="hidden xl:flex flex-1 min-w-0 items-center justify-end">
            <PillNav
              items={desktopItems}
              activeHref={location.pathname}
              ease="power2.easeOut"
              baseColor={useDarkHeader ? '#0f172a' : '#ffffff'}
              pillColor={useDarkHeader ? 'rgba(15,23,42,0.06)' : 'rgba(255,255,255,0.10)'}
              hoveredPillTextColor={useDarkHeader ? '#ffffff' : '#0b1120'}
              pillTextColor={useDarkHeader ? '#0f172a' : '#f8fafc'}
              shellColor={useDarkHeader ? 'rgba(255,255,255,0.88)' : 'rgba(255,255,255,0.10)'}
              shellBorderColor={useDarkHeader ? 'rgba(148,163,184,0.28)' : 'rgba(255,255,255,0.18)'}
              shellShadow={useDarkHeader ? '0 16px 34px rgba(15,23,42,0.08)' : '0 18px 34px rgba(0,0,0,0.12)'}
              initialLoadAnimation={false}
            />
          </div>

          <div className="xl:hidden flex items-center shrink-0">
            <StaggeredMenu
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
