import { useState } from 'react';
import { FaPlay } from 'react-icons/fa';

/**
 * Loads the YouTube player only after a click, so the page keeps a fast
 * initial load. Renders nothing unless a real video id has been supplied.
 */
const YouTubeFacade = ({ youtubeId, title, summary, id }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  if (!youtubeId) return null;

  return (
    <figure id={id} className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
      <div className="relative aspect-video w-full bg-secondary-900">
        {isPlaying ? (
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${youtubeId}?autoplay=1&rel=0`}
            title={title}
            className="absolute inset-0 h-full w-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        ) : (
          <button
            type="button"
            onClick={() => setIsPlaying(true)}
            className="group absolute inset-0 flex h-full w-full items-center justify-center focus:outline-none focus-visible:ring-4 focus-visible:ring-primary-400"
            aria-label={`Play video: ${title}`}
          >
            <img
              src={`https://i.ytimg.com/vi/${youtubeId}/hqdefault.jpg`}
              alt=""
              loading="lazy"
              decoding="async"
              width="480"
              height="360"
              className="absolute inset-0 h-full w-full object-cover opacity-90 transition-opacity duration-300 group-hover:opacity-100"
            />
            <span className="relative flex h-14 w-14 items-center justify-center rounded-full bg-primary-500 text-white shadow-lg transition-transform duration-300 group-hover:scale-110">
              <FaPlay className="ml-1 text-lg" aria-hidden="true" />
            </span>
          </button>
        )}
      </div>
      <figcaption className="p-5">
        <span className="block font-bold text-secondary-800">{title}</span>
        {summary && <span className="mt-1 block text-sm leading-7 text-gray-700">{summary}</span>}
      </figcaption>
    </figure>
  );
};

export default YouTubeFacade;
