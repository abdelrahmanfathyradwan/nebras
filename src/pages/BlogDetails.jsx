import { useParams } from 'react-router-dom';
import { allBlogPosts } from '../data/data';
import SEO from '../components/SEO';
import StructuredData from '../components/StructuredData';

const BlogDetails = () => {
  const { id } = useParams();
  const post = allBlogPosts.find(post => post.id === parseInt(id));

  if (!post) return <div className="text-center py-20 text-xl font-bold">Article not found</div>;

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": post.title,
    "description": post.excerpt || post.title,
    "image": `https://www.nebrasacadmy.com${post.image}`,
    "author": {
      "@type": "Organization",
      "name": "Nebras Academy"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Nebras Academy",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.nebrasacadmy.com/images/quran2.jpg"
      }
    }
  };

  return (
    <div className="container mx-auto max-w-4xl px-6 py-12 page-enter">
      <SEO 
        title={post.title} 
        description={post.excerpt || `Read about ${post.title} at Nebras Academy.`}
        canonical={`/blog/${id}`}
        ogType="article"
        ogImage={post.image}
      />
      <StructuredData data={articleSchema} />

      {/* Breadcrumb / Top bar */}
      <div className="flex items-center space-x-2 text-sm text-gray-500 mb-8">
        <span>Blog</span>
        <span>/</span>
        <span className="text-primary-500 font-semibold">Article #{post.id}</span>
      </div>

      {/* Main Content Area */}
      <article className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden p-6 sm:p-10">
        {/* Cover Image */}
        <div className="rounded-xl overflow-hidden h-[300px] sm:h-[400px] mb-8">
          <img 
            src={post.image} 
            alt={post.title} 
            className="w-full h-full object-cover"
          />
        </div>

        {/* Title */}
        <h1 className="text-3xl sm:text-4xl font-extrabold text-secondary-800 mb-6 leading-snug">
          {post.title}
        </h1>
        
        {/* Excerpt */}
        {post.excerpt && (
          <p className="text-lg text-gray-600 mb-10 leading-relaxed border-l-4 border-primary-400 pl-4 py-1">
            {post.excerpt}
          </p>
        )}

        <hr className="border-gray-100 mb-10" />

        {/* Content Questions & Answers */}
        <div className="space-y-8">
          {post.content?.map((item, index) => (
            <div key={index} className="bg-gray-50/50 p-6 sm:p-8 rounded-xl border border-gray-100/80 hover:shadow-md transition-shadow duration-300">
              <h2 className="text-xl font-bold text-secondary-700 mb-4 flex items-start">
                <span className="text-primary-500 mr-2.5">Q.</span>
                <span>{item.question}</span>
              </h2>
              <div className="text-gray-700 pl-6 border-l-2 border-primary-300 leading-relaxed whitespace-pre-line">
                {item.answer}
              </div>
            </div>
          ))}
        </div>
      </article>
    </div>
  );
};

export default BlogDetails;