import { Link } from 'react-router-dom';
import { allBlogPosts } from "../data/data";
import SEO from '../components/SEO';
import StructuredData from '../components/StructuredData';

const SITE_URL = 'https://www.nebrasacadmy.com';

const Blog = () => {
  // ملاحظة: عُرضت كل المقالات مباشرة (بدون زر Load More) حتى تكون كل الروابط
  // موجودة في HTML ويراها محرك البحث. عند زيادة المقالات كثيرًا يمكن استخدام ترقيم صفحات حقيقي (روابط).

  const blogSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Nebras Academy Blog",
    "description": "Read the latest articles on Quran, Islamic studies, and Arabic language.",
    "url": `${SITE_URL}/blog`,
    "mainEntity": {
      "@type": "ItemList",
      "itemListElement": allBlogPosts.map((post, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "url": `${SITE_URL}/blog/${post.slug}`,
        "name": post.title
      }))
    }
  };

  return (
    <div className="font-sans page-enter">
      <SEO
        title="Blog & Articles"
        description="Read the latest articles on Quran, Islamic studies, and Arabic language learning from Nebras Academy's expert teachers."
        canonical="/blog"
      />
      <StructuredData data={blogSchema} />
      {/* Hero Section */}
      <div className="relative h-[240px] overflow-hidden">
        <img
          src="/images/celebrateEid.jpg"
          alt="Blog Banner"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-secondary-900/80 flex items-center justify-start px-6 md:px-16">
          <div className="max-w-7xl mx-auto w-full">
            <h1 className="text-4xl md:text-5xl font-bold text-white border-l-4 border-primary-500 pl-6 py-2">
              Blog & Articles
            </h1>
            <p className="text-gray-300 mt-2 max-w-xl pl-6">
              Insights, guides, and lessons from our experienced educators.
            </p>
          </div>
        </div>
      </div>

      {/* Breadcrumb */}
      <div className="bg-gray-100/80 border-b border-gray-200/50 py-4 px-6 md:px-16">
        <div className="max-w-7xl mx-auto w-full">
          <nav className="text-sm font-medium" aria-label="Breadcrumb">
            <ol className="flex items-center space-x-2">
              <li>
                <Link to="/" className="text-secondary-600 hover:text-primary-500 transition-colors">Home</Link>
              </li>
              <li>
                <span className="text-gray-400">/</span>
              </li>
              <li className="text-gray-500">Blog</li>
            </ol>
          </nav>
        </div>
      </div>

      {/* Blog Posts Grid */}
      <div className="max-w-7xl mx-auto py-16 px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {allBlogPosts.map(post => (
            <div key={post.id} className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 flex flex-col hover:-translate-y-1">
              <Link to={`/blog/${post.slug}`} className="block overflow-hidden h-52 relative" aria-label={post.title}>
                <img
                  src={post.image}
                  alt={post.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </Link>
              <div className="p-6 flex flex-col flex-grow">
                <Link
                  to={`/blog/${post.slug}`}
                  className="text-xl font-bold text-secondary-800 hover:text-primary-500 transition-colors duration-300 mb-3 line-clamp-2"
                >
                  {post.title}
                </Link>
                <p className="text-gray-600 mb-6 line-clamp-3 leading-relaxed flex-grow">{post.excerpt}</p>
                <Link
                  to={`/blog/${post.slug}`}
                  className="text-primary-500 hover:text-primary-600 font-semibold transition-colors duration-300 inline-flex items-center group/btn text-sm"
                >
                  Read Full Article
                  <svg className="w-4 h-4 ml-1 transition-transform duration-300 group-hover/btn:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;