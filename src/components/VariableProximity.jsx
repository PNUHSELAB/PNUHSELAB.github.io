import { forwardRef, useEffect, useMemo, useRef } from 'react';
import './VariableProximity.css';

function useMousePositionRef(containerRef) {
  const positionRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const updatePosition = (x, y) => {
      if (containerRef?.current) {
        const rect = containerRef.current.getBoundingClientRect();
        positionRef.current = { x: x - rect.left, y: y - rect.top };
      } else {
        positionRef.current = { x, y };
      }
    };

    const handleMouseMove = (event) => updatePosition(event.clientX, event.clientY);
    const handleTouchMove = (event) => {
      const touch = event.touches[0];
      if (touch) {
        updatePosition(touch.clientX, touch.clientY);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('touchmove', handleTouchMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove);
    };
  }, [containerRef]);

  return positionRef;
}

const VariableProximity = forwardRef(function VariableProximity(
  {
    label,
    fromFontVariationSettings,
    toFontVariationSettings,
    containerRef,
    radius = 50,
    falloff = 'linear',
    className = '',
    onClick,
    style,
    ...restProps
  },
  ref
) {
  const letterRefs = useRef([]);
  const frameRef = useRef(0);
  const currentIntensityRef = useRef([]);
  const mousePositionRef = useMousePositionRef(containerRef);

  const parsedSettings = useMemo(() => {
    const parseSettings = (settings) =>
      new Map(
        settings
          .split(',')
          .map((segment) => segment.trim())
          .map((segment) => {
            const [name, value] = segment.split(' ');
            return [name.replace(/['"]/g, ''), parseFloat(value)];
          })
      );

    const fromSettings = parseSettings(fromFontVariationSettings);
    const toSettings = parseSettings(toFontVariationSettings);

    return Array.from(fromSettings.entries()).map(([axis, fromValue]) => ({
      axis,
      fromValue,
      toValue: toSettings.get(axis) ?? fromValue,
    }));
  }, [fromFontVariationSettings, toFontVariationSettings]);

  useEffect(() => {
    const calculateDistance = (x1, y1, x2, y2) => Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);

    const calculateFalloff = (distance) => {
      const normalized = Math.min(Math.max(1 - distance / radius, 0), 1);
      switch (falloff) {
        case 'exponential':
          return normalized ** 2;
        case 'gaussian':
          return Math.exp(-((distance / (radius / 2)) ** 2) / 2);
        case 'linear':
        default:
          return normalized;
      }
    };

    const update = () => {
      frameRef.current = requestAnimationFrame(update);
      if (!containerRef?.current) {
        return;
      }

      const containerRect = containerRef.current.getBoundingClientRect();
      const { x, y } = mousePositionRef.current;

      letterRefs.current.forEach((letterRef, index) => {
        if (!letterRef) {
          return;
        }

        const rect = letterRef.getBoundingClientRect();
        const letterCenterX = rect.left + rect.width / 2 - containerRect.left;
        const letterCenterY = rect.top + rect.height / 2 - containerRect.top;
        const distance = calculateDistance(x, y, letterCenterX, letterCenterY);

        const targetValue = distance >= radius ? 0 : calculateFalloff(distance);
        const currentValue = currentIntensityRef.current[index] ?? 0;
        const smoothedValue = currentValue + (targetValue - currentValue) * 0.12;
        currentIntensityRef.current[index] = smoothedValue;
        const newSettings = parsedSettings
          .map(({ axis, fromValue, toValue }) => {
            const interpolatedValue = fromValue + (toValue - fromValue) * smoothedValue;
            return `'${axis}' ${interpolatedValue}`;
          })
          .join(', ');

        letterRef.style.fontVariationSettings = newSettings;
      });
    };

    frameRef.current = requestAnimationFrame(update);
    return () => cancelAnimationFrame(frameRef.current);
  }, [containerRef, falloff, fromFontVariationSettings, mousePositionRef, parsedSettings, radius]);

  const words = label.split(' ');
  let letterIndex = 0;

  return (
    <span
      ref={ref}
      className={`${className} variable-proximity`.trim()}
      onClick={onClick}
      style={{ display: 'inline', ...style }}
      {...restProps}
    >
      {words.map((word, wordIndex) => (
        <span key={`${word}-${wordIndex}`} style={{ display: 'inline-block', whiteSpace: 'nowrap' }}>
          {word.split('').map((letter) => {
            const currentLetterIndex = letterIndex++;
            return (
              <span
                key={currentLetterIndex}
                ref={(element) => {
                  letterRefs.current[currentLetterIndex] = element;
                }}
                style={{
                  display: 'inline-block',
                  fontVariationSettings: fromFontVariationSettings,
                }}
                aria-hidden="true"
              >
                {letter}
              </span>
            );
          })}
          {wordIndex < words.length - 1 && <span style={{ display: 'inline-block' }}>&nbsp;</span>}
        </span>
      ))}
      <span className="sr-only">{label}</span>
    </span>
  );
});

export default VariableProximity;
