import { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { Link } from 'react-router-dom';
import './StaggeredMenu.css';

const isExternalLink = (link) => /^https?:\/\//.test(link);

export default function StaggeredMenu({
  position = 'right',
  colors = ['#17324d', '#2f6df6'],
  items = [],
  socialItems = [],
  displaySocials = false,
  displayItemNumbering = true,
  className,
  menuButtonColor = '#fff',
  openMenuButtonColor = '#fff',
  accentColor = '#6cff7f',
  changeMenuColorOnOpen = true,
  isFixed = false,
  closeOnClickAway = true,
  onMenuOpen,
  onMenuClose,
}) {
  const [open, setOpen] = useState(false);
  const openRef = useRef(false);
  const panelRef = useRef(null);
  const preLayersRef = useRef(null);
  const plusHRef = useRef(null);
  const plusVRef = useRef(null);
  const iconRef = useRef(null);
  const textInnerRef = useRef(null);
  const toggleBtnRef = useRef(null);
  const backdropRef = useRef(null);
  const busyRef = useRef(false);
  const openTlRef = useRef(null);
  const closeTweenRef = useRef(null);
  const spinTweenRef = useRef(null);
  const textCycleAnimRef = useRef(null);
  const colorTweenRef = useRef(null);
  const [textLines, setTextLines] = useState(['Menu', 'Close']);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const panel = panelRef.current;
      const backdrop = backdropRef.current;
      const preContainer = preLayersRef.current;
      const plusH = plusHRef.current;
      const plusV = plusVRef.current;
      const icon = iconRef.current;
      const textInner = textInnerRef.current;
      if (!panel || !plusH || !plusV || !icon || !textInner) {
        return;
      }

      const preLayers = preContainer ? Array.from(preContainer.querySelectorAll('.sm-prelayer')) : [];
      const offscreen = position === 'left' ? -100 : 100;
      gsap.set([panel, ...preLayers], { xPercent: offscreen });
      gsap.set(backdrop, { autoAlpha: 0 });
      gsap.set(plusH, { transformOrigin: '50% 50%', rotate: 0 });
      gsap.set(plusV, { transformOrigin: '50% 50%', rotate: 90 });
      gsap.set(icon, { rotate: 0, transformOrigin: '50% 50%' });
      gsap.set(textInner, { yPercent: 0 });
      if (toggleBtnRef.current) {
        gsap.set(toggleBtnRef.current, { color: menuButtonColor });
      }
    });

    return () => ctx.revert();
  }, [menuButtonColor, position]);

  const buildOpenTimeline = useCallback(() => {
    const panel = panelRef.current;
    const backdrop = backdropRef.current;
    const layers = preLayersRef.current ? Array.from(preLayersRef.current.querySelectorAll('.sm-prelayer')) : [];
    if (!panel) {
      return null;
    }

    openTlRef.current?.kill();
    closeTweenRef.current?.kill();

    const itemEls = Array.from(panel.querySelectorAll('.sm-panel-itemLabel'));
    const numberEls = Array.from(panel.querySelectorAll('.sm-panel-list[data-numbering] .sm-panel-item'));
    const socialTitle = panel.querySelector('.sm-socials-title');
    const socialLinks = Array.from(panel.querySelectorAll('.sm-socials-link'));

    if (itemEls.length) {
      gsap.set(itemEls, { yPercent: 140, rotate: 10 });
    }
    if (numberEls.length) {
      gsap.set(numberEls, { '--sm-num-opacity': 0 });
    }
    if (socialTitle) {
      gsap.set(socialTitle, { opacity: 0 });
    }
    if (socialLinks.length) {
      gsap.set(socialLinks, { y: 25, opacity: 0 });
    }

    const tl = gsap.timeline({ paused: true });
    tl.to(backdrop, { autoAlpha: 1, duration: 0.25, ease: 'power2.out' }, 0);
    layers.forEach((layer, index) => {
      tl.to(layer, { xPercent: 0, duration: 0.5, ease: 'power4.out' }, index * 0.07);
    });

    const panelStart = layers.length ? layers.length * 0.07 : 0;
    tl.to(panel, { xPercent: 0, duration: 0.65, ease: 'power4.out' }, panelStart);

    if (itemEls.length) {
      tl.to(
        itemEls,
        {
          yPercent: 0,
          rotate: 0,
          duration: 0.95,
          ease: 'power4.out',
          stagger: { each: 0.08, from: 'start' },
        },
        panelStart + 0.12
      );
    }

    if (numberEls.length) {
      tl.to(
        numberEls,
        {
          duration: 0.45,
          ease: 'power2.out',
          '--sm-num-opacity': 1,
          stagger: { each: 0.07, from: 'start' },
        },
        panelStart + 0.2
      );
    }

    if (socialTitle) {
      tl.to(socialTitle, { opacity: 1, duration: 0.4, ease: 'power2.out' }, panelStart + 0.28);
    }

    if (socialLinks.length) {
      tl.to(
        socialLinks,
        {
          y: 0,
          opacity: 1,
          duration: 0.5,
          ease: 'power3.out',
          stagger: { each: 0.07, from: 'start' },
        },
        panelStart + 0.33
      );
    }

    openTlRef.current = tl;
    return tl;
  }, []);

  const animateIcon = useCallback((opening) => {
    const icon = iconRef.current;
    if (!icon) {
      return;
    }
    spinTweenRef.current?.kill();
    spinTweenRef.current = gsap.to(icon, {
      rotate: opening ? 225 : 0,
      duration: opening ? 0.8 : 0.35,
      ease: opening ? 'power4.out' : 'power3.inOut',
      overwrite: 'auto',
    });
  }, []);

  const animateColor = useCallback(
    (opening) => {
      const btn = toggleBtnRef.current;
      if (!btn) {
        return;
      }
      colorTweenRef.current?.kill();
      const targetColor = changeMenuColorOnOpen
        ? (opening ? openMenuButtonColor : menuButtonColor)
        : menuButtonColor;
      colorTweenRef.current = gsap.to(btn, {
        color: targetColor,
        duration: 0.25,
        ease: 'power2.out',
      });
    },
    [changeMenuColorOnOpen, menuButtonColor, openMenuButtonColor]
  );

  const animateText = useCallback((opening) => {
    const inner = textInnerRef.current;
    if (!inner) {
      return;
    }
    textCycleAnimRef.current?.kill();

    const currentLabel = opening ? 'Menu' : 'Close';
    const targetLabel = opening ? 'Close' : 'Menu';
    const sequence = [currentLabel, targetLabel, targetLabel];
    setTextLines(sequence);
    gsap.set(inner, { yPercent: 0 });
    const shift = ((sequence.length - 1) / sequence.length) * 100;
    textCycleAnimRef.current = gsap.to(inner, {
      yPercent: -shift,
      duration: 0.45,
      ease: 'power4.out',
    });
  }, []);

  const playOpen = useCallback(() => {
    if (busyRef.current) {
      return;
    }
    busyRef.current = true;
    const tl = buildOpenTimeline();
    if (!tl) {
      busyRef.current = false;
      return;
    }
    tl.eventCallback('onComplete', () => {
      busyRef.current = false;
    });
    tl.play(0);
  }, [buildOpenTimeline]);

  const playClose = useCallback(() => {
    const panel = panelRef.current;
    const backdrop = backdropRef.current;
    const layers = preLayersRef.current ? Array.from(preLayersRef.current.querySelectorAll('.sm-prelayer')) : [];
    if (!panel) {
      return;
    }

    openTlRef.current?.kill();
    closeTweenRef.current?.kill();
    const offscreen = position === 'left' ? -100 : 100;
    closeTweenRef.current = gsap.timeline({
      onComplete: () => {
        busyRef.current = false;
      },
    });
    closeTweenRef.current.to([panel, ...layers], {
      xPercent: offscreen,
      duration: 0.32,
      ease: 'power3.in',
      stagger: 0.03,
      overwrite: 'auto',
    });
    closeTweenRef.current.to(backdrop, { autoAlpha: 0, duration: 0.2, ease: 'power2.out' }, 0);
  }, [position]);

  const closeMenu = useCallback(() => {
    if (!openRef.current) {
      return;
    }
    openRef.current = false;
    setOpen(false);
    onMenuClose?.();
    playClose();
    animateIcon(false);
    animateColor(false);
    animateText(false);
  }, [animateColor, animateIcon, animateText, onMenuClose, playClose]);

  const toggleMenu = useCallback(() => {
    const target = !openRef.current;
    openRef.current = target;
    setOpen(target);
    if (target) {
      onMenuOpen?.();
      playOpen();
    } else {
      onMenuClose?.();
      playClose();
    }
    animateIcon(target);
    animateColor(target);
    animateText(target);
  }, [animateColor, animateIcon, animateText, onMenuClose, onMenuOpen, playClose, playOpen]);

  useEffect(() => {
    if (!closeOnClickAway || !open) {
      return undefined;
    }

    const handleClickOutside = (event) => {
      if (
        panelRef.current &&
        !panelRef.current.contains(event.target) &&
        toggleBtnRef.current &&
        !toggleBtnRef.current.contains(event.target)
      ) {
        closeMenu();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [closeOnClickAway, closeMenu, open]);

  const wrapperClassName = `${className ? `${className} ` : ''}staggered-menu-wrapper${isFixed ? ' fixed-wrapper' : ''}`;

  return (
    <div
      className={wrapperClassName}
      style={accentColor ? { '--sm-accent': accentColor } : undefined}
      data-position={position}
      data-open={open || undefined}
    >
      <button
        ref={toggleBtnRef}
        className="sm-toggle"
        aria-label={open ? 'Close menu' : 'Open menu'}
        aria-expanded={open}
        aria-controls="staggered-menu-panel"
        onClick={toggleMenu}
        type="button"
      >
        <span className="sm-toggle-textWrap" aria-hidden="true">
          <span ref={textInnerRef} className="sm-toggle-textInner">
            {textLines.map((line, index) => (
              <span className="sm-toggle-line" key={`${line}-${index}`}>
                {line}
              </span>
            ))}
          </span>
        </span>
        <span ref={iconRef} className="sm-icon" aria-hidden="true">
          <span ref={plusHRef} className="sm-icon-line" />
          <span ref={plusVRef} className="sm-icon-line sm-icon-line-v" />
        </span>
      </button>

      <div ref={backdropRef} className="sm-backdrop" onClick={closeMenu} aria-hidden={!open} />

      <div ref={preLayersRef} className="sm-prelayers" aria-hidden="true">
        {(colors.length ? colors.slice(0, 2) : ['#17324d', '#2f6df6']).map((color, index) => (
          <div key={`${color}-${index}`} className="sm-prelayer" style={{ background: color }} />
        ))}
      </div>

      <aside id="staggered-menu-panel" ref={panelRef} className="staggered-menu-panel" aria-hidden={!open}>
        <div className="sm-panel-inner">
          <ul className="sm-panel-list" role="list" data-numbering={displayItemNumbering || undefined}>
            {items.map((item, index) => (
              <li className="sm-panel-itemWrap" key={`${item.label}-${index}`}>
                {isExternalLink(item.link) ? (
                  <a className="sm-panel-item" href={item.link} aria-label={item.ariaLabel} data-index={index + 1} onClick={closeMenu}>
                    <span className="sm-panel-itemLabel">{item.label}</span>
                  </a>
                ) : (
                  <Link className="sm-panel-item" to={item.link} aria-label={item.ariaLabel} data-index={index + 1} onClick={closeMenu}>
                    <span className="sm-panel-itemLabel">{item.label}</span>
                  </Link>
                )}
              </li>
            ))}
          </ul>

          {displaySocials && socialItems.length > 0 && (
            <div className="sm-socials" aria-label="Social links">
              <h3 className="sm-socials-title">Links</h3>
              <ul className="sm-socials-list" role="list">
                {socialItems.map((item, index) => (
                  <li key={`${item.label}-${index}`} className="sm-socials-item">
                    <a href={item.link} target="_blank" rel="noopener noreferrer" className="sm-socials-link">
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </aside>
    </div>
  );
}
