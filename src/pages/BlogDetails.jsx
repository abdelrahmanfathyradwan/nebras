import { useParams, Link, Navigate } from 'react-router-dom';
import { allBlogPosts, courses } from '../data/data';
import SEO from '../components/SEO';
import StructuredData from '../components/StructuredData';
import NotFound from './NotFound';

const SITE_URL = 'https://www.nebrasacadmy.com';

const BlogDetails = () => {
  const { slug } = useParams();

  // احتياط: إذا فُتح الرابط القديم برقم (/blog/3) نحوله إلى الـ slug الجديد.
  // التحويل الحقيقي 301 موجود في vercel.json، وهذا للمتصفح فقط.
  if (/^\d+$/.test(slug)) {
    const legacy = allBlogPosts.find((p) => p.id === parseInt(slug, 10));
    if (legacy) return <Navigate to={`/blog/${legacy.slug}`} replace />;
  }

  const post = allBlogPosts.find((p) => p.slug === slug);

  if (!post) return <NotFound />;

  const url = `${SITE_URL}/blog/${post.slug}`;
  const relatedPosts = allBlogPosts.filter((p) => p.id !== post.id).slice(0, 3);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "description": post.excerpt || post.title,
    "image": `${SITE_URL}${post.image}`,
    "datePublished": post.datePublished,
    "dateModified": post.dateModified || post.datePublished,
    "mainEntityOfPage": { "@type": "WebPage", "@id": url },
    "author": {
      "@type": "Organization",
      "name": "Nebras Academy",
      "url": SITE_URL
    },
    "publisher": {
      "@type": "Organization",
      "name": "Nebras Academy",
      "logo": {
        "@type": "ImageObject",
        "url": `${SITE_URL}/Logo.png`
      }
    }
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": `${SITE_URL}/` },
      { "@type": "ListItem", "position": 2, "name": "Blog", "item": `${SITE_URL}/blog` },
      { "@type": "ListItem", "position": 3, "name": post.title, "item": url }
    ]
  };

  return (
    <div className="container mx-auto max-w-4xl px-6 py-12 page-enter">
      <SEO
        title={post.title}
        description={post.excerpt || `Read about ${post.title} at Nebras Academy.`}
        canonical={`/blog/${post.slug}`}
        ogType="article"
        ogImage={post.image}
      />
      <StructuredData data={articleSchema} />
      <StructuredData data={breadcrumbSchema} />

      {/* Breadcrumb */}
      <nav className="flex flex-wrap items-center gap-x-2 text-sm text-gray-500 mb-8" aria-label="Breadcrumb">
        <Link to="/" className="hover:text-primary-500 transition-colors">Home</Link>
        <span>/</span>
        <Link to="/blog" className="hover:text-primary-500 transition-colors">Blog</Link>
        <span>/</span>
        <span className="text-primary-500 font-semibold">{post.title}</span>
      </nav>

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

        {/* Dates */}
        {post.datePublished && (
          <p className="text-sm text-gray-500 mb-6">
            Published{' '}
            <time dateTime={post.datePublished}>{post.datePublished}</time>
            {post.dateModified && post.dateModified !== post.datePublished && (
              <>
                {' '}· Updated <time dateTime={post.dateModified}>{post.dateModified}</time>
              </>
            )}
          </p>
        )}

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

      {/* Internal links to courses (helps crawling and conversions) */}
      <section className="mt-12 bg-primary-50/50 rounded-2xl border border-gray-100 p-6 sm:p-8">
        <h2 className="text-2xl font-bold text-secondary-800 mb-2">Learn with Nebras Academy</h2>
        <p className="text-gray-600 mb-5">
          Study the Quran and Arabic online with Ijazah-holding teachers in Cairo. Read{' '}
          <Link to="/online-quran-classes-usa" className="text-primary-500 font-semibold hover:underline">
            how our online Quran classes work for students in the USA
          </Link>
          , the{' '}
          <Link to="/learn-quran-online-usa" className="text-primary-500 font-semibold hover:underline">
            complete beginner's guide to learning Quran online
          </Link>
          , or meet the{' '}
          <Link to="/teachers" className="text-primary-500 font-semibold hover:underline">
            teachers and their Ijazah
          </Link>
          . You can also explore our courses or{' '}
          <Link to="/pricing" className="text-primary-500 font-semibold hover:underline">see pricing</Link>.
        </p>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {courses.map((course) => (
            <li key={course.id}>
              <Link to={course.path} className="text-secondary-700 hover:text-primary-500 transition-colors">
                {course.title}
              </Link>
            </li>
          ))}
        </ul>
        <div className="mt-5">
          <Link to="/courses" className="text-primary-500 font-semibold hover:underline">
            View all courses
          </Link>
        </div>
      </section>

      {/* Related articles */}
      {relatedPosts.length > 0 && (
        <section className="mt-12">
          <h2 className="text-2xl font-bold text-secondary-800 mb-5">Related Articles</h2>
          <ul className="space-y-3">
            {relatedPosts.map((p) => (
              <li key={p.id}>
                <Link to={`/blog/${p.slug}`} className="text-secondary-700 hover:text-primary-500 font-medium transition-colors">
                  {p.title}
                </Link>
              </li>
            ))}
          </ul>
        </section>
      )}
    </div>
  );
};

export default BlogDetails;