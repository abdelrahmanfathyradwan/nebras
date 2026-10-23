import { useEffect } from 'react';
import { FaTimes } from 'react-icons/fa';

const BookingModal = ({ isOpen, onClose }) => {
  // Disable body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-secondary-900/60 backdrop-blur-sm animate-fade-in"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div className="relative w-full max-w-4xl h-[85vh] bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden animate-scale-in">
        
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 bg-gradient-to-r from-secondary-600 to-secondary-500 text-white">
          <h2 className="text-xl font-bold font-rb">Book Your Free Trial Session</h2>
          <button
            onClick={onClose}
            className="text-white/80 hover:text-white hover:bg-white/10 p-2 rounded-full transition-all duration-200"
            aria-label="Close booking modal"
          >
            <FaTimes className="text-lg" />
          </button>
        </div>

        {/* Iframe Content */}
        <div className="flex-1 w-full h-full bg-gray-50 relative">
          <iframe
            src="https://cal.com/nebraskacademy-fsfcww"
            title="Book a free trial session on Cal.com"
            className="w-full h-full border-0"
            allow="camera; microphone; autoplay; clipboard-write"
          />
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
