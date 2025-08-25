import { useState } from 'react';
import { Link } from 'react-router-dom';
import {allBlogPosts} from "../data/data";
const Blog = () => {
  const [visiblePosts, setVisiblePosts] = useState(6);

  const loadMore = () => {
    setVisiblePosts(prev => prev + 6);
  };

  return (
    <div className="font-sans">
      {/* Hero Section */}
      <div className="relative">
        <img 
          src="/images/celebrateEid.jpg" // استبدل بمسار صورتك
          alt="Blog Banner"
          className="w-full h-[200px] object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-70 flex items-center justify-start px-6 md:px-12">
          <h1 className="text-3xl md:text-4xl font-bold text-white border-l-4 border-primary-500 pl-4 py-2">
            Blog
          </h1>
        </div>
      </div>

      {/* Breadcrumb */}
      <div className="bg-gray-100 py-3 px-6 md:px-12">
        <nav className="text-sm">
          <ol className="flex items-center space-x-2">
            <li>
              <Link to="/" className="text-secondary-600 hover:text-secondary-800">Home</Link>
            </li>
            <li>
              <span className="text-gray-500">/</span>
            </li>
            <li className="text-gray-600">Blog</li>
          </ol>
        </nav>
      </div>

      {/* Blog Posts Grid */}
      <div className="max-w-7xl mx-auto py-12 px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {allBlogPosts.slice(0, visiblePosts).map(post => (
            <div key={post.id} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300">
              <img 
                src={post.image} 
                alt={post.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <Link 
                  to={`/blog/${post.id}`} 
                  className="text-xl font-bold text-secondary-800 hover:text-primary-600 transition duration-300 block mb-2"
                >
                  {post.title}
                </Link>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <Link 
                  to={`/blog/${post.id}`} 
                  className="text-primary-500 hover:text-primary-700 font-medium transition duration-300 inline-flex items-center"
                >
                  Read More
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {visiblePosts < allBlogPosts.length && (
          <div className="text-center mt-12">
            <button 
              onClick={loadMore}
              className="bg-primary-500 hover:bg-primary-600 text-white font-bold py-3 px-8 rounded-full text-lg transition duration-300 inline-block"
            >
              Load More Articles
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Blog;