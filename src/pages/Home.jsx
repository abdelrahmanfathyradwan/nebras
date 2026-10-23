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
    "url": "https://www.nebrasacadmy.com",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://www.nebrasacadmy.com/courses?search={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  return (
    <>
      <SEO 
        title="Online Quran Classes for Kids & Adults | Live 1-on-1 Tutors – Nebras Academy" 
        description="Learn Quran online with certified Al-Azhar tutors. Live 1-on-1 Tajweed, Hifz & Arabic classes for kids and adults worldwide. Book your free trial today!" 
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
