import { useParams } from 'react-router-dom';
import { allBlogPosts } from '../data/data';
import SEO from '../components/SEO';
import StructuredData from '../components/StructuredData';

const BlogDetails = () => {
  const { id } = useParams();
  const post = allBlogPosts.find(post => post.id === parseInt(id));

  if (!post) return <div className="text-center py-20">Article not found</div>;

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": post.title,
    "description": post.excerpt || post.title,
    "image": `https://nebrasacademy.com${post.image}`,
    "author": {
      "@type": "Organization",
      "name": "Nebras Academy"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Nebras Academy",
      "logo": {
        "@type": "ImageObject",
        "url": "https://nebrasacademy.com/images/quran2.jpg"
      }
    }
  };

  return (
    <div className="container">
      <SEO 
        title={post.title} 
        description={post.excerpt || `Read about ${post.title} at Nebras Academy.`}
        canonical={`/blog/${id}`}
        ogType="article"
        ogImage={post.image}
      />
      <StructuredData data={articleSchema} />
      {/* قسم الخلفية العلوية */}
      <div className="bg-black/90 h-[150px] flex items-center justify-center mb-12">
        <div className="pl-5 w-full">
          <div className="text-4xl font-bold text-primary-600 text-start relative pl-6 before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:h-12 before:w-1 before:bg-secondary-600">
            Blog {post.id}
          </div>
        </div>
      </div>

      {/* محتوى المقال الرئيسي */}
      <div className="px-4 pb-12">
        {/* صورة المقال */}
        <img 
          src={post.image} 
          alt={post.title} 
          className="w-full h-64 rounded-lg mb-8 shadow-md"
        />

        {/* عنوان المقال */}
        <h1 className="text-3xl font-bold text-secondary-800 mb-3 text-center">{post.title}</h1>
        
        {/* وصف المقال */}
        {post.excerpt && (
          <p className="text-gray-600 text-3xl mb-8 text-start max-w-3xl mx-auto leading-relaxed">
            {post.excerpt}
          </p>
        )}

        {/* الأسئلة والأجوبة */}
        <div className="space-y-8">
          {post.content?.map((item, index) => (
            <div key={index} className="mb-8 bg-gray-50 p-6 rounded-lg">
              <h2 className="text-xl font-bold text-primary-600 mb-3">
                {item.question}
              </h2>
              <p className="text-gray-700 pl-4 border-l-4 border-secondary-200 pr-4">
                {item.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;