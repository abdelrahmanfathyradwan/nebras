import CoursesDirectory from '../components/CoursesDirectory';
import Hero from '../components/Hero';
import MainContent from '../components/MainContent';
import SEO from '../components/SEO';
import StructuredData from '../components/StructuredData';

function Home() {
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Nebras Academy",
    "url": "https://nebrasacademy.com",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://nebrasacademy.com/courses?search={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  return (
    <>
      <SEO 
        title="Home" 
        description="Top-Rated Online Quran Classes for Kids & Adults Worldwide. Learn Quran, Tajweed, and Arabic with expert teachers at Nebras Academy." 
        canonical="/" 
      />
      <StructuredData data={websiteSchema} />
      <Hero/>
      <MainContent/>
      <CoursesDirectory/>
    </>
  )
}

export default Home;
