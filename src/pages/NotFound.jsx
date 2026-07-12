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
      <div className="min-h-[60vh] flex flex-col items-center justify-center px-4 py-16 text-center">
        <h1 className="text-8xl font-bold text-primary-500 mb-4">404</h1>
        <h2 className="text-3xl font-bold text-secondary-700 mb-4">Page Not Found</h2>
        <p className="text-lg text-gray-600 mb-8 max-w-md">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        <Link
          to="/"
          className="bg-secondary-600 hover:bg-secondary-700 text-white font-bold py-3 px-8 rounded-lg shadow-md transition-colors"
        >
          Back to Homepage
        </Link>
      </div>
    </>
  );
};

export default NotFound;
