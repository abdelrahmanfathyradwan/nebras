import React, { useEffect, useRef, useState, useCallback } from 'react';
import {
  FaTimes,
  FaSearchPlus,
  FaSearchMinus,
  FaUndo,
  FaAward,
  FaUserTie,
  FaBookOpen,
  FaShieldAlt,
} from 'react-icons/fa';

/**
 * IjazahLightbox
 *
 * Requirements:
 * - English UI with full accessibility.
 * - role="dialog", aria-modal="true", focus trap, Esc to close, returns focus to trigger.
 * - Backdrop click to close & distinct X button.
 * - Mobile pinch-to-zoom + pan, desktop zoom controls (+ / - / reset) + drag to pan.
 * - Light CSS watermark overlay with academy name, draggable="false".
 * - Accompanied by real text specifications (name, narration, authorizing sheikh).
 * - Loads document only when opened (lazy).
 */
const IjazahLightbox = ({
  isOpen,
  onClose,
  document: doc,
  teacher,
  triggerRef,
}) => {
  const dialogRef = useRef(null);
  const closeBtnRef = useRef(null);
  const imageContainerRef = useRef(null);

  // Zoom & Pan state
  const [scale, setScale] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const [touchDistance, setTouchDistance] = useState(null);
  const [imageLoaded, setImageLoaded] = useState(false);

  // Reset zoom & pan when opening or document changes
  useEffect(() => {
    if (isOpen) {
      setScale(1);
      setPosition({ x: 0, y: 0 });
      setImageLoaded(false);
    }
  }, [isOpen, doc]);

  // Focus trap & Esc handler
  useEffect(() => {
    if (!isOpen) return;

    // Save previous active element to restore focus on close
    const previousActiveElement = triggerRef?.current || document.activeElement;

    // Focus close button initially
    const timer = setTimeout(() => {
      closeBtnRef.current?.focus();
    }, 50);

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        onClose();
        return;
      }

      if (e.key === '+' || e.key === '=') {
        e.preventDefault();
        handleZoomIn();
        return;
      }

      if (e.key === '-' || e.key === '_') {
        e.preventDefault();
        handleZoomOut();
        return;
      }

      if (e.key === '0') {
        e.preventDefault();
        handleResetZoom();
        return;
      }

      // Focus trap logic
      if (e.key === 'Tab' && dialogRef.current) {
        const focusable = dialogRef.current.querySelectorAll(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        if (focusable.length === 0) return;

        const firstElement = focusable[0];
        const lastElement = focusable[focusable.length - 1];

        if (e.shiftKey && document.activeElement === firstElement) {
          e.preventDefault();
          lastElement.focus();
        } else if (!e.shiftKey && document.activeElement === lastElement) {
          e.preventDefault();
          firstElement.focus();
        }
      }
    };

    // Prevent body scroll while lightbox is open
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);

      // Restore focus to original trigger element
      if (previousActiveElement && typeof previousActiveElement.focus === 'function') {
        previousActiveElement.focus();
      }
    };
  }, [isOpen, onClose, triggerRef]);

  // Zoom controls
  const handleZoomIn = useCallback(() => {
    setScale((prev) => Math.min(prev + 0.35, 3.5));
  }, []);

  const handleZoomOut = useCallback(() => {
    setScale((prev) => {
      const next = Math.max(prev - 0.35, 1);
      if (next === 1) setPosition({ x: 0, y: 0 });
      return next;
    });
  }, []);

  const handleResetZoom = useCallback(() => {
    setScale(1);
    setPosition({ x: 0, y: 0 });
  }, []);

  // Mouse pan handlers
  const handleMouseDown = (e) => {
    if (scale <= 1) return;
    setIsDragging(true);
    setDragStart({ x: e.clientX - position.x, y: e.clientY - position.y });
  };

  const handleMouseMove = (e) => {
    if (!isDragging || scale <= 1) return;
    setPosition({
      x: e.clientX - dragStart.x,
      y: e.clientY - dragStart.y,
    });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  // Touch pinch-to-zoom & pan handlers for mobile
  const getTouchDistance = (e) => {
    if (e.touches.length < 2) return null;
    const dx = e.touches[0].clientX - e.touches[1].clientX;
    const dy = e.touches[0].clientY - e.touches[1].clientY;
    return Math.sqrt(dx * dx + dy * dy);
  };

  const handleTouchStart = (e) => {
    if (e.touches.length === 2) {
      setTouchDistance(getTouchDistance(e));
    } else if (e.touches.length === 1 && scale > 1) {
      setIsDragging(true);
      setDragStart({
        x: e.touches[0].clientX - position.x,
        y: e.touches[0].clientY - position.y,
      });
    }
  };

  const handleTouchMove = (e) => {
    if (e.touches.length === 2 && touchDistance !== null) {
      const currentDist = getTouchDistance(e);
      if (currentDist) {
        const diff = currentDist - touchDistance;
        const newScale = Math.min(Math.max(scale + diff * 0.005, 1), 3.5);
        setScale(newScale);
        if (newScale === 1) setPosition({ x: 0, y: 0 });
        setTouchDistance(currentDist);
      }
    } else if (e.touches.length === 1 && isDragging && scale > 1) {
      setPosition({
        x: e.touches[0].clientX - dragStart.x,
        y: e.touches[0].clientY - dragStart.y,
      });
    }
  };

  const handleTouchEnd = () => {
    setTouchDistance(null);
    setIsDragging(false);
  };

  if (!isOpen || !doc) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="lightbox-title"
      ref={dialogRef}
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 md:p-6 bg-black/85 backdrop-blur-md transition-opacity duration-300 animate-fade-in"
      onClick={(e) => {
        // Close on backdrop click (outside modal dialog content)
        if (e.target === e.currentTarget) {
          onClose();
        }
      }}
    >
      <div
        className="relative w-full max-w-5xl max-h-[92vh] flex flex-col rounded-2xl bg-white shadow-2xl overflow-hidden border border-gray-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="flex items-center justify-between px-5 py-4 bg-secondary-500 text-white border-b border-secondary-600 flex-shrink-0">
          <div className="flex items-center gap-3 min-w-0">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary-500/20 text-primary-300 flex-shrink-0">
              <FaAward className="text-base" />
            </span>
            <div className="min-w-0">
              <h3 id="lightbox-title" className="text-base sm:text-lg font-bold truncate">
                {doc.title}
              </h3>
              {teacher && (
                <p className="text-xs text-white/75 truncate">
                  {teacher.name}
                </p>
              )}
            </div>
          </div>

          <div className="flex items-center gap-2 ml-3 flex-shrink-0">
            {/* Zoom Controls */}
            <div className="hidden sm:flex items-center bg-white/10 rounded-lg p-0.5 border border-white/15">
              <button
                type="button"
                onClick={handleZoomIn}
                title="Zoom In (+)"
                aria-label="Zoom in on document"
                className="p-1.5 text-white/85 hover:text-white hover:bg-white/10 rounded transition-colors"
              >
                <FaSearchPlus className="text-xs" />
              </button>
              <button
                type="button"
                onClick={handleZoomOut}
                title="Zoom Out (-)"
                aria-label="Zoom out on document"
                className="p-1.5 text-white/85 hover:text-white hover:bg-white/10 rounded transition-colors disabled:opacity-30"
                disabled={scale <= 1}
              >
                <FaSearchMinus className="text-xs" />
              </button>
              <button
                type="button"
                onClick={handleResetZoom}
                title="Reset Zoom (0)"
                aria-label="Reset document zoom"
                className="p-1.5 text-white/85 hover:text-white hover:bg-white/10 rounded transition-colors disabled:opacity-30"
                disabled={scale === 1}
              >
                <FaUndo className="text-xs" />
              </button>
            </div>

            {/* Close Button */}
            <button
              ref={closeBtnRef}
              type="button"
              onClick={onClose}
              aria-label="Close document preview"
              className="p-2 rounded-full bg-white/15 hover:bg-white/25 text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-300"
            >
              <FaTimes className="text-base" />
            </button>
          </div>
        </div>

        {/* Modal Body: Two-column layout (Interactive Viewport + Real Text Specs) */}
        <div className="flex-1 overflow-y-auto flex flex-col lg:flex-row items-stretch min-h-0 bg-gray-50">
          {/* Document Display Canvas */}
          <div
            ref={imageContainerRef}
            className="relative flex-1 min-h-[320px] sm:min-h-[420px] lg:min-h-[500px] flex items-center justify-center p-4 bg-[#141E1B] overflow-hidden select-none"
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            style={{ cursor: scale > 1 ? (isDragging ? 'grabbing' : 'grab') : 'default' }}
          >
            {/* Loading Indicator */}
            {!imageLoaded && (
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white/70 gap-3 z-10 pointer-events-none">
                <div className="w-10 h-10 border-3 border-primary-500 border-t-transparent rounded-full animate-spin" />
                <span className="text-xs font-medium">Loading verified credential...</span>
              </div>
            )}

            {/* Document Image Wrapper with scale and pan */}
            <div
              className="relative max-w-full max-h-full transition-transform duration-100 ease-out flex items-center justify-center"
              style={{
                transform: `translate(${position.x}px, ${position.y}px) scale(${scale})`,
                transformOrigin: 'center center',
              }}
            >
              <img
                src={doc.image}
                alt={doc.alt || doc.title}
                width="1200"
                height="1600"
                loading="eager"
                decoding="async"
                draggable="false"
                onLoad={() => setImageLoaded(true)}
                onError={() => setImageLoaded(true)}
                className="max-h-[65vh] w-auto max-w-full object-contain rounded-lg shadow-2xl pointer-events-none select-none border border-white/10"
              />

              {/* Watermark Overlay (Academy Name Protection) */}
              <div
                className="pointer-events-none absolute inset-0 rounded-lg overflow-hidden flex items-center justify-center select-none"
                aria-hidden="true"
              >
                <div className="w-full h-full flex flex-col items-center justify-around opacity-15 rotate-[-25deg] select-none text-[#023535] font-black text-sm sm:text-lg tracking-widest uppercase">
                  <span>NEBRAS ACADEMY • OFFICIAL CREDENTIAL</span>
                  <span>VERIFIED TRANSMISSION • SANAD MUTTASIL</span>
                  <span>NEBRAS ACADEMY • COPYRIGHT PROTECTED</span>
                </div>
              </div>
            </div>

            {/* Mobile Zoom Floating Help Badge */}
            <div className="absolute bottom-3 left-3 bg-black/60 text-white/80 text-[11px] px-2.5 py-1 rounded-full backdrop-blur-sm pointer-events-none sm:hidden">
              {scale > 1 ? `Zoom: ${scale.toFixed(1)}x • Drag to pan` : 'Pinch or double tap to zoom'}
            </div>
          </div>

          {/* Real Text Metadata & Credential Specs (SEO + Readability + Trust) */}
          <div className="w-full lg:w-80 xl:w-96 p-5 sm:p-6 bg-white border-t lg:border-t-0 lg:border-l border-gray-200 flex flex-col justify-between overflow-y-auto">
            <div className="space-y-5">
              <div>
                <span className="inline-block px-2.5 py-1 rounded-md bg-primary-50 text-primary-600 text-xs font-bold mb-2">
                  Verified Credential
                </span>
                <h4 className="text-lg font-bold text-secondary-800 leading-snug">
                  {doc.title}
                </h4>
              </div>

              {/* Specifications List */}
              <div className="space-y-3.5 text-xs sm:text-sm text-gray-700">
                {teacher && (
                  <div className="flex items-start gap-2.5 p-2.5 rounded-lg bg-gray-50 border border-gray-100">
                    <FaUserTie className="text-primary-500 mt-1 flex-shrink-0" />
                    <div>
                      <span className="block text-[11px] text-gray-500 font-semibold">Teacher / Reciter</span>
                      <strong className="text-secondary-800">{teacher.name}</strong>
                    </div>
                  </div>
                )}

                {(doc.narration || teacher?.narration) && (
                  <div className="flex items-start gap-2.5 p-2.5 rounded-lg bg-gray-50 border border-gray-100">
                    <FaBookOpen className="text-primary-500 mt-1 flex-shrink-0" />
                    <div>
                      <span className="block text-[11px] text-gray-500 font-semibold">Narration / Recitation Mode</span>
                      <strong className="text-secondary-800">{doc.narration || teacher.narration}</strong>
                    </div>
                  </div>
                )}

                {(doc.authorizingSheikh || teacher?.authorizingSheikh) && (
                  <div className="flex items-start gap-2.5 p-2.5 rounded-lg bg-gray-50 border border-gray-100">
                    <FaAward className="text-primary-500 mt-1 flex-shrink-0" />
                    <div>
                      <span className="block text-[11px] text-gray-500 font-semibold">Authorizing Sheikh / Authority</span>
                      <span className="text-secondary-800 font-medium">
                        {doc.authorizingSheikh || teacher.authorizingSheikh}
                      </span>
                      {doc.authorizingTitle && (
                        <span className="block text-[11px] text-gray-500 mt-0.5">{doc.authorizingTitle}</span>
                      )}
                    </div>
                  </div>
                )}

                {doc.description && (
                  <div className="p-3 rounded-lg bg-emerald-50/70 border border-emerald-100 text-emerald-900 text-xs leading-relaxed">
                    <div className="flex items-center gap-1.5 font-bold mb-1">
                      <FaShieldAlt className="text-emerald-600" />
                      <span>Sanad & Verification Details</span>
                    </div>
                    {doc.description}
                  </div>
                )}
              </div>
            </div>

            {/* Footer Trust Note */}
            <div className="pt-4 mt-4 border-t border-gray-100 text-[11px] text-gray-500 leading-normal">
              🔒 Sensitive personal identification numbers and personal records have been redacted to safeguard privacy, while authentic seals and Sanad lineages remain fully verified and preserved with Nebras Academy.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IjazahLightbox;
