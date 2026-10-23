import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

const NotFound = () => {
  return (
    <>
      <SEO
        title="Page Not Found"
        description="The page you are looking for does not exist. Return to Nebras Academy homepage."
        noindex={true}
        canonical="/404"
      />
      <div className="min-h-[70vh] flex flex-col items-center justify-center px-6 py-16 text-center page-enter">
        <h1 className="text-9xl font-extrabold text-primary-500 mb-2 tracking-widest animate-pulse-gentle">404</h1>
        <h2 className="text-3xl font-extrabold text-secondary-700 mb-4">Page Not Found</h2>
        <p className="text-lg text-gray-600 mb-8 max-w-md leading-relaxed">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        <Link
          to="/"
          className="btn-secondary btn-pill px-8 py-3.5 text-base font-bold shadow-lg"
        >
          Back to Homepage
        </Link>
      </div>
    </>
  );
};

export default NotFound;
