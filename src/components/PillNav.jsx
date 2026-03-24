import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import './PillNav.css';

const isExternalLink = (href) =>
  href?.startsWith('http://') ||
  href?.startsWith('https://') ||
  href?.startsWith('//') ||
  href?.startsWith('mailto:') ||
  href?.startsWith('tel:') ||
  href?.startsWith('#');

const isRouterLink = (href) => href && !isExternalLink(href);

const PillNav = ({
  logo,
  logoAlt = 'Logo',
  items,
  activeHref,
  className = '',
  ease = 'power2.easeOut',
  baseColor = '#ffffff',
  pillColor = '#0a0f1d',
  hoveredPillTextColor = '#0a0f1d',
  pillTextColor,
  shellColor = 'rgba(255,255,255,0.12)',
  shellBorderColor = 'rgba(255,255,255,0.18)',
  shellShadow = '0 18px 36px rgba(0, 0, 0, 0.16)',
  initialLoadAnimation = false,
}) => {
  const resolvedPillTextColor = pillTextColor ?? baseColor;
  const circleRefs = useRef([]);
  const tlRefs = useRef([]);
  const activeTweenRefs = useRef([]);
  const logoImgRef = useRef(null);
  const logoTweenRef = useRef(null);
  const navItemsRef = useRef(null);
  const logoRef = useRef(null);

  useEffect(() => {
    const layout = () => {
      circleRefs.current.forEach((circle, index) => {
        if (!circle?.parentElement) {
          return;
        }

        const pill = circle.parentElement;
        const rect = pill.getBoundingClientRect();
        const { width, height } = rect;
        const radius = ((width * width) / 4 + height * height) / (2 * height);
        const diameter = Math.ceil(2 * radius) + 2;
        const delta = Math.ceil(radius - Math.sqrt(Math.max(0, radius * radius - (width * width) / 4))) + 1;
        const originY = diameter - delta;

        circle.style.width = `${diameter}px`;
        circle.style.height = `${diameter}px`;
        circle.style.bottom = `-${delta}px`;

        gsap.set(circle, {
          xPercent: -50,
          scale: 0,
          transformOrigin: `50% ${originY}px`,
        });

        const label = pill.querySelector('.pill-label');
        const hoverLabel = pill.querySelector('.pill-label-hover');
        if (label) {
          gsap.set(label, { y: 0 });
        }
        if (hoverLabel) {
          gsap.set(hoverLabel, { y: height + 12, opacity: 0 });
        }

        tlRefs.current[index]?.kill();
        const tl = gsap.timeline({ paused: true });
        tl.to(circle, { scale: 1.18, xPercent: -50, duration: 1.2, ease, overwrite: 'auto' }, 0);
        if (label) {
          tl.to(label, { y: -(height + 8), duration: 1.2, ease, overwrite: 'auto' }, 0);
        }
        if (hoverLabel) {
          tl.to(hoverLabel, { y: 0, opacity: 1, duration: 1.2, ease, overwrite: 'auto' }, 0);
        }
        tlRefs.current[index] = tl;
      });
    };

    layout();
    window.addEventListener('resize', layout);
    document.fonts?.ready?.then(layout).catch(() => {});

    if (initialLoadAnimation) {
      if (logoRef.current) {
        gsap.set(logoRef.current, { scale: 0 });
        gsap.to(logoRef.current, { scale: 1, duration: 0.55, ease });
      }
      if (navItemsRef.current) {
        gsap.set(navItemsRef.current, { width: 0, overflow: 'hidden' });
        gsap.to(navItemsRef.current, { width: 'auto', duration: 0.55, ease });
      }
    }

    return () => window.removeEventListener('resize', layout);
  }, [ease, initialLoadAnimation, items]);

  const handleEnter = (index) => {
    const tl = tlRefs.current[index];
    if (!tl) {
      return;
    }
    activeTweenRefs.current[index]?.kill();
    activeTweenRefs.current[index] = tl.tweenTo(tl.duration(), {
      duration: 0.25,
      ease,
      overwrite: 'auto',
    });
  };

  const handleLeave = (index) => {
    const tl = tlRefs.current[index];
    if (!tl) {
      return;
    }
    activeTweenRefs.current[index]?.kill();
    activeTweenRefs.current[index] = tl.tweenTo(0, {
      duration: 0.18,
      ease,
      overwrite: 'auto',
    });
  };

  const handleLogoEnter = () => {
    if (!logoImgRef.current) {
      return;
    }
    logoTweenRef.current?.kill();
    gsap.set(logoImgRef.current, { rotate: 0 });
    logoTweenRef.current = gsap.to(logoImgRef.current, {
      rotate: 360,
      duration: 0.25,
      ease,
      overwrite: 'auto',
    });
  };

  const cssVars = {
    '--base': baseColor,
    '--pill-bg': pillColor,
    '--hover-text': hoveredPillTextColor,
    '--pill-text': resolvedPillTextColor,
    '--nav-shell': shellColor,
    '--nav-shell-border': shellBorderColor,
    '--nav-shell-shadow': shellShadow,
  };

  return (
    <div className="pill-nav-container">
      <nav className={`pill-nav ${className}`.trim()} aria-label="Primary" style={cssVars}>
        {logo && (
          isRouterLink(items?.[0]?.href) ? (
            <Link
              className="pill-logo"
              to={items[0].href}
              aria-label="Home"
              onMouseEnter={handleLogoEnter}
              ref={logoRef}
            >
              <img src={logo} alt={logoAlt} ref={logoImgRef} />
            </Link>
          ) : (
            <a
              className="pill-logo"
              href={items?.[0]?.href || '#'}
              aria-label="Home"
              onMouseEnter={handleLogoEnter}
              ref={logoRef}
            >
              <img src={logo} alt={logoAlt} ref={logoImgRef} />
            </a>
          )
        )}

        <div className="pill-nav-items" ref={navItemsRef}>
          <ul className="pill-list" role="menubar">
            {items.map((item, index) => (
              <li key={item.href || `item-${index}`} role="none">
                {isRouterLink(item.href) ? (
                  <Link
                    role="menuitem"
                    to={item.href}
                    className={`pill${activeHref === item.href ? ' is-active' : ''}`}
                    aria-label={item.ariaLabel || item.label}
                    onMouseEnter={() => handleEnter(index)}
                    onMouseLeave={() => handleLeave(index)}
                  >
                    <span
                      className="hover-circle"
                      aria-hidden="true"
                      ref={(element) => {
                        circleRefs.current[index] = element;
                      }}
                    />
                    <span className="label-stack">
                      <span className="pill-label">{item.label}</span>
                      <span className="pill-label-hover" aria-hidden="true">
                        {item.label}
                      </span>
                    </span>
                  </Link>
                ) : (
                  <a
                    role="menuitem"
                    href={item.href}
                    className={`pill${activeHref === item.href ? ' is-active' : ''}`}
                    aria-label={item.ariaLabel || item.label}
                    onMouseEnter={() => handleEnter(index)}
                    onMouseLeave={() => handleLeave(index)}
                  >
                    <span
                      className="hover-circle"
                      aria-hidden="true"
                      ref={(element) => {
                        circleRefs.current[index] = element;
                      }}
                    />
                    <span className="label-stack">
                      <span className="pill-label">{item.label}</span>
                      <span className="pill-label-hover" aria-hidden="true">
                        {item.label}
                      </span>
                    </span>
                  </a>
                )}
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default PillNav;
