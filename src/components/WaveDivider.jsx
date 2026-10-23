/**
 * WaveDivider — reusable organic SVG wave shape.
 *
 * Props:
 *  - position: 'top' | 'bottom' (default 'top')
 *  - fillColor: CSS color string (default '#ffffff')
 *  - className: extra classes for the wrapper
 *
 * The wave is drawn once and flipped via CSS transform for the bottom variant.
 */
const WaveDivider = ({ position = 'top', fillColor = '#ffffff', className = '' }) => {
  const isBottom = position === 'bottom';

  return (
    <div
      className={`absolute left-0 right-0 w-full overflow-hidden leading-[0] pointer-events-none ${
        isBottom ? 'bottom-0' : 'top-0'
      } ${isBottom ? 'transform rotate-180' : ''} ${className}`}
      aria-hidden="true"
    >
      <svg
        className="relative block w-full"
        style={{ height: 'clamp(40px, 6vw, 80px)' }}
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0,60 C150,100 350,0 600,60 C850,120 1050,20 1200,60 L1200,120 L0,120 Z"
          fill={fillColor}
        />
      </svg>
    </div>
  );
};

export default WaveDivider;
